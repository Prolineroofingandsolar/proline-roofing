import { metadata, viewport } from "next-sanity/studio";
import Studio from "./Studio";

export { metadata, viewport };

// Required for static export — the studio loads itself client-side
export function generateStaticParams() {
  return [{ tool: [] }];
}

export default function StudioPage() {
  return <Studio />;
}
