import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const statsCards = [
  {
    icon: "/figmaAssets/div-48.svg",
    value: "15+",
    label: "سنة خبرة",
    description: "في ريادة الأعمال",
  },
  {
    icon: "/figmaAssets/div-66.svg",
    value: "500+",
    label: "مشروع ناجح",
    description: "حول العالم العربي",
  },
  {
    icon: "/figmaAssets/div-84.svg",
    value: "3",
    label: "شركات",
    description: "تحت إدارتي",
  },
  {
    icon: "/figmaAssets/div-102.svg",
    value: "10+",
    label: "دول",
    description: "تواجد عالمي",
  },
];

const socialIcons = [
  "/figmaAssets/a-184.svg",
  "/figmaAssets/a-181.svg",
  "/figmaAssets/a-178.svg",
  "/figmaAssets/a-175.svg",
];

const companies = [
  { name: "Aysel Tech", icon: "/figmaAssets/i-221.svg" },
  { name: "Aysel Media", icon: "/figmaAssets/i-215.svg" },
  { name: "Aysel Market", icon: "/figmaAssets/i-209.svg" },
];

const clientAvatars = [
  "/figmaAssets/margin-wrap.svg",
  "/figmaAssets/margin-wrap.svg",
  "/figmaAssets/margin-wrap.svg",
  "/figmaAssets/margin-wrap.svg",
];

