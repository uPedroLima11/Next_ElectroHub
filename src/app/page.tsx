"use client";

import Banner from "@/components/banner";
import Image from "next/image";
import { produtos } from '@/utils/produtos';
export default function Home() {


  return (
    <>
      <div className="mx-auto max-w-screen-xl ">
        <Banner />

        <h1 className="mt-16 p-7 mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-slate-600">
            Produtos
          </span>
        </h1>

        <section className="mb-36 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-20 place-items-center">
          {produtos.map((produto, index) => (
            <div key={produto.title} className="flex flex-col items-center w-full sm:max-w-2xl">
              <div
                className={`hover:scale-105 transition delay-150 duration-300 ease-in-out flex place-items-center bg-[#fff1f1] border-gray-200 rounded-3xl shadow-[...] ${index === 2 ? 'max-w-[250px] max-h-[15rem]' : 'md:max-w-lg h-[16rem]'
                  }`}
              >
                <Image
                  className={`p-3 w-full object-cover ${index === 2 ? 'h-[15rem]' : 'h-[15rem]'
                    }`}
                  src={produto.src}
                  width={produto.width || 400}
                  height={produto.height || 400}
                  quality={100}
                  alt={produto.alt}
                />
              </div>
              <h1 className="mt-5 text-xl min-h-32 text-gray-700 mx-2 text-center">
                <span className="font-medium">{produto.title}</span> <br />
                <span className="font-mono text-black text-xl">{produto.price}</span>
              </h1>
            </div>
          ))}
        </section>

        <div className="flex items-center mt-2.5">
        </div>
      </div>
    </>
  );
}
