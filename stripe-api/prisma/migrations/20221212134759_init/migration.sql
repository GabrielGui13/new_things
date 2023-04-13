/*
  Warnings:

  - A unique constraint covering the columns `[calc_id]` on the table `calc_output` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "calc" ADD COLUMN     "calc_output_id" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "calc_output_calc_id_key" ON "calc_output"("calc_id");
