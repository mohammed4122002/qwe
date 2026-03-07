import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

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

export const ServicesSection = (): JSX.Element => {
  return (
    <section className="relative w-full py-24 flex flex-col items-end">
      <div className="w-full max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap items-center justify-end gap-16">
          <div className="flex flex-col w-full lg:w-[520px] items-center relative">
            <div className="relative w-full h-[550px]">
              {serviceCards.map((card, index) => (
                <Card
                  key={index}
                  className={`flex flex-col w-[252px] h-[166px] items-end p-[25px] absolute ${card.position} bg-white rounded-2xl border border-slate-100`}
                >
                  <CardContent className="p-0 flex flex-col items-end gap-2 w-full">
                    <img
                      className="flex-shrink-0"
                      alt="Service icon"
                      src={card.icon}
                    />
                    <h3 className="w-full text-right font-normal text-[#1d293b] text-lg leading-7 [font-family:'Tajawal',sans-serif] [direction:rtl]">
                      {card.title}
                    </h3>
                    <p className="w-full text-right font-normal text-[#94a2b8] text-sm leading-5 [font-family:'Tajawal',sans-serif] [direction:rtl]">
                      {card.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-[520px] flex flex-col items-end gap-6">
            <Badge className="h-auto px-4 py-2 bg-[#edecfa] text-[#282073] hover:bg-[#edecfa] rounded-full gap-2 [font-family:'Tajawal',sans-serif]">
              <img
                className="w-4 h-6"
                alt="Icon"
                src="/figmaAssets/i-731.svg"
              />
              <span className="text-sm font-normal leading-5 [direction:rtl]">
                الخدمات
              </span>
            </Badge>

            <div className="flex flex-col items-end gap-6">
              <h2 className="text-right font-bold text-[#1d293b] text-4xl leading-10 [font-family:'Tajawal',sans-serif] [direction:rtl]">
                كيف يمكنني <span className="text-[#362a9b]">مساعدتك؟</span>
              </h2>

              <p className="text-right font-normal text-[#64738b] text-base leading-[26px] [font-family:'Tajawal',sans-serif] [direction:rtl]">
                أقدم مجموعة متكاملة من الخدمات الاستشارية والتدريبية لمساعدة
                رواد الأعمال والشركات على تحقيق أهدافهم
              </p>

              <Button className="h-auto px-8 py-4 bg-[#362a9b] hover:bg-[#362a9b]/90 rounded-xl gap-3 [font-family:'Tajawal',sans-serif]">
                <img
                  className="w-[14.02px] h-5"
                  alt="Icon"
                  src="/figmaAssets/i-496.svg"
                />
                <span className="text-sm font-normal leading-5 text-white [direction:rtl]">
                  احجز استشارة مجانية
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full overflow-hidden mt-24">
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(238,237,250,0.3)_50%,rgba(255,255,255,1)_100%)]" />

        <div className="relative w-full max-w-7xl mx-auto px-6 py-16">
          <div className="flex flex-col items-center gap-16">
            <div className="flex flex-col items-center gap-6 w-full">
              <Badge className="h-auto px-4 py-2 bg-[#edecfa] text-[#282073] hover:bg-[#edecfa] rounded-full gap-2 [font-family:'Tajawal',sans-serif]">
                <img
                  className="w-[16.33px] h-6"
                  alt="Icon"
                  src="/figmaAssets/i-758.svg"
                />
                <span className="text-sm font-normal leading-5 text-center [direction:rtl]">
                  الشركات
                </span>
              </Badge>

              <h2 className="text-center font-bold text-[#1d293b] text-4xl leading-10 [font-family:'Tajawal',sans-serif] [direction:rtl]">
                إمبراطورية الأعمال
              </h2>

              <p className="text-center font-normal text-[#64738b] text-base leading-6 max-w-lg [font-family:'Tajawal',sans-serif] [direction:rtl]">
                مجموعة من الشركات المتخصصة تعمل بتناغم لتقديم حلول متكاملة
              </p>
            </div>

            <div className="flex flex-wrap items-start justify-end gap-6 w-full">
              {companyCards.map((company, index) => (
                <Card
                  key={index}
                  className="flex flex-col w-full sm:w-[352px] items-end p-[33px] bg-white rounded-3xl overflow-hidden border border-slate-100 hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-0 flex flex-col items-end gap-2 w-full">
                    <img
                      className="flex-shrink-0 mb-2"
                      alt="Company icon"
                      src={company.icon}
                    />
                    <h3 className="w-full text-center font-bold text-[#1d293b] text-xl leading-7 [font-family:'Tajawal',sans-serif]">
                      {company.name}
                    </h3>
                    <p className="w-full text-center font-normal text-[#94a2b8] text-base leading-6 [font-family:'Tajawal',sans-serif] [direction:rtl]">
                      {company.description}
                    </p>
                    <div className="w-full flex justify-center mt-2">
                      <Badge className="h-auto px-3 py-1 bg-[#edecfa] text-[#362a9b] hover:bg-[#edecfa] rounded-full [font-family:'Tajawal',sans-serif]">
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


