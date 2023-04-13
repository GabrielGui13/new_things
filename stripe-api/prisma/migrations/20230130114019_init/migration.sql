-- AlterTable
ALTER TABLE "subscription" ADD COLUMN     "completed" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "active" SET DEFAULT false;
