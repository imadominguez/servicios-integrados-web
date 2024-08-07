import prisma from '@/lib/prisma';
import { ProductList } from './product-list';
import { type PageShopProps } from '@/app/shop/page';
import { Pagination } from './pagination';
import { revalidatePath } from 'next/cache';
import { sleep } from '@/utils';
import { FilterProducts } from './filter-products';

export type fetchProductsType = typeof fetchProducts;

const PAGE_SIZE = 10;
const fetchProducts = async ({
  take = PAGE_SIZE,
  skip = 0,
  search = '',
  category = '',
}) => {
  'use server';

  const results = prisma.product.findMany({
    take,
    skip,
    where: {
      title: search ? { contains: search } : undefined,
      category: category ? { name: { equals: category } } : undefined,
    },
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
  const search = (props.searchParams.search as string) ?? '';
  const category = (props.searchParams.category as string) ?? '';
  const { data, metadata } = await fetchProducts({
    take,
    skip,
    search,
    category,
  });
  console.log({ metadata });
  return (
    <>
      <div className="mb-5 flex items-center justify-end px-2 lg:px-4 xl:px-10 2xl:px-0">
        <FilterProducts {...props.searchParams} />
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-2 sm:grid-cols-2 lg:grid-cols-3 lg:px-4 xl:px-10 2xl:p-0">
        {data.map((product, index) => (
          <ProductList key={index} {...product} />
        ))}
      </div>

      <Pagination
        category={category}
        search={search}
        {...metadata}
        {...props.searchParams}
      />
    </>
  );
};
