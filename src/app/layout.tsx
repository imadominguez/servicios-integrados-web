import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { font } from '@/config/fonts';
import { ThemeProvider } from '@/providers/theme-provider';
import { Toaster } from 'sonner';
import { Navbar } from '@/components/navbar/navbar';
export const metadata: Metadata = {
  title: {
    template: '%s - Servicios Integrados | SHOP',
    default: 'Inicio',
  },
  description:
    'Servicios Integrados | SHOP es una empresa dedicada a la venta de productos y servicios de tecnología, con más de 20 años de experiencia en el mercado.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={cn('min-h-dvh', font.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />

          <Toaster richColors />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
