### Servicios Integrados E-commerce

## Descripcion

Bienvenido al proyecto de e-commerce de Servicios Integrados. Este proyecto está diseñado para ofrecer productos tecnológicos a través de una plataforma en línea. Utiliza las últimas tecnologías para garantizar un rendimiento óptimo y una experiencia de usuario excepcional.

## Tecnologías Utilizadas

- **Next.js**: Un framework de React para aplicaciones web modernas.
- **TypeScript**: Un superset de JavaScript que añade tipos estáticos y mejoras de desarrollo.
- **Prisma**: Un ORM moderno y seguro para Node.js y TypeScript que simplifica la interacción con la base de datos.
- **shadcn/ui**: Una biblioteca de componentes UI para construir interfaces de usuario consistentes y accesibles.
- **Resend.js**: Una biblioteca para el manejo y envío de correos electrónicos de manera sencilla y eficiente.
- **Docker**: Utilizado para contenerizar y gestionar el backend de manera eficiente.

## Cómo comenzar en desarrollo

Sigue estos pasos para configurar el proyecto en tu entorno de desarrollo:

1. Clonar el repositorio `git clone https://github.com/tu-usuario/servicios-integrados-ecommerce.git`, y luego `cd servicios-integrados-ecommerce`

2. Configura las variables de entorno:

   - Crea una copia del archivo `.env.template` y renómbralo a `.env`.
   - Modifica las variables de entorno según tus necesidades.

3. Instala las dependencias: `npm install` o `yarn install`

4. Abre Docker Desktop y levanta la base de datos con: `docker compose up -d`

5. Ejecuta las migraciones de Prisma: `npx prisma migrate dev`

6. Ejecuta el seed `npm run seed`

7. Inicia el proyecto en modo desarrollo: `npm run dev`

8. Limpiar localStorage, sessionStorage y Cookies del navegador

## Cuentas registradas en el seed

### Cuenta de administrador

- **Usuario:** user-admin@gmail.com
- **Contraseña:** 123456

### Cuenta de cliente

- **Usuario:** user-user@gmail.com
- **Contraseña:** 123456

<!-- ## Acceso a la Pasarela de Pagos de PayPal en Modo de Prueba

Para probar el pago a través de la pasarela de pagos en modo de prueba, puedes utilizar la siguiente cuenta de PayPal:

- **Usuario:** sb-opbsh29468904@personal.example.com
- **Contraseña:** Abc123456

Utiliza esta cuenta para realizar pruebas de pago y verificar la funcionalidad de la pasarela de pagos en el entorno de desarrollo de Teslo-Shop. Recuerda que esta cuenta es exclusivamente para pruebas y no debe utilizarse en un entorno de producción. -->

## Acceso al Dashboard

Una vez hayas iniciado sesión como administrador, podrás acceder al Dashboard directamente desde el menú de navegación principal. Simplemente sigue estos pasos:

1. Inicia sesión con la cuenta de administrador utilizando las credenciales proporcionadas en la sección anterior.

2. Una vez dentro de la aplicación, observa el menú de navegación. Encontrarás una sección etiquetada como "Dashboard".

3. Haz clic en la opción correspondiente al Dashboard. Esto te llevará a la sección donde podrás administrar los productos, órdenes y usuarios de Servicios Integrados Web de manera centralizada y eficiente.

¡Explora las capacidades del Dashboard y aprovecha al máximo la administración de Servicios Integrados Web como un verdadero administrador! 🚀🔧
