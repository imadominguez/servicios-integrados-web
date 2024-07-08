'use server';

import { signIn } from '@/auth';
import { sleep } from '@/utils';
import { AuthError } from 'next-auth';

// ...

export async function authenticate(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    await signIn('credentials', {
      ...Object.fromEntries(formData),
      redirect: false,
    });
    return 'Success';
  } catch (error) {
    if ((error as AuthError).type === 'CredentialsSignin') {
      return 'Credenciales incorrectas';
    }

    return 'Error inesperado';
  }
}

export const login = async (formData: FormData) => {
  try {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    await signIn('credentials', { email, password, redirect: false });

    return { ok: true };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      message: 'No se pudo iniciar sesión',
    };
  }
};
