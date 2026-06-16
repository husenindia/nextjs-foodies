// import fs from 'node:fs';
import { Meal, MealInput } from 'Outer/types/meals';
import slugify from 'slugify';
import xss from 'xss';
import { prisma } from "./prisma";

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
  try {
    const slug = slugify(meal.title, { lower: true });

    const extension = meal.image.name.split(".").pop();
    const fileName = `${slug}.${extension}`;

    const instructions = xss(meal.instructions);

    const result = await prisma.meal.create({
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

    return result;
  } catch (error) {
    console.error("Prisma create failed:", error);
    throw error;
  }
}