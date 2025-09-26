// Header.js
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          STAX
        </Link>

        {/* Menu */}
        <nav className="space-x-6">
          <Link href="/" className="hover:text-blue-600">Trang chủ</Link>
          <Link href="/about" className="hover:text-blue-600">Giới thiệu</Link>
          <Link href="/services" className="hover:text-blue-600">Dịch vụ</Link>
          <Link href="/contact" className="hover:text-blue-600">Liên hệ</Link>
        </nav>
      </div>
    </header>
  );
}
