'use client';

import Link from 'next/link';
import React, { FormEvent } from 'react';
import { login, registerUser } from '@/actions';
import { Input } from '@/components/ui/input';
import { Button, buttonVariants } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { showToast } from '@/lib/toast';
import { useRouter } from 'next/navigation';

export const RegisterForm = () => {
  const router = useRouter();
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const name = data.get('name') as string;
      const email = data.get('email') as string;
      const password = data.get('password') as string;

      const { ok, message, user } = await registerUser(name, email, password);

      if (!ok) {
        showToast({ message, type: 'error' });
        return;
      }

      showToast({ message, type: 'success' });

      const { ok: isLogin, message: messageLogin } = await login(data);

      if (!isLogin && messageLogin) {
        showToast({ message: messageLogin, type: 'error' });
        return;
      }

      showToast({ message: `Bienvenido/a ${user?.name}`, type: 'success' });

      router.push('/');

      // const response = await registerUser(data);
      // console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 mt-10  w-full ">
      <div className="space-y-2">
        <Label htmlFor="text">Nombre completo</Label>
        <Input id="name" name="name" type="text" autoFocus />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Correo electronico</Label>
        <Input id="email" name="email" type="email" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Contraseña</Label>
        <Input name="password" type="password" />
      </div>

      {/* <span className="text-red-500">{errorMessage} </span> */}

      <Button
        type="submit"
        variant={'primary'}
        className="w-full mt-4 sm:max-w-sm"
      >
        Crear cuenta
      </Button>

      {/* divisor l ine */}
      <div className="my-5 flex items-center">
        <div className="flex-1 border-t border-gray-500"></div>
        <div className="px-2">O</div>
        <div className="flex-1 border-t border-gray-500"></div>
      </div>

      <Link
        href="/auth/login"
        className={buttonVariants({
          variant: 'secondary',
          className: 'w-full',
        })}
      >
        Ingresar
      </Link>
    </form>
  );
};
