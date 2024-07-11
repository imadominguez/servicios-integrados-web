import { Metadata } from 'next';
import { font } from '@/config/fonts';
import { RegisterForm } from './ui/RegisterForm';
import Image from 'next/image';
import { cn } from '@/lib/utils';
export const metadata: Metadata = {
  title: 'Crear nueva cuenta',
  description:
    'Crea una nueva cuenta en Teslo Shop para acceder a ofertas exclusivas, realizar compras más rápidas y gestionar tu perfil de usuario.',
  keywords:
    'teslo shop, crear cuenta, registrarse, compras en línea, perfil de usuario',
};

export default function NewAccountPage() {
  return (
    <main className="grid lg:grid-cols-2 min-h-dvh">
      <div className="flex w-full min-h-full flex-1 flex-col items-center justify-center px-6 py-12 lg:px-8">
        <div className="w-full sm:max-w-sm mx-auto">
          <div className="flex items-center justify-center gap-x-3">
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
            Crear una nueva cuenta
          </h2>
          <RegisterForm />
        </div>
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
    </main>
  );
}
