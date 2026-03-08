import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { scrollToSection } from "@/lib/site";
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

export const NavigationSection = (): JSX.Element => {
  return (
    <nav className="relative w-full py-3">
      <div className="absolute inset-0 bg-[#F4F5F4f2] shadow-[0px_10px_15px_-3px_#1D3E4B1a,0px_4px_6px_-4px_#1D3E4B1a] backdrop-blur-md backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(12px)_brightness(100%)]" />

      <div className="relative px-20">
        <div className="mx-auto max-w-screen-xl px-6">
          <div className="flex h-12 items-center justify-between">
            <div
              className="flex items-center justify-end gap-3 animate-fade-in opacity-0"
              style={fadeDelay(0.04)}
            >
              <Button
                type="button"
                onClick={() => scrollToSection("contact")}
                className="relative h-10 overflow-hidden rounded-xl bg-[#315C67] px-6 py-2.5 shadow-[0px_10px_15px_-3px_#1D3E4B40,0px_4px_6px_-4px_#1D3E4B40] hover:bg-[#315C67]/90"
              >
                <div className="absolute left-[-141px] top-0 h-10 bg-[linear-gradient(90deg,rgba(16,22,31,0)_0%,rgba(244,245,244,0.2)_50%,rgba(16,22,31,0)_100%)]" />
                <div className="flex items-center justify-end gap-2">
              
                  <span className="[font-family:'Tajawal',sans-serif] whitespace-nowrap text-sm font-normal leading-5 tracking-[0] text-white [direction:rtl]">
                    تواصل معي
                  </span>
                </div>
              </Button>

              <Separator orientation="vertical" className="h-8 bg-[#F4F5F4]" />

              <button
                type="button"
                onClick={() => scrollToSection("home")}
                aria-label="العودة إلى الرئيسية"
                className="h-9 w-[76px] transition-transform hover:scale-105"
              >
                <img className="h-9 w-[76px]" alt="Logo" src="/figmaAssets/div-950.svg" />
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
                  className="relative h-10 rounded-xl px-5 py-2.5 hover:bg-transparent"
                >
                  <span className="[font-family:'Tajawal',sans-serif] whitespace-nowrap text-sm font-normal leading-5 tracking-[0] text-slate-600 [direction:rtl]">
                    {item.label}
                  </span>
                  <div
                    className={`absolute top-8 ${item.leftPosition} h-0.5 w-px rounded-full bg-[#315C67]`}
                  />
                </Button>
              ))}
            </div>

            <div
              className="flex items-center justify-end gap-3 animate-fade-in opacity-0"
              style={fadeDelay(0.12)}
            >
              <div className="flex flex-col items-end">
                <div className="flex h-7 items-center justify-end">
                  <h2 className="[font-family:'Tajawal',sans-serif] whitespace-nowrap text-lg font-bold leading-7 tracking-[0] text-[#1D3E4B] [direction:rtl]">
                    محمود الأغواني
                  </h2>
                </div>
                <div className="flex h-4 items-center justify-end">
                  <p className="[font-family:'Tajawal',sans-serif] whitespace-nowrap text-right text-xs font-normal leading-4 tracking-[0] text-[#8B939A]">
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

