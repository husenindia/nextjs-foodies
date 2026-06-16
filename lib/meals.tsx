import fs from 'node:fs';
import sql from 'better-sqlite3';
import { Meal, MealInput } from 'Outer/types/meals';
import slugify from 'slugify';
import xss from 'xss';

import { prisma } from "./prisma";

const db = new sql('meals.db');

export async function getMeals() {
    return prisma.meal.findMany();
}

export async function getMeal(slug: string) {
    return prisma.meal.findUnique({
        where: {
            slug,
        },
    });
}

export async function saveMeal(meal: MealInput) {
    const slug = slugify(meal.title, { lower: true });

    const extension = meal.image.name.split(".").pop();

    const fileName = `${slug}.${extension}`;

    const instructions = xss(meal.instructions);

    const stream = fs.createWriteStream(
        `public/images/${fileName}`
    );

    const bufferedImage = await meal.image.arrayBuffer();

    stream.write(Buffer.from(bufferedImage), (error) => {
        if (error) {
            throw new Error("Saving image failed");
        }
    });

    await prisma.meal.create({
        data: {
            title: meal.title,
            summary: meal.summary,
            instructions,
            creator: meal.creator,
            creator_email: meal.creator_email,
            image: fileName,
            slug,
        },
    });
}