import { FacebookIcon, InstagramIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-neutral-100 bg-opacity-10 text-sm">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="flex mb-6 md:mb-0 p-0">
            <Link className="flex items-start justify-start m-0 p-0" href="/">
              <img src={"/"} className={"pr-44"} alt={"Nextflytt Logga"} />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <p className="mb-6 text-md font-semibold uppercase">Kontakt</p>
              <ul className="font-light text-content flex flex-col gap-3">
                <li className="">
                  <Link
                    href="/kontakta-oss"
                    className="hover:underline hover:text-primary"
                  >
                    Kontakta oss
                  </Link>
                </li>
                <li>
                  <Link
                    href="/offert"
                    className="hover:underline hover:text-primary"
                  >
                    Begär offert
                  </Link>
                </li>
                <li>
                  <Link
                    href="/offert"
                    className="hover:underline hover:text-primary"
                  >
                    Begär offert
                  </Link>
                </li>
                <div className=" mt-4 flex flex-row items-center gap-2">
                  <a
                    href="#"
                    className="  inline-flex flex-col  items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground  hover:bg-primary/80"
                  >
                    <FacebookIcon />
                  </a>
                  <a
                    href="#"
                    className="  inline-flex flex-col  items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground  hover:bg-primary/80"
                  >
                    <InstagramIcon />
                  </a>
                  <a
                    href="#"
                    className="  inline-flex flex-col  items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground  hover:bg-primary/80"
                  >
                    <FaTiktok />
                  </a>
                </div>
              </ul>
            </div>
            <div>
              <p className="mb-6 text-md font-semibold uppercase">Dataskydd</p>
              <ul className="font-light text-content flex flex-col gap-3">
                <li className="">
                  <Link
                    href="/gdpr"
                    className="hover:underline hover:text-primary"
                  >
                    GDPR
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className="hover:underline hover:text-primary"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div className="">
              <p className="mb-6 text-md font-semibold uppercase">Öppettider</p>
              <ul className="font-light text-content">
                <li className="mb-4">
                  <p> Mån - Sön: 08:00 - 21:00</p>
                </li>
                <li>
                  <p>
                    Kontakta oss för hämtning/lämning av flyttlådor & nycklar
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex bg-primary text-white py-4 items-center justify-center">
        <span className="text-sm text-primary-foreground/80 text-center">
          © 2025{" "}
          <Link
            href="/images/logo.png"
            className="hover:underline  text-primary-foreground/60  hover:text-primary-foreground"
          >
            Nextflytt
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
