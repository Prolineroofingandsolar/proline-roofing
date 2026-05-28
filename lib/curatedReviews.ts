/**
 * Hand-curated reviews from platforms OTHER than Google
 * (MyBuilder, Bark, Facebook) — these are shown on the reviews page
 * ALONGSIDE the live Google reviews pulled from Featurable.
 *
 * 👉 TO ADD A REVIEW: copy an entry below and fill it in. Only `name`,
 *    `text`, `rating` and `source` are required. Keep the text genuine —
 *    these are real customer reviews from your other profiles.
 *
 *    source must be one of: "mybuilder" | "bark" | "facebook" | "google"
 *    service (optional) must match the badges, e.g.:
 *      "New Roof" | "Roof Repairs" | "Flat Roofing" | "Solar PV"
 *      | "Chimney Work" | "Fascias" | "Emergency"
 */

export interface CuratedReview {
  _id: string;
  name: string;
  location?: string;
  service?: string;
  text: string;
  date?: string;
  rating: number;
  source: "google" | "facebook" | "bark" | "mybuilder";
}

export const curatedReviews: CuratedReview[] = [
  {
    _id: "mb-martyn-yeovil",
    name: "Martyn L.",
    location: "Yeovil, Somerset",
    service: "Roof Repairs",
    text: "New end ridge tile. A job well done.",
    date: "May 2026",
    rating: 5,
    source: "mybuilder",
  },
  {
    _id: "mb-yeovil-solar",
    name: "Verified Customer",
    location: "Yeovil, Somerset",
    service: "Solar PV",
    text: "Pigeon proofing solar panels. Will came out on Bank Holiday Monday to complete the job, quickly, efficiently and to a high standard.",
    date: "April 2026",
    rating: 5,
    source: "mybuilder",
  },
  {
    _id: "mb-rebecca-axminster",
    name: "Rebecca",
    location: "Axminster, Devon",
    service: "Chimney Work",
    text: "Roof and chimney repointing. Brilliant. All very friendly and polite. Did a brilliant job and cleaned up nicely after themselves :) very pleased.",
    date: "April 2026",
    rating: 5,
    source: "mybuilder",
  },
  {
    _id: "mb-bridgwater-verge",
    name: "Verified Customer",
    location: "Bridgwater, Somerset",
    service: "Roof Repairs",
    text: "Loose verge tiles. Great service, highly recommended. Will definitely use in future should we need any more work doing. Thanks!",
    date: "March 2026",
    rating: 5,
    source: "mybuilder",
  },
  {
    _id: "mb-bridgwater-tile",
    name: "Verified Customer",
    location: "Bridgwater, Somerset",
    service: "Roof Repairs",
    text: "William and his team done a very good job. Always clean up after every day and kept me updated as they went on with the job. I will definitely be using them again.",
    date: "February 2026",
    rating: 5,
    source: "mybuilder",
  },
  {
    _id: "mb-taunton-victorian",
    name: "Verified Customer",
    location: "Taunton, Somerset",
    service: "Fascias",
    text: "Roof assessment and guttering repair on a Victorian terrace. Helpful and I am pleased with the job done. Would recommend.",
    date: "February 2026",
    rating: 5,
    source: "mybuilder",
  },
  {
    _id: "mb-amber-sidmouth",
    name: "Amber",
    location: "Sidmouth, Devon",
    service: "Flat Roofing",
    text: "Small flat roof repair — rated 5 stars.",
    date: "January 2026",
    rating: 5,
    source: "mybuilder",
  },
  {
    _id: "mb-tiverton-tile",
    name: "Verified Customer",
    location: "Tiverton, Devon",
    service: "Roof Repairs",
    text: "Broken roof tile replaced — rated 5 stars.",
    date: "November 2025",
    rating: 5,
    source: "mybuilder",
  },
  {
    _id: "bark-ellie-gutter",
    name: "Ellie",
    service: "Fascias",
    text: "Gutter cleaning. I put a request out and not even 5 minutes after posting they reached out to me. They came the very next morning to quote the job, popped away to do another job and came straight back to fix my issue — same day repair!",
    date: "February 2026",
    rating: 5,
    source: "bark",
  },
  {
    _id: "bark-amber-tile",
    name: "Amber G.",
    service: "Roof Repairs",
    text: "Quick, efficient, and professional. The broken roof tile was repaired fast and the work was done to a high standard. Highly recommend.",
    date: "February 2026",
    rating: 5,
    source: "bark",
  },
  {
    _id: "bark-teresa-gutter",
    name: "Teresa R.",
    service: "Fascias",
    text: "Very happy with this company. They cleaned my gutters and left the fascia spotless. They were friendly and polite and explained everything clearly.",
    date: "February 2026",
    rating: 5,
    source: "bark",
  },
  {
    _id: "bark-stephen-tiles",
    name: "Stephen G.",
    service: "New Roof",
    text: "Proline Roofing and Solar did a great job replacing the tiles on my roof. The crew was professional, on time, and left everything clean when they finished.",
    date: "December 2025",
    rating: 5,
    source: "bark",
  },
  {
    _id: "bark-martin-leak",
    name: "Martin",
    service: "Roof Repairs",
    text: "Had a leak repaired and guttering replaced. The lads turned up when they said they would, explained everything clearly, and did a great job.",
    date: "October 2025",
    rating: 5,
    source: "bark",
  },
];
