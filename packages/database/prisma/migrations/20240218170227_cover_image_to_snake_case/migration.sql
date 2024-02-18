/*
  Warnings:

  - You are about to drop the column `coverImage` on the `projects` table. All the data in the column will be lost.
  - Added the required column `cover_image` to the `projects` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "projects" DROP COLUMN "coverImage",
ADD COLUMN     "cover_image" TEXT NOT NULL;
