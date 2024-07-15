import Image from 'next/image';
import React from 'react';
import { Input } from '../ui/input';
import Link from 'next/link';
import { AlignJustifyIcon, SearchIcon, ShoppingCartIcon } from 'lucide-react';
import { UserDropdown } from './user-dropdown';
import { auth } from '@/auth';
import { Button, buttonVariants } from '../ui/button';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { SearchInput } from './search-input';

const LINKS_NAVBAR = [
  {
    name: 'Nuestra empresa',
    href: '#',
  },
  {
    name: 'Tienda online',
    href: '/shop',
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
              className: 'w-full text-sm',
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
    <header className="mx-auto flex items-center justify-between p-7 py-5">
      <Sheet>
        <SheetTrigger className="lg:hidden" asChild>
          <Button variant="outline">
            <AlignJustifyIcon className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side={'left'} className="flex flex-col justify-between">
          <nav className="flex list-none flex-col items-start gap-y-5">
            <NavbarLinks links={LINKS_NAVBAR} />
          </nav>
          <div>
            <UserDropdown name={user?.name} />
          </div>
        </SheetContent>
      </Sheet>
      <Link href="/" className="hidden flex-1 items-center gap-x-2 lg:flex">
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

      <div className="flex flex-1 items-center justify-end gap-x-2">
        <SearchInput />
        <div>
          <ShoppingCartIcon className="h-6 w-6" />
        </div>
        <div className="ml-1 hidden lg:block">
          <UserDropdown name={user?.name} />
        </div>
      </div>
    </header>
  );
};
