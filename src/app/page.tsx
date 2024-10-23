"use client";

import { Link } from "lucide-react";
import Image from "next/image";

export default function Home() {


  return (
    <>
      <div className="mx-auto max-w-screen-xl ">

      <div className="mt-10 flex items-center justify-between bg-[#dcdcdc] p-20 rounded-lg shadow-md">
  {/* Texto à esquerda */}
  <div className="flex-1 mr-4">
    <h2 className="text-xl font-semibold text-gray-800 -mt-36">
      Beats Studio Air</h2>
    <p className="text-gray-600 mt-1">
      <span className="text-4xl font-bold text-black">Promoção de Verão </span> <br />
      <span className="text-7xl text-white font-bold -ml-10 ">Excelente </span>
    </p>
  </div>
  
  {/* Imagem à direita */}
  <div className="mr-36">
    <Image
      className="p-8 rounded-0 object-cover h-[25rem] w-[20rem]"
      src="/fone.png" // Substitua pelo caminho da sua imagem
      alt="Fone de Ouvido"
      width={400} // Tamanho da imagem (24 * 4)
      height={100} // Tamanho da imagem (24 * 4)
      quality={100}
    />
  </div>
</div>





        
        <h1 className=" mt-60 p-7 mb-4 text-3xl  font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-slate-600 from-gray-900">
            Produtos
          </span>
        </h1>

        <section className="mb-36 place-items-center flex grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-20">
          <div className="flex flex-col items-center w-72 max-w-sm">

            { /*Produto*/}
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

            {/* /*Produto*/}
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

            {/* /*Produto*/}
            <div className="hover:scale-105 transition delay-150 duration-300 ease-in-out flex place-items-center gap-3 bg-[#fff1f1] border-gray-200 rounded-3xl shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]">
              <Image
                className="p-8 rounded-[30rem] object-cover h-[20rem] w-[20rem]"
                src="/apple.png"
                width={400}
                height={400}
                quality={100} // Aumenta a qualidade da imagem
                alt="Apple"
              />
            </div>


            <h1 className="mt-5 text-xl min-h-32 text-gray-700">
              <span className="font-medium">Apple Watch Series 10 GPS <br /> • Caixa dourada de titânio </span> <br />
              <span className="font-mono text-black text-xl">R$ 9.899,00</span>
            </h1>

          </div>


          <div className="flex flex-col items-center w-72 max-w-sm">

            {/* /*Produto*/}
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
