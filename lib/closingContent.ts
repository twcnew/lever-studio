const CAL_ROYAL = "#5a8be4";
const CAL_INK = "#0e0a07";

const CAL_UI_VARS = {
  "cal-brand": CAL_ROYAL,
  "cal-brand-emphasis": "#4a7bd4",
  "cal-brand-text": "#ffffff",
  "cal-brand-subtle": "#b8cff5",
  "cal-text": CAL_INK,
  "cal-text-emphasis": CAL_INK,
  "cal-text-subtle": CAL_INK,
  "cal-bg": "#ffffff",
  "cal-bg-subtle": "#e8f0fc",
  "cal-bg-emphasis": "#dce8f8",
  "cal-bg-muted": "#f3f7fd",
  "cal-border-booker-width": "0",
  "cal-border-booker": "transparent",
  "cal-border": "transparent",
  "cal-border-subtle": "transparent",
  "cal-border-muted": "transparent",
  radius: "0px",
} as const;

export function getCalUiConfig() {
  const { layout, theme, cssVarsPerTheme, brandColor } = CLOSING_CONTENT.cal;

  return {
    theme,
    cssVarsPerTheme,
    hideEventTypeDetails: false,
    layout,
    styles: {
      branding: { brandColor },
      enabledDateButton: {
        backgroundColor: brandColor,
        color: "#ffffff",
      },
    },
  } as const;
}

export const CLOSING_TITLE_ACCENT_ANNOTATED = "Book below.";
export const CLOSING_TITLE_ACCENT_NOTE = "NOW";

export const CLOSING_CONTENT = {
  label: "Work together",
  title: "Grab 30 minutes.",
  titleAccent: "Book below.",
  sub: "On the strategy call, I audit your stack, diagnose the ICP and signal gaps, then show what I would wire first inside your tools.",
  cal: {
    namespace: "30min",
    calLink: "alexis-rodrigues-m0f6xd/30min",
    layout: "month_view" as const,
    theme: "light" as const,
    brandColor: CAL_ROYAL,
    cssVarsPerTheme: {
      light: CAL_UI_VARS,
      dark: CAL_UI_VARS,
    },
  },
};
