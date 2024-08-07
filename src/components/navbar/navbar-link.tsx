import Link from 'next/link';
import { buttonVariants } from '../ui/button';
import { cn } from '@/lib/utils';

interface LinksProps {
  href: string;
  name: string;
  isDisable: boolean;
}
export function Links({ href, name, isDisable = false }: LinksProps) {
  return (
    <Link
      href={href}
      className={buttonVariants({
        variant: 'ghost',
        size: 'sm',
        className: cn('relative flex w-full flex-col py-6 text-sm', {
          'cursor-not-allowed hover:bg-white': isDisable === true,
        }),
      })}
    >
      {name}
      {isDisable && (
        <p className="absolute -bottom-2 -rotate-2 text-[10px] opacity-85">
          Proximamente
        </p>
      )}
    </Link>
  );
}
