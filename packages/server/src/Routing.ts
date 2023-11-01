import { initTRPC } from '@trpc/server';
import Song from '../db/models/Songs';
import Category from '../db/models/Categories';
import User from '../db/models/Users';
import List from '../db/models/Lists';
import superjson from 'superjson';
import { z } from 'zod';

const trpc = initTRPC.create({ transformer: superjson });

const loggerMiddleware = trpc.middleware(async (opts) => {
    const start = Date.now();
    
    const result = await opts.next();
    
    const durationMs = Date.now() - start;
    const meta = { path: opts.path, type: opts.type, durationMs };
    
    result.ok
        ? console.log(`OK request timing: ${JSON.stringify(meta)}`, 'TRPC')
        : console.log(`Non-OK request timing: ${meta}`, 'TRPC');
    
    return result;
});

const publicProcedure = trpc.procedure.use(loggerMiddleware);
export const router = trpc.router

const songRouter = router({
    create: publicProcedure
        .input(
            z.object({
                id: z.number(),
                category: z.number(),
                name: z.string(),
                saved: z.number()
            }),
        )
        .query(async ({ input }) => {
            const song = await Song.create(input)
            return song
        }),

    update: publicProcedure
        .input(
            z.object({
                id: z.number(),
                category: z.number(),
                name: z.string(),
            })
        ).query(async ({ input }) => {
            const song = await Song.findByPk(input.id)
            if (!song) {
                return {}
            }
            //@ts-ignore
            const updatedSong = await (song as typeof Song).update(input)
            return updatedSong
        }),

    getById: publicProcedure
        .input(
            z.object({
                stateid: z.number(),
            })
        ).query(async ({ input }) => {
            const song = await Song.findByPk(input.stateid)
            if (!song) {
                return {}
            }
            return song
        }),

    deleteById: publicProcedure
        .input(
            z.object({
                id: z.number(),
            })
        ).query(async ({ input }) => {
            const id = input.id
            const deletedSongCount = await Song.destroy({ where: { id } })
            return !!deletedSongCount
        }),

    getAll: publicProcedure
        .query(async () => {
            const songs = await Song.findAll() 
            return songs
        }),         
});

const categoryRouter = router({
    create: publicProcedure
        .input(
            z.object({
                id: z.number(),
                name: z.string(),
                saved: z.number()
            })
        ).query(async ({ input }) => {
            const category = await Category.create(input)
            return category
        }),

    update: publicProcedure
        .input(
            z.object({
                id: z.number(),
                name: z.string(),
                saved: z.number()
            })
        ).query(async ({ input }) => {
            const category = await Category.findByPk(input.id)
            if (!category) {
                return {}
            }
            //@ts-ignore
            const updatedCategory = await (category as typeof Category).update(input)
            return updatedCategory
        }),

    getById: publicProcedure
        .input(
            z.object({
                id: z.number(),
            })
        ).query(async ({ input }) => {
            const category = await Category.findByPk(input.id)
            if (!category) {
                return {}
            }
            return category
        }),

    deleteById: publicProcedure
        .input(
            z.object({
                id: z.number(),
            })
        ).query(async ({ input }) => {
            const id = input.id
            const deletedCategoryCount = await Category.destroy({  where: { id } })
            return !!deletedCategoryCount
        }),

    getAll: publicProcedure
        .query(async () => {
            const categorys = await Category.findAll() 
            return categorys
        }),    
});

const userRouter = router({
    create: publicProcedure
        .input(
            z.object({
                id: z.number(),
                email: z.string(),
                password: z.string()
            })
        ).query(async ({ input }) => {
            const user = await User.create(input)
            return user
        }),

    update: publicProcedure
        .input(
            z.object({
                id: z.number(),
                email: z.string(),
                password: z.string()
            })
        ).query(async ({ input }) => {
            const user = await User.findByPk(input.id)
            if (!user) {
                return {}
            }
            //@ts-ignore
            const updatedUser = await (user as typeof User).update(input)
            return updatedUser
        }),

    getById: publicProcedure
        .input(
            z.object({
                id: z.number(),
            })
        ).query(async ({ input }) => {
            const user = await User.findByPk(input.id)
            if (!user) {
                return {}
            }
            return user
        }),

    deleteById: publicProcedure
        .input(
            z.object({
                id: z.number(),
            })
        ).query(async ({ input }) => {
            const id = input.id
            const deletedUserCount = await User.destroy({  where: { id } })
            return !!deletedUserCount
        }),

    getAll: publicProcedure
        .query(async () => {
            const users = await User.findAll() 
            return users
        }),    
});

const listRouter = router({
    create: publicProcedure
        .input(
            z.object({
                id: z.number(),
                name: z.string(),
                owner: z.number(),
                songs: z.number().array()
            })
        ).query(async ({ input }) => {
            const list = await List.create(input)
            return list
        }),

    update: publicProcedure
        .input(
            z.object({
                id: z.number(),
                name: z.string(),
                owner: z.number(),
                songs: z.number().array()
            })
        ).query(async ({ input }) => {
            const list = await List.findByPk(input.id)
            if (!list) {
                return {}
            }
            //@ts-ignore
            const updatedList = await (list as typeof List).update(input)
            return updatedList
        }),

    getById: publicProcedure
        .input(
            z.object({
                id: z.number(),
            })
        ).query(async ({ input }) => {
            const list = await List.findByPk(input.id)
            if (!list) {
                return {}
            }
            return list
        }),

    deleteById: publicProcedure
        .input(
            z.object({
                id: z.number(),
            })
        ).query(async ({ input }) => {
            const id = input.id
            const deletedListCount = await List.destroy({  where: { id } })
            return !!deletedListCount
        }),

    getAll: publicProcedure
        .query(async () => {
            const lists = await List.findAll() 
            return lists
        }),    
});

export const appRouter = router({ song : songRouter, category: categoryRouter, user: userRouter, list: listRouter })