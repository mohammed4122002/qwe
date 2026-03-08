import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { CSSProperties } from "react";

const serviceCards = [
  {
    icon: "/figmaAssets/margin-wrap-2.svg",
    title: "استشارات استراتيجية",
    description: "خطط نمو مخصصة لأعمالك",
    position: "top-0 left-0",
  },
  {
    icon: "/figmaAssets/margin-wrap-9.svg",
    title: "تأسيس الشركات",
    description: "من الفكرة إلى التنفيذ",
    position: "top-0 left-[268px]",
  },
  {
    icon: "/figmaAssets/margin-wrap-4.svg",
    title: "استثمار وتمويل",
    description: "دعم المشاريع الواعدة",
    position: "top-[182px] left-0",
  },
  {
    icon: "/figmaAssets/margin-wrap-7.svg",
    title: "تدريب القيادات",
    description: "برامج تطوير للمدراء التنفيذيين",
    position: "top-[182px] left-[268px]",
  },
];

const companyCards = [
  {
    icon: "/figmaAssets/margin-wrap-17.svg",
    name: "Aysel Market",
    description: "تسويق رقمي متقدم",
    badge: "300+ حملة",
  },
  {
    icon: "/figmaAssets/margin-wrap-23.svg",
    name: "Aysel Media",
    description: "إنتاج إعلامي احترافي",
    badge: "200+ فيديو",
  },
  {
    icon: "/figmaAssets/margin-wrap-3.svg",
    name: "Aysel Tech",
    description: "حلول تقنية متكاملة",
    badge: "150+ مشروع",
  },
];

const fadeDelay = (delay: number): CSSProperties =>
  ({ "--animation-delay": `${delay}s` }) as CSSProperties;

export const ServicesSection = (): JSX.Element => {
  return (
    <section className="relative w-full py-24 flex flex-col items-end">
      <div id="services" className="relative w-full overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(244,245,244,1)_0%,rgba(139,147,154,0.22)_50%,rgba(244,245,244,1)_100%)]" />

        <div className="relative w-full max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div
              className="flex flex-col items-start [direction:rtl] text-right order-1 lg:order-2 animate-fade-up opacity-0"
              style={fadeDelay(0.05)}
            >
              <Badge className="h-auto px-4 py-2 bg-[#F4F5F4] text-[#1D3E4B] hover:bg-[#F4F5F4] rounded-full gap-2 mb-6">
                <img className="w-4 h-6" alt="Icon" src="/figmaAssets/i-731.svg" />
                <span className="text-sm font-normal">الخدمات</span>
              </Badge>

              <h2 className="font-bold text-[#1D3E4B] text-4xl leading-tight mb-6">
                كيف يمكنني <span className="text-[#1D3E4B]">مساعدتك؟</span>
              </h2>

              <p className="font-normal text-[#8B939A] text-lg leading-relaxed mb-8 max-w-lg">
                أقدم مجموعة متكاملة من الخدمات الاستشارية والتدريبية لمساعدة
                رواد الأعمال والشركات على تحقيق أهدافهم وتطوير مشاريعهم.
              </p>

              <Button
                className="h-auto px-8 py-4 bg-[#1D3E4B] hover:bg-[#1D3E4B]/90 rounded-xl gap-3 animate-fade-up opacity-0"
                style={fadeDelay(0.2)}
              >
                <img className="w-4 h-5" alt="Icon" src="/figmaAssets/i-496.svg" />
                <span className="text-sm font-normal text-white">احجز استشارة مجانية</span>
              </Button>
            </div>

            <div
              className="relative w-full h-[400px] flex items-center justify-center order-2 lg:order-1 animate-fade-up opacity-0"
              style={fadeDelay(0.12)}
            >
              <div className="relative w-[520px] h-[350px]">
                {serviceCards.map((card, index) => (
                  <Card
                    key={index}
                    className={`flex flex-col w-[252px] h-[166px] items-end p-6 absolute ${card.position} bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow animate-fade-up opacity-0`}
                    style={fadeDelay(0.22 + index * 0.08)}
                  >
                    <CardContent className="p-0 flex flex-col items-end gap-2 w-full">
                      <img className="w-10 h-10 mb-2" alt="icon" src={card.icon} />
                      <h3 className="text-[#1D3E4B] text-lg font-bold">{card.title}</h3>
                      <p className="text-[#8B939A] text-sm">{card.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="companies" className="relative w-full overflow-hidden mt-24">
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(244,245,244,1)_0%,rgba(139,147,154,0.22)_50%,rgba(244,245,244,1)_100%)]" />

        <div className="relative w-full max-w-7xl mx-auto px-6 py-16">
          <div className="flex flex-col items-center gap-16">
            <div
              className="flex flex-col items-center gap-6 w-full animate-fade-up opacity-0"
              style={fadeDelay(0.08)}
            >
              <Badge className="h-auto px-4 py-2 bg-[#F4F5F4] text-[#1D3E4B] hover:bg-[#F4F5F4] rounded-full gap-2 [font-family:'Tajawal',sans-serif]">
                <img
                  className="w-[16.33px] h-6"
                  alt="Icon"
                  src="/figmaAssets/i-758.svg"
                />

                <span className="text-sm font-normal leading-5 text-center [direction:rtl]">
                  الشركات
                </span>
              </Badge>

              <h2 className="text-center font-bold text-[#1D3E4B] text-4xl leading-10 [font-family:'Tajawal',sans-serif] [direction:rtl]">
                إمبراطورية الأعمال
              </h2>

              <p className="text-center font-normal text-[#8B939A] text-base leading-6 max-w-lg [font-family:'Tajawal',sans-serif] [direction:rtl]">
                مجموعة من الشركات المتخصصة تعمل بتناغم لتقديم حلول متكاملة
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 w-full">
              {companyCards.map((company, index) => (
                <Card
                  key={index}
                  className="flex flex-col w-full sm:w-[352px] items-end p-[33px] bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-lg transition-shadow animate-fade-up opacity-0"
                  style={fadeDelay(0.18 + index * 0.08)}
                >
                  <CardContent className="p-0 flex flex-col items-end gap-2 w-full">
                    <img
                      className="flex-shrink-0 mb-2"
                      alt="Company icon"
                      src={company.icon}
                    />

                    <h3 className="w-full text-center font-bold text-[#1D3E4B] text-xl leading-7 [font-family:'Tajawal',sans-serif]">
                      {company.name}
                    </h3>

                    <p className="w-full text-center font-normal text-[#8B939A] text-base leading-6 [font-family:'Tajawal',sans-serif] [direction:rtl]">
                      {company.description}
                    </p>

                    <div className="w-full flex justify-center mt-2">
                      <Badge className="h-auto px-3 py-1 bg-[#F4F5F4] text-[#1D3E4B] hover:bg-[#F4F5F4] rounded-full [font-family:'Tajawal',sans-serif]">
                        <span className="text-xs font-bold leading-4 text-center [direction:rtl]">
                          {company.badge}
                        </span>
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
