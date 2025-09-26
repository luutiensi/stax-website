export default function Header() {
  return (
    <header className="flex justify-between items-center px-8 py-4 shadow">
      <h1 className="text-xl font-bold text-blue-600">STAX</h1>
      <nav className="space-x-6">
        <a href="/" className="hover:text-blue-600">Trang chủ</a>
        <a href="#about" className="hover:text-blue-600">Giới thiệu</a>
        <a href="#services" className="hover:text-blue-600">Dịch vụ</a>
        <a href="#contact" className="hover:text-blue-600">Liên hệ</a>
      </nav>
    </header>
  );
}
