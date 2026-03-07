import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

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

export const MissionVisionSection = (): JSX.Element => {
  return (
    <section className="relative w-full py-24">
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(238,237,250,0.3)_50%,rgba(255,255,255,1)_100%)]" />

      <div className="relative container mx-auto px-6 max-w-6xl">
        <div className="flex flex-wrap items-center justify-end gap-16">
          <div className="flex flex-col w-full lg:w-[520px] items-end space-y-6">
            <Badge className="h-auto bg-[#edecfa] text-[#282073] hover:bg-[#edecfa] px-4 py-2 rounded-full">
              <img className="w-4 h-6" alt="I" src="/figmaAssets/i-458.svg" />
              <span className="[font-family:'Almarai',Helvetica] font-normal text-sm [direction:rtl]">
                من أنا
              </span>
            </Badge>

            <div className="flex flex-col items-end space-y-0">
              <h2 className="[font-family:'Almarai',Helvetica] font-bold text-[#362a9b] text-4xl leading-10 [direction:rtl]">
                نحو القمة
              </h2>
              <h2 className="[font-family:'Almarai',Helvetica] font-bold text-[#1d293b] text-4xl leading-10 [direction:rtl]">
                قصة شغف وإصرار
              </h2>
            </div>

            <p className="[font-family:'Almarai',Helvetica] font-normal text-[#64738b] text-base leading-[26px] text-right [direction:rtl]">
              بدأت رحلتي في عالم ريادة الأعمال منذ أكثر من 15 عاما، حيث آمنت
              دائما بأن التكنولوجيا هي المفتاح لتحويل الأحلام إلى واقع ملموس.
            </p>

            <p className="[font-family:'Almarai',Helvetica] font-normal text-[#64738b] text-base leading-[26px] text-right [direction:rtl]">
              أسست عدة شركات ناجحة في مجالات التسويق الرقمي والإنتاج الإعلامي
              والحلول التقنية، وأفخر بأنني ساهمت في نمو أكثر من 500 مشروع ناجح
              حول العالم العربي.
            </p>

            <div className="flex flex-col items-end space-y-4 w-full">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="flex items-center justify-end gap-3 w-full"
                >
                  <span className="[font-family:'Almarai',Helvetica] font-normal text-slate-600 text-sm leading-5 [direction:rtl]">
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
              variant="link"
              className="h-auto p-0 text-[#362a9b] hover:no-underline"
            >
              <span className="[font-family:'Almarai',Helvetica] font-normal text-base leading-6 [direction:rtl]">
                تعرف على المزيد
              </span>
              <img
                className="w-4 h-6"
                alt="Arrow"
                src="/figmaAssets/i-496.svg"
              />
            </Button>
          </div>

          <div className="w-full lg:w-[520px] flex flex-col items-end">
            <div className="flex flex-wrap items-start justify-end gap-4">
              <div className="flex flex-col w-[252px] items-end space-y-4 pt-8">
                <Card className="w-full bg-[#4335c1] border-0 rounded-2xl overflow-hidden">
                  <CardContent className="p-6 relative h-[104px]">
                    <img
                      className="absolute top-[26px] right-6 w-[30px] h-[30px]"
                      alt="Icon"
                      src="/figmaAssets/icon-508.svg"
                    />
                    <p className="[font-family:'Almarai',Helvetica] font-normal text-white text-sm leading-5 text-right [direction:rtl] absolute top-8 right-[95px]">
                      قائد معتمد دوليا
                    </p>
                  </CardContent>
                </Card>

                <Card className="w-full border-0 rounded-2xl overflow-hidden shadow-[0px_20px_25px_-5px_#0000001a,0px_8px_10px_-6px_#0000001a]">
                  <CardContent className="p-0">
                    <img
                      className="w-full h-[315px] object-cover"
                      alt="Profile"
                      src="/figmaAssets/img-513.png"
                    />
                  </CardContent>
                </Card>
              </div>

              <div className="flex flex-col w-[252px] items-end space-y-4">
                <Card className="w-full border-0 rounded-2xl overflow-hidden shadow-[0px_20px_25px_-5px_#0000001a,0px_8px_10px_-6px_#0000001a]">
                  <CardContent className="p-0">
                    <img
                      className="w-full h-[315px] object-cover"
                      alt="Profile"
                      src="/figmaAssets/img-516.png"
                    />
                  </CardContent>
                </Card>

                <Card className="w-full bg-[#362a9b] border-0 rounded-2xl">
                  <CardContent className="p-6 flex flex-col items-end space-y-1">
                    <h3 className="[font-family:'Almarai',Helvetica] font-bold text-white text-3xl leading-9 text-right">
                      15+
                    </h3>
                    <p className="[font-family:'Almarai',Helvetica] font-normal text-[#d9d5f4] text-sm leading-5 [direction:rtl]">
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
