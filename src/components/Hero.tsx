import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function Hero({ onBuyNow }: { onBuyNow: () => void }) {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-400 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Sản phẩm cao cấp 2024
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
              Karofi Platinum S6 <br />
              <span className="text-primary">Đẳng cấp nước sạch</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
              Sự kết hợp hoàn hảo giữa công nghệ lọc Smax mạnh mẽ, tính năng thông minh AioTec và thiết kế Platinum sang trọng.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Button size="lg" className="h-14 px-8 text-lg gap-2" onClick={onBuyNow}>
                Mua ngay <ArrowRight className="w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-8 text-lg">
                Xem video giới thiệu
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                "10 lõi lọc Smax hiệu năng cao",
                "Công nghệ AioTec thông minh",
                "3 chế độ: Nóng - Lạnh - Nguội",
                "Bảo hành lên đến 36 tháng"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm font-medium">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-slate-100 to-white shadow-2xl border border-border flex items-center justify-center p-8">
              <img 
                src="https://karofi.karofi.com/karofi-com/2026/01/karofi-platinum-s6-1.png" 
                alt="Karofi Platinum S6"
                className="max-h-full object-contain drop-shadow-2xl"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.src = "https://picsum.photos/seed/karofi-s6/800/800";
                }}
              />
            </div>
            
            {/* Floating stats */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-border z-20 hidden sm:block"
            >
              <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-1">Độ tinh khiết</div>
              <div className="text-2xl font-bold text-primary">99.9%</div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-border z-20 hidden sm:block"
            >
              <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider mb-1">Chế độ nước</div>
              <div className="text-2xl font-bold text-blue-500">3 TRONG 1</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
