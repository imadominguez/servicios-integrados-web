import Image from 'next/image';
import React from 'react';
import { Input } from '../ui/input';
import Link from 'next/link';
import { AlignJustifyIcon, SearchIcon, ShoppingCartIcon } from 'lucide-react';
import { UserDropdown } from './user-dropdown';
import { auth } from '@/auth';
import { Button, buttonVariants } from '../ui/button';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';

const LINKS_NAVBAR = [
  {
    name: 'Nuestra empresa',
    href: '#',
  },
  {
    name: 'Tienda online',
    href: '#',
  },
  {
    name: 'Calefacción',
    href: '#',
  },
  {
    name: 'Computación',
    href: '#',
  },
];

function NavbarLinks({
  links,
}: {
  links: {
    name: string;
    href: string;
  }[];
}) {
  return (
    <>
      {links.map(({ name, href }, i) => (
        <li key={i} className="w-full">
          <Link
            href={href}
            className={buttonVariants({
              variant: 'ghost',
              size: 'sm',
              className: 'text-sm w-full',
            })}
          >
            {name}
          </Link>
        </li>
      ))}
    </>
  );
}

export const Navbar = async () => {
  const session = await auth();
  const user = session?.user ?? null;

  return (
    <header className="p-7 py-5 flex items-center justify-between max-w-7xl mx-auto">
      <Sheet>
        <SheetTrigger className="lg:hidden" asChild>
          <Button variant="outline">
            <AlignJustifyIcon className="w-6 h-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side={'left'} className="flex flex-col justify-between">
          <nav className="flex flex-col items-start gap-y-5 list-none">
            <NavbarLinks links={LINKS_NAVBAR} />
          </nav>
          <div>
            <UserDropdown name={user?.name} />
          </div>
        </SheetContent>
      </Sheet>
      <Link href="/" className=" items-center gap-x-2 hidden lg:flex">
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
          <NavbarLinks links={LINKS_NAVBAR} />
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
        <div className="hidden lg:block ml-1">
          <UserDropdown name={user?.name} />
        </div>
      </div>
    </header>
  );
};
