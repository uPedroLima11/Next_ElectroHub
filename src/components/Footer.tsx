export function Footer() {
  return (
    <footer className="bg-[#262626] p-5 font-[sans-serif] tracking-wide">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
    <div className="flex items-center mb-4"> 
      <a href="javascript:void(0)">
        <img
          src="/logo.png"
          alt="logo"
          className="w-24" 
        />
      </a>
      <span className="text-[#F0F0F0] ml-4 text-2xl font-bold whitespace-nowrap">
        <span className="text-[#0fbeddee]">Electro</span>Hub
      </span>
    </div>

    <div className="sm:flex sm:items-center sm:justify-between flex">
      <span className="text-sm mt-4 sm:mt-0 text-white text-center dark:text-gray-400">
        Copyright © 2024 by{' '}
        <a href="#" className="hover:underline">
          Pedro Mendes Lima™
        </a>
      </span>
    </div>

    <div className="flex flex-col items-center lg:items-start">
    </div>
  </div>
</footer>


  );
}
