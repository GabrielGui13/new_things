-- AlterTable
ALTER TABLE "calc" ADD COLUMN     "technical_report" TEXT DEFAULT E'';

-- AlterTable
ALTER TABLE "calc" ALTER COLUMN "technical_report" SET NOT NULL,
ALTER COLUMN "technical_report" DROP DEFAULT;