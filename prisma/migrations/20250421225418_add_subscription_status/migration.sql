/*
  Warnings:

  - The `status` column on the `Subscription` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "SubscriptionStatus" AS ENUM ('INACTIVE', 'ACTIVE', 'CANCELLED', 'PAST_DUE');

-- CreateEnum
CREATE TYPE "SubscriptionTier" AS ENUM ('SUPPORTER', 'PATRON', 'BENEFACTOR');

-- AlterTable
ALTER TABLE "Subscription" ADD COLUMN     "tier" "SubscriptionTier",
DROP COLUMN "status",
ADD COLUMN     "status" "SubscriptionStatus" NOT NULL DEFAULT 'INACTIVE';
