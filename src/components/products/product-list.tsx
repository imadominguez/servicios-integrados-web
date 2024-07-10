import { type Product } from '@prisma/client';
import React from 'react';
import { Card, CardContent, CardFooter } from '../ui/card';
import Image from 'next/image';
import { Button } from '../ui/button';
import { currencyFormat } from '@/utils';

export const ProductList = (props: Product) => {
  const { title, description, price, color, inStock, tags, images } = props;
  console.log(images);
  return (
    <Card className="overflow-hidden">
      <div className="relative h-[350px] sm:h-[450px] max-h-72">
        <Image
          src={`/imgs/${images[0]}`}
          alt=""
          width={500}
          height={500}
          className="absolute inset-0 h-full w-full object-cover opacity-100 group-hover:opacity-0"
        />

        <Image
          src={`/imgs/${images[1]}`}
          alt=""
          width={500}
          height={500}
          className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100"
        />
      </div>
      <CardContent>
        <div className="relative  pt-3">
          <h3 className="text-lg  group-hover:underline group-hover:underline-offset-4">
            {title}
          </h3>

          <div className="mt-1.5 flex items-center justify-between ">
            <p>
              Precio: &nbsp;
              <span className="tracking-wide font-semibold text-2xl text-primary">
                {currencyFormat(price)}
              </span>
            </p>

            <p className="text-xs uppercase tracking-wide">{color}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Añadir al carrito</Button>
      </CardFooter>
    </Card>
  );
};
