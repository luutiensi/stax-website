import "./globals.css";

export const metadata = {
  title: "STAX Website",
  description: "Trang web chính thức của STAX",
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
