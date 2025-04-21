import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Create a test user
  const user = await prisma.user.create({
    data: {
      email: 'test@example.com',
      name: 'Test User',
      password: 'test123', // In production, this should be hashed
    },
  })
  console.log('Created test user:', user)

  // Query the user
  const foundUser = await prisma.user.findUnique({
    where: { email: 'test@example.com' },
  })
  console.log('Found user:', foundUser)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  }) 