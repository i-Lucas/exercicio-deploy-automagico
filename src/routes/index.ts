import { Router } from 'express';
import prisma from "../config/db.js";

const AppRoutes = Router();

AppRoutes.post('/', async (req, res) => {

    await prisma.visits.upsert({
        where: { id: 0 },
        create: { id: 0, count: 1 },
        update: { count: { increment: 1 } }
    })
    res.send('Olá, T5!');
});

AppRoutes.get('/', async (req, res) => {
    const result = await prisma.visits.findUnique({ where: { id: 0 } });
    res.send({ count : result.count });
});

export default AppRoutes;