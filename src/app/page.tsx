"use client";

import Banner from "@/components/banner";
import Image from "next/image";

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
          {[
            {
              src: "/cadeira.png",
              alt: "cadeira",
              title: "Cadeira Gamer Mymax Mx5,",
              price: "R$ 509,15"
            },
            {
              src: "/xiaomi.png",
              alt: "Xiaomi Redmi Note 13 Pro",
              title: "Xiaomi Redmi Note 13 Pro, 12GB RAM, 512GB",
              price: "R$ 1.817,38"
            },
            {
              src: "/apple.png",
              alt: "Fone Sem Fio",
              title: "Apple Watch Series 10 GPS • Caixa dourada de titânio",
              price: "R$ 9.899,00"
            },
            {
              src: "/fonejbl.png",
              alt: "FoneJbl",
              title: "JBL, Fone de Ouvido Sem Fio, Tune 520BT - Azul",
              price: "R$ 259,00"
            }
          ].map((product) => (
            <div key={product.title} className="flex flex-col items-center w-full max-w-sm">
              <div className="hover:scale-105 transition delay-150 duration-300 ease-in-out flex place-items-center bg-[#fff1f1] border-gray-200 rounded-3xl shadow-[... ]">
                <Image
                  className="p-3 w-full h-[18rem] object-cover"
                  src={product.src}
                  width={400}
                  height={400}
                  quality={100}
                  alt={product.alt}
                />
              </div>
              <h1 className="mt-5 text-xl min-h-32 text-gray-700 mx-2">
                <span className="font-medium">{product.title}</span> <br />
                <span className="font-mono text-black text-xl">{product.price}</span>
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
