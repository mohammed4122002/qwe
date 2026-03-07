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
    <section className="relative w-full py-24 overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(12,21,45,1)_0%,rgba(16,29,56,1)_48%,rgba(38,45,102,1)_100%)]" />
        <div className="absolute top-[-300px] left-[1140px] w-[600px] h-[600px] bg-[#4335c233] rounded-full blur-[60px]" />
        <div className="absolute top-[1104px] left-[-250px] w-[500px] h-[500px] bg-[#4335c226] rounded-full blur-[50px]" />

        {decorativeDotsData.map((dot, index) => (
          <div
            key={`dot-${index}`}
            className={`absolute ${dot.top} ${dot.left} w-1 h-1 bg-[#4335c24c] rounded-full`}
          />
        ))}
      </div>

      <div className="relative max-w-[1180px] mx-auto px-6">
        <header className="flex flex-col items-center mb-16">
          <Badge
            variant="outline"
            className="mb-8 h-auto px-[21px] py-[11px] bg-[#ffffff0f] border-[#ffffff1a] rounded-full"
          >
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-white rounded-full" />
              <span className="text-white text-sm font-normal [font-family:'Tajawal',sans-serif] [direction:rtl]">
                الأرقام تتحدث عن نفسها
              </span>
              <div className="w-2 h-2 bg-white rounded-full" />
            </div>
          </Badge>

          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-white text-5xl md:text-6xl font-normal [font-family:'Tajawal',sans-serif] [direction:rtl]">
              إنجازات
            </h2>
            <h2 className="text-[#4335c1] text-5xl md:text-6xl font-normal [font-family:'Tajawal',sans-serif] [direction:rtl]">
              استثنائية
            </h2>
          </div>

          <p className="max-w-2xl text-[#94a2b8] text-lg text-center font-normal [font-family:'Tajawal',sans-serif] [direction:rtl]">
            أرقام حقيقية تعكس مسيرة حافلة بالنجاحات والإنجازات على مدار 15 عاماً
          </p>
        </header>

        <div className="flex flex-col lg:flex-row gap-5" dir="ltr">
          <div className="flex-1 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {largeStatsData.map((stat, index) => (
                <Card
                  key={`large-stat-${index}`}
                  className="bg-[#ffffff0d] border-[#ffffff1a] rounded-[28px]"
                >
                  <CardContent className="p-8 min-h-[246px] flex flex-col items-end justify-between">
                    <img className="w-12 h-12" alt="Icon" src={stat.icon} />

                    <div className="w-full flex flex-col items-end text-right">
                      <div className="text-white text-5xl leading-[1.2] font-normal [font-family:'Tajawal',sans-serif]">
                        {stat.value}
                      </div>
                      <div className="text-[#ffffffde] text-3xl font-bold [font-family:'Tajawal',sans-serif] [direction:rtl]">
                        {stat.title}
                      </div>
                      <div className="text-[#94a2b8] text-base font-normal [font-family:'Tajawal',sans-serif] [direction:rtl]">
                        {stat.description}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {smallStatsData.map((stat, index) => (
                <Card
                  key={`small-stat-${index}`}
                  className="bg-[#ffffff0d] border-[#ffffff1a] rounded-3xl"
                >
                  <CardContent className="p-7 min-h-[172px] flex flex-col items-center justify-between">
                    <img className="w-12 h-12" alt="Icon" src={stat.icon} />
                    <div className="text-white text-4xl leading-none font-normal [font-family:'Tajawal',sans-serif]">
                      {stat.value}
                    </div>
                    <div className="text-[#94a2b8] text-base font-normal [font-family:'Tajawal',sans-serif] [direction:rtl]">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card className="relative w-full lg:w-[460px] bg-[#7a73d3] border-[#8d86de] rounded-[32px] overflow-hidden shadow-[0px_20px_40px_-15px_#4335c266]">
            <div className="absolute -top-24 -left-12 w-72 h-72 bg-[#ffffff2e] rounded-full" />
            <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-[#ffffff1f] rounded-full" />
            <div className="absolute top-14 right-8 w-[120px] h-[120px] bg-[#ffffff1f] rounded-[28px]" />

            <CardContent className="relative p-8 min-h-[424px] flex flex-col items-end justify-between">
              <Badge className="h-auto px-4 py-2 bg-[#ffffff33] hover:bg-[#ffffff33] text-white border-transparent rounded-full gap-2">
                <span className="text-sm font-normal [font-family:'Tajawal',sans-serif] [direction:rtl]">
                  الإنجاز الأبرز
                </span>
                <img className="w-4 h-6" alt="Icon" src="/figmaAssets/i-230.svg" />
              </Badge>

              <img
                className="w-12 h-12 mr-2"
                alt="Decoration"
                src="/figmaAssets/margin-wrap-36.svg"
              />

              <div className="flex flex-col items-end text-right">
                <div className="text-white text-[112px] leading-[110px] tracking-[-4px] font-normal [font-family:'Tajawal',sans-serif]">
                  500+
                </div>
                <div className="text-[#fffffff0] text-[20px] font-bold [font-family:'Tajawal',sans-serif] [direction:rtl]">
                  مشروع منجز
                </div>
                <div className="mt-2 text-[#ffffffbf] text-[14px] [font-family:'Tajawal',sans-serif] [direction:rtl]">
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


