/*
  Warnings:

  - You are about to drop the column `walletAddress` on the `users` table. All the data in the column will be lost.
  - Added the required column `wallet_address` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "walletAddress",
ADD COLUMN     "wallet_address" TEXT NOT NULL;
