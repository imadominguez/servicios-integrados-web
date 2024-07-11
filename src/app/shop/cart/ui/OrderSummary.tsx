'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
// import { useCartStore } from '@/store';
import { currencyFormat } from '@/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { buttonVariants } from '@/components/ui/button';

// Componente para mostrar el resumen de la orden en el carrito
export const OrderSummary = () => {
  const [loaded, setLoaded] = useState<boolean>(false);

  // Obteniendo información del carrito desde el store
  // const { itemsInCart, subTotal, tax, total } = useCartStore((state) =>
  //   state.getSummaryInformation(),
  // );

  // Efecto para indicar que el componente ha cargado
  useEffect(() => {
    setLoaded(true);
  }, []);

  // Renderización condicional mientras se carga el componente
  if (!loaded) {
    return (
      // Placeholder animado mientras se carga la información
      <div className="sticky top-20 mx-auto h-fit w-96 rounded bg-gray-200 p-7 shadow-lg dark:bg-dark-accent dark:shadow-dark-second sm:mx-0"></div>
    );
  }

  // Renderización del resumen de la orden
  return (
    <Card className="sticky top-20 w-full h-fit bg-muted ">
      <CardHeader>
        <CardTitle>Resumen de orden</CardTitle>
      </CardHeader>

      {/* Grid para mostrar la información de la orden */}
      <CardContent>
        <div className="grid grid-cols-2 gap-1 text-xs">
          <span>Total de productos</span>
          {/* Cantidad de productos en el carrito */}
          <span className="text-right">
            {/* {itemsInCart === 1 ? '1 artículo' : `${itemsInCart} artículos`} */}
          </span>

          <span>Subtotal</span>
          {/* Subtotal de la orden */}
          <span className="text-right font-semibold">
            {/* {currencyFormat(subTotal)} */}
          </span>

          <span>Impuestos {'15%'}</span>
          {/* Impuestos aplicados a la orden */}
          {/* <span className="text-right font-semibold">{currencyFormat(tax)}</span> */}

          <span className="mt-5 ">Total: </span>
          {/* Total de la orden */}
          <span className="mt-5 text-right font-semibold ">
            {/* {currencyFormat(total)} */}
          </span>
        </div>

        {/* Botón para ir al proceso de pago */}
        <div className="mb-2 mt-5 text-sm w-full">
          <Link
            href={'/checkout/address'}
            className={buttonVariants({
              variant: 'primary',
              className: 'w-full',
            })}
          >
            Confirmar compra
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};
