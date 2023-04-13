/*
  Warnings:

  - You are about to drop the column `expiration` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `payment_method` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `plan_id` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `plan_status` on the `users` table. All the data in the column will be lost.
  - You are about to drop the `charge` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[external_id]` on the table `plans` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[external_id]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "charge" DROP CONSTRAINT "charge_plan_id_fkey";

-- DropForeignKey
ALTER TABLE "charge" DROP CONSTRAINT "charge_user_id_fkey";

-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_plan_id_fkey";

-- AlterTable
ALTER TABLE "plans" ADD COLUMN     "external_id" TEXT NOT NULL DEFAULT E'default-${uuid()}';

-- AlterTable
ALTER TABLE "users" DROP COLUMN "expiration",
DROP COLUMN "payment_method",
DROP COLUMN "plan_id",
DROP COLUMN "plan_status",
ADD COLUMN     "external_id" TEXT NOT NULL DEFAULT E'default-${uuid()}';

-- DropTable
DROP TABLE "charge";

-- DropEnum
DROP TYPE "PlanPaymentMethods";

-- CreateTable
CREATE TABLE "subscription" (
    "id" TEXT NOT NULL,
    "external_id" TEXT NOT NULL DEFAULT E'default-${uuid()}',
    "value" DOUBLE PRECISION NOT NULL,
    "user_id" TEXT NOT NULL,
    "plan_id" TEXT NOT NULL,
    "expiration" TEXT NOT NULL,
    "plan_status" "UserPlanStatus",
    "active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "subscription_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "payment" (
    "id" TEXT NOT NULL,
    "external_id" TEXT NOT NULL DEFAULT E'default-${uuid()}',
    "value" DOUBLE PRECISION NOT NULL,
    "user_id" TEXT NOT NULL,
    "subscription_id" TEXT NOT NULL,
    "payment_date" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "payment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "subscription_external_id_key" ON "subscription"("external_id");

-- CreateIndex
CREATE UNIQUE INDEX "payment_external_id_key" ON "payment"("external_id");

-- CreateIndex
CREATE UNIQUE INDEX "plans_external_id_key" ON "plans"("external_id");

-- CreateIndex
CREATE UNIQUE INDEX "users_external_id_key" ON "users"("external_id");

-- AddForeignKey
ALTER TABLE "subscription" ADD CONSTRAINT "subscription_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "subscription" ADD CONSTRAINT "subscription_plan_id_fkey" FOREIGN KEY ("plan_id") REFERENCES "plans"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payment" ADD CONSTRAINT "payment_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payment" ADD CONSTRAINT "payment_subscription_id_fkey" FOREIGN KEY ("subscription_id") REFERENCES "subscription"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
