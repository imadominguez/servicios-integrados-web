import { Products } from '@/components/products/products';
import { sleep } from '@/utils';

export type PageShopProps = {
  params: { [key: string]: string | string[] | undefined };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default function ShopPage(props: PageShopProps) {
  return (
    <div>
      <main className="mx-auto max-w-6xl px-3 xl:p-0">
        <Products {...props} />
      </main>
    </div>
  );
}
