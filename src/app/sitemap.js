import { courses } from "@/data/courses";

export default function sitemap() {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL ||
    process.env.NEXT_PUBLIC_APP_URL ||
    "http://localhost:3000";

  const staticRoutes = [
    "",
    "/about",
    "/course",
    "/blog",
    "/contact-us",
    "/privacy-policy",
    "/disclaimer",
    "/sitemap.html",
  ];

  const staticEntries = staticRoutes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.8,
  }));

  const courseEntries = courses.map((course) => ({
    url: `${baseUrl}/course/${course.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  return [...staticEntries, ...courseEntries];
}