export const siteName = "Toronto AI Consulting";

const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const siteUrl = rawSiteUrl.endsWith("/")
  ? rawSiteUrl.slice(0, -1)
  : rawSiteUrl;

export const siteDescription =
  "Hands-on AI implementation for small and medium businesses in Toronto. Strategy, automation, and 1-on-1 consulting from a founder who's built $300K ARR SaaS and scaled Amazon brands.";
