import Image from 'next/image';
import prisma from '@/lib/prisma';
import Link from 'next/link';
export default async function Home() {
  const products = await prisma.product.findMany();
  return (
    <main className="grid grid-cols-3 gap-10 max-w-7xl mx-auto">
      {products.map(product => (
        <div key={product.id} className="group block overflow-hidden  ">
          <div className="relative h-[350px] sm:h-[450px]">
            <Image
              src={`/imgs/${product.images[0]}`}
              alt=""
              width={500}
              height={500}
              className="absolute inset-0 w-full h-full object-cover opacity-100 group-hover:opacity-0"
            />

            <Image
              src={`/imgs/${product.images[1]}`}
              alt=""
              width={500}
              height={500}
              className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100"
            />
          </div>

          <div className="relative pt-3">
            <h3 className="text-sm  group-hover:underline group-hover:underline-offset-4">
              {product.title}
            </h3>

            <div className="mt-1.5 flex items-center justify-between ">
              <p className="tracking-wide">{product.price}</p>

              <p className="text-xs uppercase tracking-wide">
                {product.color?.length} colores
              </p>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
}
