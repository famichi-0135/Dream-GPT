/*
  Warnings:

  - A unique constraint covering the columns `[uniqueId]` on the table `Plans` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "public"."Plans_userId_key";

-- CreateIndex
CREATE UNIQUE INDEX "Plans_uniqueId_key" ON "public"."Plans"("uniqueId");
