'use client';
import { logout } from '@/actions';
import { Button, buttonVariants } from '../ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect } from 'react';
import { LogInIcon, LogOutIcon } from 'lucide-react';

export const UserDropdown = ({ name }: { name: string | null | undefined }) => {
  useEffect(() => {}, [name]);
  return (
    <>
      {name ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="w-full text-sm">
              Mi cuenta
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>{name}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Configuracion</DropdownMenuItem>
            <DropdownMenuItem>Soporte</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => {
                // Implement logout logic here
                logout();
              }}
            >
              <LogOutIcon className="mr-2 h-5 w-5" /> Cerrar Sesion
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Link
          href={'/auth/login'}
          className={buttonVariants({
            variant: 'ghost',
            className: 'text-sm w-full',
          })}
        >
          <LogInIcon className="mr-2 w-5 h-5 hidden md:block" /> Ingresar
        </Link>
      )}
    </>
  );
};
