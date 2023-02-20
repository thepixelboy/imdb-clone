import Image from "next/image";

async function getMovieDetail(movieId) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
  );
  const movie = await response.json();

  return movie;
}

export default async function MovieDetailPage({ params }) {
  const movieId = params.id;
  const movie = await getMovieDetail(movieId);

  return (
    <div className="w-full">
      <div className="p4 md:pt-8 flex flex-col md:flex-row items-center content-center max-w-6xl mx-auto m:space-x-6">
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path
          }`}
          width={500}
          height={300}
          alt={`${movie.title} poster`}
          className="rounded-lg"
          placeholder="blur"
          blurDataURL="/spinner.svg"
          style={{ maxWidth: "100%", height: "100%" }}
        />
        <div className="p-2">
          <h2 className="text-lg mb-3 font-bold">
            {movie.title || movie.name}
          </h2>
          <p className="text-lg mb-3">
            <span className="font-semibold mr-1">Overview:</span>{" "}
            {movie.overview}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Release date:</span>{" "}
            {movie.release_date || movie.first_air_date}
          </p>
          <p className="mb-3">
            <span className="font-semibold mr-1">Rating:</span>{" "}
            {movie.vote_count}
          </p>
        </div>
      </div>
    </div>
  );
}
