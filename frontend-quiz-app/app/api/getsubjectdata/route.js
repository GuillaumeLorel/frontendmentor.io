import { promises as fs } from "fs";

export async function GET(req) {
  const url = new URL(req.url);
  const subject = url.searchParams.get("subject");

  try {
    const file = await fs.readFile(
      process.cwd() + "/app/lib/data.json",
      "utf8"
    );
    const data = JSON.parse(file);
    const subjectData = data.quizzes.find((quiz) => quiz.title === subject);

    if (subjectData) {
      const response = new Response(JSON.stringify(subjectData), {
        headers: { "Content-Type": "application/json" },
      });
      response.headers.append(
        "Cache-Control",
        "s-maxage=3600, stale-while-revalidate"
      );
      return response;
    } else {
      return new Response(null, {
        status: 404,
        statusText: "Not Found",
      });
    }
  } catch (error) {
    console.error("Error reading data file:", error);
    return new Response(null, {
      status: 500,
      statusText: "Internal Server Error",
    });
  }
}
