-- DropForeignKey
ALTER TABLE "projects" DROP CONSTRAINT "projects_norm_id_fkey";

-- AlterTable
ALTER TABLE "projects" ALTER COLUMN "norm_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "projects" ADD CONSTRAINT "projects_norm_id_fkey" FOREIGN KEY ("norm_id") REFERENCES "norm"("id") ON DELETE SET NULL ON UPDATE CASCADE;
