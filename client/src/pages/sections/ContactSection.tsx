import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const contactCards = [
  {
    icon: "/figmaAssets/margin-wrap-29.svg",
    label: "الموقع",
    value: "الرياض، السعودية",
  },
  {
    icon: "/figmaAssets/margin-wrap-31.svg",
    label: "الهاتف",
    value: "+966 50 000 0000",
  },
  {
    icon: "/figmaAssets/margin-wrap-30.svg",
    label: "البريد الإلكتروني",
    value: "mahmoud@agency.com",
  },
];

export const ContactSection = (): JSX.Element => {
  return (
    <section className="w-full py-24 flex justify-center" dir="rtl">
      <div className="w-full max-w-screen-lg px-6">
        <div className="flex flex-col items-center gap-16">
          <div className="flex flex-col items-center gap-6 max-w-[976px]">
            <Badge className="bg-[#edecfa] text-[#282073] hover:bg-[#edecfa] h-auto px-4 py-2 gap-2 rounded-full">
              <span className="text-sm font-normal [font-family:'Almarai',Helvetica]">
                تواصل
              </span>
              <img
                className="w-[16.33px] h-6"
                alt="Contact icon"
                src="/figmaAssets/i-1034.svg"
              />
            </Badge>

            <h2 className="text-4xl font-bold text-[#1d293b] text-center [font-family:'Almarai',Helvetica]">
              لنبني المستقبل معا
            </h2>

            <p className="text-base font-normal text-[#64738b] text-center max-w-md [font-family:'Almarai',Helvetica]">
              أرحب دائما بالتواصل مع رواد الأعمال والمبدعين
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 w-full max-w-[976px]">
            {contactCards.map((card, index) => (
              <Card
                key={index}
                className="w-full sm:w-[309px] bg-white rounded-3xl border-slate-100"
              >
                <CardContent className="flex flex-col items-center p-[33px] gap-2">
                  <img className="mb-2" alt={card.label} src={card.icon} />
                  <p className="text-sm font-normal text-[#94a2b8] text-center [font-family:'Almarai',Helvetica]">
                    {card.label}
                  </p>
                  <p className="text-base font-normal text-[#1d293b] text-center [font-family:'Almarai',Helvetica]">
                    {card.value}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Button className="bg-[#362a9b] hover:bg-[#362a9b]/90 text-white h-auto px-10 py-5 rounded-2xl gap-3">
            <span className="text-base font-normal [font-family:'Almarai',Helvetica]">
              استكشف خدمات الوكالة
            </span>
            <img
              className="w-[18.38px] h-7"
              alt="Arrow icon"
              src="/figmaAssets/i-496.svg"
            />
          </Button>
        </div>
      </div>
    </section>
  );
};
