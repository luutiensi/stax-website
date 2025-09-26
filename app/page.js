import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />

      {/* Hero */}
      <section className="bg-blue-600 text-white text-center py-20">
        <h1 className="text-4xl font-bold mb-4">
          Chào mừng đến với STAX 🚀
        </h1>
        <p className="text-lg">
          Giải pháp kế toán & thuế toàn diện cho doanh nghiệp
        </p>
      </section>

      {/* Why Choose Us */}
      <section id="about" className="py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Tại sao chọn STAX?</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Chúng tôi mang đến dịch vụ kế toán chuyên nghiệp, minh bạch và tiết kiệm chi phí.
        </p>
      </section>

      {/* Services */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-10">Dịch vụ của STAX</h2>
          <div className="grid md:grid-cols-4 gap-6 px-6">
            <div className="bg-white p-6 shadow rounded-xl">
              <h3 className="font-semibold mb-2">Dịch vụ kế toán</h3>
              <p className="text-gray-600 text-sm">
                Cung cấp dịch vụ kế toán trọn gói, đảm bảo chính xác và minh bạch.
              </p>
            </div>
            <div className="bg-white p-6 shadow rounded-xl">
              <h3 className="font-semibold mb-2">Báo cáo thuế</h3>
              <p className="text-gray-600 text-sm">
                Hỗ trợ kê khai và lập báo cáo thuế định kỳ đúng hạn.
              </p>
            </div>
            <div className="bg-white p-6 shadow rounded-xl">
              <h3 className="font-semibold mb-2">Thành lập doanh nghiệp</h3>
              <p className="text-gray-600 text-sm">
                Tư vấn và thực hiện thủ tục pháp lý nhanh chóng.
              </p>
            </div>
            <div className="bg-white p-6 shadow rounded-xl">
              <h3 className="font-semibold mb-2">Tư vấn thuế</h3>
              <p className="text-gray-600 text-sm">
                Đưa ra giải pháp tối ưu về thuế, giúp tiết kiệm chi phí.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
