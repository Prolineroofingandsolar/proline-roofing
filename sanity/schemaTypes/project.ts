import { defineField, defineType } from "sanity";

export default defineType({
  name: "project",
  title: "Projects",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Project Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "type",
      title: "Project Type",
      type: "string",
      options: {
        list: [
          { title: "New Roof", value: "New Roof" },
          { title: "Roof Repairs", value: "Roof Repairs" },
          { title: "Flat Roofing", value: "Flat Roofing" },
          { title: "Solar PV", value: "Solar PV" },
          { title: "Chimney Work", value: "Chimney Work" },
          { title: "Fascias & Guttering", value: "Fascias" },
          { title: "Leadwork", value: "Leadwork" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "location",
      title: "Location (e.g. Taunton, Somerset)",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Project Photo",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "order",
      title: "Display Order (lower = first)",
      type: "number",
      initialValue: 99,
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "location", media: "image" },
  },
  orderings: [
    { title: "Display Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] },
  ],
});
