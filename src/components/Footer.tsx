export function Footer() {
  return (
    <footer className="bg-[#262626] p-5 font-[sans-serif] tracking-wide">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="lg:flex lg:items-center">
          <a href="javascript:void(0)">
            <img
              src="/logo.png"
              alt="logo"
              className="w-24"
            />
          </a>
          <span className=" text-[#F0F0F0] aself-center text-2xl font-bold whitespace-nowrap flex items-center">
            <span className="text-[#0fbeddee] ml-4">Electro</span>Hub
          </span>
        </div>

        <div className="sm:flex sm:items-center sm:justify-between flex">
          <span className="text-sm mt-[6rem] text-white sm:text-center dark:text-gray-400">
            Copyright  © 2024 by {' '}
            <a href="" className="hover:underline">
              Pedro Mendes Lima™
            </a>
          </span>
        </div>
        <div>
        </div>
      </div>
    </footer>
  );
}
