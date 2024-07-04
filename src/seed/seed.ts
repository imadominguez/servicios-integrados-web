import bcryptjs from 'bcryptjs';
import { SeedCountry, countries } from './seed-countries';
import { Category } from '@prisma/client';
interface SeedProduct {
  title: string;
  description: string;
  price: number;
  color: ValidColors;
  inStock: number;
  slug: string;
  tags: string[];
  images?: string[];
}

type ValidColors = 'black' | 'magenta' | 'blue' | 'red' | 'yellow'; // Colores válidos para los productos

type ValidSizes = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL' | 'XXXL'; // Tallas válidas para los productos
type ValidTypes = 'shirts' | 'pants' | 'hoodies' | 'hats'; // Tipos válidos de productos
type SeedRole = 'user' | 'admin';

type SeedUser = {
  name: string;
  email: string;
  password: string;
  role: SeedRole;
};

interface SeedData {
  categories: string[]; // Lista de nombres de categorías
  products: SeedProduct[]; // Lista de productos a sembrar en la base de datos
  users: SeedUser[];
  countries: SeedCountry[];
}

// ?? TODO: Reever toda esta data y actualizarla
export const initialData: SeedData = {
  categories: ['Cartuchos', 'Impresoras', 'Accesorios', 'Calderas'],

  products: [
    {
      title: 'Cartucho de tinta HP 63',
      description: 'Cartucho de tinta original HP 63',
      price: 100,
      color: 'black',
      inStock: 100,
      slug: 'cartucho-de-tinta-hp-63',
      tags: ['HP', '63', 'Tinta'],
      images: ['placeholder.jpg', 'starman_750x750.jpg'],
    },
    {
      title: 'Cartucho de tinta HP 2',
      description: 'Cartucho de tinta original HP 2',
      price: 102,
      color: 'black',
      inStock: 98,
      slug: 'cartucho-de-tinta-hp-2',
      tags: ['HP', '2', 'Tinta'],
      images: ['placeholder.jpg', 'starman_750x750.jpg'],
    },
    {
      title: 'Cartucho de tinta HP 3',
      description: 'Cartucho de tinta original HP 3',
      price: 103,
      color: 'magenta',
      inStock: 97,
      slug: 'cartucho-de-tinta-hp-3',
      tags: ['HP', '3', 'Tinta'],
      images: ['placeholder.jpg', 'starman_750x750.jpg'],
    },
    {
      title: 'Cartucho de tinta HP 4',
      description: 'Cartucho de tinta original HP 4',
      price: 104,
      color: 'black',
      inStock: 96,
      slug: 'cartucho-de-tinta-hp-4',
      tags: ['HP', '4', 'Tinta'],
      images: ['placeholder.jpg', 'starman_750x750.jpg'],
    },
    {
      title: 'Cartucho de tinta HP 5',
      description: 'Cartucho de tinta original HP 5',
      price: 105,
      color: 'magenta',
      inStock: 95,
      slug: 'cartucho-de-tinta-hp-5',
      tags: ['HP', '5', 'Tinta'],
      images: ['placeholder.jpg', 'starman_750x750.jpg'],
    },
    {
      title: 'Cartucho de tinta HP 6',
      description: 'Cartucho de tinta original HP 6',
      price: 106,
      color: 'black',
      inStock: 94,
      slug: 'cartucho-de-tinta-hp-6',
      tags: ['HP', '6', 'Tinta'],
      images: ['placeholder.jpg', 'starman_750x750.jpg'],
    },
    {
      title: 'Cartucho de tinta HP 7',
      description: 'Cartucho de tinta original HP 7',
      price: 107,
      color: 'blue',
      inStock: 93,
      slug: 'cartucho-de-tinta-hp-7',
      tags: ['HP', '7', 'Tinta'],
      images: ['placeholder.jpg', 'starman_750x750.jpg'],
    },
    {
      title: 'Cartucho de tinta HP 8',
      description: 'Cartucho de tinta original HP 8',
      price: 108,
      color: 'black',
      inStock: 92,
      slug: 'cartucho-de-tinta-hp-8',
      tags: ['HP', '8', 'Tinta'],
      images: ['placeholder.jpg', 'starman_750x750.jpg'],
    },
    {
      title: 'Cartucho de tinta HP 9',
      description: 'Cartucho de tinta original HP 9',
      price: 109,
      color: 'red',
      inStock: 91,
      slug: 'cartucho-de-tinta-hp-9',
      tags: ['HP', '9', 'Tinta'],
      images: ['placeholder.jpg', 'starman_750x750.jpg'],
    },
    {
      title: 'Cartucho de tinta HP 10',
      description: 'Cartucho de tinta original HP 10',
      price: 110,
      color: 'black',
      inStock: 90,
      slug: 'cartucho-de-tinta-hp-10',
      tags: ['HP', '10', 'Tinta'],
      images: ['placeholder.jpg', 'starman_750x750.jpg'],
    },
    {
      title: 'Cartucho de tinta HP 11',
      description: 'Cartucho de tinta original HP 11',
      price: 111,
      color: 'yellow',
      inStock: 89,
      slug: 'cartucho-de-tinta-hp-11',
      tags: ['HP', '11', 'Tinta'],
      images: ['placeholder.jpg', 'starman_750x750.jpg'],
    },
    {
      title: 'Cartucho de tinta HP 12',
      description: 'Cartucho de tinta original HP 12',
      price: 112,
      color: 'black',
      inStock: 88,
      slug: 'cartucho-de-tinta-hp-12',
      tags: ['HP', '12', 'Tinta'],
      images: ['placeholder.jpg', 'starman_750x750.jpg'],
    },
    {
      title: 'Cartucho de tinta HP 13',
      description: 'Cartucho de tinta original HP 13',
      price: 113,
      color: 'magenta',
      inStock: 87,
      slug: 'cartucho-de-tinta-hp-13',
      tags: ['HP', '13', 'Tinta'],
      images: ['placeholder.jpg', 'starman_750x750.jpg'],
    },
    {
      title: 'Cartucho de tinta HP 14',
      description: 'Cartucho de tinta original HP 14',
      price: 114,
      color: 'black',
      inStock: 86,
      slug: 'cartucho-de-tinta-hp-14',
      tags: ['HP', '14', 'Tinta'],
      images: ['placeholder.jpg', 'starman_750x750.jpg'],
    },
    {
      title: 'Cartucho de tinta HP 15',
      description: 'Cartucho de tinta original HP 15',
      price: 115,
      color: 'blue',
      inStock: 85,
      slug: 'cartucho-de-tinta-hp-15',
      tags: ['HP', '15', 'Tinta'],
      images: ['placeholder.jpg', 'starman_750x750.jpg'],
    },
    {
      title: 'Cartucho de tinta HP 16',
      description: 'Cartucho de tinta original HP 16',
      price: 116,
      color: 'black',
      inStock: 84,
      slug: 'cartucho-de-tinta-hp-16',
      tags: ['HP', '16', 'Tinta'],
      images: ['placeholder.jpg', 'starman_750x750.jpg'],
    },
    {
      title: 'Cartucho de tinta HP 17',
      description: 'Cartucho de tinta original HP 17',
      price: 117,
      color: 'yellow',
      inStock: 83,
      slug: 'cartucho-de-tinta-hp-17',
      tags: ['HP', '17', 'Tinta'],
      images: ['placeholder.jpg', 'starman_750x750.jpg'],
    },
    {
      title: 'Cartucho de tinta HP 18',
      description: 'Cartucho de tinta original HP 18',
      price: 118,
      color: 'black',
      inStock: 82,
      slug: 'cartucho-de-tinta-hp-18',
      tags: ['HP', '18', 'Tinta'],
      images: ['placeholder.jpg', 'starman_750x750.jpg'],
    },
    {
      title: 'Cartucho de tinta HP 19',
      description: 'Cartucho de tinta original HP 19',
      price: 119,
      color: 'magenta',
      inStock: 81,
      slug: 'cartucho-de-tinta-hp-19',
      tags: ['HP', '19', 'Tinta'],
      images: ['placeholder.jpg', 'starman_750x750.jpg'],
    },
    {
      title: 'Cartucho de tinta HP 20',
      description: 'Cartucho de tinta original HP 20',
      price: 120,
      color: 'black',
      inStock: 80,
      slug: 'cartucho-de-tinta-hp-20',
      tags: ['HP', '20', 'Tinta'],
      images: ['placeholder.jpg', 'starman_750x750.jpg'],
    },
    {
      title: 'Cartucho de tinta HP 21',
      description: 'Cartucho de tinta original HP 21',
      price: 121,
      color: 'blue',
      inStock: 79,
      slug: 'cartucho-de-tinta-hp-21',
      tags: ['HP', '21', 'Tinta'],
      images: ['placeholder.jpg', 'starman_750x750.jpg'],
    },
    {
      title: 'Cartucho de tinta HP 22',
      description: 'Cartucho de tinta original HP 22',
      price: 122,
      color: 'black',
      inStock: 78,
      slug: 'cartucho-de-tinta-hp-22',
      tags: ['HP', '22', 'Tinta'],
      images: ['placeholder.jpg', 'starman_750x750.jpg'],
    },
    {
      title: 'Cartucho de tinta HP 23',
      description: 'Cartucho de tinta original HP 23',
      price: 123,
      color: 'red',
      inStock: 77,
      slug: 'cartucho-de-tinta-hp-23',
      tags: ['HP', '23', 'Tinta'],
      images: ['placeholder.jpg', 'starman_750x750.jpg'],
    },
    {
      title: 'Cartucho de tinta HP 24',
      description: 'Cartucho de tinta original HP 24',
      price: 124,
      color: 'black',
      inStock: 76,
      slug: 'cartucho-de-tinta-hp-24',
      tags: ['HP', '24', 'Tinta'],
      images: ['placeholder.jpg', 'starman_750x750.jpg'],
    },
    {
      title: 'Cartucho de tinta HP 25',
      description: 'Cartucho de tinta original HP 25',
      price: 125,
      color: 'magenta',
      inStock: 75,
      slug: 'cartucho-de-tinta-hp-25',
      tags: ['HP', '25', 'Tinta'],
      images: ['placeholder.jpg', 'starman_750x750.jpg'],
    },
    {
      title: 'Cartucho de tinta HP 26',
      description: 'Cartucho de tinta original HP 26',
      price: 126,
      color: 'black',
      inStock: 74,
      slug: 'cartucho-de-tinta-hp-26',
      tags: ['HP', '26', 'Tinta'],
      images: ['placeholder.jpg', 'starman_750x750.jpg'],
    },
    {
      title: 'Cartucho de tinta HP 27',
      description: 'Cartucho de tinta original HP 27',
      price: 127,
      color: 'yellow',
      inStock: 73,
      slug: 'cartucho-de-tinta-hp-27',
      tags: ['HP', '27', 'Tinta'],
      images: ['placeholder.jpg', 'starman_750x750.jpg'],
    },
    {
      title: 'Cartucho de tinta HP 28',
      description: 'Cartucho de tinta original HP 28',
      price: 128,
      color: 'black',
      inStock: 72,
      slug: 'cartucho-de-tinta-hp-28',
      tags: ['HP', '28', 'Tinta'],
      images: ['placeholder.jpg', 'starman_750x750.jpg'],
    },
    {
      title: 'Cartucho de tinta HP 29',
      description: 'Cartucho de tinta original HP 29',
      price: 129,
      color: 'black',
      inStock: 71,
      slug: 'cartucho-de-tinta-hp-29',
      tags: ['HP', '29', 'Tinta'],
      images: ['placeholder.jpg', 'starman_750x750.jpg'],
    },
    {
      title: 'Cartucho de tinta HP 30',
      description: 'Cartucho de tinta original HP 30',
      price: 130,
      color: 'black',
      inStock: 70,
      slug: 'cartucho-de-tinta-hp-30',
      tags: ['HP', '30', 'Tinta'],
      images: ['placeholder.jpg', 'starman_750x750.jpg'],
    },
  ],

  users: [
    {
      email: 'user-user@gmail.com',
      password: bcryptjs.hashSync('123456'),
      role: 'user',
      name: 'User User',
    },
    {
      email: 'user-admin@gmail.com',
      password: bcryptjs.hashSync('123456'),
      role: 'admin',
      name: 'User Admin',
    },
  ],

  countries: countries,
};
