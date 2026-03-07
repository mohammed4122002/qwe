import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const decorativeDotsData = [
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

const largeStatsData = [
  {
    icon: "/figmaAssets/margin-wrap-14.svg",
    value: "15+",
    title: "سنة خبرة",
    description: "من الخبرة المتراكمة",
  },
  {
    icon: "/figmaAssets/margin-wrap-8.svg",
    value: "200+",
    title: "عميل سعيد",
    description: "عملاء راضون حول العالم",
  },
];

const smallStatsData = [
  {
    icon: "/figmaAssets/margin-wrap-10.svg",
    value: "20+",
    label: "جائزة",
  },
  {
    icon: "/figmaAssets/margin-wrap-20.svg",
    value: "3",
    label: "شركات",
  },
  {
    icon: "/figmaAssets/margin-wrap-12.svg",
    value: "10+",
    label: "دول",
  },
];

export const AchievementsStatsSection = (): JSX.Element => {
  return (
    <section className="relative w-full py-20 overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-[linear-gradient(150deg,rgba(15,23,42,1)_0%,rgba(30,41,59,1)_50%,rgba(15,23,42,1)_100%)]" />

        <div className="absolute top-[-300px] left-[1140px] w-[600px] h-[600px] bg-[#4335c233] rounded-full blur-[60px]" />

        <div className="absolute top-[1104px] left-[-250px] w-[500px] h-[500px] bg-[#4335c226] rounded-full blur-[50px]" />

        {decorativeDotsData.map((dot, index) => (
          <div
            key={`dot-${index}`}
            className={`absolute ${dot.top} ${dot.left} w-1 h-1 bg-[#4335c24c] rounded-full`}
          />
        ))}
      </div>

      <div className="relative max-w-screen-xl mx-auto px-6">
        <header className="flex flex-col items-center mb-20">
          <Badge
            variant="outline"
            className="mb-8 h-auto px-[21px] py-[11px] bg-[#ffffff0d] border-[#ffffff1a] backdrop-blur-[2px] rounded-full"
          >
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-white rounded-full" />
              <span className="text-white text-sm font-normal [font-family:'Almarai',Helvetica] [direction:rtl]">
                الأرقام تتحدث عن نفسها
              </span>
              <div className="w-2 h-2 bg-white rounded-full" />
            </div>
          </Badge>

          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-white text-5xl font-normal [font-family:'Almarai',Helvetica] [direction:rtl]">
              إنجازات
            </h2>
            <h2 className="text-[#4335c1] text-5xl font-normal [font-family:'Almarai',Helvetica] [direction:rtl]">
              استثنائية
            </h2>
          </div>

          <p className="max-w-xl text-[#94a2b8] text-lg text-center font-normal [font-family:'Almarai',Helvetica] [direction:rtl]">
            أرقام حقيقية تعكس مسيرة حافلة بالنجاحات والإنجازات على مدار 15 عاما
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {largeStatsData.map((stat, index) => (
            <Card
              key={`large-stat-${index}`}
              className="relative bg-[#ffffff0d] border-[#ffffff1a] backdrop-blur-[2px] rounded-3xl overflow-hidden"
            >
              <div className="absolute top-px left-px w-full h-full bg-[linear-gradient(149deg,rgba(16,185,129,0)_0%,rgba(16,185,129,0)_100%)]" />
              <CardContent className="relative p-[33px] flex flex-col items-end">
                <img className="mb-4" alt="Icon" src={stat.icon} />
                <div className="text-white text-5xl font-normal text-right mb-4 [font-family:'Almarai',Helvetica]">
                  {stat.value}
                </div>
                <div className="text-[#ffffffcc] text-2xl font-bold mb-1 [font-family:'Almarai',Helvetica] [direction:rtl]">
                  {stat.title}
                </div>
                <div className="text-[#94a2b8] text-sm font-normal [font-family:'Almarai',Helvetica] [direction:rtl]">
                  {stat.description}
                </div>
              </CardContent>
            </Card>
          ))}

          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {smallStatsData.map((stat, index) => (
              <Card
                key={`small-stat-${index}`}
                className="bg-[#ffffff0d] border-[#ffffff1a] backdrop-blur-[2px] rounded-2xl overflow-hidden"
              >
                <CardContent className="p-[25px] flex flex-col items-center">
                  <img className="mb-1" alt="Icon" src={stat.icon} />
                  <div className="text-white text-3xl font-normal text-center mb-1 [font-family:'Almarai',Helvetica]">
                    {stat.value}
                  </div>
                  <div className="text-[#94a2b8] text-sm font-normal text-center [font-family:'Almarai',Helvetica] [direction:rtl]">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="lg:col-span-3 relative bg-[#4335c1] rounded-[32px] overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[#4335c1] rounded-[32px] blur-md opacity-50" />

            <div className="absolute -top-32 left-[371px] w-64 h-64 bg-[#ffffff1a] rounded-full" />
            <div className="absolute top-[368px] -left-24 w-48 h-48 bg-[#ffffff0d] rounded-full" />
            <div className="absolute inset-0 bg-white opacity-30" />

            <CardContent className="relative p-10 flex flex-col items-end justify-end min-h-[464px]">
              <div className="flex flex-col items-end mb-6">
                <Badge
                  variant="outline"
                  className="mb-6 h-auto px-4 py-2 bg-[#ffffff33] border-transparent backdrop-blur-[2px] rounded-full"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-[#ffffffe6] text-sm font-normal [font-family:'Almarai',Helvetica] [direction:rtl]">
                      الإنجاز الأبرز
                    </span>
                    <img
                      className="w-4 h-6"
                      alt="Icon"
                      src="/figmaAssets/i-230.svg"
                    />
                  </div>
                </Badge>

                <img
                  className="mb-4"
                  alt="Decoration"
                  src="/figmaAssets/margin-wrap-36.svg"
                />
              </div>

              <div className="flex flex-col items-end">
                <div className="text-white text-9xl font-normal text-right tracking-[-6.40px] leading-[128px] mb-4 [font-family:'Almarai',Helvetica]">
                  500+
                </div>
                <div className="text-[#ffffffe6] text-2xl font-bold mb-2 [font-family:'Almarai',Helvetica] [direction:rtl]">
                  مشروع منجز
                </div>
                <div className="text-[#ffffff99] text-base font-normal [font-family:'Almarai',Helvetica] [direction:rtl]">
                  مشاريع ناجحة في مختلف المجالات حول العالم العربي
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
