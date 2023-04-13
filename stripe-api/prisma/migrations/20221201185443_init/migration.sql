-- AlterTable
ALTER TABLE "users" ADD COLUMN     "payment_date" TIMESTAMP(3),
ADD COLUMN     "payment_method" "PlanPaymentMethods";
