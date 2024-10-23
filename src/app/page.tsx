"use client";

import { Link } from "lucide-react";
import Image from "next/image";

export default function Home() {


  return (
    <>
      <div className="mx-auto max-w-screen-xl ">

        <div className="mt-12 flex items-center justify-between bg-[#b9b9b9] p-20 rounded-lg shadow-md">
          <div className="flex-1 mr-4">
            <div className="gap-2 flex flex-col mt-10">
              <h1 className="text-xl font-semibold text-gray-800 -mt-10">Beats Studio Air</h1>
              <h1 className="text-4xl font-black text-black ">Promoção de Verão </h1> <br />
              <h1 className="text-7xl text-white font-black ; -ml-10 -mt-4 ">Excelente </h1>
            </div>
            <button type="button" className="mt-10 py-2.5 px-5 me-2 mb-2 text-sm font-medium text-white focus:outline-none bg-red-800 rounded-full border border-gray-200 hover:bg-[#e66565] hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Compre Agora</button>

          </div>

          <div className="mr-36 -mt-10">
            <Image
              className="p-8 rounded-full object-cover h-[25rem] w-[20rem] shadow-custom-shadow"
              src="/fone.png"
              alt="Fone de Ouvido"
              width={400}
              height={100}
              quality={100}
            />


          </div>
        </div>

        <h1 className=" mt-16 p-7 mb-4 text-3xl  font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-slate-600 from-gray-900">
            Produtos
          </span>
        </h1>

        <section className="mb-36 place-items-center flex grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-20">
          <div className="flex flex-col items-center w-72 max-w-sm">

            <div className="hover:scale-105 transition delay-150 duration-300 ease-in-out flex place-items-center bg-[#fff1f1] border-gray-200 rounded-3xl shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
              <Image
                className="p-0 rounded-[30rem] w-[30rem] h-[20rem]"
                src="/fone1.png"
                width={600}
                height={600}
                quality={100}
                alt=""
              />
            </div>


            <h1 className=" items-start mt-5 text-xl min-h-32 text-gray-700 ">
              <span className="font-medium">Fone De Ouvido KTFT500</span> <br />
              <span className="font-mono text-black text-xl">R$ 99,90</span>
            </h1>

          </div>

          <div className="flex flex-col items-center w-72 max-w-sm">


            <div className="hover:scale-105 transition delay-150 duration-300 ease-in-out flex place-items-center gap-3 bg-[#fff1f1] border-gray-200 rounded-3xl shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
              <Image
                className="p-0 rounded-[30rem] w-[30rem] h-[20rem] "
                src="/xiaomi.png"
                width={400}
                height={40}
                quality={100}
                alt=""
              />
            </div>


            <h1 className="mt-5 text-xl min-h-32 text-gray-700">
              <span className="font-medium">Xiaomi Redmi Note 13 Pro, 12GB RAM, 512GB</span> <br />
              <span className="font-mono text-black text-xl">R$ 1.817,38</span>
            </h1>

          </div>

          <div className="flex flex-col items-center w-72 max-w-sm">

            <div className="hover:scale-105 transition delay-150 duration-300 ease-in-out flex place-items-center gap-3 bg-[#fff1f1] border-gray-200 rounded-3xl shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
              <Image
                className="p-8 rounded-[30rem] object-cover h-[20rem] w-[20rem]"
                src="/apple.png"
                width={400}
                height={400}
                quality={100}
                alt="Apple"
              />
            </div>
            <h1 className="mt-5 text-xl min-h-32 text-gray-700">
              <span className="font-medium">Apple Watch Series 10 GPS <br /> • Caixa dourada de titânio </span> <br />
              <span className="font-mono text-black text-xl">R$ 9.899,00</span>
            </h1>
          </div>
          <div className="flex flex-col items-center w-72 max-w-sm">
            <div className="hover:scale-105 transition delay-150 duration-300 ease-in-out flex place-items-center gap-3 bg-[#fff1f1] border-gray-200 rounded-3xl shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
              <Image
                className="p-8 rounded-[30rem] object-cover h-[20rem] w-[20rem]"
                src="/fonejbl.png"
                width={400}
                height={40}
                quality={100}
                alt=""
              />
            </div>
            <h1 className="mt-5 text-xl min-h-32 text-gray-700">
              <span className="font-medium">JBL, Fone de Ouvido Sem Fio, Tune 520BT - Azul</span> <br />
              <span className="font-mono text-black text-xl items-right ">R$ 259,00</span>
            </h1>
          </div>
        </section>
        <div className="flex items-center mt-2.5 mb-56">
        </div>
      </div>
    </>
  );
}
