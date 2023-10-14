import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return NextResponse.json(
    { message: "Hello from Server Side" },
    { status: 200 }
  );
}
