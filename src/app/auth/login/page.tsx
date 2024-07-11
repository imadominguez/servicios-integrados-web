import { font } from '@/config/fonts';

import { Metadata } from 'next';
import Image from 'next/image';
import { cn } from '../../../lib/utils';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';

import LoginForm from './ui/LoginForm';
export const metadata: Metadata = {
  title: 'Iniciar sesión',
  description:
    'Inicia sesión en Teslo Shop para acceder a tu cuenta, realizar compras y administrar tus pedidos y detalles de perfil.',
  keywords:
    'teslo shop, iniciar sesión, cuenta de usuario, compras en línea, seguridad',
};

export default function LoginPage() {
  return (
    <div className="grid lg:grid-cols-2 min-h-dvh">
      <div className="flex w-full min-h-full flex-1 flex-col items-center justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-autow-full sm:max-w-sm">
          <div className="flex items-center gap-x-3">
            <Image
              width={40}
              height={40}
              alt="Your Company"
              src="/logo.svg"
              className=" h-10"
              priority
            />
            <h1 className="font-bold text-2xl">Servicios Integrados</h1>
          </div>
          <h2
            className={cn(
              'mt-10 text-center text-xl font-bold leading-9 tracking-tight ',
              font.className
            )}
          >
            Iniciar sesión con tu cuenta
          </h2>
        </div>

        <LoginForm />
        <p className="mt-10 text-center text-sm ">
          No tienes una cuenta?{' '}
          <Link
            href="/auth/new-account"
            className={buttonVariants({
              variant: 'link',
              size: 'sm',
            })}
          >
            Regístrate
          </Link>
        </p>
      </div>

      <div className="hidden  lg:block">
        <Image
          src="/imgs/fondo.jpeg"
          alt="Iniciar sesión"
          width={500}
          height={500}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
