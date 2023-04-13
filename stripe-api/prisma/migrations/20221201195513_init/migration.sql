/*
  Warnings:

  - You are about to drop the column `payment_date` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "payment_date",
ADD COLUMN     "expiration" TEXT;

-- CreateTable
CREATE TABLE "cards" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "holder_name" TEXT NOT NULL,
    "flag" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expiration" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "cards_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "cards" ADD CONSTRAINT "cards_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
