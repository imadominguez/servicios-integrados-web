'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
// import { useForm } from 'react-hook-form';
import clsx from 'clsx';

import type { Address, Country } from '@/interfaces';
// import { useAddressStore } from '@/store';
import { deleteUserAddress, setUserAddress } from '@/actions';
import { Input } from '@/components/ui/input';
import { Button, buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

type FormInputs = {
  firstName: string;
  lastName: string;
  address: string;
  address2?: string;
  postalCode: string;
  city: string;
  country: string;
  phone: string;
  rememberAddress: boolean;
};

interface Props {
  countries: Country[];
  userStoredAddress?: Partial<Address>;
}

export const AddressForm = ({ countries, userStoredAddress = {} }: Props) => {
  const router = useRouter();
  // const {
  //   handleSubmit,
  //   register,
  //   formState: { isValid },
  //   reset,
  // } = useForm<FormInputs>({
  //   defaultValues: {
  //     ...(userStoredAddress as any),
  //     rememberAddress: false,
  //   },
  // });

  // const { data: session } = useSession({
  //   required: true,
  // });

  // const setAddress = useAddressStore((state) => state.setAddress);
  // const address = useAddressStore((state) => state.address);

  // useEffect(() => {
  //   if (address.firstName) {
  //     reset(address);
  //   }
  // }, [address, reset]);

  // const onSubmit = async (data: FormInputs) => {
  //   const { rememberAddress, ...restAddress } = data;
  //   setAddress(restAddress);

  //   if (rememberAddress) {
  //     await setUserAddress(restAddress, session!.user.id);
  //   } else {
  //     await deleteUserAddress(session!.user.id);
  //   }

  //   router.push('/checkout');
  // };

  return (
    <form
      // onSubmit={handleSubmit(onSubmit)}
      className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-5 w-full "
    >
      <div className="mb-2 flex flex-col">
        <span>Nombres</span>
        <Input
          type="text"

          // {...register('firstName', { required: true })}
        />
      </div>

      <div className="mb-2 flex flex-col">
        <span>Apellidos</span>
        <Input
          type="text"

          // {...register('lastName', { required: true })}
        />
      </div>

      <div className="mb-2 flex flex-col">
        <span>Dirección</span>
        <Input
          type="text"

          // {...register('address', { required: true })}
        />
      </div>

      <div className="mb-2 flex flex-col">
        <span>Dirección 2 (opcional)</span>
        <Input
          type="text"

          // {...register('address2')}
        />
      </div>

      <div className="mb-2 flex flex-col">
        <span>Código postal</span>
        <Input
          type="text"

          // {...register('postalCode', { required: true })}
        />
      </div>

      <div className="mb-2 flex flex-col">
        <span>Ciudad</span>
        <Input
          type="text"

          // {...register('city', { required: true })}
        />
      </div>

      <div className="mb-2 flex flex-col">
        <span>País</span>
        <Select

        // {...register('country', { required: true })}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Seleccione su pais" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="asd"> Seleccione </SelectItem>
            {countries.map(country => (
              <SelectItem key={country.name} value={country.id}>
                {country.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="mb-2 flex flex-col">
        <span>Teléfono</span>
        <Input
          type="text"

          // {...register('phone', { required: true })}
        />
      </div>

      <div className="mb-2 flex flex-col sm:mt-1">
        <div className="mb-10 inline-flex items-center ">
          <label
            className="relative flex items-center rounded-full p-3"
            htmlFor="checkbox"
          >
            <Input
              type="checkbox"
              id="checkbox"
              // {...register('rememberAddress')}
            />
            {/* <div className="pointer-events-none absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5"
                viewBox="0 0 20 20"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="1"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div> */}
          </label>

          <span>¿Recordar dirección?</span>
        </div>

        <Link
          // disabled={!isValid}
          href="/checkout"
          type="submit"
          className={buttonVariants({
            variant: 'primary',
            className: clsx('w-full', 'sm:w-auto'),
          })}
        >
          Siguiente
        </Link>
      </div>
    </form>
  );
};
