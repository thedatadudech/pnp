import Bars3Icon from "@heroicons/react/24/solid/Bars3Icon";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import Image from "next/image";
import { DEFAULT_IS_LIGHT, useThemeStore } from "~/app_state/theme_mode";
import { SearchButton } from "../search/button";
import ThemeSwitch from "~/components/header/theme_switch";
import { env } from "../../env.mjs";
import { useReadingProgress } from "~/app_function/hooks/useReadingProgressbar";
import { getPrefixRepo } from "~/app_function/utils/utils";
import clsx from "clsx";

const ConnectSection = dynamic(() => import("./connect_section"));
const Links = dynamic(() => import("./links"));
const Link = dynamic(() => import("next/link"));

export default function Header() {
  const utm = useThemeStore();
  const [isLight, setIsLight] = useState(DEFAULT_IS_LIGHT);

  useEffect(() => {
    setIsLight(utm.themeName === "winter");
  }, [utm]);

  const [bgChange, setBgChange] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const completion = useReadingProgress();


  useEffect(() => {
    setLoaded(true);
    const handleScroll = () => {
      const sY = window.scrollY >= 16;
      if (sY) {
        setBgChange(true);
      } else {
        setBgChange(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
      <header
        style={{
          backgroundSize: `${completion}%`,
          backgroundRepeat: "no-repeat"
        }}
        className={clsx(
          loaded ? "transition-all duration-500 ease-in-out" : "",
          bgChange
            ? "bg-gradient-to-r from-30% from-base-300/30 to-base-content/50 to-100% shadow-2xl lg:mx-1 lg:translate-y-1 lg:rounded-xl lg:ring-1 lg:ring-base-300/40"
            : "shadow-none",
          "supports-backdrop-blur:bg-white/60 sticky top-0 z-50 h-14 backdrop-blur-sm"
        )}
      >
        <div className="container mx-auto flex h-14 items-center justify-between overflow-visible px-4 py-2">
          <div className="flex items-center gap-2">
            <span className="tooltip tooltip-bottom" data-tip="Go home">
              <Link
                href="/"
                className="btn-ghost btn-gap-0 px-2 text-xl font-bold normal-case tracking-wider"
              >
                <Image
                  src={`${getPrefixRepo()}/images/logos/github-profile-dark${
                    isLight ? "-light" : ""
                  }.png`}
                  width="32"
                  height="32"
                  alt={env.NEXT_PUBLIC_PERSON_NAME}
                />
                <div className="ml-2 hidden lg:flex">
                  {env.NEXT_PUBLIC_PERSON_NAME}
                </div>
              </Link>
            </span>
            <Links className="hidden items-center gap-4 md:flex lg:flex xl:flex" />
          </div>
          <div>
            <div className="hidden lg:inline ">
              <ConnectSection />
            </div>
            <div className="flex items-center justify-end lg:hidden">
              <SearchButton />
              <ThemeSwitch />
              <div className="dropdown-end dropdown">
                <label tabIndex={0} className="btn-ghost btn-circle btn">
                  <Bars3Icon className="h-8 w-8" />
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu rounded-box mt-2 w-fit bg-base-100/95 px-2 py-5 shadow-2xl ring ring-base-300"
                >
                  <Links className=" flex justify-center space-x-4 rounded-lg bg-base-100/80 px-2 pb-2" />
                  <ConnectSection />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
  );
}
