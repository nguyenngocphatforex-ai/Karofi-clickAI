import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

export default function Specs() {
  return (
    <section id="specs" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-4">Thông số kỹ thuật</h2>
          <p className="text-lg text-muted-foreground">Chi tiết về cấu tạo và khả năng vận hành của Karofi Platinum S6.</p>
        </div>

        <Tabs defaultValue="general" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="general">Thông số chung</TabsTrigger>
            <TabsTrigger value="filtration">Hệ thống lọc</TabsTrigger>
          </TabsList>
          
          <TabsContent value="general" className="border rounded-2xl overflow-hidden shadow-sm">
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell className="font-bold bg-slate-50 w-1/3">Model</TableCell>
                  <TableCell>Platinum S6 (KAD-S6)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-bold bg-slate-50">Số lõi lọc</TableCell>
                  <TableCell>10 lõi</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-bold bg-slate-50">Công suất lọc</TableCell>
                  <TableCell>20 Lít/giờ</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-bold bg-slate-50">Chế độ nước</TableCell>
                  <TableCell>Nóng - Lạnh - Nguội</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-bold bg-slate-50">Dung tích bình nóng</TableCell>
                  <TableCell>1 Lít</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-bold bg-slate-50">Dung tích bình lạnh</TableCell>
                  <TableCell>0.8 Lít</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-bold bg-slate-50">Kích thước (RxSxC)</TableCell>
                  <TableCell>310 x 380 x 960 (mm)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-bold bg-slate-50">Khối lượng</TableCell>
                  <TableCell>30 kg</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TabsContent>

          <TabsContent value="filtration" className="border rounded-2xl overflow-hidden shadow-sm">
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell className="font-bold bg-slate-50 w-1/3">Màng lọc</TableCell>
                  <TableCell>RO Purifim 100 GPD (Mỹ)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-bold bg-slate-50">Lõi lọc thô</TableCell>
                  <TableCell>Smax Pro 1, 2, 3</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-bold bg-slate-50">Lõi chức năng</TableCell>
                  <TableCell>Mineral, T33-GAC, Far Infrared, Tourmaline, Hydrogen, Nano Silver</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-bold bg-slate-50">Công nghệ thông minh</TableCell>
                  <TableCell>AioTec (Wifi Connection)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-bold bg-slate-50">Hiển thị</TableCell>
                  <TableCell>Màn hình LED hiển thị TDS và trạng thái máy</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
