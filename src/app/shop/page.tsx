import { Products } from '@/components/products/products';
import { Button } from '@/components/ui/button';
import { sleep } from '@/utils';
import { ListFilter } from 'lucide-react';
import { Suspense } from 'react';

export type PageShopProps = {
  params: { [key: string]: string | string[] | undefined };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default function ShopPage(props: PageShopProps) {
  return (
    <div>
      <main className="mx-auto max-w-6xl px-3 xl:p-0">
        <Suspense
          fallback={
            <div className="min-h-[90dvh]">
              <div className="mb-5 flex items-center justify-end px-2 lg:px-4 xl:px-10 2xl:px-0">
                <Button variant={'outline'} disabled>
                  <ListFilter className="mr-2 h-5 w-5" />
                  Filtrar
                </Button>
              </div>
              <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-2 sm:grid-cols-2 lg:grid-cols-3 lg:px-4 xl:px-10 2xl:p-0">
                <div className="h-96 w-full animate-pulse rounded-lg bg-gray-200"></div>
                <div className="h-96 w-full animate-pulse rounded-lg bg-gray-200"></div>
                <div className="h-96 w-full animate-pulse rounded-lg bg-gray-200"></div>
                <div className="h-96 w-full animate-pulse rounded-lg bg-gray-200"></div>
                <div className="h-96 w-full animate-pulse rounded-lg bg-gray-200"></div>
                <div className="h-96 w-full animate-pulse rounded-lg bg-gray-200"></div>
                <div className="h-96 w-full animate-pulse rounded-lg bg-gray-200"></div>
                <div className="h-96 w-full animate-pulse rounded-lg bg-gray-200"></div>
                <div className="h-96 w-full animate-pulse rounded-lg bg-gray-200"></div>
                <div className="h-96 w-full animate-pulse rounded-lg bg-gray-200"></div>
                <div className="h-96 w-full animate-pulse rounded-lg bg-gray-200"></div>
                <div className="h-96 w-full animate-pulse rounded-lg bg-gray-200"></div>
              </div>
            </div>
          }
        >
          <Products {...props} />
        </Suspense>
      </main>
    </div>
  );
}
