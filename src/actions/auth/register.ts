'use server';

import prisma from '@/lib/prisma';
import bcryptjs from 'bcryptjs';

// ?? Esta funcion debe registrar un usuario en la base de datos y ademas enviar un mail de confirmacion
// ?? al usuario para que pueda confirmar su correo electronico

export const registerUser = async (
  name: string,
  email: string,
  password: string
) => {
  try {
    // ?? Se crea un usuario en la base de datos
    const user = await prisma.user.create({
      data: {
        name: name,
        email: email.toLowerCase(),
        password: bcryptjs.hashSync(password),
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });

    // ?? Se envia un mail de confirmacion al usuario
    // user &&

    // ?? Se retorna un objeto con la informacion del usuario creado y un mensaje de exito
    return {
      ok: true,
      user: user,
      message: 'Usuario creado',
    };
  } catch (error) {
    // ?? En caso de error se imprime el error en consola y se retorna un objeto con un mensaje de error
    console.log(error);

    return {
      ok: false,
      message: 'No se pudo crear el usuario',
    };
  }
};
