'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { redirect } from 'next/navigation';
// import { useCartStore } from '@/store';
// import { ProductImage, QuantitySelector } from '@/components';
// import { ProductItemSkeleton } from '@/components';
// import { IoCartOutline, IoTrashOutline } from 'react-icons/io5';
import { currencyFormat } from '@/utils';
import { ShoppingCartIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Componente para mostrar los productos en el carrito
export const ProductsInCart = () => {
  const [loaded, setLoaded] = useState(false);
  // const productsInCart = useCartStore((state) => state.cart);
  // const clearCart = useCartStore((state) => state.clearCart);
  // const removeProductFromCart = useCartStore(
  //   (state) => state.removeProductFromCart,
  // );
  // const updateProductQuantity = useCartStore(
  //   (state) => state.updateProductQuantity,
  // );

  useEffect(() => {
    setLoaded(true);
  }, []);

  // Si el componente no ha cargado aún, mostrar esqueletos de carga
  if (!loaded) {
    // return Array.from({ length: 3 }, (_, i) => <ProductItemSkeleton key={i} />);
  }
  // Si no hay productos en el carrito, redirigir a la página vacía
  // if (productsInCart.length === 0) {
  //   redirect('/empty');
  // }

  return (
    <>
      {/* Iterar sobre los productos en el carrito */}
      {/* {productsInCart.map((product) => (
        <div
          key={`${product.slug}-${product.size}${Math.random()}`}
          className="mx-auto mb-4 flex w-full items-center gap-2 "
        >
  
          <ProductImage
            src={product.image}
            alt={product.title}
            width={100}
            height={100}
            className="aspect-square w-20 rounded object-cover"
            priority={true}
          />

          <div className="flex flex-1 flex-col items-center text-xs tracking-tighter">
            <div className="flex w-full flex-col">
      
              <Link
                className="cursor-pointer font-bold hover:underline "
                href={`/product/${product.slug}`}
              >
                {product.title}
              </Link>
              <dl className="mt-0.5 space-y-px ">
                <div>
                  <dt className="inline">Size: </dt>
                  <dd className="inline">{product.size}</dd>
                </div>
              </dl>
            </div>
     
            <p className="w-full sm:mt-2">
              Precio total:{' '}
              <span className="font-bold">
                {currencyFormat(product.price * product.quantity)}
              </span>
            </p>
            <div className="flex w-full flex-1 items-center justify-end  gap-2">
    
              <QuantitySelector
                quantity={product.quantity}
                onQuantityChange={(value) =>
                  updateProductQuantity(product, value)
                }
              />
    
              <button
                onClick={() => removeProductFromCart(product)}
                className="btn-danger rounded "
              >
                <IoTrashOutline />
              </button>
            </div>
          </div>
        </div>
      ))} */}
      <Button
        // onClick={clearCart}
        variant={'destructive'}
      >
        <ShoppingCartIcon size={24} className="mr-2" />
        Vaciar carrito
      </Button>
    </>
  );
};
