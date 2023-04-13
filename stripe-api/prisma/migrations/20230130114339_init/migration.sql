/*
  Warnings:

  - Made the column `plan_status` on table `subscription` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "subscription" ALTER COLUMN "plan_status" SET NOT NULL,
ALTER COLUMN "plan_status" SET DEFAULT E'PENDENTE';
