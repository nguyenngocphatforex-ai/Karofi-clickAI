import { Card, CardContent } from "@/components/ui/card";
import { motion } from "motion/react";
import { Thermometer, Snowflake, Droplet, Zap, ShieldCheck, HeartPulse } from "lucide-react";

const features = [
  {
    title: "Nước Nóng Nhanh",
    description: "Nhiệt độ lên đến 95°C, pha trà, cafe, mì tôm chỉ trong tích tắc.",
    icon: Thermometer,
    color: "text-orange-500",
    bg: "bg-orange-50"
  },
  {
    title: "Nước Lạnh Sâu",
    description: "Công nghệ làm lạnh Block cho nước lạnh sâu, sảng khoái tức thì.",
    icon: Snowflake,
    color: "text-blue-500",
    bg: "bg-blue-50"
  },
  {
    title: "Nước Tinh Khiết",
    description: "Hệ thống 10 lõi lọc Smax loại bỏ 99.99% tạp chất, vi khuẩn.",
    icon: Droplet,
    color: "text-primary",
    bg: "bg-primary/5"
  },
  {
    title: "Tiết Kiệm Điện",
    description: "Công nghệ bảo ôn đa lớp giúp giữ nhiệt lâu, giảm thiểu điện năng.",
    icon: Zap,
    color: "text-yellow-500",
    bg: "bg-yellow-50"
  },
  {
    title: "Bảo Vệ Toàn Diện",
    description: "Cảm biến chống tràn, chống cạn, bảo vệ máy và người dùng.",
    icon: ShieldCheck,
    color: "text-green-500",
    bg: "bg-green-50"
  },
  {
    title: "Giàu Hydrogen",
    description: "Tăng cường khoáng chất, Hydrogen giúp chống lão hóa, tốt cho sức khỏe.",
    icon: HeartPulse,
    color: "text-rose-500",
    bg: "bg-rose-50"
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-4">Tính năng vượt trội</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Karofi Platinum S6 không chỉ là máy lọc nước, mà là giải pháp chăm sóc sức khỏe toàn diện cho gia đình bạn.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full border-none shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-8">
                  <div className={`w-14 h-14 rounded-2xl ${feature.bg} flex items-center justify-center mb-6`}>
                    <feature.icon className={`w-8 h-8 ${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
