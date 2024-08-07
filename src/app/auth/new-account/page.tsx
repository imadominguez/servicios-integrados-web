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
    <main className="grid min-h-dvh lg:grid-cols-2">
      <div className="flex min-h-full w-full flex-1 flex-col items-center justify-center px-6 py-12 lg:px-8">
        <div className="mx-auto w-full sm:max-w-sm">
          <div className="flex items-center justify-center gap-x-3">
            <Image
              width={40}
              height={40}
              alt="Your Company"
              src="/logo.svg"
              className="h-10"
              priority
            />
            <h1 className="text-2xl font-bold">Servicios Integrados</h1>
          </div>
          <h2
            className={cn(
              'mt-10 text-center text-xl font-bold leading-9 tracking-tight',
              font.className
            )}
          >
            Crear una nueva cuenta
          </h2>
          <RegisterForm />
        </div>
      </div>
      <div className="hidden lg:block">
        <Image
          src="/imgs/fondo.jpeg"
          alt="Iniciar sesión"
          width={500}
          height={500}
          className="h-full w-full object-cover"
        />
      </div>
    </main>
  );
}
