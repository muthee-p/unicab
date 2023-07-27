import prisma from "@lib/prisma";

interface RequestBody {
  name: string;
  email: string;
  phoneNumber: string;
  brand: string;
  model: string;
  year: number;
  licensePlate: string;
  color: string;
  nationalId: string;
  driverLicense: string;
  passportUpload: string;
  idUpload: string;
  licenseUpload: string;
  userId: string;
}

export async function POST(request: Request) {
  try {
    const body: RequestBody = await request.json();

    

    const createdDriver = await prisma.driver.create({
      data: {
        name: body.name,
        email: body.email,
        phoneNumber: body.phoneNumber,
        brand: body.brand,
        model: body.model,
        year: body.year,
        licensePlate: body.licensePlate,
        color: body.color,
        nationalId: body.nationalId,
        driverLicense: body.driverLicense,
        passportUpload: body.passportUpload,
        idUpload: body.idUpload,
        licenseUpload: body.licenseUpload,
        userId: body.userId
      },
    });

    if (!createdDriver) {
      throw new Error("Failed to create driver");
    }

   
    return new Response(JSON.stringify(createdDriver));
  } catch (error) {
    console.error(error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
