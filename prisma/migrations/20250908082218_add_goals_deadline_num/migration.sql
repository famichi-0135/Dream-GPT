/*
  Warnings:

  - Added the required column `deadlineNum` to the `Goals` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Goals" ADD COLUMN     "deadlineNum" INTEGER NOT NULL;
