/*
  Warnings:

  - Made the column `brand` on table `Driver` required. This step will fail if there are existing NULL values in that column.
  - Made the column `model` on table `Driver` required. This step will fail if there are existing NULL values in that column.
  - Made the column `licensePlate` on table `Driver` required. This step will fail if there are existing NULL values in that column.
  - Made the column `driverLicense` on table `Driver` required. This step will fail if there are existing NULL values in that column.
  - Made the column `passportUpload` on table `Driver` required. This step will fail if there are existing NULL values in that column.
  - Made the column `idUpload` on table `Driver` required. This step will fail if there are existing NULL values in that column.
  - Made the column `licenseUpload` on table `Driver` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Driver" ALTER COLUMN "brand" SET NOT NULL,
ALTER COLUMN "model" SET NOT NULL,
ALTER COLUMN "year" SET DATA TYPE TEXT,
ALTER COLUMN "licensePlate" SET NOT NULL,
ALTER COLUMN "nationalId" SET DATA TYPE TEXT,
ALTER COLUMN "driverLicense" SET NOT NULL,
ALTER COLUMN "passportUpload" SET NOT NULL,
ALTER COLUMN "idUpload" SET NOT NULL,
ALTER COLUMN "licenseUpload" SET NOT NULL;
