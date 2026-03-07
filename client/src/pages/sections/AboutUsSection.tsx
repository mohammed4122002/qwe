import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const expertiseData = [
  {
    percentage: "96%",
    icon: "/figmaAssets/margin-wrap-33.svg",
    title: "النمو المستدام",
    description: "استراتيجيات نمو مدروسة",
  },
  {
    percentage: "92%",
    icon: "/figmaAssets/margin-wrap-37.svg",
    title: "التحول الرقمي",
    description: "تحويل الأعمال إلى نماذج رقمية",
  },
  {
    percentage: "95%",
    icon: "/figmaAssets/margin-wrap-1.svg",
    title: "قيادة الفرق",
    description: "إدارة فرق متعددة التخصصات",
  },
  {
    percentage: "98%",
    icon: "/figmaAssets/margin-wrap-11.svg",
    title: "الرؤية الاستراتيجية",
    description: "بناء خطط نمو مستدامة",
  },
];

export const AboutUsSection = (): JSX.Element => {
  return (
    <section className="relative w-full py-12">
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(248,250,252,0.5)_50%,rgba(255,255,255,1)_100%)]" />

      <div className="relative container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col items-center gap-16">
          <header className="flex flex-col items-center gap-6 text-center">
            <Badge className="h-auto bg-[#edecfa] text-[#282073] hover:bg-[#edecfa] px-4 py-2 rounded-full gap-2 [direction:rtl] [font-family:'Tajawal',sans-serif]">
              <span className="text-sm font-normal leading-5">الخبرات</span>
              <img
                className="w-[16.33px] h-6"
                alt="Icon"
                src="/figmaAssets/i-597.svg"
              />
            </Badge>

            <h2 className="text-4xl font-bold text-[#1d293b] leading-10 [direction:rtl] [font-family:'Tajawal',sans-serif]">
              مجالات التميز
            </h2>

            <p className="text-base font-normal text-[#64738b] leading-6 max-w-lg [direction:rtl] [font-family:'Tajawal',sans-serif]">
              مهارات قيادية مكتسبة عبر سنوات من الخبرة والعمل
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {expertiseData.map((item, index) => (
              <Card
                key={index}
                className="border-slate-100 rounded-3xl bg-white"
              >
                <CardContent className="flex flex-col items-center p-[33px] gap-6">
                  <div className="relative w-24 h-24">
                    <img
                      className="absolute inset-0 w-[102px] h-[102px] -m-[3px]"
                      alt="Progress ring"
                      src="/figmaAssets/margin-wrap-5.svg"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-lg font-bold text-[#1d293b] leading-7 [font-family:'Tajawal',sans-serif]">
                        {item.percentage}
                      </span>
                    </div>
                  </div>

                  <img
                    className="w-auto h-auto"
                    alt="Expertise icon"
                    src={item.icon}
                  />

                  <div className="flex flex-col items-center gap-2 text-center">
                    <h3 className="text-base font-normal text-[#1d293b] leading-6 [direction:rtl] [font-family:'Tajawal',sans-serif]">
                      {item.title}
                    </h3>
                    <p className="text-sm font-normal text-[#94a2b8] leading-5 [direction:rtl] [font-family:'Tajawal',sans-serif]">
                      {item.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


