"use client";
import Image from 'next/image';

export default function Banner() {
  return (
    <div className="mt-12 flex flex-col md:flex-row items-center justify-between bg-[#b9b9b9] p-10 md:p-20 rounded-3xl shadow-md ">
      <div className="flex-1 mr-4">
        <div className="gap-2 flex flex-col mt-10">
          <h1 className="text-lg md:text-xl font-semibold text-gray-800 -mt-10">
            Beats Studio Air
          </h1>
          <h1 className="text-2xl font-medium md:text-4xl mt-2 text-black">
            Aproveite a Promoção de Verão! ☀️
          </h1>
          <h1 className="ml-2 md:ml-2 text-5xl md:text-7xl text-white font-black">
            Som <span className='text-red-700 font-extrabold'>Premium</span>, Preço Imbatível!
          </h1>

        </div>

        <button
          type="button"
          className="mt-10 py-2 px-4 text-sm font-medium text-white focus:outline-none bg-[#ff2a2a] rounded-full border border-gray-200 hover:bg-[#202020] hover:text-white focus:z-10 focus:ring-4 focus:ring-gray-100"
        >
          Compre Agora
        </button>
      </div>

      <div className="mt-6 md:mt-10 justify-end">
        <h1 className="text-lg md:text-2xl font-medium text-black -mt-14 ml-36 md:text-center">
          <span className='text-red-700 font-extrabold'> 30% </span> De Desconto
        </h1>
        <Image
          className="p-4 ml-24 object-cover h-[15rem] w-[15rem] sm:h-[15rem] sm:w-[12rem] md:h-[23rem] md:w-[19rem] shadow-custom-shadow rounded-full md:shadow-custom-shadow sm:rounded-full animate-move"
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
