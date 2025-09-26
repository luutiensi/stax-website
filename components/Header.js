// components/Header.js
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold">
          <Link href="/">STAX</Link>
        </h1>
        <nav className="space-x-4">
          <Link href="/">Trang chủ</Link>
          <Link href="/about">Giới thiệu</Link>
          <Link href="/services">Dịch vụ</Link>
          <Link href="/contact">Liên hệ</Link>
        </nav>
      </div>
    </header>
  );
}
