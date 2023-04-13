/*
  Warnings:

  - Made the column `norm_id` on table `projects` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "projects" DROP CONSTRAINT "projects_norm_id_fkey";

-- AlterTable
ALTER TABLE "projects" ALTER COLUMN "norm_id" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "projects" ADD CONSTRAINT "projects_norm_id_fkey" FOREIGN KEY ("norm_id") REFERENCES "norm"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
