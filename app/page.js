export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-blue-600 text-white text-center py-20">
        <h1 className="text-4xl font-bold">
          Chào mừng đến với STAX 🚀
        </h1>
        <p className="mt-4 text-lg">
          Giải pháp kế toán & thuế toàn diện cho doanh nghiệp
        </p>
      </section>

      {/* Why choose STAX */}
      <section id="about" className="text-center py-16">
        <h2 className="text-2xl font-bold mb-4">Tại sao chọn STAX?</h2>
        <p className="max-w-2xl mx-auto text-gray-600">
          Chúng tôi mang đến dịch vụ kế toán chuyên nghiệp, minh bạch và tiết kiệm chi phí.
        </p>
      </section>

      {/* Services */}
      <section id="services" className="bg-gray-50 py-16">
        <h2 className="text-2xl font-bold text-center mb-10">Dịch vụ của STAX</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-6">
          <div className="bg-white shadow rounded-xl p-6 text-center">
            <h3 className="font-bold mb-2">Dịch vụ kế toán</h3>
            <p className="text-gray-600">Cung cấp dịch vụ kế toán trọn gói, đảm bảo chính xác và minh bạch.</p>
          </div>
          <div className="bg-white shadow rounded-xl p-6 text-center">
            <h3 className="font-bold mb-2">Báo cáo thuế</h3>
            <p className="text-gray-600">Hỗ trợ kê khai và lập báo cáo thuế định kỳ đúng hạn.</p>
          </div>
          <div className="bg-white shadow rounded-xl p-6 text-center">
            <h3 className="font-bold mb-2">Thành lập doanh nghiệp</h3>
            <p className="text-gray-600">Tư vấn và thực hiện thủ tục pháp lý thành lập công ty nhanh chóng.</p>
          </div>
          <div className="bg-white shadow rounded-xl p-6 text-center">
            <h3 className="font-bold mb-2">Tư vấn thuế</h3>
            <p className="text-gray-600">Đưa ra giải pháp tối ưu về thuế, giúp doanh nghiệp tiết kiệm chi phí.</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="text-center py-16">
        <h2 className="text-2xl font-bold mb-4">Liên hệ</h2>
        <p className="text-gray-600">Liên hệ với chúng tôi để được tư vấn chi tiết.</p>
      </section>
    </main>
  );
}
