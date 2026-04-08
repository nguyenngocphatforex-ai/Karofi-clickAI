import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle2, CreditCard } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CheckoutModal({ isOpen, onClose }: CheckoutModalProps) {
  const [step, setStep] = useState<"form" | "payment" | "success">("form");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("payment");
  };

  const handlePayment = async () => {
    setIsSubmitting(true);
    const scriptUrl = "https://script.google.com/macros/s/AKfycbyZSJ94JPjU5nsDkCAfohz3O2xKiVC1gYyo_uhN2U9-CKOukr_V4odRTKn8qyW1zyeKjA/exec";

    try {
      // We use no-cors because Google Apps Script redirects can cause CORS issues in some environments
      await fetch(scriptUrl, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
    } catch (error) {
      console.error("Error sending data to Google Sheets:", error);
    }

    setIsSubmitting(false);
    setStep("success");
  };

  const resetAndClose = () => {
    onClose();
    setTimeout(() => {
      setStep("form");
      setFormData({ name: "", email: "", phone: "", address: "" });
    }, 300);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && resetAndClose()}>
      <DialogContent className="sm:max-w-[425px] overflow-hidden">
        <AnimatePresence mode="wait">
          {step === "form" && (
            <motion.div
              key="form"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold">Thông tin đặt hàng</DialogTitle>
                <DialogDescription>
                  Vui lòng điền thông tin để chúng tôi liên hệ giao hàng.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmitForm} className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Họ và tên</Label>
                  <Input
                    id="name"
                    placeholder="Nguyễn Văn A"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="example@gmail.com"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Số điện thoại</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="09xx xxx xxx"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Địa chỉ đặt hàng</Label>
                  <Input
                    id="address"
                    placeholder="Số nhà, tên đường, quận/huyện..."
                    required
                    value={formData.address}
                    onChange={handleInputChange}
                  />
                </div>
                <DialogFooter className="pt-4">
                  <Button type="submit" className="w-full h-12 text-lg">
                    Tiếp theo
                  </Button>
                </DialogFooter>
              </form>
            </motion.div>
          )}

          {step === "payment" && (
            <motion.div
              key="payment"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="py-4"
            >
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold">Thanh toán</DialogTitle>
                <DialogDescription>
                  Xác nhận đơn hàng và phương thức thanh toán.
                </DialogDescription>
              </DialogHeader>
              
              <div className="my-6 p-4 rounded-xl bg-slate-50 border border-border space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Sản phẩm:</span>
                  <span className="font-medium">Karofi Platinum S6</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Số lượng:</span>
                  <span className="font-medium">01</span>
                </div>
                <div className="pt-3 border-t flex justify-between items-center">
                  <span className="text-lg font-bold">Tổng cộng:</span>
                  <span className="text-2xl font-bold text-primary">21.990.000 VNĐ</span>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <Label>Phương thức thanh toán</Label>
                <div className="grid grid-cols-1 gap-3">
                  <div className="flex items-center gap-3 p-4 rounded-lg border-2 border-primary bg-primary/5 cursor-pointer">
                    <CreditCard className="w-6 h-6 text-primary" />
                    <div className="flex-1">
                      <div className="font-bold">Thanh toán khi nhận hàng (COD)</div>
                      <div className="text-xs text-muted-foreground">Kiểm tra hàng trước khi thanh toán</div>
                    </div>
                  </div>
                </div>
              </div>

              <DialogFooter>
                <Button 
                  onClick={handlePayment} 
                  className="w-full h-12 text-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Đang xử lý..." : "Xác nhận đặt hàng"}
                </Button>
              </DialogFooter>
            </motion.div>
          )}

          {step === "success" && (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-12 text-center"
            >
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-12 h-12 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Đặt hàng thành công!</h3>
              <p className="text-muted-foreground mb-8">
                Cảm ơn <strong>{formData.name}</strong>. Chúng tôi sẽ liên hệ với bạn qua số điện thoại <strong>{formData.phone}</strong> trong thời gian sớm nhất.
              </p>
              <Button onClick={resetAndClose} variant="outline" className="w-full">
                Đóng
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
}
