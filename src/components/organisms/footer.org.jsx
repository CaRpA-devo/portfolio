import { FooterText } from "../molecules/footertext.org.jsx";

/**
 * Footer - Website-Footer mit rotierenden Zitaten und Copyright
 * Features: FooterText-Komponente, Logo, Copyright-Info, responsive Design
 */
export function Footer() {
  return (
    <>
      <footer className="footer footer-horizontal footer-center bg-base-100 text-lime-100 p-10">
        <FooterText />
        <aside>
          <p className="font-bold pb-4 text-4xl">CarPa Studios</p>
          <img
            src="/logo2.jpg"
            alt="CarPa Logo"
            className="w-24 h-24 rounded-full contrast-110 saturate-125 brightness-105 drop-shadow-[0_0_15px_rgba(128,0,255,0.8)]"
          />

          <p>
            Copyright © CarPa {new Date().getFullYear()} - All right reserved
          </p>
        </aside>
      </footer>
    </>
  );
}
