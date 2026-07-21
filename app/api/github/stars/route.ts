import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch(
      "https://api.github.com/repos/Gavinduachintha/Shorty",
      {
        // Revalidate once per hour so the star count stays fresh without
        // hammering the GitHub API on every request
        next: { revalidate: 3600 },
        headers: {
          Accept: "application/vnd.github+json",
        },
      },
    );

    if (!response.ok) {
      throw new Error(`GitHub API responded with ${response.status}`);
    }

    const data = await response.json();

    return NextResponse.json({ stars: data.stargazers_count });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 },
    );
  }
}
