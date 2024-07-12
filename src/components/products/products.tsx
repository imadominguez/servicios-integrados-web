import prisma from '@/lib/prisma';
import { ProductList } from './product-list';
import { type PageShopProps } from '@/app/shop/page';
import { Pagination } from './pagination';
import { revalidatePath } from 'next/cache';
import { sleep } from '@/utils';

export type fetchProductsType = typeof fetchProducts;

const PAGE_SIZE = 10;
const fetchProducts = async ({ take = PAGE_SIZE, skip = 0 }) => {
  'use server';

  const results = prisma.product.findMany({
    take,
    skip,
    orderBy: {
      price: 'asc',
    },
  });

  const total = prisma.product.count();
  const promises = await Promise.all([results, total]);
  const [products, totalProducts] = promises;

  revalidatePath('/shop');
  return {
    data: products,
    metadata: {
      hasNextPage: skip + take < totalProducts,
      totalPages: Math.ceil(totalProducts / take),
    },
  };
};

export const Products = async (props: PageShopProps) => {
  const pageNumber = Number(props.searchParams.page) || 1;

  const take = PAGE_SIZE;
  const skip = (pageNumber - 1) * take;
  await new Promise(resolve => setTimeout(resolve, 1000));
  const { data, metadata } = await fetchProducts({
    take,
    skip,
  });
  console.log({ data, metadata });
  return (
    <>
      <div className="2xl:p-o mx-auto grid max-w-6xl grid-cols-1 gap-6 px-2 sm:grid-cols-2 lg:grid-cols-3 lg:px-4 xl:px-10">
        {data.map((product, index) => (
          <ProductList key={index} {...product} />
        ))}
      </div>
      <Pagination {...metadata} {...props.searchParams} />
    </>
  );
};
