import { NextResponse } from "next/server";

export async function POST(req) {
  const { email, password } = await req.json();

  if (email === "admin@test.com" && password === "123456") {
    const res = NextResponse.json({ success: true });

    res.cookies.set("auth", "true", {
      httpOnly: true,
      path: "/",
      sameSite: "lax",
      maxAge: 60 * 60 * 24,
    });

    return res;
  }

  return NextResponse.json({ success: false }, { status: 401 });
}
