/*
  Warnings:

  - Added the required column `calc_id` to the `calc_output` table without a default value. This is not possible if the table is not empty.
  - Added the required column `structure_limit_horizontal_distance` to the `calc_output` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "calc_output" ADD COLUMN     "calc_id" TEXT NOT NULL,
ADD COLUMN     "structure_limit_horizontal_distance" DOUBLE PRECISION NOT NULL;

-- AddForeignKey
ALTER TABLE "calc_output" ADD CONSTRAINT "calc_output_calc_id_fkey" FOREIGN KEY ("calc_id") REFERENCES "calc"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
