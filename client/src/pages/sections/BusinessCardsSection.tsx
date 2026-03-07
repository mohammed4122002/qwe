import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

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
    icon: "/figmaAssets/margin-wrap-10.svg",
  },
  {
    year: "2024",
    title: "أفضل CEO للعام",
    subtitle: "جائزة التميز في القيادة",
    icon: "/figmaAssets/margin-wrap-21.svg",
  },
];

export const BusinessCardsSection = (): JSX.Element => {
  return (
    <section className="relative w-full py-[70px] pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(238,237,250,0.3)_50%,rgba(255,255,255,1)_100%)]" />

      <div className="relative container max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center gap-16">
          <div className="flex flex-col items-center gap-6 w-full">
            <div className="flex items-center justify-center">
              <Badge className="h-10 px-4 py-2 bg-[#edecfa] hover:bg-[#edecfa] text-[#282073] rounded-full gap-2 [font-family:'Tajawal',sans-serif] font-normal text-sm">
                <img
                  className="w-[16.33px] h-6"
                  alt="Icon"
                  src="/figmaAssets/i-931.svg"
                />
                <span className="[direction:rtl]">الإنجازات</span>
              </Badge>
            </div>

            <h2 className="[font-family:'Tajawal',sans-serif] font-bold text-[#1d293b] text-4xl text-center [direction:rtl]">
              التقدير والجوائز
            </h2>

            <p className="[font-family:'Tajawal',sans-serif] font-normal text-[#64738b] text-base text-center max-w-lg [direction:rtl]">
              تقدير دولي لمسيرة حافلة بالإنجازات والنجاحات
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {awardsData.map((award, index) => (
              <Card
                key={index}
                className="relative overflow-hidden border-[#d9d5f4] rounded-3xl bg-white"
              >
                <div className="absolute top-px left-[-255px] w-64 h-[237px] bg-[linear-gradient(90deg,rgba(0,0,0,0)_0%,rgba(217,214,244,0.5)_50%,rgba(0,0,0,0)_100%)]" />

                <CardContent className="flex flex-col items-center gap-3 p-[33px] relative">
                  <img
                    className="w-auto h-auto"
                    alt={award.title}
                    src={award.icon}
                  />

                  <Badge className="h-6 px-3 py-1 bg-[#d9d5f4] hover:bg-[#d9d5f4] text-[#362a9b] rounded-full [font-family:'Tajawal',sans-serif] font-bold text-xs">
                    {award.year}
                  </Badge>

                  <h3 className="[font-family:'Tajawal',sans-serif] font-normal text-[#1d293b] text-base text-center [direction:rtl]">
                    {award.title}
                  </h3>

                  <p className="[font-family:'Tajawal',sans-serif] font-normal text-[#94a2b8] text-sm text-center [direction:rtl]">
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


