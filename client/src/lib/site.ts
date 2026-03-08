export const LINKEDIN_URL = "https://linkedin.com/in/mahmoudalaghawani";
export const X_URL = "https://x.com/Mahmoud_Aghawni";

export const SOCIAL_LINKS = [
  { icon: "/figmaAssets/a-184.svg", alt: "LinkedIn", href: LINKEDIN_URL },
  { icon: "/figmaAssets/a-181.svg", alt: "X", href: X_URL },
] as const;

export const scrollToSection = (targetId: string): void => {
  const element = document.getElementById(targetId);
  if (!element) return;
  element.scrollIntoView({ behavior: "smooth", block: "start" });
};

