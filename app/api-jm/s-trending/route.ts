import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return NextResponse.json(
    {
      id: 1,
      title: "Israel and Palestine Conflict",
      trending: "Israel , Hamas",
      tag: "short trending",
    },
    { status: 200 }
  );
}
