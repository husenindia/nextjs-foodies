import fs from 'node:fs';
import sql from 'better-sqlite3';
import { Meal, MealInput } from 'Outer/types/meals';
import slugify from 'slugify';
import xss from 'xss';

const db = new sql('meals.db');

export async function getMeals():  Promise<Meal[]> {
//    await new Promise((resolve)=> setTimeout(resolve, 1000));
    return await db.prepare('SELECT * FROM meals').all() as Meal[];
}


export function getMeal(slug: string) : Meal | undefined {
    return db.prepare('SELECT * FROM meals where slug = ?').get(slug)  as Meal | undefined;
}


export async function saveMeal(meal: MealInput) {

    const slug = slugify(meal.title, { lower: true });

    const extension = meal.image.name.split('.').pop();
    const fileName = `${slug}.${extension}`;
    const instructions = xss(meal.instructions);
    // IMAGE OPERATIONs
    const stream = fs.createWriteStream(`public/images/${fileName}`);
    const bufferedImage = await meal.image.arrayBuffer();
    stream.write(Buffer.from(bufferedImage), (error) => {
        if(error) {
            throw new Error('Saving image failed');
        }
    });
    db.prepare(`
        INSERT INTO meals
        (title, summary, instructions, creator, creator_email, image, slug)
        VALUES ( 
        @title, @summary, @instructions,
        @creator, @creator_email,
        @image, @slug
        )
    `).run({
        ...meal,
        image: `${fileName}`,
        slug,
        instructions: instructions,
    });
}