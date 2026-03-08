import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { CSSProperties } from "react";

const awardsData = [
  {
    year: "2021",
    title: "أفضل مؤسس شركة",
    subtitle: "منتدى الأعمال العربي",
    icon: "/figmaAssets/margin-wrap-34.svg",
  },
  {
    year: "2022",
    title: "قائد الابتكار",
    subtitle: "جائزة التحول الرقمي",
    icon: "/figmaAssets/margin-wrap-35.svg",
  },
  {
    year: "2023",
    title: "رائد الأعمال المتميز",
    subtitle: "غرفة التجارية العربية",
    icon: "/figmaAssets/margin-wrap-34.svg",
  },
  {
    year: "2024",
    title: "أفضل CEO للعام",
    subtitle: "جائزة التميز في القيادة",
    icon: "/figmaAssets/margin-wrap-21.svg",
  },
];

const fadeDelay = (delay: number): CSSProperties =>
  ({ "--animation-delay": `${delay}s` }) as CSSProperties;

export const BusinessCardsSection = (): JSX.Element => {
  return (
    <section className="relative w-full py-[70px] pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(244,245,244,1)_0%,rgba(139,147,154,0.2)_50%,rgba(244,245,244,1)_100%)]" />

      <div className="relative container max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center gap-16">
          <div
            className="flex flex-col items-center gap-6 w-full animate-fade-up opacity-0"
            style={fadeDelay(0.06)}
          >
            <div className="flex items-center justify-center">
              <Badge className="h-10 px-4 py-2 bg-[#F4F5F4] hover:bg-[#F4F5F4] text-[#1D3E4B] rounded-full gap-2 [font-family:'Tajawal',sans-serif] font-normal text-sm">
                <img
                  className="w-[16.33px] h-6"
                  alt="Icon"
                  src="/figmaAssets/i-931.svg"
                />
                <span className="[direction:rtl]">الإنجازات</span>
              </Badge>
            </div>

            <h2 className="[font-family:'Tajawal',sans-serif] font-bold text-[#1D3E4B] text-4xl text-center [direction:rtl]">
              التقدير والجوائز
            </h2>

            <p className="[font-family:'Tajawal',sans-serif] font-normal text-[#8B939A] text-base text-center max-w-lg [direction:rtl]">
              تقدير دولي لمسيرة حافلة بالإنجازات والنجاحات
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {awardsData.map((award, index) => (
              <Card
                key={index}
                className="relative overflow-hidden border-[#F4F5F4] rounded-3xl bg-white animate-fade-up opacity-0"
                style={fadeDelay(0.16 + index * 0.08)}
              >
                <div className="absolute top-px left-[-255px] w-64 h-[237px] bg-[linear-gradient(90deg,rgba(16,22,31,0)_0%,rgba(139,147,154,0.34)_50%,rgba(16,22,31,0)_100%)]" />

                <CardContent className="flex flex-col items-center gap-3 p-[33px] relative">
                  <img
                    className="w-auto h-auto"
                    alt={award.title}
                    src={award.icon}
                  />

                  <Badge className="h-6 px-3 py-1 bg-[#F4F5F4] hover:bg-[#F4F5F4] text-[#1D3E4B] rounded-full [font-family:'Tajawal',sans-serif] font-bold text-xs">
                    {award.year}
                  </Badge>

                  <h3 className="[font-family:'Tajawal',sans-serif] font-normal text-[#1D3E4B] text-base text-center [direction:rtl]">
                    {award.title}
                  </h3>

                  <p className="[font-family:'Tajawal',sans-serif] font-normal text-[#8B939A] text-sm text-center [direction:rtl]">
                    {award.subtitle}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
