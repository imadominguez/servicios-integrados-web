import { Title } from '@/components/ui/title/Title';
import { AddressForm } from './ui/AddressForm';

import { getCountries, getUserAddress } from '@/actions';
import { auth } from '@/auth';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dirección - Teslo | SHOP',
  description:
    'Completa y actualiza tu dirección de entrega en Teslo SHOP. Asegúrate de que tus pedidos se entreguen correctamente al proporcionar una dirección de envío precisa y actualizada.',
  keywords:
    'Dirección, Teslo, SHOP, Dirección de Entrega, Formulario de Dirección',
};

export default async function AddressPage() {
  const countries = await getCountries();

  const session = await auth();

  if (!session?.user) {
    return <h3 className="text-5xl">500 - No hay sesión de usuario</h3>;
  }

  const userAddress =
    (await getUserAddress(session.user.id ?? '')) ?? undefined;

  return (
    <div className="mx-auto flex max-w-7xl flex-col px-10 sm:items-start sm:justify-start sm:px-5">
      <Title
        title="Dirección"
        subtitle="Dirección de entrega"
        className="w-full"
      />

      <AddressForm countries={countries} userStoredAddress={userAddress} />
    </div>
  );
}
