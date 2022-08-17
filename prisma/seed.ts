import prisma from "../src/config/db.js";

async function main() {

    console.warn("Seeding database...");

    /*
    const visits = [{
            id: 0,
            count: 0,
        }
    ]
    await prisma.visits.createMany({ data: visits }); */
};

main().catch((e) => {

    console.log(e);
    process.exit(1);

}).finally(async () => await prisma.$disconnect());