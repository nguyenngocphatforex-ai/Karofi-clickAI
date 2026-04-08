/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import AioTec from "./components/AioTec";
import Filtration from "./components/Filtration";
import Specs from "./components/Specs";
import Footer from "./components/Footer";
import CheckoutModal from "./components/CheckoutModal";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function App() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background font-sans antialiased selection:bg-primary/10 selection:text-primary">
      <Navbar />
      
      <main>
        <Hero onBuyNow={() => setIsCheckoutOpen(true)} />
        
        <Features />
        
        <AioTec />
        
        <Filtration />
        
        <Specs />

        {/* Final CTA Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary -z-10" />
          <div className="absolute inset-0 opacity-20 -z-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]" />
          </div>
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl lg:text-6xl font-bold tracking-tight mb-8">
                Sẵn sàng nâng tầm <br /> chất lượng sống?
              </h2>
              <p className="text-xl text-primary-foreground/80 mb-12 max-w-2xl mx-auto">
                Sở hữu ngay Karofi Platinum S6 để tận hưởng nguồn nước tinh khiết, an toàn và thông minh bậc nhất hiện nay.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  variant="secondary" 
                  className="h-16 px-10 text-xl font-bold gap-2"
                  onClick={() => setIsCheckoutOpen(true)}
                >
                  Mua ngay bây giờ <ArrowRight className="w-6 h-6" />
                </Button>
                <Button size="lg" variant="outline" className="h-16 px-10 text-xl font-bold border-white text-white hover:bg-white hover:text-primary">
                  Tư vấn miễn phí
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
      
      <CheckoutModal 
        isOpen={isCheckoutOpen} 
        onClose={() => setIsCheckoutOpen(false)} 
      />
    </div>
  );
}

