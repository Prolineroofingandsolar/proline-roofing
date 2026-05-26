import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemaTypes";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export default defineConfig({
  name: "proline-studio",
  title: "ProLine Roofing & Solar — Content Studio",
  projectId,
  dataset,
  basePath: "/studio",
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("ProLine Content")
          .items([
            S.listItem()
              .title("📸 Projects & Gallery")
              .child(S.documentTypeList("project").title("Projects")),
            S.listItem()
              .title("⭐ Customer Reviews")
              .child(S.documentTypeList("review").title("Reviews")),
          ]),
    }),
    visionTool(),
  ],
  schema: { types: schemaTypes },
});
