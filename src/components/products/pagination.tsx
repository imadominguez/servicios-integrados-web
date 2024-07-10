import { ChevronLeftCircle, ChevronRightCircle } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import {
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  Pagination as PaginationShadcn,
} from '../ui/pagination';
import { cn } from '@/lib/utils';

type PaginationProps = {
  page?: string;
  totalPages: number;
  hasNextPage: boolean;
};
export const Pagination = (props: PaginationProps) => {
  const { page = 1, totalPages, hasNextPage } = props;

  const currentPage = Math.min(Math.max(Number(page), 1), totalPages);

  const getPagesToShow = () => {
    let startPage = currentPage - 2;
    let endPage = currentPage + 2;

    if (currentPage <= 3) {
      startPage = 1;
      endPage = 5;
    } else if (currentPage >= totalPages - 2) {
      startPage = totalPages - 4;
      endPage = totalPages;
    }

    return Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => i + startPage
    );
  };

  const pages = getPagesToShow();

  return (
    <div className="flex items-center justify-between border-t  px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <a
          href="#"
          className="relative inline-flex items-center rounded-md border  x-4 py-2 text-sm font-medium "
        >
          Previous
        </a>
        <a
          href="#"
          className="relative ml-3 inline-flex items-center rounded-md border  px-4 py-2 text-sm font-medium "
        >
          Next
        </a>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm ">
            Mostrando <span className="font-medium">1</span> de{' '}
            <span className="font-medium">10</span> sobre{' '}
            <span className="font-medium">{totalPages}</span> paginas
          </p>
        </div>
        <div>
          <PaginationShadcn>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href={`?page=${Number(page) - 1}`}
                ></PaginationPrevious>
              </PaginationItem>

              {pages.map(page => (
                <PaginationLink
                  key={page}
                  href={`?page=${Number(page)}`}
                  // className={cn('', {
                  //   'bg-primary text-white': page === currentPage,
                  // })}
                  isActive={page === currentPage}
                >
                  {page}
                </PaginationLink>
              ))}

              <PaginationItem>
                <PaginationNext href={`?page=${Number(page) + 1}`} />
              </PaginationItem>
            </PaginationContent>
          </PaginationShadcn>
        </div>
      </div>
    </div>
  );
};
