import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import type { CSSProperties } from "react";

type NavigationItem = {
  label: string;
  leftPosition: string;
  targetId: string;
};

const navigationItems: NavigationItem[] = [
  { label: "الخدمات", leftPosition: "left-11", targetId: "services" },
  { label: "الشركات", leftPosition: "left-[45px]", targetId: "companies" },
  { label: "الإنجازات", leftPosition: "left-[45px]", targetId: "achievements" },
  { label: "من أنا", leftPosition: "left-9", targetId: "about" },
  { label: "الرئيسية", leftPosition: "left-11", targetId: "home" },
];

const fadeDelay = (delay: number): CSSProperties =>
  ({ "--animation-delay": `${delay}s` }) as CSSProperties;

const scrollToSection = (targetId: string): void => {
  const element = document.getElementById(targetId);
  if (!element) return;
  element.scrollIntoView({ behavior: "smooth", block: "start" });
};

export const NavigationSection = (): JSX.Element => {
  return (
    <nav className="w-full py-3 relative">
      <div className="absolute inset-0 bg-[#F4F5F4f2] shadow-[0px_10px_15px_-3px_#1D3E4B1a,0px_4px_6px_-4px_#1D3E4B1a] backdrop-blur-md backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(12px)_brightness(100%)]" />

      <div className="relative px-20">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="flex items-center justify-between h-12">
            <div
              className="flex items-center justify-end gap-3 animate-fade-in opacity-0"
              style={fadeDelay(0.04)}
            >
              <Button
                type="button"
                onClick={() => scrollToSection("contact")}
                className="h-10 px-6 py-2.5 bg-[#315C67] rounded-xl overflow-hidden shadow-[0px_10px_15px_-3px_#1D3E4B40,0px_4px_6px_-4px_#1D3E4B40] hover:bg-[#315C67]/90 relative"
              >
                <div className="absolute top-0 left-[-141px]  h-10 bg-[linear-gradient(90deg,rgba(16,22,31,0)_0%,rgba(244,245,244,0.2)_50%,rgba(16,22,31,0)_100%)]" />
                <div className="flex items-center justify-end gap-2">
                  <img
                    className="w-[14.02px] h-5"
                    alt="Contact icon"
                    src="/figmaAssets/i-496.svg"
                  />
                  <span className="[font-family:'Tajawal',sans-serif] font-normal text-white text-sm tracking-[0] leading-5 whitespace-nowrap [direction:rtl]">
                    تواصل معي
                  </span>
                </div>
              </Button>

              <Separator orientation="vertical" className="h-8 bg-[#F4F5F4]" />

              <button
                type="button"
                onClick={() => scrollToSection("home")}
                aria-label="العودة إلى الرئيسية"
                className="w-[76px] h-9 transition-transform hover:scale-105"
              >
                <img
                  className="w-[76px] h-9"
                  alt="Logo"
                  src="/figmaAssets/div-950.svg"
                />
              </button>
            </div>

            <div
              className="flex items-center justify-end gap-1 animate-fade-in opacity-0"
              style={fadeDelay(0.08)}
            >
              {navigationItems.map((item, index) => (
                <Button
                  key={index}
                  type="button"
                  variant="ghost"
                  onClick={() => scrollToSection(item.targetId)}
                  className="h-10 px-5 py-2.5 rounded-xl hover:bg-transparent relative"
                >
                  <span className="[font-family:'Tajawal',sans-serif] font-normal text-slate-600 text-sm tracking-[0] leading-5 whitespace-nowrap [direction:rtl]">
                    {item.label}
                  </span>
                  <div
                    className={`absolute top-8 ${item.leftPosition} w-px h-0.5 bg-[#315C67] rounded-full`}
                  />
                </Button>
              ))}
            </div>

            <div
              className="flex items-center justify-end gap-3 animate-fade-in opacity-0"
              style={fadeDelay(0.12)}
            >
              <div className="flex flex-col items-end">
                <div className="flex items-center justify-end h-7">
                  <h2 className="[font-family:'Tajawal',sans-serif] font-bold text-[#1D3E4B] text-lg tracking-[0] leading-7 whitespace-nowrap [direction:rtl]">
                    محمود الأغواني
                  </h2>
                </div>
                <div className="flex items-center justify-end h-4">
                  <p className="[font-family:'Tajawal',sans-serif] font-normal text-[#8B939A] text-xs text-right tracking-[0] leading-4 whitespace-nowrap">
                    CEO &amp; Founder
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
