"use client";
import Image from 'next/image';


export default function Banner() {
    return(
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
    )
}
