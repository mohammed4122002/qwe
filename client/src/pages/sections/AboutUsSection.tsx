import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { type CSSProperties, useEffect, useRef, useState } from "react";

type ExpertiseItem = {
  description: string;
  icon: string;
  percentage: number;
  title: string;
};

const expertiseData: ExpertiseItem[] = [
  {
    percentage: 96,
    icon: "/figmaAssets/margin-wrap-33.svg",
    title: "النمو المستدام",
    description: "استراتيجيات نمو مدروسة",
  },
  {
    percentage: 92,
    icon: "/figmaAssets/margin-wrap-37.svg",
    title: "التحول الرقمي",
    description: "تحويل الأعمال إلى نماذج رقمية",
  },
  {
    percentage: 95,
    icon: "/figmaAssets/margin-wrap-1.svg",
    title: "قيادة الفرق",
    description: "إدارة فرق متعددة التخصصات",
  },
  {
    percentage: 98,
    icon: "/figmaAssets/margin-wrap-11.svg",
    title: "الرؤية الاستراتيجية",
    description: "بناء خطط نمو مستدامة",
  },
];

const toDelayStyle = (delay: number): CSSProperties =>
  ({ "--animation-delay": `${delay}s` }) as CSSProperties;

type AnimatedPercentageProps = {
  active: boolean;
  delay: number;
  target: number;
};

const AnimatedPercentage = ({
  active,
  delay,
  target,
}: AnimatedPercentageProps): JSX.Element => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;

    let rafId = 0;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setValue(target);
      return;
    }

    timeoutId = setTimeout(() => {
      const duration = 1350;
      let startTime: number | null = null;

      const animate = (timestamp: number): void => {
        if (startTime === null) startTime = timestamp;

        const progress = Math.min((timestamp - startTime) / duration, 1);
        const eased = 1 - (1 - progress) ** 4;
        setValue(Math.round(target * eased));

        if (progress < 1) {
          rafId = requestAnimationFrame(animate);
        }
      };

      rafId = requestAnimationFrame(animate);
    }, delay * 1000);

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [active, delay, target]);

  return (
    <span
      className={cn(
        "text-lg font-bold text-[#1D3E4B] leading-7 [font-family:'Tajawal',sans-serif]",
        active && "about-percent-value-active",
      )}
      style={toDelayStyle(delay)}
    >
      {value}%
    </span>
  );
};

export const AboutUsSection = (): JSX.Element => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const current = sectionRef.current;
    if (!current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.25,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    observer.observe(current);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full py-12">
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(244,245,244,1)_0%,rgba(49,92,103,0.14)_50%,rgba(244,245,244,1)_100%)]" />

      <div className="relative container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col items-center gap-16">
          <header
            className={cn(
              "flex flex-col items-center gap-6 text-center",
              isVisible
                ? "animate-fade-up opacity-0"
                : "opacity-0 translate-y-10 scale-95",
            )}
            style={toDelayStyle(0.06)}
          >
            <Badge className="h-auto bg-[#F4F5F4] text-[#1D3E4B] hover:bg-[#F4F5F4] px-4 py-2 rounded-full gap-2 [direction:rtl] [font-family:'Tajawal',sans-serif]">
              <span className="text-sm font-normal leading-5">الخبرات</span>
              <img
                className="w-[16.33px] h-6"
                alt="Icon"
                src="/figmaAssets/i-597.svg"
              />
            </Badge>

            <h2 className="text-4xl font-bold text-[#1D3E4B] leading-10 [direction:rtl] [font-family:'Tajawal',sans-serif]">
              مجالات التميز
            </h2>

            <p className="text-base font-normal text-[#8B939A] leading-6 max-w-lg [direction:rtl] [font-family:'Tajawal',sans-serif]">
              مهارات قيادية مكتسبة عبر سنوات من الخبرة والعمل
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {expertiseData.map((item, index) => (
              <Card
                key={index}
                className={cn(
                  "about-stat-card border-slate-100 rounded-3xl bg-white",
                  isVisible
                    ? "animate-fade-up opacity-0"
                    : "opacity-0 translate-y-14 scale-90",
                )}
                style={toDelayStyle(0.14 + index * 0.12)}
              >
                <CardContent className="flex flex-col items-center p-[33px] gap-6">
                  <div className="relative w-24 h-24">
                    <img
                      className={cn(
                        "absolute inset-0 w-[102px] h-[102px] -m-[3px]",
                        isVisible && "about-percent-ring-active",
                      )}
                      style={toDelayStyle(0.26 + index * 0.12)}
                      alt="Progress ring"
                      src="/figmaAssets/margin-wrap-5.svg"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <AnimatedPercentage
                        active={isVisible}
                        delay={0.33 + index * 0.12}
                        target={item.percentage}
                      />
                    </div>
                  </div>

                  <img
                    className="w-auto h-auto"
                    alt="Expertise icon"
                    src={item.icon}
                  />

                  <div className="flex flex-col items-center gap-2 text-center">
                    <h3 className="text-base font-normal text-[#1D3E4B] leading-6 [direction:rtl] [font-family:'Tajawal',sans-serif]">
                      {item.title}
                    </h3>
                    <p className="text-sm font-normal text-[#8B939A] leading-5 [direction:rtl] [font-family:'Tajawal',sans-serif]">
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
