import LogoIcon from "../../assets/logo.svg";

export default function Logo() {
  return (
    <a href="#" className="flex gap-1.5 items-center group">
      <img
        src={LogoIcon}
        alt="logo"
        className="w-7 h-7 md:w-9 md:h-9 transition-transform group-hover:scale-110"
      />

      <span className="font-semibold text-xl text-gray-900 dark:text-gray-100 tracking-tight mr-1">
        Sunam
        <span className="font-bold  bg-linear-to-r from-[#FCB11C] to-red-400 bg-clip-text text-transparent">
          VR
        </span>
      </span>
    </a> 
  );
}
