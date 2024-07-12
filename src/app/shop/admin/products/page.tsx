export const revalidate = 0;

import Link from 'next/link';
import { currencyFormat } from '@/utils';
import { getPaginatedProductsWidthImages } from '@/actions';
import { Metadata } from 'next';
import { Title } from '@/components/ui/title/Title';
import prisma from '@/lib/prisma';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
export const metadata: Metadata = {
  title: 'Mantenimiento de productos',
  description:
    'Explora la página de administración en Teslo SHOP y gestiona fácilmente tu catálogo de productos. Agrega nuevos productos, actualiza existentes y mantén tu inventario organizado y actualizado para ofrecer la mejor experiencia de compra a tus clientes.',
  keywords:
    'Teslo, shop, administrador, productos, mantenimiento de productos, catálogo de productos, gestión de inventario',
};

interface Props {
  searchParams: {
    page?: string;
  };
}

const fetchProducts = async () => {
  'use server';
  try {
    const products = await prisma.product.findMany({});

    return { data: products };
  } catch (error) {
    if (error instanceof Error) {
      return { error: error.message };
    }
    return { error: 'An error ocurred' };
  }
};

export default async function OrdersPageAdmin({ searchParams }: Props) {
  const page = searchParams.page ? parseInt(searchParams.page) : 1;
  const { products, currentPage, totalPages } =
    await getPaginatedProductsWidthImages({ page });
  const { data, error } = await fetchProducts();

  return (
    <main className="px-5">
      <Title title="Matenimiento de productos" />

      <div className="mb-5 flex justify-end">
        <Link href={'/admin/product/new'} className="btn-primary">
          Nuevo producto
        </Link>
      </div>

      <div className="mb-10 overflow-x-auto">
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Titulo</TableHead>
              <TableHead>Precio</TableHead>
              <TableHead>En Stock</TableHead>
              <TableHead className="hidden text-right md:table-cell">
                En descuento
              </TableHead>
              <TableHead>Porcentaje</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.map(
              ({ id, title, price, inStock, inDiscount, discount }) => (
                <TableRow key={id}>
                  <TableCell className="text-ellipsis font-medium">
                    {title}
                  </TableCell>
                  <TableCell className="text-center">
                    {currencyFormat(price)}
                  </TableCell>
                  <TableCell className="text-center">
                    {inStock ? 'Sí' : 'No'}
                  </TableCell>
                  <TableCell className="hidden text-center md:table-cell">
                    {inDiscount ? 'Sí' : 'No'}
                  </TableCell>
                  <TableCell className="text-center">
                    {inDiscount ? discount : '-'}
                  </TableCell>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </div>
      {/* <Pagination totalPages={totalPages} /> */}
    </main>
  );
}
