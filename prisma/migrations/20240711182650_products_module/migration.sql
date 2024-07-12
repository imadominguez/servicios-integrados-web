-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "discount" INTEGER,
ADD COLUMN     "inDiscount" BOOLEAN NOT NULL DEFAULT false;
