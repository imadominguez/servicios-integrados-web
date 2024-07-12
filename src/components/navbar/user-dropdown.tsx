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
          <DropdownMenuContent align="end" className="">
            <DropdownMenuLabel className="text-sm">{name}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link
                href="/shop/admin"
                className={buttonVariants({
                  variant: 'ghost',
                  size: 'sm',
                  className: 'w-full text-left text-xs',
                })}
              >
                Administrar Tienda
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem
              className={buttonVariants({
                variant: 'ghost',
                size: 'sm',
                className: 'w-full cursor-pointer text-left text-xs',
              })}
            >
              Configuracion
            </DropdownMenuItem>
            <DropdownMenuItem
              className={buttonVariants({
                variant: 'ghost',
                size: 'sm',
                className: 'w-full cursor-pointer text-left text-xs',
              })}
            >
              Ayuda
            </DropdownMenuItem>

            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => {
                // Implement logout logic here
                logout();
              }}
              className={buttonVariants({
                variant: 'ghost',
                size: 'sm',
                className: 'w-full cursor-pointer text-left text-xs',
              })}
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
            className: 'w-full text-sm',
          })}
        >
          <LogInIcon className="mr-2 hidden h-5 w-5 md:block" /> Ingresar
        </Link>
      )}
    </>
  );
};
