'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { placeOrder } from '@/actions';
// import { useAddressStore, useCartStore } from '@/store';
import { currencyFormat } from '@/utils';
import clsx from 'clsx';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BadgeCheckIcon } from 'lucide-react';

export const PlaceOrder = () => {
  const router = useRouter();
  const [loaded, setLoaded] = useState(false);
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  // const address = useAddressStore((state) => state.address);
  // const clearCart = useCartStore((state) => state.clearCart);
  // Obteniendo información del carrito desde el store
  // const { itemsInCart, subTotal, tax, total } = useCartStore((state) =>
  //   state.getSummaryInformation(),
  // );

  // const cart = useCartStore((state) => state.cart);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const onPlaceOrder = async () => {
    setIsPlacingOrder(true);

    // const productsToOrder = cart.map((product) => {
    //   return {
    //     productId: product.id,
    //     quantity: product.quantity,
    //     size: product.size,
    //   };
    // });

    //! Server Action
    // const res = await placeOrder(productsToOrder, address);

    // if (!res.ok) {
    //   setIsPlacingOrder(false);
    //   setErrorMessage(res.message);
    //   return;
    // }

    //* Todo salio bien
    setIsPlacingOrder(false);

    // Limpiamos el carrito y redireccionamos al usuario
    // clearCart();
    // router.replace('/orders/' + res.order?.id);
  };

  // if (loaded === false) {
  //   return <span className="text-3xl font-bold">Cargando...</span>;
  // }

  return (
    // <div className="flex flex-col justify-between rounded-xl bg-gray-200 p-7 shadow-lg dark:bg-dark-second dark:shadow-dark-second">
    //   <h2 className="mb-2 text-lg font-semibold md:text-2xl">
    //     Direccion de entrega
    //   </h2>
    //   <div className="mb-5 flex flex-col text-sm ">
    //     <p className="">
    //       {/* {address?.firstName ?? 'Imanol'} {address.lastName ?? 'Garcia'} */}
    //     </p>
    //     {/* <span>{address.address}</span> */}
    //     {/* <span>{address.address2}</span> */}
    //     {/* <span>{address.country}</span> */}
    //     {/* <span>CP: {address.postalCode}</span> */}
    //     {/* <span>{address.phone}</span> */}
    //   </div>

    //   {/* Divider */}

    //   <div className="mb-5 h-0.5 w-full rounded bg-gray-200" />

    //   <h2 className="mb-2 text-lg  font-semibold">Resumen de orden</h2>

    //   <div className="grid grid-cols-2 gap-2 text-sm">
    //     <span>No Productos</span>
    //     {/* Cantidad de productos en el carrito */}
    //     <span className="text-right">
    //       {/* {itemsInCart === 1 ? '1 artículo' : `${itemsInCart} artículos`} */}
    //     </span>

    //     <span>Subtotal</span>
    //     {/* Subtotal de la orden */}
    //     <span className="text-right font-semibold">
    //       {/* {currencyFormat(subTotal)} */}
    //     </span>

    //     <span>Impuestos {'15%'}</span>
    //     {/* Impuestos aplicados a la orden */}
    //     {/* <span className="text-right font-semibold">{currencyFormat(tax)}</span> */}

    //     <span className="mt-5 ">Total: </span>
    //     {/* Total de la orden */}
    //     <span className="mt-5 text-right font-semibold">
    //       {/* {currencyFormat(total)} */}
    //     </span>
    //   </div>

    //   <div className="mb-2 mt-5 w-full">
    //     <p className="mb-5 mt-5 text-pretty text-xs">
    //       {/* Disclaimer */}
    //       {/* Al hacer click en "Colocar Orden", aceptas nuestros{' '} */}
    //       <a href="" className=" underline">
    //         Terminos y Condiciones
    //       </a>{' '}
    //       y{' '}
    //       <a href="" className="underline">
    //         politica de privacidad
    //       </a>
    //     </p>
    //     <p className=" text-red-500">{errorMessage}</p>
    //     <button
    //       // href={'/orders/123'}
    //       onClick={onPlaceOrder}
    //       disabled={isPlacingOrder}
    //       className={clsx(' flex w-full justify-center', {
    //         'btn-disable': isPlacingOrder,
    //         'btn-primary': !isPlacingOrder,
    //       })}
    //     >
    //       {isPlacingOrder ? 'Colocando orden' : 'Colocar orden'}
    //     </button>
    //   </div>
    // </div>
    <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
      <div className="w-screen max-w-lg space-y-4">
        <dl className="space-y-0.5 text-sm text-gray-700">
          <div className="flex justify-between">
            <dt>Subtotal</dt>
            <dd>{currencyFormat(1234)}</dd>
          </div>

          <div className="flex justify-between">
            <dt>VAT</dt>
            <dd>{currencyFormat(1234)}</dd>
          </div>

          <div className="flex justify-between">
            <dt>Discount</dt>
            <dd>{currencyFormat(1234)}</dd>
          </div>

          <div className="flex justify-between !text-base font-medium">
            <dt>Total</dt>
            <dd>{currencyFormat(1234)}</dd>
          </div>
        </dl>

        <div className="flex justify-end">
          {/* <span className="inline-flex items-center justify-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-indigo-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="-ms-1 me-1.5 h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
              />
            </svg>

            <p className="whitespace-nowrap text-xs">2 Discounts Applied</p>
          </span> */}
          <Badge variant={'green'} className="">
            <BadgeCheckIcon className="h-4 w-4 mr-1" />
            <span className="text-xs">2 Descuentos Aplicados</span>
          </Badge>
        </div>

        <div className="flex justify-end">
          <Link
            href="/shop/checkout/address"
            className={buttonVariants({
              variant: 'primary',
              className: 'w-full',
            })}
          >
            Confirmar compra
          </Link>
        </div>
      </div>
    </div>
  );
};
