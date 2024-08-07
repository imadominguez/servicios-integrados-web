// Importa la instancia de Prisma y los datos de prueba
import prisma from '../lib/prisma';
import { initialData } from './seed';
import { Category } from '@prisma/client';

// Función principal para sembrar la base de datos
async function main() {
  // Borrar registros existentes en orden inverso para evitar problemas de restricciones de clave externa

  await prisma.orderAddress.deleteMany();
  await prisma.orderItem.deleteMany();
  await prisma.order.deleteMany();
  await prisma.userAddress.deleteMany();
  await prisma.productImage.deleteMany();
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();
  await prisma.user.deleteMany();
  await prisma.country.deleteMany();
  console.log('✅ Registros borrados');
  // Obtén los datos de prueba
  const { categories, products, users, countries } = initialData;

  // Crea registros de categorías
  const categoriesData = categories.map(category => ({
    name: category,
  }));
  await prisma.category.createMany({
    data: categoriesData,
  });

  // Obtiene las categorías desde la base de datos
  const categoriesDB = await prisma.category.findMany();
  // Crea un mapa para asignar nombres de categorías a identificadores de base de datos

  // Crea registros de productos con imágenes y categorías asignadas aleatoriamente
  for (let i = 0; i < products.length; i++) {
    const newProduct = await prisma.product.create({
      data: {
        title: `Producto ${i + 1}`,
        description: `Descripción del producto ${i + 1}`,
        price: Math.floor(Math.random() * 1000),
        color: 'black',
        inStock: Math.floor(Math.random() * 100),
        slug: `producto-${i + 1}`,
        categoryId:
          categoriesDB[Math.floor(Math.random() * categoriesDB.length)].id,
        tags: ['tag1', 'tag2'],
        images: [...(products[i].images ?? [])] || [],
      },
    });
  }
  console.log('✅ Productos creados');
  users.forEach(async user => {
    await prisma.user.create({
      data: user,
    });
  });
  console.log('✅ Usuarios creados');

  countries.forEach(async country => {
    await prisma.country.create({
      data: country,
    });
  });
  console.log('✅ Countries creados');

  console.log(' ');
  console.log('✅ Seed ejecutado con éxito');
}

// Ejecuta la función main solo si no estamos en un entorno de producción
(() => {
  if (process.env.NODE_ENV === 'production') return;
  main();
})();
