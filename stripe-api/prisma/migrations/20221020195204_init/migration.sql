/*
  Warnings:

  - You are about to drop the column `subscription_id` on the `users` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "UserPlanStatus" AS ENUM ('PENDENTE', 'ATRASADO', 'PAGO');

-- CreateEnum
CREATE TYPE "PlanPaymentMethods" AS ENUM ('CARTAO_CREDITO', 'CARTAO_DEBITO', 'BOLETO', 'PIX');

-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_subscription_id_fkey";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "subscription_id",
ADD COLUMN     "plan_id" TEXT,
ADD COLUMN     "plan_status" "UserPlanStatus";

-- CreateTable
CREATE TABLE "charge" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "plan_id" TEXT NOT NULL,
    "payment_date" TIMESTAMP(3),
    "payment_method" "PlanPaymentMethods",
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "charge_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_plan_id_fkey" FOREIGN KEY ("plan_id") REFERENCES "plans"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "charge" ADD CONSTRAINT "charge_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "charge" ADD CONSTRAINT "charge_plan_id_fkey" FOREIGN KEY ("plan_id") REFERENCES "plans"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
