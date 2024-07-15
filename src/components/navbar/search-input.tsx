'use client';

import { SearchIcon } from 'lucide-react';
import { Input } from '../ui/input';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { cn } from '@/lib/utils';

export const SearchInput = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const params = new URLSearchParams(searchParams);
    const search = e.target.value;
    console.log({ search });
    if (search) {
      params.set('search', search);
    } else {
      params.delete('search');
    }

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div
      className={cn('relative', {
        block: pathname === '/shop',
        hidden: pathname !== '/shop',
      })}
    >
      <Input
        type="text"
        placeholder="Buscar"
        className="rounded-full pr-8"
        onChange={handleChange}
        defaultValue={searchParams.get('search') ?? ''}
      />
      <SearchIcon className="absolute right-2 top-[10px] h-5 w-5" />
    </div>
  );
};
