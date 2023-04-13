/*
  Warnings:

  - You are about to drop the column `length` on the `structure` table. All the data in the column will be lost.
  - Added the required column `number` to the `structure` table without a default value. This is not possible if the table is not empty.
  - Added the required column `width` to the `structure` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "structure" DROP COLUMN "length",
ADD COLUMN     "number" INTEGER NOT NULL,
ADD COLUMN     "width" DOUBLE PRECISION NOT NULL;
