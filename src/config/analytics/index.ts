export type AnalyticsProvider = "none" | "vercel" | "google";

export type AnalyticsConfig = {
  enabled: boolean;
  provider: AnalyticsProvider;
  trackPageViews: boolean;
  trackSearch: boolean;
  trackFavorites: boolean;
  debug: boolean;
};

export const analyticsConfig: AnalyticsConfig = {
  enabled: false,
  provider: "none",
  trackPageViews: true,
  trackSearch: true,
  trackFavorites: true,
  debug: false,
};
