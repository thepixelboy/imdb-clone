export default function Results({ movies }) {
  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id}>
          <h1>{movie.original_title}</h1>
        </div>
      ))}
    </div>
  );
}
