import { ListFilterIcon } from 'lucide-react';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger } from '../ui/select';
import { SelectValue } from '@radix-ui/react-select';
import { SelectCategoryFilter } from './select-category-filter';
import prisma from '@/lib/prisma';

type FilterProductsProps = {
  category?: string;
  search?: string;
  sort?: string;
};

const fetchCategories = async () => {
  'use server';
  const categories = prisma.category.findMany();
  return categories;
};

export const FilterProducts = async (props: FilterProductsProps) => {
  const categories = await fetchCategories();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant={'outline'}>
          <ListFilterIcon className="mr-2 h-5 w-5" />
          Filtrar
        </Button>
      </SheetTrigger>
      <SheetContent>
        <div className="p-4">
          <h2 className="text-lg font-bold">Filtrar productos</h2>

          <div className="mb-4">
            <Label>Categoría</Label>
            <SelectCategoryFilter categories={categories} />
          </div>

          <div className="mb-4">
            <Label className="block text-sm font-medium text-gray-700">
              Ordenar por
            </Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Relevancia" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Relevancia">Relevancia</SelectItem>
                <SelectItem value="Precio">Precio</SelectItem>
                <SelectItem value="Nombre">Nombre</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
