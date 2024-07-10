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

  const results = await prisma.product.findMany({
    take,
    skip,
    orderBy: {
      price: 'asc',
    },
  });

  const total = await prisma.product.count();

  revalidatePath('/shop');
  return {
    data: results,
    metadata: {
      hasNextPage: skip + take < total,
      totalPages: Math.ceil(total / take),
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
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-2 lg:px-4 xl:px-10 2xl:p-o max-w-[2000px]">
        {data.map((product, index) => (
          <ProductList key={index} {...product} />
        ))}
      </div>
      <Pagination {...metadata} {...props.searchParams} />
    </>
  );
};
