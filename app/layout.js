import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "STAX",
  description: "Giải pháp kế toán & thuế cho doanh nghiệp",
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
