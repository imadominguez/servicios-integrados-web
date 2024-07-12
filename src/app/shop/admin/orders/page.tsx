export const revalidate = 0;

import Link from 'next/link';
import { Title } from '@/components/ui/title/Title';
// import { IoCardOutline } from 'react-icons/io5';
import { getPaginatedOrders } from '@/actions';
import { redirect } from 'next/navigation';
import { Metadata } from 'next';
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
  title: 'Todas las ordenes',
  description:
    'Explora la página del administrador en Teslo SHOP y visualiza todas las órdenes pendientes y pagadas. Gestiona fácilmente el estado de las órdenes y accede a opciones detalladas para cada una.',
  keywords:
    'Teslo, shop, administrador, ordenes, órdenes pendientes, órdenes pagadas',
};

export default async function OrdersPageAdmin() {
  const { ok, orders } = await getPaginatedOrders();

  if (!ok) {
    redirect('/auth/login');
  }
  const isPaid = (status: boolean) => {
    if (!status) {
      return (
        <>
          {/* <IoCardOutline className="font-bold text-red-800" /> */}
          <span className="mx-2 font-bold text-red-800">No Pagada</span>
        </>
      );
    }
    return (
      <>
        {/* <IoCardOutline className="text-green-800" /> */}
        <span className="mx-2 font-bold text-green-800">Pagada</span>
      </>
    );
  };

  return (
    <div className="mx-auto max-w-7xl">
      <Title title="Todas las ordenes" />

      <main className="mb-10">
        <Table>
          <TableCaption>Lista de ordenes.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Orden</TableHead>
              <TableHead>Cliente</TableHead>
              <TableHead>Estado</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>
                <span className="sr-only"> Acciones</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders?.map(order => (
              <TableRow
                key={order.tax}
                className="dark:bg-dark-second border-dark-accent dark:hover:bg-dark border-b bg-white transition duration-300 ease-in-out hover:bg-gray-100"
              >
                <TableCell className="whitespace-nowrap px-6 py-4 text-sm font-medium">
                  {order.id.split('-').at(0)}
                </TableCell>
                <TableCell className="whitespace-nowrap px-6 py-4 text-sm font-light">
                  {order.OrderAddress!.firstName} {order.OrderAddress!.lastName}
                </TableCell>
                <TableCell className="flex items-center whitespace-nowrap px-6 py-4 text-sm font-light">
                  {isPaid(order.isPaid)}
                </TableCell>
                <TableCell className="whitespace-nowrap px-6 py-4 text-sm font-light">
                  ${order.total}
                </TableCell>
                <TableCell className="px-6 text-sm font-light">
                  <Link
                    href={`/orders/${order.id}`}
                    className="hover:underline"
                  >
                    Ver orden
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </main>
    </div>
  );
}