export const HeroProfileSection = (): JSX.Element => {
  return (
    <section className="relative w-full py-0">
      <div className="container mx-auto px-20 max-w-screen-xl">
        <div className="relative w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[272px_1fr_485px] gap-8 items-start py-[74px]">
            <aside className="flex flex-col gap-4">
              {statsCards.map((stat, index) => (
                <Card
                  key={index}
                  className="bg-white rounded-2xl border-slate-100 shadow-[0px_1px_2px_#0000000d]"
                >
                  <CardContent className="p-[17px]">
                    <div className="flex items-center justify-end gap-4">
                      <img
                        className="w-4 h-6"
                        alt="Info"
                        src="/figmaAssets/i-35.svg"
                      />
                      <div className="flex flex-col items-end">
                        <div className="flex items-start justify-end gap-2">
                          <span className="text-sm text-[#64738b] [font-family:'Almarai',Helvetica] [direction:rtl]">
                            {stat.label}
                          </span>
                          <span className="text-2xl text-[#1d293b] [font-family:'Almarai',Helvetica]">
                            {stat.value}
                          </span>
                        </div>
                        <span className="text-xs text-[#94a2b8] [font-family:'Almarai',Helvetica] [direction:rtl]">
                          {stat.description}
                        </span>
                      </div>
                      <img className="w-12 h-12" alt="Icon" src={stat.icon} />
                    </div>
                  </CardContent>
                </Card>
              ))}

              <Card className="rounded-2xl border-[#b3ace8] bg-[linear-gradient(168deg,rgba(238,237,250,1)_0%,rgba(217,214,244,1)_100%)]">
                <CardContent className="p-[17px] space-y-3">
                  <div className="flex items-center justify-end gap-3">
                    <div className="flex flex-col items-end">
                      <span className="text-sm text-[#1d293b] [font-family:'Almarai',Helvetica] [direction:rtl]">
                        استشارة مجانية
                      </span>
                      <span className="text-xs text-[#362a9b] [font-family:'Almarai',Helvetica] [direction:rtl]">
                        احجز موعدك الآن
                      </span>
                    </div>
                    <img
                      className="w-10 h-10"
                      alt="Calendar"
                      src="/figmaAssets/div-114.svg"
                    />
                  </div>
                  <Button className="w-full h-10 bg-[#362a9b] hover:bg-[#362a9b]/90 text-white rounded-xl [font-family:'Almarai',Helvetica] [direction:rtl]">
                    احجز الآن
                  </Button>
                </CardContent>
              </Card>
            </aside>

            <div className="relative flex justify-center items-start">
              <div className="relative">
                <img
                  className="w-[426px] h-[561px]"
                  alt="Profile"
                  src="/figmaAssets/div-125.svg"
                />
                <Badge className="absolute top-[18px] right-[-128px] h-[42px] px-[21px] py-[11px] bg-[#edecfa] border-[#d9d5f4] rounded-full flex items-center gap-3 [font-family:'Almarai',Helvetica]">
                  <div className="w-2 h-2 bg-[#4335c1] rounded-full" />
                  <span className="text-sm text-[#282073] [direction:rtl]">
                    قائد أعمال معتمد دوليا
                  </span>
                  <img
                    className="w-[76px] h-4"
                    alt="Badge"
                    src="/figmaAssets/div-17.svg"
                  />
                </Badge>
              </div>

              <Card className="absolute top-[296px] right-[-233px] w-[147px] bg-white rounded-2xl border-slate-100 shadow-[0px_20px_25px_-5px_#e2e7f080,0px_8px_10px_-6px_#e2e7f080] overflow-hidden">
                <CardContent className="p-[17px]">
                  <div className="flex items-center justify-end gap-3">
                    <div className="flex flex-col items-end">
                      <span className="text-2xl text-[#1d293b] [font-family:'Almarai',Helvetica]">
                        20+
                      </span>
                      <span className="text-xs text-[#94a2b8] [font-family:'Almarai',Helvetica] [direction:rtl]">
                        جائزة دولية
                      </span>
                    </div>
                    <img
                      className="w-12 h-12"
                      alt="Award"
                      src="/figmaAssets/div-1179.svg"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col items-end space-y-6">
              <Badge className="h-[42px] px-[17px] py-[9px] bg-[#d9d5f4] border-[#b3ace8] rounded-full [font-family:'Almarai',Helvetica]">
                <span className="text-sm text-[#282073] [direction:rtl]">
                  المؤسس والرئيس التنفيذي
                </span>
                <img
                  className="w-4 h-6 mr-2"
                  alt="Icon"
                  src="/figmaAssets/i-147.svg"
                />
              </Badge>

              <div className="flex flex-col items-end space-y-4">
                <div className="flex items-start justify-end">
                  <h1 className="text-7xl leading-[72px] bg-[linear-gradient(270deg,rgba(103,91,211,1)_0%,rgba(54,42,155,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [font-family:'Almarai',Helvetica] [direction:rtl]">
                    الأغواني
                  </h1>
                  <h1 className="text-7xl leading-[72px] text-[#1d293b] [font-family:'Almarai',Helvetica] [direction:rtl] mr-2">
                    محمود
                  </h1>
                </div>

                <p className="max-w-md text-xl leading-[32.5px] text-[#64738b] [font-family:'Almarai',Helvetica] [direction:rtl] text-right">
                  قائد رقمي يحول الأفكار إلى إمبراطوريات ناجحة عبر الابتكار
                  والرؤية الاستراتيجية
                </p>
              </div>

              <div className="flex flex-wrap items-start justify-end gap-4">
                <Button
                  variant="outline"
                  className="h-auto px-[33px] py-[17px] bg-slate-100 border-[#e2e7f0] rounded-xl [font-family:'Almarai',Helvetica] [direction:rtl]"
                >
                  <span className="text-base text-[#334054]">اكتشف قصتي</span>
                  <img
                    className="w-4 h-6 mr-2"
                    alt="Arrow"
                    src="/figmaAssets/i-165.svg"
                  />
                </Button>

                <Button className="h-auto px-8 py-4 bg-[#362a9b] hover:bg-[#362a9b]/90 rounded-xl shadow-[0px_10px_15px_-3px_#4234c24c,0px_4px_6px_-4px_#4234c24c] overflow-hidden relative [font-family:'Almarai',Helvetica] [direction:rtl]">
                  <div className="absolute top-0 left-[-169px] w-[169px] h-[58px] bg-[linear-gradient(90deg,rgba(0,0,0,0)_0%,rgba(255,255,255,0.2)_50%,rgba(0,0,0,0)_100%)]" />
                  <img
                    className="w-4 h-6 ml-2"
                    alt="Icon"
                    src="/figmaAssets/i-496.svg"
                  />
                  <span className="text-base text-white">تواصل معي</span>
                </Button>
              </div>

              <div className="flex items-center justify-end gap-3 pt-6">
                {socialIcons.map((icon, index) => (
                  <img
                    key={index}
                    className="w-10 h-10 cursor-pointer"
                    alt="Social"
                    src={icon}
                  />
                ))}
                <span className="text-sm text-[#94a2b8] [font-family:'Almarai',Helvetica] [direction:rtl]">
                  تابعني:
                </span>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-100 pt-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img
                  className="w-8 h-8"
                  alt="Arrow"
                  src="/figmaAssets/div-198.svg"
                />
                <span className="text-sm text-[#94a2b8] [font-family:'Almarai',Helvetica] [direction:rtl]">
                  اكتشف المزيد
                </span>
              </div>

              <div className="flex items-center gap-6">
                {companies.map((company, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <span className="text-sm text-[#94a2b8] [font-family:'Almarai',Helvetica]">
                      {company.name}
                    </span>
                    <img
                      className="w-[18.02px] h-7"
                      alt="Icon"
                      src={company.icon}
                    />
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center">
                  {clientAvatars.map((avatar, index) => (
                    <Avatar
                      key={index}
                      className={`w-10 h-10 border-2 border-white ${index > 0 ? "-ml-2" : ""}`}
                    >
                      <AvatarImage src={avatar} alt="Client" />
                    </Avatar>
                  ))}
                  <div className="flex items-center justify-center w-10 h-10 -ml-2 bg-[#362a9b] rounded-full border-2 border-white">
                    <span className="text-xs font-bold text-white [font-family:'Almarai',Helvetica]">
                      +196
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-end">
                <span className="text-base text-[#1d293b] [font-family:'Almarai',Helvetica] [direction:rtl]">
                  +200 عميل سعيد
                </span>
                <span className="text-sm text-[#94a2b8] [font-family:'Almarai',Helvetica] [direction:rtl]">
                  يثقون بخدماتنا
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Card className="absolute top-[60px] left-[402px] w-[113px] bg-white rounded-2xl border-slate-100 shadow-[0px_20px_25px_-5px_#e2e7f080,0px_8px_10px_-6px_#e2e7f080] overflow-hidden">
        <CardContent className="p-[13px]">
          <div className="flex items-center justify-end gap-2">
            <div className="flex flex-col items-end">
              <span className="text-xs text-[#94a2b8] [font-family:'Almarai',Helvetica] [direction:rtl]">
                قائد
              </span>
              <span className="text-sm font-bold text-[#1d293b] [font-family:'Almarai',Helvetica] [direction:rtl]">
                معتمد
              </span>
            </div>
            <img
              className="w-10 h-10"
              alt="Badge"
              src="/figmaAssets/div-1167.svg"
            />
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
