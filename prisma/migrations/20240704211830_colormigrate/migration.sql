/*
  Warnings:

  - The values [BLUE,RED,YELLLOW,BLACK,MAGENTA] on the enum `Color` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Color_new" AS ENUM ('blue', 'red', 'yellow', 'black', 'magenta');
ALTER TABLE "Product" ALTER COLUMN "color" TYPE "Color_new" USING ("color"::text::"Color_new");
ALTER TABLE "OrderItem" ALTER COLUMN "color" TYPE "Color_new" USING ("color"::text::"Color_new");
ALTER TYPE "Color" RENAME TO "Color_old";
ALTER TYPE "Color_new" RENAME TO "Color";
DROP TYPE "Color_old";
COMMIT;
