'use server';

import { signIn } from '@/auth';
import { sleep } from '@/utils';
import { AuthError } from 'next-auth';

// ...

// ?? Esta funcion debe comprobar que el usuario exista en la base de datos y que las credenciales sean correctas, ademas de comprobar si el usuario esta verificado
// ?? y si no lo esta enviar un mail de verificacion y redireccionar al usuario a la pagina de verificacion

export async function authenticate(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    // ?? Comprobar si el usuario existe en la base de datos y si las credenciales son correctas
    const user = await signIn('credentials', {
      ...Object.fromEntries(formData),
      redirect: false,
    });

    // ?? Comprobar si el usuario esta verificado
    if (!user?.emailVerified) {
      // ?? Enviar un mail de verificacion
      // ?? Redireccionar al usuario a la pagina de verificacion

      return {
        ok: false,
        message: 'Usuario no verificado',
      };
    }

    return {
      ok: true,
      message: 'Inicio de sesión exitoso',
    };
  } catch (error) {
    // ?? En caso de error se imprime el error en consola y se retorna un objeto con un mensaje de error
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
