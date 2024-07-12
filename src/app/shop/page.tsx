import { Products } from '@/components/products/products';
import { sleep } from '@/utils';

export type PageShopProps = {
  params: { [key: string]: string | string[] | undefined };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function ShopPage(props: PageShopProps) {
  return (
    <div>
      <main className="max-w-[2000px] mx-auto px-3 xl:p-0">
        <Products {...props} />
      </main>
    </div>
  );
}
