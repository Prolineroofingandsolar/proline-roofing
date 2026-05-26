import { defineField, defineType } from "sanity";

export default defineType({
  name: "review",
  title: "Reviews",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Customer Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "location",
      title: "Location (e.g. Taunton, Somerset)",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "service",
      title: "Service Type",
      type: "string",
      options: {
        list: [
          { title: "New Roof", value: "New Roof" },
          { title: "Roof Repairs", value: "Roof Repairs" },
          { title: "Flat Roofing", value: "Flat Roofing" },
          { title: "Solar PV", value: "Solar PV" },
          { title: "Chimney Work", value: "Chimney Work" },
          { title: "Fascias & Guttering", value: "Fascias" },
          { title: "Emergency Call-Out", value: "Emergency" },
        ],
      },
    }),
    defineField({
      name: "text",
      title: "Review Text",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "date",
      title: "Date (e.g. March 2025)",
      type: "string",
    }),
    defineField({
      name: "rating",
      title: "Star Rating",
      type: "number",
      initialValue: 5,
      options: { list: [1, 2, 3, 4, 5] },
    }),
    defineField({
      name: "featured",
      title: "Show on Homepage?",
      type: "boolean",
      initialValue: false,
      description: "Tick this to show this review on the homepage",
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "service" },
  },
});
