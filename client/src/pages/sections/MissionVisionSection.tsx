import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { CSSProperties } from "react";

const achievements = [
  {
    text: "مؤسس 3 شركات ناجحة في مجالات مختلفة",
  },
  {
    text: "حاصل على أكثر من 20 جائزة دولية",
  },
  {
    text: "متحدث في أكثر من 50 مؤتمر عالمي",
  },
];

const fadeDelay = (delay: number): CSSProperties =>
  ({ "--animation-delay": `${delay}s` }) as CSSProperties;

const scrollToSection = (targetId: string): void => {
  const element = document.getElementById(targetId);
  if (!element) return;
  element.scrollIntoView({ behavior: "smooth", block: "start" });
};

export const MissionVisionSection = (): JSX.Element => {
  return (
    <section id="about" className="relative w-full py-24">
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(244,245,244,1)_0%,rgba(139,147,154,0.2)_50%,rgba(244,245,244,1)_100%)]" />

      <div className="relative container mx-auto px-6 max-w-6xl">
        <div className="flex flex-wrap items-center justify-end gap-16">
          <div
            className="flex flex-col w-full lg:w-[520px] items-end space-y-6 animate-fade-up opacity-0"
            style={fadeDelay(0.06)}
          >
            <Badge className="h-auto bg-[#F4F5F4] text-[#1D3E4B] hover:bg-[#F4F5F4] px-4 py-2 rounded-full">
              <img className="w-4 h-6" alt="I" src="/figmaAssets/i-458.svg" />
              <span className="[font-family:'Tajawal',sans-serif] font-normal text-sm [direction:rtl]">
                من أنا
              </span>
            </Badge>

            <div className="flex flex-col items-end space-y-0">
              <h2 className="[font-family:'Tajawal',sans-serif] font-bold text-[#1D3E4B] text-4xl leading-10 [direction:rtl]">
                نحو القمة
              </h2>
              <h2 className="[font-family:'Tajawal',sans-serif] font-bold text-[#1D3E4B] text-4xl leading-10 [direction:rtl]">
                قصة شغف وإصرار
              </h2>
            </div>

            <p className="[font-family:'Tajawal',sans-serif] font-normal text-[#8B939A] text-base leading-[26px] text-right [direction:rtl]">
              بدأت رحلتي في عالم ريادة الأعمال منذ أكثر من 15 عاما، حيث آمنت
              دائما بأن التكنولوجيا هي المفتاح لتحويل الأحلام إلى واقع ملموس.
            </p>

            <p className="[font-family:'Tajawal',sans-serif] font-normal text-[#8B939A] text-base leading-[26px] text-right [direction:rtl]">
              أسست عدة شركات ناجحة في مجالات التسويق الرقمي والإنتاج الإعلامي
              والحلول التقنية، وأفخر بأنني ساهمت في نمو أكثر من 500 مشروع ناجح
              حول العالم العربي.
            </p>

            <div className="flex flex-col items-end space-y-4 w-full">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="flex items-center justify-end gap-3 w-full animate-fade-up opacity-0"
                  style={fadeDelay(0.18 + index * 0.08)}
                >
                  <span className="[font-family:'Tajawal',sans-serif] font-normal text-slate-600 text-sm leading-5 [direction:rtl]">
                    {achievement.text}
                  </span>
                  <img
                    className="w-6 h-6"
                    alt="Checkmark"
                    src="/figmaAssets/div-485.svg"
                  />
                </div>
              ))}
            </div>

            <Button
              type="button"
              variant="link"
              onClick={() => scrollToSection("services")}
              className="h-auto p-0 text-[#1D3E4B] hover:no-underline animate-fade-up opacity-0"
              style={fadeDelay(0.42)}
            >
              <span className="[font-family:'Tajawal',sans-serif] font-normal text-base leading-6 [direction:rtl]">
                تعرف على المزيد
              </span>
              <img
                className="w-4 h-6"
                alt="Arrow"
                src="/figmaAssets/i-496.svg"
              />
            </Button>
          </div>

          <div
            className="w-full lg:w-[520px] flex flex-col items-end animate-fade-up opacity-0"
            style={fadeDelay(0.14)}
          >
            <div className="flex flex-wrap items-start justify-end gap-4">
              <div className="flex flex-col w-[252px] items-end space-y-4 pt-8">
                <Card
                  className="w-full bg-[#315C67] border-0 rounded-2xl overflow-hidden animate-fade-up opacity-0"
                  style={fadeDelay(0.22)}
                >
                  <CardContent className="p-6 relative h-[104px]">
                    <img
                      className="absolute top-[26px] right-6 w-[30px] h-[30px]"
                      alt="Icon"
                      src="/figmaAssets/icon-508.svg"
                    />
                    <p className="[font-family:'Tajawal',sans-serif] font-normal text-white text-sm leading-5 text-right [direction:rtl] absolute top-8 right-[95px]">
                      قائد معتمد دوليا
                    </p>
                  </CardContent>
                </Card>

                <Card
                  className="w-full border-0 rounded-2xl overflow-hidden shadow-[0px_20px_25px_-5px_#10161F1a,0px_8px_10px_-6px_#10161F1a] animate-fade-up opacity-0"
                  style={fadeDelay(0.3)}
                >
                  <CardContent className="p-0">
                    <img
                      className="w-full h-[315px] object-cover"
                      alt="Profile"
                      src="/figmaAssets/img-1025.png"
                    />
                  </CardContent>
                </Card>
              </div>

              <div className="flex flex-col w-[252px] items-end space-y-4">
                <Card
                  className="w-full border-0 rounded-2xl overflow-hidden shadow-[0px_20px_25px_-5px_#10161F1a,0px_8px_10px_-6px_#10161F1a] animate-fade-up opacity-0"
                  style={fadeDelay(0.26)}
                >
                  <CardContent className="p-0">
                    <img
                      className="w-full h-[315px] object-cover"
                      alt="Profile"
                      src="/figmaAssets/photo_2026-03-07_17-02-48.jpg"
                    />
                  </CardContent>
                </Card>

                <Card
                  className="w-full bg-[#1D3E4B] border-0 rounded-2xl animate-fade-up opacity-0"
                  style={fadeDelay(0.36)}
                >
                  <CardContent className="p-6 flex flex-col items-end space-y-1">
                    <h3 className="[font-family:'Tajawal',sans-serif] font-bold text-white text-3xl leading-9 text-right">
                      15+
                    </h3>
                    <p className="[font-family:'Tajawal',sans-serif] font-normal text-[#F4F5F4] text-sm leading-5 [direction:rtl]">
                      سنة من الخبرة
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
