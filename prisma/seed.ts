import prisma from "@/database";

async function main() {
    await prisma.message.createMany({
        skipDuplicates: true,
        data: [
            {
                text: "Olá meus amigos e amigas! Vencemos mais um desafio!"
            }
        ]
    })

}

main().then(async () => {
    await prisma.$disconnect();
}).catch(async (e) =>{
    console.log(e);
    await prisma.$disconnect();
    process.exit(1);
});
