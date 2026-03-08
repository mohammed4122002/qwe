import { SOCIAL_LINKS } from "@/lib/site";
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

export const Frame = (): JSX.Element => {
  return (
    <div className="relative w-full overflow-x-hidden bg-[#F4F5F4]">
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

      <footer className="relative z-10 w-full border-t border-slate-100 bg-[#F4F5F44c]">
        <div className="flex justify-center px-36 py-12">
          <div className="flex w-full max-w-6xl items-center justify-between px-6">
            <div className="flex items-center justify-end gap-3 pt-6">
              {SOCIAL_LINKS.map((socialLink, index) => (
                <a
                  key={index}
                  href={socialLink.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={socialLink.alt}
                  className="inline-flex h-10 w-10 transition-transform hover:scale-105"
                >
                  <img
                    className="h-10 w-10 cursor-pointer"
                    alt={socialLink.alt}
                    src={socialLink.icon}
                  />
                </a>
              ))}
            </div>

            <div className="flex items-center">
              <p className="[font-family:'Tajawal',sans-serif] whitespace-nowrap text-sm font-normal leading-5 tracking-[0] text-[#8B939A] [direction:rtl]">
                © 2026 محمود الأغواني. جميع الحقوق محفوظة
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

