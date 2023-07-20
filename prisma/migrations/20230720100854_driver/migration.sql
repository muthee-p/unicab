-- CreateTable
CREATE TABLE "Driver" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "brand" TEXT,
    "model" TEXT,
    "year" INTEGER NOT NULL,
    "licensePlate" TEXT,
    "color" TEXT NOT NULL,
    "nationalId" INTEGER NOT NULL,
    "driverLicense" TEXT,
    "passportUpload" TEXT,
    "idUpload" TEXT,
    "licenseUpload" TEXT,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Driver_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Driver" ADD CONSTRAINT "Driver_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
