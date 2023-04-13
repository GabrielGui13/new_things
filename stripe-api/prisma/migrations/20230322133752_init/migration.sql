-- AlterTable
ALTER TABLE "payment" ALTER COLUMN "external_id" SET DEFAULT E'default-payment-${uuid()}';

-- AlterTable
ALTER TABLE "subscription" ALTER COLUMN "external_id" SET DEFAULT E'default-subscription-${uuid()}';
