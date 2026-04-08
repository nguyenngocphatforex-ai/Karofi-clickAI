import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { Droplets } from "lucide-react";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-bottom border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="bg-primary p-1.5 rounded-lg">
              <Droplets className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold tracking-tight text-primary">KAROFI</span>
            <span className="hidden sm:inline-block text-xs font-medium bg-secondary px-2 py-0.5 rounded text-secondary-foreground">PLATINUM S6</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">Tính năng</a>
            <a href="#aiotec" className="text-sm font-medium hover:text-primary transition-colors">AioTec</a>
            <a href="#filtration" className="text-sm font-medium hover:text-primary transition-colors">Lọc Smax</a>
            <a href="#specs" className="text-sm font-medium hover:text-primary transition-colors">Thông số</a>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="outline" className="hidden sm:flex">Liên hệ</Button>
            <Button>Mua ngay</Button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
