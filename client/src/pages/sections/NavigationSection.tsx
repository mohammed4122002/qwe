import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const navigationItems = [
  { label: "الخدمات", leftPosition: "left-11" },
  { label: "الشركات", leftPosition: "left-[45px]" },
  { label: "الإنجازات", leftPosition: "left-[45px]" },
  { label: "من أنا", leftPosition: "left-9" },
  { label: "الرئيسية", leftPosition: "left-11" },
];

export const NavigationSection = (): JSX.Element => {
  return (
    <nav className="w-full py-3 relative">
      <div className="absolute inset-0 bg-[#F4F5F4f2] shadow-[0px_10px_15px_-3px_#1D3E4B1a,0px_4px_6px_-4px_#1D3E4B1a] backdrop-blur-md backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(12px)_brightness(100%)]" />

      <div className="relative px-20">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="flex items-center justify-between h-12">
            <div className="flex items-center justify-end gap-3">
              <Button className="h-10 px-6 py-2.5 bg-[#315C67] rounded-xl overflow-hidden shadow-[0px_10px_15px_-3px_#1D3E4B40,0px_4px_6px_-4px_#1D3E4B40] hover:bg-[#315C67]/90 relative">
                <div className="absolute top-0 left-[-141px] w-[141px] h-10 bg-[linear-gradient(90deg,rgba(16,22,31,0)_0%,rgba(244,245,244,0.2)_50%,rgba(16,22,31,0)_100%)]" />
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

              <img
                className="w-[76px] h-9"
                alt="Logo"
                src="/figmaAssets/div-950.svg"
              />
            </div>

            <div className="flex items-center justify-end gap-1">
              {navigationItems.map((item, index) => (
                <Button
                  key={index}
                  variant="ghost"
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

            <div className="flex items-center justify-end gap-3">
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






