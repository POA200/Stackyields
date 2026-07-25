import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch(
      "https://api.hiro.so/extended/v2/blocks?limit=1",
      {
        headers: {
          Accept: "application/json",
        },
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error(`Hiro API returned ${res.status}`);
    }

    const data = await res.json();

    return NextResponse.json(data.results[0]);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Unable to fetch Hiro API",
      },
      {
        status: 500,
      }
    );
  }
}