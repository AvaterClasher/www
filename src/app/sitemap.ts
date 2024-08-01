import { MetadataRoute } from "next";
import { allProjects } from "contentlayer/generated";
import { allActivity } from "./coding-activity/allActivities";

import { ENV } from "~/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const WEBSITE_URL = ENV.NEXT_PUBLIC_WEBSITE_URL;

  const projects = allProjects.map((project) => ({
    url: `${WEBSITE_URL}/projects/${project.title}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  const activities = allActivity.map((activity) => ({
    url: `${WEBSITE_URL}/coding-activity/${activity.slug}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...projects, ...activities];
}
