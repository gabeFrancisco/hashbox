import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcrypt'

export async function POST(req: Request){
  const { password } = await req.json();
  const generate = (input: string) => {
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    return bcrypt.hashSync(input, salt);
  };
  const encrypted = generate(password)

  return NextResponse.json(encrypted)
}
