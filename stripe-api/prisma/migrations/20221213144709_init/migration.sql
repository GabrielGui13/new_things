/*
  Warnings:

  - Made the column `ae_limit_height` on table `calc_output` required. This step will fail if there are existing NULL values in that column.
  - Made the column `ae_limit_horizontal_distance` on table `calc_output` required. This step will fail if there are existing NULL values in that column.

*/
-- UpdateTable
UPDATE "calc_output" SET "ae_limit_height" = 0 WHERE "ae_limit_height" IS NULL;
UPDATE "calc_output" SET "ae_limit_horizontal_distance" = 0 WHERE "ae_limit_horizontal_distance" IS NULL;
-- AlterTable
ALTER TABLE "calc_output" ALTER COLUMN "ae_limit_height" SET NOT NULL,
ALTER COLUMN "ae_limit_horizontal_distance" SET NOT NULL;
