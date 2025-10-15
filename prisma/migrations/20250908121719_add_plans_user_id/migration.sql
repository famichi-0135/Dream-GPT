/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `Plans` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `Plans` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Plans" ADD COLUMN     "userId" UUID NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Plans_userId_key" ON "public"."Plans"("userId");
