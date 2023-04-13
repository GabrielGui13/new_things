/*
  Warnings:

  - You are about to drop the column `license_number_type` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "license_number_type",
ADD COLUMN     "license_type" TEXT;
