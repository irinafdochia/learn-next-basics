import { prisma } from '../lib/prisma'

async function main() {
    const task1 = await prisma.task.createMany({
        data: [
            {
                label: "Fare la spesa",
                doneStatus: false
            },
            {
                label: "Pulire casa",
                doneStatus: false
            },

        ]
    })
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })