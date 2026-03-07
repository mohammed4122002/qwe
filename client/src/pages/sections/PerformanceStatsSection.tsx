import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const decorativeDots = [
  { top: "top-[65px]", left: "left-[203px]" },
  { top: "top-[407px]", left: "left-[214px]" },
  { top: "top-[917px]", left: "left-[1209px]" },
  { top: "top-[1261px]", left: "left-[1012px]" },
  { top: "top-[198px]", left: "left-[588px]" },
  { top: "top-[310px]", left: "left-[1141px]" },
  { top: "top-[1189px]", left: "left-[942px]" },
  { top: "top-[840px]", left: "left-[1390px]" },
  { top: "top-[1044px]", left: "left-[1266px]" },
  { top: "top-[429px]", left: "left-[1373px]" },
  { top: "top-[1243px]", left: "left-[1171px]" },
  { top: "top-[809px]", left: "left-[324px]" },
  { top: "top-[979px]", left: "left-[919px]" },
  { top: "top-[713px]", left: "left-[268px]" },
  { top: "top-[1311px]", left: "left-[1168px]" },
  { top: "top-[341px]", left: "left-[934px]" },
  { top: "top-[1039px]", left: "left-[74px]" },
  { top: "top-[745px]", left: "left-[573px]" },
  { top: "top-[917px]", left: "left-[912px]" },
  { top: "top-[1214px]", left: "left-[763px]" },
];

export const PerformanceStatsSection = (): JSX.Element => {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative w-full">
        <div className="relative w-full bg-[linear-gradient(150deg,rgba(15,23,42,1)_0%,rgba(30,41,59,1)_50%,rgba(15,23,42,1)_100%)] py-20">
          <div className="container mx-auto max-w-4xl px-6">
            <Card className="border-0 bg-transparent shadow-none">
              <CardContent className="flex flex-col items-end space-y-12 p-0">
                <img
                  className="h-auto w-auto"
                  alt="Margin wrap"
                  src="/figmaAssets/margin-wrap-32.svg"
                />

                <blockquote className="space-y-0 text-center">
                  <p className="font-normal text-white text-3xl tracking-[0] leading-9 [direction:rtl] [font-family:'Almarai',Helvetica]">
                    أؤمن بأن النجاح الحقيقي ليس في بناء شركات عظيمة فحسب، بل في
                  </p>
                  <p className="font-normal text-white text-3xl tracking-[0] leading-[42px] [direction:rtl] [font-family:'Almarai',Helvetica]">
                    صناعة قادة يصنعون الفرق ويلهمون الآخرين
                  </p>
                </blockquote>

                <div className="flex items-center gap-4">
                  <div className="flex flex-col items-end space-y-0">
                    <p className="font-normal text-white text-lg tracking-[0] leading-7 [direction:rtl] [font-family:'Almarai',Helvetica]">
                      محمود الأغواني
                    </p>
                    <p className="font-normal text-[#d9d5f4] text-sm tracking-[0] leading-5 [direction:rtl] [font-family:'Almarai',Helvetica]">
                      المؤسس والرئيس التنفيذي
                    </p>
                  </div>

                  <Avatar className="h-16 w-16 border-2 border-[#0b41f5]">
                    <AvatarImage
                      src="/figmaAssets/img-1025.png"
                      alt="محمود الأغواني"
                      className="object-cover"
                    />
                  </Avatar>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="absolute top-[-300px] left-[1140px] w-[600px] h-[600px] bg-[#4335c233] rounded-full blur-[60px] pointer-events-none" />

        <div className="absolute top-[1104px] left-[-250px] w-[500px] h-[500px] bg-[#4335c226] rounded-full blur-[50px] pointer-events-none" />

        {decorativeDots.map((dot, index) => (
          <div
            key={`dot-${index}`}
            className={`absolute w-1 h-1 bg-[#4335c24c] rounded-full pointer-events-none ${dot.top} ${dot.left}`}
          />
        ))}
      </div>
    </section>
  );
};
