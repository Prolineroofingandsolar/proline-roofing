import StudioRedirect from "./StudioRedirect";

// generateStaticParams must live in a Server Component
export function generateStaticParams() {
  return [{ tool: [] }];
}

export default function StudioPage() {
  return <StudioRedirect />;
}
