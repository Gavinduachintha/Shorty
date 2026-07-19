import axios from "axios";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await axios.get(
      "https://api.github.com/repos/Gavinduachintha/Shorty"
    );

    return NextResponse.json({
      stars: response.data.stargazers_count,
    });

  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}