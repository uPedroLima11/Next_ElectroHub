"use client";
import Link from "next/link";

export function Header() {

  return (
    <nav className="bg-[#262626] h-20 sticky top-0 z-40 border-gray-200">
  <div className="flex flex-wrap justify-between items-center mx-auto px-5 h-full">
    <Link href="/" className="flex items-center space-x-3">
      <img src="/logo.png" className="h-12" alt="Flowbite Logo" />
      <span className="text-[#F0F0F0] text-2xl font-bold whitespace-nowrap">
        <span className="text-[#0fbeddee]">Electro</span>Hub
      </span>
    </Link>

    <div className="hidden lg:flex space-x-3 ml-auto">
    </div>
    <div className="lg:hidden flex items-center ml-auto">
    </div>
  </div>
</nav>

  );
}
