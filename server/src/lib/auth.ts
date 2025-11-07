import { betterAuth } from 'better-auth';
import { prismaAdapter } from 'better-auth/adapters/prisma';
import prisma from './prisma.js';
import 'dotenv/config';

export const auth = betterAuth({
    secret: process.env.BETTER_AUTH_SECRET as string,
    database: prismaAdapter(prisma, {
        provider: 'postgresql',
    }),
    emailAndPassword: {
        enabled: true,
        requireEmailVerification: true,
    },
    trustedOrigins: [process.env.FRONTEND_URL as string],
});
