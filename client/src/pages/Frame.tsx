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
            <img
              className="w-[148px] h-11"
              alt="Logo"
              src="/figmaAssets/div-1088.svg"
            />
            <div className="flex items-center">
              <p className="font-normal text-[#8B939A] text-sm tracking-[0] leading-5 whitespace-nowrap [direction:rtl] [font-family:'Tajawal',sans-serif]">
                آ© 2026 ظ…ط­ظ…ظˆط¯ ط§ظ„ط£ط؛ظˆط§ظ†ظٹ. ط¬ظ…ظٹط¹ ط§ظ„ط­ظ‚ظˆظ‚ ظ…ط­ظپظˆط¸ط©
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};


