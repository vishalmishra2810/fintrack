import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return NextResponse.json(
    {
      title: "The Kashmir Files",
      rating: "4/5",
      writer: "Vishal Mishra",
      review: "best movie",
    },
    { status: 200 }
  );
}
