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
    <div className="bg-white w-full min-w-[1440px] relative">
      <NavigationSection />
      <HeroProfileSection />
      <AchievementsStatsSection />
      <MissionVisionSection />
      <AboutUsSection />
      <ServicesSection />
      <TestimonialsSection />
      <BusinessCardsSection />
      <PerformanceStatsSection />
      <ContactSection />

      <footer className="w-full bg-[#edecfa4c] border-t border-slate-100">
        <div className="flex justify-center px-36 py-12">
          <div className="flex w-full max-w-6xl items-center justify-between px-6">
            <img
              className="w-[148px] h-11"
              alt="Logo"
              src="/figmaAssets/div-1088.svg"
            />
            <div className="flex items-center">
              <p className="font-normal text-[#94a2b8] text-sm tracking-[0] leading-5 whitespace-nowrap [direction:rtl] [font-family:'Almarai',Helvetica]">
                © 2026 محمود الأغواني. جميع الحقوق محفوظة
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
