/*
  Warnings:

  - You are about to drop the `cards` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "cards" DROP CONSTRAINT "cards_user_id_fkey";

-- DropTable
DROP TABLE "cards";
