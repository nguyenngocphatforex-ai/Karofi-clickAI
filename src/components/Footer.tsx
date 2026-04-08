import { Droplets, Facebook, Youtube, Instagram, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-50 pt-20 pb-10 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-primary p-1.5 rounded-lg">
                <Droplets className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-primary">KAROFI</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Chuyên gia lọc nước thông minh hàng đầu Việt Nam. Mang lại nguồn nước tinh khiết và sức khỏe cho mọi gia đình.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Sản phẩm</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Máy lọc nước RO</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Máy lọc nước Nóng Lạnh</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Máy lọc nước Hydrogen</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Linh phụ kiện</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Hỗ trợ khách hàng</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Chính sách bảo hành</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Hướng dẫn sử dụng</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Hệ thống đại lý</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Liên hệ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Liên hệ</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Tòa nhà Hudtower, số 37 Lê Văn Lương, Thanh Xuân, Hà Nội</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span>1900 6418</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span>info@karofi.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2024 Karofi Việt Nam. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  );
}
