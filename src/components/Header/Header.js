"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="p-4 px-12 bg-gray-800 border-b border-gray-700 flex items-center">
      <div className="flex-1 text-center">
        <h1 className="text-2xl font-bold text-white">Color Match</h1>
      </div>
      <Link
        href="https://www.alba.com.ar/es/paletas-de-colores"
        target="_blank"
        rel="noopener noreferrer"
        className="ml-auto"
      >
        <Image
          src="/alba-logo.png"
          alt="Logo de Alba"
          width={75}
          height={30}
          priority
        />
      </Link>
    </header>
  );
}
