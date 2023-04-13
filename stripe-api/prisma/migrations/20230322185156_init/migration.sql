-- AlterTable
ALTER TABLE "payment" ALTER COLUMN "external_id" DROP DEFAULT;

-- AlterTable
ALTER TABLE "plans" ALTER COLUMN "external_id" DROP DEFAULT,
ALTER COLUMN "price_external_id" DROP DEFAULT;

-- AlterTable
ALTER TABLE "subscription" ALTER COLUMN "external_id" DROP DEFAULT;
