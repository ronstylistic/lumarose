import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://lumarosewellness.com";

  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/membership`, lastModified: new Date() },
    { url: `${baseUrl}/services`, lastModified: new Date() },
    { url: `${baseUrl}/weight-management`, lastModified: new Date() },
    { url: `${baseUrl}/non-membership`, lastModified: new Date() },
    { url: `${baseUrl}/college-care`, lastModified: new Date() },
    { url: `${baseUrl}/laboratory`, lastModified: new Date() },
    { url: `${baseUrl}/faq`, lastModified: new Date() },
    { url: `${baseUrl}/about`, lastModified: new Date() },
    { url: `${baseUrl}/contact`, lastModified: new Date() },
  ];
}
