import { createFileRoute } from "@tanstack/react-router";
import Page from "@/muftlo/pages/products";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "Products | R&D Software Solutions" },
      { name: "description", content: "R&D Suite, R&D Agency Hub and R&D Communication Channel: software built by R&D Software Solutions." },
      { property: "og:title", content: "Products | R&D Software Solutions" },
      { property: "og:description", content: "R&D Suite, R&D Agency Hub and R&D Communication Channel: software built by R&D Software Solutions." },
    ],
  }),
  component: Page,
});
