'use client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { Category } from '@prisma/client';
type SelectCategoryFilterProps = {
  categories: Category[];
};
export const SelectCategoryFilter = (props: SelectCategoryFilterProps) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const handleCategory = (value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value === 'Todas') {
      params.delete('category');
    } else {
      params.set('category', value);
    }
    replace(`${pathname}?${params.toString()}`);
  };
  return (
    <Select onValueChange={handleCategory}>
      <SelectTrigger>
        <SelectValue placeholder="Todas" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="Todas">Todas</SelectItem>
        {props.categories?.map(category => (
          <SelectItem key={category.id} value={category.name}>
            {category.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
