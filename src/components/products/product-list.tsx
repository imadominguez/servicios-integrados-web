import { type Product } from '@prisma/client';
import React from 'react';
import { Card, CardContent, CardFooter } from '../ui/card';
import Image from 'next/image';
import { Button, buttonVariants } from '../ui/button';
import { currencyFormat } from '@/utils';
import Link from 'next/link';

export const ProductList = (props: Product) => {
  const { title, description, price, color, inStock, tags, images, slug } =
    props;
  console.log(images);
  return (
    <Card className="overflow-hidden fade-in">
      <div className="relative h-[350px] max-h-72 sm:h-[450px]">
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
        <div className="relative pt-3">
          <h3 className="text-lg group-hover:underline group-hover:underline-offset-4">
            {title}
          </h3>

          <div className="mt-1.5 flex items-center justify-between">
            <p>
              Precio: &nbsp;
              <span className="text-2xl font-semibold tracking-wide text-primary">
                {currencyFormat(price)}
              </span>
            </p>

            <p className="text-xs uppercase tracking-wide">{color}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Link
          href={`/product/${slug}`}
          className={buttonVariants({
            variant: 'default',
            className: 'w-full',
          })}
        >
          Añadir al carrito
        </Link>
      </CardFooter>
    </Card>
  );
};
