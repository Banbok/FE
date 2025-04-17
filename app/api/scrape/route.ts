import { NextRequest, NextResponse } from "next/server";
import * as cheerio from "cheerio";

export async function POST(req: NextRequest) {
  const { link } = await req.json();

  try {
    // const response = await fetch(link);
    const response = await fetch(link, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36",
      },
    });

    const html = await response.text();
    const $ = cheerio.load(html);

    console.log("받은 HTML:", html);

    let title = "";
    let site = "";

    if (link.includes("acmicpc.net")) {
      title = $("#problem_title").text().trim();
      site = "Baekjoon";
    } else if (link.includes("school.programmers.co.kr")) {
      title = $(".challenge-title").text().trim();
      site = "Programmers";
    }

    console.log("추출된 제목:", title);

    return NextResponse.json({ title, link, site });
  } catch (error) {
    return NextResponse.json(
      { message: "크롤링 실패", error },
      { status: 500 }
    );
  }
}
