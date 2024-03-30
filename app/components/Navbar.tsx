'use client'; // this is a client component
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-scroll/modules';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { RiMoonFill, RiSunLine } from 'react-icons/ri';
import { IoMdMenu, IoMdClose } from 'react-icons/io';

interface NavItem {
  label: string;
  page: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Home',
    page: 'home',
  },
  {
    label: 'About',
    page: 'about',
  },
  {
    label: 'Projects',
    page: 'projects',
  },
];

export default function Navbar() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState(
    theme === 'system' ? systemTheme : theme,
  );
  // // Effect to update currentTheme when theme changes
  useEffect(() => {
    setCurrentTheme(theme === 'system' ? systemTheme : theme);
  }, [theme, systemTheme]);

  const pathname = usePathname();

  // Handler for toggling the theme
  const toggleTheme = () => {
    setTheme(currentTheme === 'dark' ? 'light' : 'dark');
  };

  const [mounted, setMounted] = useState(false);
  const [navbar, setNavbar] = useState(false);

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <header className="fixed top-0  z-50 mx-auto w-full bg-white px-4 shadow dark:border-b dark:border-stone-600 dark:bg-stone-900 sm:px-20">
      <div className="justify-between md:flex md:items-center">
        <div>
          <div className="flex items-center justify-between py-3 md:block md:py-5">
            <Link to="home">
              <div className="container flex items-center space-x-2">
                <h2 className="text-2xl font-bold">Denton Wong</h2>
              </div>
            </Link>
            <div className="md:hidden">
              <button
                className="rounded-md p-2 text-gray-700 outline-none focus:border focus:border-gray-400"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
              </button>
            </div>
          </div>
        </div>

        <div>
          <div
            className={`mt-8 flex-1 justify-self-center pb-3 md:mt-0 md:block md:pb-0 ${
              navbar ? 'block' : 'hidden'
            }`}
          >
            <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              {NAV_ITEMS.map((item, idx) => {
                return (
                  <Link
                    key={idx}
                    to={item.page}
                    className={
                      'block cursor-pointer text-neutral-900  hover:text-neutral-500 dark:text-neutral-100 lg:inline-block'
                    }
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onClick={() => setNavbar(!navbar)}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <button
                onClick={toggleTheme}
                className="rounded-xl bg-slate-100 p-2"
              >
                {currentTheme === 'dark' ? (
                  <RiSunLine size={25} color="black" />
                ) : (
                  <RiMoonFill size={25} color="black" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
