"use client";
import Link from "next/link";

export function Header() {

  return (
    <nav className="bg-[#262626] h-20 sticky top-0 z-40 border-gray-200 ">
      <div className="flex flex-wrap justify-between ml-5 items-center mx-auto pr-4">
        <Link
          href="/"
          className="mt-3 flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src="/logo.png" className="h-12" alt="Flowbite Logo" />
          <span className=" text-[#F0F0F0] aself-center text-2xl font-bold whitespace-nowrap">
            <span className="text-[#0fbeddee]">Electro</span>Hub
          </span>
        </Link>
        <div className="flex max-lg:ml-auto space-x-3">
        </div>
      </div>
    </nav>
  );
}
