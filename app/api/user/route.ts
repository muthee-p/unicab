import prisma from "@lib/prisma";
import * as bcrypt from "bcrypt";

interface RequestBody {
  name: string;
  email: string;
  password: string;
}

export async function POST(request: Request) {
  try {
    const body: RequestBody = await request.json();

    const hashedPassword = await bcrypt.hash(body.password, 10);

    const createdUser = await prisma.user.create({
      data: {
        name: body.name,
        email: body.email,
        password: hashedPassword,
      },
    });

    if (!createdUser) {
      throw new Error("Failed to create user");
    }

    const { password, ...result } = createdUser;
    return new Response(JSON.stringify(result));
  } catch (error) {
    console.error(error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
