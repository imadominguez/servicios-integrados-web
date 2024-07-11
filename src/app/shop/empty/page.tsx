import Link from 'next/link';
import { Metadata } from 'next';
import { ShoppingCartIcon } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Carrito Vacío - Teslo | SHOP',
  description:
    'Tu carrito en Teslo SHOP está vacío. ¡Explora nuestra amplia selección de productos y comienza a agregar artículos emocionantes a tu carrito de compras hoy mismo!',
  keywords: 'Carrito Vacío, Teslo, SHOP, Compras en línea, Explorar Productos',
};

export default function EmptyPage() {
  return (
    <div className="flex h-[80dvh] w-full flex-col items-center justify-center">
      <ShoppingCartIcon size={80} className="mx-5 w-10 h-10" />
      <div className="flex flex-col items-center  mt-3">
        <h1 className="text-xl font-semibold">Tu carrito esta vacio</h1>
      </div>

      <Link
        href={'/shop'}
        className={buttonVariants({
          variant: 'primary',
          className: 'mt-5',
        })}
      >
        Explorar productos
      </Link>
    </div>
  );
}
