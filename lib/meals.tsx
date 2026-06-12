import sql from 'better-sqlite3';
const db = new sql('meals.db');

export async function getMeals() {
    await new Promise((resolve)=> setTimeout(resolve, 1000));
//    throw new Error("Loading meals failed");
    return await db.prepare('SELECT * FROM meals').all();
}


export function getMeal(slug) {
    return db.prepare('SELECT * FROM meals where slug = ?').get(slug);
}