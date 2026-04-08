import { motion } from "motion/react";
import { Smartphone, Bell, Activity, Wifi } from "lucide-react";

export default function AioTec() {
  return (
    <section id="aiotec" className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-slate-900 aspect-[9/16] max-w-[320px] mx-auto">
              <img 
                src="https://karofi.com/images/products/aiotec-app.jpg" 
                alt="Karofi AioTec App"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.src = "https://picsum.photos/seed/aiotec/400/800";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <Wifi className="w-4 h-4 text-green-400" />
                  <span className="text-xs font-medium uppercase tracking-widest">Connected</span>
                </div>
                <h4 className="text-xl font-bold">Karofi 360 App</h4>
                <p className="text-sm opacity-80">Kiểm soát mọi lúc, mọi nơi</p>
              </div>
            </div>
            
            {/* Decorative circles */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-primary/20 rounded-full -z-10 animate-pulse" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-primary/10 rounded-full -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Công nghệ <span className="text-primary">AioTec</span> <br />
              Thông minh vượt giới hạn
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Lần đầu tiên, chiếc máy lọc nước của bạn có thể "nói chuyện" với điện thoại. Với công nghệ AioTec, bạn hoàn toàn yên tâm về chất lượng nước mỗi ngày.
            </p>

            <div className="space-y-8">
              {[
                {
                  title: "Kiểm tra độ sạch của nước (TDS)",
                  description: "Theo dõi chỉ số tinh khiết của nước ngay trên màn hình điện thoại theo thời gian thực.",
                  icon: Activity
                },
                {
                  title: "Cảnh báo thay lõi lọc",
                  description: "Tự động thông báo khi đến hạn thay lõi, giúp máy luôn hoạt động ở hiệu suất cao nhất.",
                  icon: Bell
                },
                {
                  title: "Quản lý tình trạng máy",
                  description: "Cảnh báo rò rỉ nước, lỗi vận hành giúp bạn xử lý kịp thời các sự cố.",
                  icon: Smartphone
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
