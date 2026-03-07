import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "تعلمت منه الكثير عن القيادة والابتكار، إنه ملهم حقيقي",
    name: "خالد العمري",
    title: "رائد أعمال",
    avatar: "/figmaAssets/div-889.svg",
  },
  {
    quote:
      "رؤيته الاستراتيجية وقدرته على التنفيذ جعلت منه شريكا مثاليا لنمو أعمالنا",
    name: "سارة المنصور",
    title: "مديرة تسويق",
    avatar: "/figmaAssets/div-889.svg",
  },
  {
    quote:
      "محمود قائد استثنائي، ساعدني في تحويل فكرتي إلى شركة ناجحة خلال عام واحد فقط",
    name: "أحمد الخالدي",
    title: "مؤسس شركة تقنية",
    avatar: "/figmaAssets/div-889.svg",
  },
];

export const TestimonialsSection = (): JSX.Element => {
  return (
    <section
      className="w-full py-12 md:py-16 lg:py-24 flex justify-center"
      dir="rtl"
    >
      <div className="container max-w-7xl px-6">
        <div className="flex flex-col items-center gap-16">
          <div className="flex flex-col items-center gap-4 text-center max-w-4xl">
            <Badge className="bg-[#F4F5F4] text-[#1D3E4B] hover:bg-[#F4F5F4] h-auto px-4 py-2 gap-2 rounded-full">
              <img
                className="w-4 h-6"
                alt="Icon"
                src="/figmaAssets/i-823.svg"
              />
              <span className="text-sm font-normal [font-family:'Tajawal',sans-serif]">
                آراء الشركاء
              </span>
            </Badge>

            <h2 className="text-4xl font-bold text-[#1D3E4B] [font-family:'Tajawal',sans-serif]">
              ماذا يقولون عني
            </h2>

            <p className="text-base font-normal text-[#8B939A] max-w-lg [font-family:'Tajawal',sans-serif]">
              شهادات من شركاء وعملاء عملت معهم على مدار السنوات
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-white rounded-3xl border border-slate-100"
              >
                <CardContent className="p-8 flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <img
                      className="w-fit h-auto"
                      alt="Quote start"
                      src="/figmaAssets/margin-wrap-16.svg"
                    />
                    <img
                      className="w-fit h-auto"
                      alt="Quote end"
                      src="/figmaAssets/margin-wrap-19.svg"
                    />
                  </div>

                  <p className="text-base font-normal text-slate-600 leading-[26px] line-clamp-2 [font-family:'Tajawal',sans-serif]">
                    "{testimonial.quote}"
                  </p>

                  <div className="flex items-center justify-end gap-4 pt-6 border-t border-slate-100">
                    <div className="flex flex-col items-end gap-1">
                      <p className="text-base font-normal text-[#1D3E4B] [font-family:'Tajawal',sans-serif]">
                        {testimonial.name}
                      </p>
                      <p className="text-sm font-normal text-[#8B939A] [font-family:'Tajawal',sans-serif]">
                        {testimonial.title}
                      </p>
                    </div>
                    <img
                      className="w-12 h-12 rounded-full"
                      alt={testimonial.name}
                      src={testimonial.avatar}
                    />
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




