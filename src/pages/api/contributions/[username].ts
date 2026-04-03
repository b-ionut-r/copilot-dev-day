import type { APIRoute } from "astro";

export const prerender = false;

export const GET: APIRoute = async ({ params }) => {
  const { username } = params;

  if (!username) {
    return new Response(JSON.stringify({ error: "Username is required" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const response = await fetch(`https://github.com/${username}.contribs`);

    if (!response.ok) {
      return new Response(
        JSON.stringify({ error: `GitHub API returned ${response.status}` }),
        {
          status: response.status === 404 ? 404 : 502,
          headers: { "Content-Type": "application/json" },
        },
      );
    }

    /* GitHub returns JSON, parse and return it */
    const data = await response.json();

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control":
          "public, max-age=3600, s-maxage=7200, stale-while-revalidate=86400",
      },
    });
  } catch {
    return new Response(
      JSON.stringify({ error: "Failed to fetch contribution data" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    );
  }
};
