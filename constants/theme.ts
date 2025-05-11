export const SPACING: Record<string, number> = {
  S_0: 4,
  S_1: 8,
  S_2: 16,
  S_3: 24,
  S_4: 32,
} as const;

export const FONT_WEIGHT = {
  LIGHT: "300",
  REGULAR: "400",
  MEDIUM: "500",
  SEMIBOLD: "600",
  BOLD: "700",
} as const;

export const COLORS: Record<string, string> = {
  primary: "#0000FF",
  secondary: "#1DE9B6",
  "text-white": "#FFFFFF",
  "content-positive": "#34D399",
  "content-negative": "#EF4444",
  "content-secondary": "#6B7280",
  "content-neutral": "#374151",
  "background-positive": "#D1FAE5",
  "background-negative": "#FEE2E2",
  "border-primary": "#A9A9A9",
};
