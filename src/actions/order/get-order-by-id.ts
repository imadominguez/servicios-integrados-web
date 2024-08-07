'use server';
import { auth } from '@/auth';
import prisma from '@/lib/prisma';
import { type User } from '@/interfaces';
export const getOrderById = async (id: string) => {
  const session = await auth();

  if (!session?.user) {
    return {
      ok: false,
      message: 'Debe estar autenticado',
    };
  }

  try {
    const order = await prisma.order.findUnique({
      where: {
        id,
      },
      include: {
        OrderAddress: true,
        OrderItem: {
          select: {
            price: true,
            quantity: true,
            product: {
              select: {
                title: true,
                slug: true,
                ProductImage: {
                  select: {
                    url: true,
                  },
                  take: 1,
                },
              },
            },
          },
        },
      },
    });

    if (!order) {
      throw 'No se encontro la orden';
    }

    if (session.user.role === 'user') {
      if (session.user.id !== order.userId) {
        throw `${id} no es de ese usuario`;
      }
    }

    return {
      ok: true,
      order: order,
      user: session.user,
    };
  } catch (error) {
    console.log(error);

    return {
      ok: false,
      message: 'Hable con el administrador',
    };
  }
};
