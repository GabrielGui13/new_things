-- AlterTable
ALTER TABLE "calc_output" ADD COLUMN     "diagnostic_is_valid" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "diagnostic_message" TEXT;
