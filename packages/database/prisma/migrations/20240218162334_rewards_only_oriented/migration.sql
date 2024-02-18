/*
  Warnings:

  - You are about to drop the column `tierId` on the `rewards` table. All the data in the column will be lost.
  - You are about to drop the `tiers` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `amount` to the `rewards` table without a default value. This is not possible if the table is not empty.
  - Added the required column `projectId` to the `rewards` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "rewards" DROP CONSTRAINT "rewards_tierId_fkey";

-- DropForeignKey
ALTER TABLE "tiers" DROP CONSTRAINT "tiers_projectId_fkey";

-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_tierId_fkey";

-- AlterTable
ALTER TABLE "rewards" DROP COLUMN "tierId",
ADD COLUMN     "amount" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "projectId" TEXT NOT NULL;

-- DropTable
DROP TABLE "tiers";

-- CreateTable
CREATE TABLE "_RewardToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_RewardToUser_AB_unique" ON "_RewardToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_RewardToUser_B_index" ON "_RewardToUser"("B");

-- AddForeignKey
ALTER TABLE "rewards" ADD CONSTRAINT "rewards_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "projects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RewardToUser" ADD CONSTRAINT "_RewardToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "rewards"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RewardToUser" ADD CONSTRAINT "_RewardToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
