import { SocialLinks } from "../molecules/links.comp";

export function Navbar() {
  return (
    <div className="navbar sticky top-0 z-50 bg-gray-900/80 backdrop-blur-md shadow-[0_0_20px_rgba(128,0,255,0.6)] border-b border-purple-500/50">
      {/* navbar Links  */}
      <div className="navbar-start p-2">
        <div className="navbar-center   flex items-center transition-colors duration-300">
          <a
            href="/"
            className="flex text-cyan-400  rounded-2xl p-2 items-center justify-center gap-2 btn-ghost text-4xl transition-transform hover:scale-105 hover:shadow-[0_0_15px_rgba(128,0,255,0.8)]"
          >
            <img
              src="/logo2.jpg"
              className="h-10  object-contain rounded-full contrast-110 saturate-125 brightness-105"
              alt="CarPa Logo"
            />
            CarPa
          </a>
        </div>
      </div>

      {/* Navbar rects mit Links */}
      <div className="navbar-end ">
        <SocialLinks />
      </div>
    </div>
  );
}
