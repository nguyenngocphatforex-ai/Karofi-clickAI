import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";

export default function Filtration() {
  return (
    <section id="filtration" className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="text-primary border-primary mb-4 px-4 py-1 text-sm uppercase tracking-widest">Công nghệ độc quyền</Badge>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-4">Hệ thống lọc Smax 10 lõi</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Gấp đôi hiệu suất, gấp đôi tuổi thọ. Mang lại nguồn nước không chỉ sạch mà còn giàu dưỡng chất.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {[
            {
              title: "Smax Pro",
              label: "Lọc thô",
              description: "Công nghệ màng lọc vi sợi liên kết đa điểm giúp loại bỏ cặn bẩn, rỉ sét, rong rêu kích thước từ 1 micron.",
              image: "https://karofi.com/images/products/smax-pro.jpg"
            },
            {
              title: "Smax RO",
              label: "Trái tim của máy",
              description: "Màng RO Purifim sản xuất tại Mỹ, loại bỏ 99.99% vi khuẩn, virus, kim loại nặng và các chất độc hại.",
              image: "https://karofi.com/images/products/smax-ro.jpg"
            },
            {
              title: "Smax Nano",
              label: "Lọc chức năng",
              description: "Diệt khuẩn, khử mùi, bổ sung khoáng chất, Hydrogen và tạo vị ngọt tự nhiên cho nước.",
              image: "https://karofi.com/images/products/smax-nano.jpg"
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="group relative bg-slate-800/50 rounded-3xl p-8 border border-slate-700 hover:border-primary/50 transition-colors"
            >
              <div className="aspect-video rounded-2xl overflow-hidden mb-8 bg-slate-700">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src = `https://picsum.photos/seed/filter-${i}/400/225`;
                  }}
                />
              </div>
              <Badge className="mb-4 bg-primary/20 text-primary hover:bg-primary/20 border-none">{item.label}</Badge>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 p-8 lg:p-12 rounded-[3rem] bg-gradient-to-r from-primary/20 to-blue-600/20 border border-primary/30 text-center">
          <h3 className="text-2xl lg:text-3xl font-bold mb-6 italic">"Nước khỏe cho cả gia đình"</h3>
          <div className="flex flex-wrap justify-center gap-8 lg:gap-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-1">20L/h</div>
              <div className="text-sm text-slate-400 uppercase tracking-widest">Công suất lọc</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-1">71%</div>
              <div className="text-sm text-slate-400 uppercase tracking-widest">Tỷ lệ thu hồi nước tinh khiết</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-1">1.5 Năm</div>
              <div className="text-sm text-slate-400 uppercase tracking-widest">Tuổi thọ màng RO</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
