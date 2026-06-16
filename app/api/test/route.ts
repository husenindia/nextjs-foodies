import { NextResponse } from "next/server";
import { prisma } from "Outer/lib/prisma";

export async function GET() {
  const meals = await prisma.meal.findMany();

  return NextResponse.json(meals);
}