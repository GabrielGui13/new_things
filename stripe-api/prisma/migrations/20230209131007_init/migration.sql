-- AlterTable
ALTER TABLE "plans" ADD COLUMN     "price_external_id" TEXT NOT NULL DEFAULT E'default-price-${uuid()}';
