import { FiThumbsUp } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

export default function Card({ movie }) {
  return (
    <div className="cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 group">
      <Link href={`/movie/${movie.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path
          }`}
          width={500}
          height={300}
          alt={movie.original_title}
          className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200"
          placeholder="blur"
          blurDataURL="/spinner.svg"
          style={{ maxWidth: "100%", height: "auto" }}
        />
        <div className="p-2">
          <h2 className="truncate text-lg font-bold">
            {movie.title || movie.name}
          </h2>
          <p className="line-clamp-2 text-md my-2">{movie.overview}</p>
          <p className="flex items-center">
            {movie.release_date || movie.first_air_date}{" "}
            <FiThumbsUp className="h-5 mr-1 ml-3" /> {movie.vote_count}
          </p>
        </div>
      </Link>
    </div>
  );
}
