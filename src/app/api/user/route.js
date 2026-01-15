import { NextResponse } from "next/server";

export async function GET(request) {
  const isLoggedIn = request.cookies.get("auth")?.value === "true";

  return NextResponse.json({ isLoggedIn });
}
