import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Award,
  BarChart3,
  Building2,
  Clock3,
  Globe2,
  Users,
} from "lucide-react";
import type { CSSProperties } from "react";

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
    Icon: Clock3,
    value: "15+",
    title: "سنة خبرة",
    description: "من الخبرة المتراكمة",
  },
  {
    Icon: Users,
    value: "200+",
    title: "عميل سعيد",
    description: "عملاء راضون حول العالم",
  },
];

const smallStatsData = [
  {
    Icon: Award,
    value: "20+",
    label: "جائزة",
  },
  {
    Icon: Building2,
    value: "3",
    label: "شركات",
  },
  {
    Icon: Globe2,
    value: "10+",
    label: "دول",
  },
];

const fadeDelay = (delay: number): CSSProperties =>
  ({ "--animation-delay": `${delay}s` }) as CSSProperties;

export const AchievementsStatsSection = (): JSX.Element => {
  return (
    <section id="achievements" className="relative w-full py-24 overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(16,22,31,1)_0%,rgba(29,62,75,1)_48%,rgba(49,92,103,1)_100%)]" />
        <div className="absolute top-[-300px] left-[1140px] w-[600px] h-[600px] bg-[#1D3E4B33] rounded-full blur-[60px]" />
        <div className="absolute top-[1104px] left-[-250px] w-[500px] h-[500px] bg-[#1D3E4B26] rounded-full blur-[50px]" />

        {decorativeDotsData.map((dot, index) => (
          <div
            key={`dot-${index}`}
            className={`absolute ${dot.top} ${dot.left} w-1 h-1 bg-[#1D3E4B4c] rounded-full`}
          />
        ))}
      </div>

      <div className="relative max-w-[1180px] mx-auto px-6">
        <header
          className="flex flex-col items-center mb-16 animate-fade-up opacity-0"
          style={fadeDelay(0.04)}
        >
          <Badge
            variant="outline"
            className="mb-8 h-auto px-[21px] py-[11px] bg-[#F4F5F40f] border-[#F4F5F41a] rounded-full"
          >
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-white rounded-full" />
              <span className="text-white text-sm font-normal [font-family:'Tajawal',sans-serif] [direction:rtl]">
                الأرقام تتحدث عن نفسها
              </span>
              <div className="w-2 h-2 bg-white rounded-full" />
            </div>
          </Badge>

          <div className="flex items-center gap-3 mb-6 ">
              <h2 className="text-white  border-b-4 border-[#315C67]  text-5xl md:text-6xl font-bold [font-family:'Tajawal',sans-serif] [direction:rtl]">
              استثنائية
            </h2>
            <h2 className="text-white text-5xl md:text-6xl font-bold [font-family:'Tajawal',sans-serif] [direction:rtl]">
              إنجازات
            </h2>
          
          </div>

          <p className="max-w-2xl text-[#8B939A] text-lg text-center font-normal [font-family:'Tajawal',sans-serif] [direction:rtl]">
            أرقام حقيقية تعكس مسيرة حافلة بالنجاحات والإنجازات على مدار 15 عاماً
          </p>
        </header>

        <div className="flex flex-col lg:flex-row gap-5" dir="ltr">
          <div
            className="flex-1 space-y-5 animate-fade-up opacity-0"
            style={fadeDelay(0.14)}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {largeStatsData.map((stat, index) => (
                <Card
                  key={`large-stat-${index}`}
                  className="bg-[#F4F5F40d] border-[#F4F5F41a] rounded-[28px] animate-fade-up opacity-0"
                  style={fadeDelay(0.2 + index * 0.08)}
                >
                  <CardContent className="p-8 min-h-[246px] flex flex-col items-end justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[#F4F5F424] border border-[#F4F5F414] flex items-center justify-center">
                      <stat.Icon className="w-[22px] h-[22px] text-white" strokeWidth={1.9} />
                    </div>

                    <div className="w-full flex flex-col items-end text-right">
                      <div className="text-white text-5xl leading-[1.2] font-normal [font-family:'Tajawal',sans-serif]">
                        {stat.value}
                      </div>
                      <div className="text-[#F4F5F4de] text-3xl font-bold [font-family:'Tajawal',sans-serif] [direction:rtl]">
                        {stat.title}
                      </div>
                      <div className="text-[#8B939A] text-base font-normal [font-family:'Tajawal',sans-serif] [direction:rtl]">
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
                  className="bg-[#F4F5F40d] border-[#F4F5F41a] rounded-3xl animate-fade-up opacity-0"
                  style={fadeDelay(0.36 + index * 0.08)}
                >
                  <CardContent className="p-7 min-h-[172px] flex flex-col items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[#F4F5F424] border border-[#F4F5F414] flex items-center justify-center">
                      <stat.Icon className="w-[22px] h-[22px] text-white" strokeWidth={1.9} />
                    </div>
                    <div className="text-white text-4xl leading-none font-normal [font-family:'Tajawal',sans-serif]">
                      {stat.value}
                    </div>
                    <div className="text-[#8B939A] text-base font-normal [font-family:'Tajawal',sans-serif] [direction:rtl]">
                      {stat.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <Card
            className="relative w-full lg:w-[460px] bg-[#315C67] border-[#8B939A] rounded-[32px] overflow-hidden shadow-[0px_20px_40px_-15px_#1D3E4B66] animate-fade-up opacity-0"
            style={fadeDelay(0.28)}
          >
            <div className="absolute -top-24 -left-12 w-72 h-72 bg-[#F4F5F42e] rounded-full" />
            <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-[#F4F5F41f] rounded-full" />
            <div className="absolute top-14 right-8 w-[120px] h-[120px] bg-[#F4F5F41f] rounded-[28px]" />

            <CardContent className="relative p-8 min-h-[424px] flex flex-col items-end justify-between">
              <Badge className="h-auto px-4 py-2 bg-[#F4F5F433] hover:bg-[#F4F5F433] text-white border-transparent rounded-full gap-2">
                <span className="text-sm font-normal [font-family:'Tajawal',sans-serif] [direction:rtl]">
                  الإنجاز الأبرز
                </span>
                <BarChart3 className="w-4 h-4 text-white" strokeWidth={2} />
              </Badge>

              <div className="w-12 h-12 mr-2 rounded-2xl bg-[#F4F5F424] border border-[#F4F5F414] flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-white" strokeWidth={2} />
              </div>

              <div className="flex flex-col items-end text-right">
                <div className="text-white text-[112px] leading-[110px] tracking-[-4px] font-normal [font-family:'Tajawal',sans-serif]">
                  500+
                </div>
                <div className="text-[#F4F5F4f0] text-[20px] font-bold [font-family:'Tajawal',sans-serif] [direction:rtl]">
                  مشروع منجز
                </div>
                <div className="mt-2 text-[#F4F5F4bf] text-[14px] [font-family:'Tajawal',sans-serif] [direction:rtl]">
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


