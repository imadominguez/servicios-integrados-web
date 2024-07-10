import { Products } from '@/components/products/products';

export type PageShopProps = {
  params: { [key: string]: string | string[] | undefined };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default function ShopPage(props: PageShopProps) {
  return (
    <div>
      <main className="max-w-[2000px] mx-auto px-3 xl:p-0">
        <Products {...props} />
      </main>
    </div>
  );
}
