import { auth } from '@/auth';
import { User } from '@/interfaces';
import { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: {
    template: '%s | Admin - Teslo | SHOP',
    default: 'Admin',
  },
};

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  if ((session?.user as User).role !== 'admin') {
    redirect('/auth/login');
  }
  return <>{children}</>;
}
