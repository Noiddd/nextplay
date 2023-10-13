"use client";

import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { ModeToggle } from "./ui/toggle-mode";

const Nav = () => {
  const test = () => {
    console.log("test");
  };
  return (
    <header>
      <nav>
        <ul className="flex-col items-center justify-between">
          <li>
            <a
              className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
              href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{" "}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className="dark:invert"
                width={100}
                height={24}
                priority
              />
            </a>
          </li>
          <li className="flex gap-5">
            <Button onClick={test}>Learn More</Button>
            <ModeToggle />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
