'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';

import { login } from '@/actions';

import { Button, buttonVariants } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { getSession } from 'next-auth/react';
import { showToast } from '@/lib/toast';

export default function LoginForm() {
  const router = useRouter();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const { ok, message } = await login(formData);

    if (!ok) {
      showToast({
        message: message || 'Error al iniciar sesion',
        type: 'error',
        duration: 3000,
      });
      return;
    }

    const session = await getSession();

    showToast({
      message: `Bienvenido ${session?.user?.name}`,
      type: 'success',
      duration: 3000,
    });
    router.push('/');
  };

  return (
    <form
      onSubmit={handleSubmit}
      method="POST"
      className="mt-10 w-full space-y-6 sm:mx-auto sm:max-w-sm"
    >
      <div>
        <Label htmlFor="email" className="block text-sm font-medium leading-6">
          Email
        </Label>
        <div className="mt-2">
          <Input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
          />
        </div>
      </div>

      <div className="w-full sm:max-w-sm">
        <div className="flex items-center justify-between">
          <Label htmlFor="password">Contraseña</Label>
          <div className="text-sm">
            <Link
              className={buttonVariants({
                variant: 'link',
                size: 'sm',
              })}
              href="#"
            >
              Olvidaste tu contraseña?
            </Link>
          </div>
        </div>
        <div className="mt-2">
          <Input
            id="password"
            name="password"
            type="password"
            required
            autoComplete="current-password"
          />
        </div>
      </div>

      <Button
        variant={'primary'}
        className="mt-4 w-full sm:max-w-sm"
        type="submit"
      >
        Iniciar sesión
      </Button>
    </form>
  );
}
