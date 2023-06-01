import { getDictionary } from "@/src/language/language"
import { cookies } from "next/headers";
import { NextResponse, NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const url = new URL(req.url)
  const lang: any = url.searchParams.get('lang')
  cookies().set('lang', lang)
  return NextResponse.redirect(url.origin)
}