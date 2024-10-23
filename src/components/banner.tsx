"use client";
import Image from 'next/image';


export default function Banner() {
  return (
    <div className="mt-12 flex flex-col md:flex-row items-center justify-between bg-[#b9b9b9] p-10 md:p-20 rounded-lg shadow-md">
      <div className="flex-1 mr-4">
        <div className="gap-2 flex flex-col mt-12">
          <h1 className="text-lg md:text-xl font-semibold text-gray-800 -mt-10">Beats Studio Air</h1>
          <h1 className="text-2xl md:text-4xl font-black text-black">Promoção de Verão</h1>
          <br />
          <h1 className="text-5xl md:text-7xl text-white font-black -ml-10 -mt-4">Excelente</h1>
        </div>
        <button
          type="button"
          className="mt-10 py-2 px-4 text-sm font-medium text-white focus:outline-none bg-red-800 rounded-full border border-gray-200 hover:bg-[#e66565] hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-100"
        >
          Compre Agora
        </button>
      </div>

      <div className="mt-6 md:mt- md:mr-36">
        <Image
          className="p-4 object-cover h-[15rem] w-[15rem] sm:h-[15rem] sm:w-[12rem] md:h-[23rem] md:w-[19rem] shadow-custom-shadow rounded-full"
          src="/fone1.png"
          alt="Banner"
          width={400}
          height={100}
          quality={100}
        />

      </div>

    </div>
  )
}
