import Image from 'next/image';
import React from 'react';
import { Input } from '../ui/input';
import Link from 'next/link';
import { SearchIcon, ShoppingCartIcon } from 'lucide-react';

export const Navbar = () => {
  return (
    <header className="p-7 py-5 flex items-center justify-between max-w-7xl mx-auto">
      <Link href="/" className="flex items-center gap-x-2">
        <Image
          src="/imgs/logo-si.png"
          alt="Your Company"
          width={120}
          height={100}
          className="h-10"
          priority
        />
      </Link>

      <nav className="hidden lg:block">
        <ul className="flex items-center gap-x-5">
          <li>
            <Link href="#" className="">
              Nuestra empresa
            </Link>
          </li>
          <li>
            <Link href="#" className="">
              Tienda online
            </Link>
          </li>
          <li>
            <Link href="#" className="">
              Calefacción
            </Link>
          </li>
          <li>
            <Link href="#" className="">
              Computación
            </Link>
          </li>
        </ul>
      </nav>

      <div className="flex items-center gap-x-2">
        <div className="relative">
          <Input type="text" placeholder="Buscar" className="rounded-full" />
          <SearchIcon className="absolute right-2 top-2 w-7 h-6" />
        </div>
        <div>
          <ShoppingCartIcon className="w-6 h-6" />
        </div>
      </div>
    </header>
  );
};
