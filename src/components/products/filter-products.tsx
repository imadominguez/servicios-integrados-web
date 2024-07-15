import { ListFilterIcon } from 'lucide-react';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger } from '../ui/select';
import { SelectValue } from '@radix-ui/react-select';

type FilterProductsProps = {
  category?: string;
  search?: string;
  sort?: string;
};

export const FilterProducts = (props: FilterProductsProps) => {
  console.log({ props });
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
          <form className="mt-4">
            <div className="mb-4">
              <Label>Categoría</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Todas" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Accesorios">Accesorios</SelectItem>
                  <SelectItem value="Ropa">Ropa</SelectItem>
                  <SelectItem value="Zapatos">Zapatos</SelectItem>
                </SelectContent>
              </Select>
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
            <Button className="w-full" type="submit">
              Filtrar
            </Button>
          </form>
        </div>
      </SheetContent>
    </Sheet>
  );
};
