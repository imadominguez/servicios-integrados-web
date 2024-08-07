'use server';

import { cn } from '@/lib/utils';
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';
import Link from 'next/link';

type PaginationProps = {
  page?: string;
  totalPages: number;
  hasNextPage: boolean;
  category: string;
  search: string;
};

export const Pagination = (props: PaginationProps) => {
  const { page = 1, totalPages, hasNextPage } = props;

  const currentPage = Math.min(Math.max(Number(page), 1), totalPages);

  const getPagesToShow = () => {
    let startPage = currentPage - 2;
    let endPage = currentPage + 2;

    if (currentPage <= 3) {
      startPage = 1;
      endPage = Math.min(totalPages, 5);
    } else if (currentPage >= totalPages - 2) {
      startPage = Math.max(1, totalPages - 4);
      endPage = totalPages;
    }

    return Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i
    );
  };

  const pages = getPagesToShow();

  const propsPage = `${props.category ? `&category=${props.category}` : ''}${props.search ? `&search=${props.search}` : ''}`;
  return (
    <div className="my-10 flex items-center justify-center space-x-6 text-black">
      <Link
        className={cn(
          'rounded-md border border-gray-300 px-3 py-2 text-sm font-medium hover:bg-gray-50',
          currentPage === 1 ? 'pointer-events-none bg-gray-100' : ''
        )}
        scroll={false}
        href={`?page=${currentPage - 1}${propsPage}`}
      >
        <ArrowLeftIcon className="h-5 w-5" />
      </Link>

      <nav
        aria-label="Pagination"
        className="relative z-0 inline-flex -space-x-px rounded-md"
      >
        {pages.map((p, i) => (
          <Link
            key={p}
            scroll={false}
            className={cn(
              'relative inline-flex items-center border border-gray-300 px-4 py-2 text-sm font-medium hover:bg-gray-50',
              p === currentPage ? 'pointer-events-none bg-gray-100' : '',
              i === 0 ? 'rounded-l-md' : '',
              i === pages.length - 1 ? 'rounded-r-md' : ''
            )}
            href={`?page=${p}${propsPage}`}
          >
            {p}
          </Link>
        ))}
      </nav>

      <Link
        className={cn(
          'rounded-md border border-gray-300 px-3 py-2 text-sm font-medium hover:bg-gray-50',
          !hasNextPage ? 'pointer-events-none bg-gray-100' : ''
        )}
        scroll={false}
        href={`?page=${currentPage + 1}${propsPage}`}
      >
        <ArrowRightIcon className="h-5 w-5" />
      </Link>
    </div>
  );
};
