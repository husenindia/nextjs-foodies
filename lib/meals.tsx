import sql from 'better-sqlite3';
import { Meal } from 'Outer/types/meals';
const db = new sql('meals.db');

export async function getMeals():  Promise<Meal[]> {
//    await new Promise((resolve)=> setTimeout(resolve, 1000));
    return await db.prepare('SELECT * FROM meals').all() as Meal[];
}


export function getMeal(slug: string) : Meal | undefined {
    return db.prepare('SELECT * FROM meals where slug = ?').get(slug)  as Meal | undefined;
}