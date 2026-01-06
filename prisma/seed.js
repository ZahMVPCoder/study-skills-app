import 'dotenv/config'
import { prisma } from './client.js'
import bcrypt from 'bcryptjs'

async function main() {
    console.log('Start seeding...')
    // Define users to create
    const users = [
        {
            name: 'Rob',
            email: 'rob@launchpadphilly.org',
            password: 'lpuser1',
            role: 'instructor',
        },
        {
            name: 'Sanaa',
            email: 'sanaa@launchpadphilly.org',
            password: 'lpuser2',
            role: 'instructor',
        },
        {
            name: 'Taheera',
            email: 'taheera@launchpadphilly.org',
            password: 'lpuser3',
            role: 'instructor',
        },
        {
            name: 'Zahir',
            email: 'zalst0056@launchpadphilly.org',
            password: 'lpuser4',
            role: 'coach',
        }
    ]
    // Create each user
    for (const userData of users) {
        const hashedPassword = await bcrypt.hash(userData.password, 12)
        const user = await prisma.user.upsert({
            where: { email: userData.email },
            update: {
                password: hashedPassword,
                name: userData.name,
                role: userData.role,
            },
            create: {
                email: userData.email,
                name: userData.name,
                password: hashedPassword,
                role: userData.role,
            },
        })
        console.log(`Created user: ${user.name} (${user.email})`)
    }
    console.log('Seeding finished.')
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
