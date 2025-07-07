import logoLight from "../../../assets/logo_light.svg";
import iconLight from "../../../assets/light.svg";
import iconLogin from "../../../assets/login.svg";
import iconNotif from "../../../assets/notif.svg";
import iconSearch from "../../../assets/search.svg";

export default function Header() {
  return (
    <header className="bg-black flex border rounded-3xl border-bluePrimary h-20 w-min justify-center items-center mx-auto mt-8 p-5">
      <div className="flex justify-center items-center gap-x-6">
        <a href="" className="inline-block w-max">
          <img src={logoLight} alt="CineApp" className="w-24" />
        </a>
        <a
          href="#"
          className="relative inline-block text-white text-2xl py-1 ml-10 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-1 after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
        >
          Home
        </a>
        <a
          href="#"
          className="relative inline-block text-white text-2xl py-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-1 after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
        >
          Pricing
        </a>
        <a
          href="#"
          className="relative inline-block text-white text-2xl py-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-1 after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
        >
          Mobies
        </a>
        <a
          href="#"
          className="relative inline-block text-white text-2xl py-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-1 after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
        >
          Series
        </a>
        <a
          href="#"
          className="relative inline-block text-white text-2xl after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-1 after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
        >
          Collection
        </a>
        <a
          href="#"
          className="relative inline-block text-white text-2xl py-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-1 after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
        >
          FAQ
        </a>
      </div>
      <div className="flex ml-32 w-max">
        <img src={iconSearch} className="p-4"></img>
        <img src={iconNotif} className="p-4"></img>
        <img src={iconLogin} className="p-4"></img>
        <img src={iconLight} className="p-4"></img>
      </div>
    </header>
  );
}
