/*
  Warnings:

  - Added the required column `project_class_radius` to the `calc` table without a default value. This is not possible if the table is not empty.
  - Added the required column `version` to the `calc` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dpc` to the `calc_output` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hc_aux` to the `calc_output` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "calc" ADD COLUMN     "project_class_radius" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "version" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "calc_output" ADD COLUMN     "dpc" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "hc_aux" DOUBLE PRECISION NOT NULL;
