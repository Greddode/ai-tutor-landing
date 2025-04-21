import { PrismaClient } from "@prisma/client"
import { hash } from "bcryptjs"

const prisma = new PrismaClient()

async function main() {
  const email = process.env.ADMIN_EMAIL
  const password = process.env.ADMIN_PASSWORD

  if (!email || !password) {
    console.error("Please set ADMIN_EMAIL and ADMIN_PASSWORD environment variables")
    process.exit(1)
  }

  const hashedPassword = await hash(password, 12)

  try {
    const admin = await prisma.user.upsert({
      where: { email },
      update: {
        password: hashedPassword,
        role: "ADMIN",
      },
      create: {
        email,
        password: hashedPassword,
        role: "ADMIN",
        name: "Admin",
      },
    })

    console.log("Admin user created/updated successfully:", admin.email)
  } catch (error) {
    console.error("Error creating admin user:", error)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}

main() 