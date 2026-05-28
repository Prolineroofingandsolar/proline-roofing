/**
 * Live Google reviews via Featurable's FREE API.
 *
 * 👉 HOW TO TURN THIS ON (no code, ~3 minutes):
 *    1. Go to https://featurable.com and sign up (free).
 *    2. Connect your Google Business Profile and create a widget.
 *    3. Copy the widget ID (looks like "a1b2c3d4-....").
 *    4. Add it to your environment as FEATURABLE_WIDGET_ID
 *       (in wrangler.jsonc "vars", or your host's dashboard).
 *
 *    Once set, your real Google reviews appear on the site automatically and
 *    refresh roughly once a day. Until it's set, the site quietly falls back
 *    to your CMS reviews, then to the placeholder reviews.
 */

export interface NormalisedReview {
  _id: string;
  name: string;
  location?: string;
  service?: string;
  text: string;
  date?: string;
  rating: number;
  source: "google";
}

export interface GoogleReviewsResult {
  reviews: NormalisedReview[];
  averageRating?: number;
  totalReviewCount?: number;
}

interface FeaturableReview {
  reviewId?: string | null;
  reviewer?: { displayName?: string; isAnonymous?: boolean };
  starRating?: number;
  comment?: string;
  createTime?: string | null;
}

interface FeaturableResponse {
  reviews?: FeaturableReview[];
  averageRating?: number;
  totalReviewCount?: number;
}

function formatDate(iso?: string | null): string | undefined {
  if (!iso) return undefined;
  const d = new Date(iso);
  if (isNaN(d.getTime())) return undefined;
  return d.toLocaleDateString("en-GB", { month: "long", year: "numeric" });
}

export async function getGoogleReviews(): Promise<GoogleReviewsResult | null> {
  const widgetId = process.env.FEATURABLE_WIDGET_ID;
  if (!widgetId) return null;

  try {
    const res = await fetch(
      `https://featurable.com/api/v1/widgets/${widgetId}`,
      // Refresh at most once an hour (Featurable itself updates ~daily).
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return null;

    const data: FeaturableResponse = await res.json();
    if (!data?.reviews?.length) return null;

    const reviews: NormalisedReview[] = data.reviews
      .filter((r) => r.comment && r.comment.trim().length > 0)
      .map((r, i) => ({
        _id: r.reviewId || `google-${i}`,
        name: r.reviewer?.displayName || "Google Customer",
        text: r.comment as string,
        date: formatDate(r.createTime),
        rating: r.starRating ?? 5,
        source: "google" as const,
      }));

    if (!reviews.length) return null;

    return {
      reviews,
      averageRating: data.averageRating,
      totalReviewCount: data.totalReviewCount,
    };
  } catch {
    return null;
  }
}
