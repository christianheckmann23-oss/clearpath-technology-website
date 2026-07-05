/** Custom Vercel Analytics event names, shared across call sites so the
    same event name is never typo'd two different ways. */
export const AnalyticsEvent = {
  ContactCtaClick: "Contact CTA Click",
  LeadFormSubmit: "Lead Form Submit",
  LeadFormError: "Lead Form Error",
  PhoneClick: "Phone Click",
  EmailClick: "Email Click",
} as const;
