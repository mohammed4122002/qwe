import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { CSSProperties } from "react";

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

const LINKEDIN_URL = "https://linkedin.com/in/mahmoudalaghawani";
const X_URL = "https://x.com/Mahmoud_Aghawni";

const socialLinks = [
  { icon: "/figmaAssets/a-184.svg", alt: "LinkedIn", href: LINKEDIN_URL },
  { icon: "/figmaAssets/a-181.svg", alt: "X", href: X_URL },
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

const fadeDelay = (delay: number): CSSProperties =>
  ({ "--animation-delay": `${delay}s` }) as CSSProperties;

const scrollToSection = (targetId: string): void => {
  const element = document.getElementById(targetId);
  if (!element) return;
  element.scrollIntoView({ behavior: "smooth", block: "start" });
};

export const HeroProfileSection = (): JSX.Element => {
  return (
    <section id="home" className="relative w-full py-0">
      <div className="container mx-auto px-20 max-w-screen-xl">
        <div className="relative w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[272px_1fr_485px] gap-8 items-start py-[74px]">
            <aside
              className="flex flex-col gap-4 animate-fade-up opacity-0 order-3 lg:order-1"
              style={fadeDelay(0.1)}
            >
              {statsCards.map((stat, index) => (
                <Card
                  key={index}
                  className="bg-white rounded-2xl border-slate-100 shadow-[0px_1px_2px_#10161F0d]"
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
                          <span className="text-sm text-[#8B939A] [font-family:'Tajawal',sans-serif] [direction:rtl]">
                            {stat.label}
                          </span>
                          <span className="text-2xl text-[#1D3E4B] [font-family:'Tajawal',sans-serif]">
                            {stat.value}
                          </span>
                        </div>
                        <span className="text-xs text-[#8B939A] [font-family:'Tajawal',sans-serif] [direction:rtl]">
                          {stat.description}
                        </span>
                      </div>
                      <img className="w-12 h-12" alt="Icon" src={stat.icon} />
                    </div>
                  </CardContent>
                </Card>
              ))}

              <Card className="rounded-2xl border-[#8B939A] bg-[linear-gradient(168deg,rgba(244,245,244,1)_0%,rgba(139,147,154,0.22)_100%)]">
                <CardContent className="p-[17px] space-y-3">
                  <div className="flex items-center justify-end gap-3">
                    <div className="flex flex-col items-end">
                      <span className="text-sm text-[#1D3E4B] [font-family:'Tajawal',sans-serif] [direction:rtl]">
                        استشارة مجانية
                      </span>
                      <span className="text-xs text-[#1D3E4B] [font-family:'Tajawal',sans-serif] [direction:rtl]">
                        احجز موعدك الآن
                      </span>
                    </div>
                    <img
                      className="w-10 h-10"
                      alt="Calendar"
                      src="/figmaAssets/div-114.svg"
                    />
                  </div>
                  <Button
                    type="button"
                    onClick={() => scrollToSection("contact")}
                    className="w-full h-10 bg-[#1D3E4B] hover:bg-[#1D3E4B]/90 text-white rounded-xl [font-family:'Tajawal',sans-serif] [direction:rtl]"
                  >
                    احجز الآن
                  </Button>
                </CardContent>
              </Card>
            </aside>

            <div
              className="relative flex justify-center items-start animate-fade-up opacity-0 order-1 lg:order-2"
              style={fadeDelay(0.2)}
            >
              <div className="relative">
                <div className="hero-orbit-shell hero-orbit-ring hero-orbit-ring-main" />
                <div className="hero-orbit-shell hero-orbit-ring hero-orbit-ring-alt" />
                <div className="hero-orbit-shell hero-orbit-dots hero-orbit-dots-slow">
                  <span className="hero-orbit-dot hero-orbit-dot-a" />
                  <span className="hero-orbit-dot hero-orbit-dot-b" />
                </div>

                <img
                  className="relative z-10 w-[426px] h-[561px]"
                  alt="Profile"
                  src="/figmaAssets/div-125.svg"
                />
                <Badge className="absolute z-20 top-[18px] right-[-128px] h-[42px] px-[21px] py-[11px] bg-[#F4F5F4] border-[#F4F5F4] rounded-full flex items-center gap-3 [font-family:'Tajawal',sans-serif]">
                  <div className="w-2 h-2 bg-[#315C67] rounded-full" />
                  <span className="text-sm text-[#1D3E4B] [direction:rtl]">
                    قائد أعمال معتمد دوليا
                  </span>
                  <img
                    className="w-[76px] h-4"
                    alt="Badge"
                    src="/figmaAssets/div-17.svg"
                  />
                </Badge>
              </div>

              <Card className="absolute z-20 top-[296px] right-[-30px] w-[150px] bg-white rounded-2xl border-slate-100 shadow-[0px_20px_25px_-5px_#F4F5F480,0px_8px_10px_-6px_#F4F5F480] overflow-hidden">
                <CardContent className="p-[6px]">
                  <div className="flex items-center justify-end gap-3">
                    <div className="flex flex-col items-end">
                      <span className="text-2xl text-[#1D3E4B] [font-family:'Tajawal',sans-serif]">
                        20+
                      </span>
                      <span className="text-xs text-[#8B939A] [font-family:'Tajawal',sans-serif] [direction:rtl]">
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
              <Card
                className="absolute top-[130px] left-[5px] w-[113px] z-40 bg-white rounded-2xl border-slate-100 shadow-[0px_20px_25px_-5px_#F4F5F480,0px_8px_10px_-6px_#F4F5F480] overflow-hidden animate-fade-up opacity-0"
                style={fadeDelay(0.24)}
              >
                <CardContent className="p-[6px]">
                  <div className="flex items-center justify-end gap-2">
                    <div className="flex flex-col items-end">
                      <span className="text-xs text-[#8B939A] [font-family:'Tajawal',sans-serif] [direction:rtl]">
                        قائد
                      </span>
                      <span className="text-sm font-bold text-[#1D3E4B] [font-family:'Tajawal',sans-serif] [direction:rtl]">
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
            </div>

            <div
              className="flex flex-col items-end gap-12 animate-fade-up opacity-0 order-2 lg:order-3"
              style={fadeDelay(0.28)}
            >
              <Badge className="h-[42px] px-[17px] py-[9px] bg-[#F4F5F4] border-[#8B939A] rounded-full [font-family:'Tajawal',sans-serif]">
                <span className="text-sm text-[#1D3E4B] [direction:rtl]">
                  المؤسس والرئيس التنفيذي
                </span>
                <img
                  className="w-4 h-6 mr-2"
                  alt="Icon"
                  src="/figmaAssets/i-147.svg"
                />
              </Badge>

              <div className=" ">
                <h1 className="text-4xl lg:text-7xl leading-[72px] text-[#1D3E4B] [font-family:'Tajawal',sans-serif] [direction:rtl] ">
                  محمود الأغواني
                </h1>
              </div>

              <p className=" max-w-md text-xl leading-[32.5px] text-[#8B939A] [font-family:'Tajawal',sans-serif] [direction:rtl] text-right">
                قائد رقمي يحول الأفكار إلى إمبراطوريات ناجحة عبر الابتكار
                والرؤية الاستراتيجية
              </p>
              <div className="flex flex-wrap items-start justify-end gap-3">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => scrollToSection("about")}
                  className="h-[52px] min-w-[176px] px-6 bg-[#F4F5F4] border-[#F4F5F4] text-[#1D3E4B] rounded-xl shadow-[inset_0_1px_0_rgba(244,245,244,0.9),0_2px_8px_-5px_rgba(29,62,75,0.24)] hover:bg-[#F4F5F4] hover:border-[#F4F5F4] hover:text-[#1D3E4B] before:hidden after:hidden [font-family:'Tajawal',sans-serif] [direction:rtl]"
                >
                  <span className="text-base font-medium">اكتشف قصتي</span>
                </Button>

                <Button
                  type="button"
                  onClick={() => scrollToSection("contact")}
                  className="h-[52px] min-w-[176px] px-6 py-2.5 bg-[#315C67] rounded-xl overflow-hidden shadow-[0px_10px_15px_-3px_#1D3E4B40,0px_4px_6px_-4px_#1D3E4B40] hover:bg-[#315C67]/90 relative"
                >
                  <div className="absolute top-0 left-[-141px]  h-10 bg-[linear-gradient(90deg,rgba(16,22,31,0)_0%,rgba(244,245,244,0.2)_50%,rgba(16,22,31,0)_100%)]" />
                  <div className="flex items-center justify-end gap-2">
                    <img
                      className="w-[14.02px] h-5"
                      alt="Contact icon"
                      src="/figmaAssets/i-496.svg"
                    />
                    <span className="[font-family:'Tajawal',sans-serif] font-normal text-white text-sm tracking-[0] leading-5 whitespace-nowrap [direction:rtl]">
                      تواصل معي
                    </span>
                  </div>
                </Button>
              </div>

              <div className="flex items-center justify-end gap-3 pt-6">
                {socialLinks.map((socialLink, index) => (
                  <a
                    key={index}
                    href={socialLink.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={socialLink.alt}
                    className="w-10 h-10 inline-flex transition-transform hover:scale-105"
                  >
                    <img
                      className="w-10 h-10 cursor-pointer"
                      alt={socialLink.alt}
                      src={socialLink.icon}
                    />
                  </a>
                ))}
                <span className="text-sm text-[#8B939A] [font-family:'Tajawal',sans-serif] [direction:rtl]">
                  تابعني:
                </span>
              </div>
            </div>
          </div>

          <div
            className="border-t border-slate-100 pt-5 mb-40 animate-fade-up opacity-0"
            style={fadeDelay(0.35)}
          >
            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={() => scrollToSection("achievements")}
                className="flex items-center gap-2"
              >
                <img
                  className="w-8 h-8"
                  alt="Arrow"
                  src="/figmaAssets/div-198.svg"
                />
                <span className="text-sm text-[#8B939A] [font-family:'Tajawal',sans-serif] [direction:rtl]">
                  اكتشف المزيد
                </span>
              </button>

              <div className="flex items-center gap-6">
                {companies.map((company, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => scrollToSection("companies")}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <span className="text-sm text-[#8B939A] [font-family:'Tajawal',sans-serif]">
                      {company.name}
                    </span>
                    <img
                      className="w-[18.02px] h-7"
                      alt="Icon"
                      src={company.icon}
                    />
                  </button>
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
                  <div className="flex items-center justify-center w-10 h-10 -ml-2 bg-[#1D3E4B] rounded-full border-2 border-white">
                    <span className="text-xs font-bold text-white [font-family:'Tajawal',sans-serif]">
                      +196
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-end">
                <span className="text-base text-[#1D3E4B] [font-family:'Tajawal',sans-serif] [direction:rtl]">
                  +200 عميل سعيد
                </span>
                <span className="text-sm text-[#8B939A] [font-family:'Tajawal',sans-serif] [direction:rtl]">
                  يثقون بخدماتنا
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
