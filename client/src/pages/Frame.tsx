import { AboutUsSection } from "./sections/AboutUsSection";
import { AchievementsStatsSection } from "./sections/AchievementsStatsSection";
import { BusinessCardsSection } from "./sections/BusinessCardsSection";
import { ContactSection } from "./sections/ContactSection";
import { HeroProfileSection } from "./sections/HeroProfileSection";
import { MissionVisionSection } from "./sections/MissionVisionSection";
import { NavigationSection } from "./sections/NavigationSection";
import { PerformanceStatsSection } from "./sections/PerformanceStatsSection";
import { ServicesSection } from "./sections/ServicesSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
const LINKEDIN_URL = "https://linkedin.com/in/mahmoudalaghawani";
const X_URL = "https://x.com/Mahmoud_Aghawni";
const socialLinks = [
  { icon: "/figmaAssets/a-184.svg", alt: "LinkedIn", href: LINKEDIN_URL },
  { icon: "/figmaAssets/a-181.svg", alt: "X", href: X_URL },
];
export const Frame = (): JSX.Element => {
  return (
    <div className="bg-[#F4F5F4] w-full relative overflow-x-hidden">
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="ambient-orb ambient-orb-primary" />
        <div className="ambient-orb ambient-orb-secondary" />
      </div>
      <div className="relative z-20">
        <NavigationSection />
      </div>
      <HeroProfileSection />
      <AchievementsStatsSection />
      <MissionVisionSection />
      <AboutUsSection />
      <ServicesSection />
      <TestimonialsSection />
      <BusinessCardsSection />
      <PerformanceStatsSection />
      <ContactSection />

      <footer className="relative z-10 w-full bg-[#F4F5F44c] border-t border-slate-100">
        <div className="flex justify-center px-36 py-12">
          <div className="flex w-full max-w-6xl items-center justify-between px-6">
             <div className="flex items-center justify-end gap-3 pt-6">
                {socialLinks.map((socialLink, index) => (
                  <a
                    key={index}
                    href={socialLink.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={socialLink.alt}
                    className="w-10 h-10 inline-flex transition-transform hover:scale-105"
                  >
                    <img
                      className="w-10 h-10 cursor-pointer"
                      alt={socialLink.alt}
                      src={socialLink.icon}
                    />
                  </a>
                ))}
              </div>
            <div className="flex items-center">
              <p className="font-normal text-[#8B939A] text-sm tracking-[0] leading-5 whitespace-nowrap [direction:rtl] [font-family:'Tajawal',sans-serif]">
               © 2026 محمود الأغواني. جميع الحقوق محفوظة
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

