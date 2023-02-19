import Results from "@/components/Results";

const API_KEY = process.env.API_KEY;

export default async function Home({ searchParams }) {
  const genre = searchParams.genre || "fetchTrending";
  const apiSection =
    genre === "fetchTopRated" ? "movie/top_rated" : "trending/movie/week";
  const response = await fetch(
    `https://api.themoviedb.org/3/${apiSection}?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await response.json();
  const movies = data.results;

  return (
    <div>
      <Results movies={movies} />
    </div>
  );
}
