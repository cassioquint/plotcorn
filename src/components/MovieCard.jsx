import { Link } from "react-router-dom"
import { FaStar } from "react-icons/fa"

const imageUrl = import.meta.env.VITE_IMG

const getReleaseYear = (date) => {
    return new Date(date).getFullYear()
}

const MovieCard = ({ movie, showLink = true }) => {
    return (
        <div className="movie-card">
            <img src={imageUrl + movie.poster_path} alt={movie.title} />
            <div className="card-title"><h2>{movie.title}</h2><p>{getReleaseYear(movie.release_date)}</p></div>
            <p>
                <FaStar />{movie.vote_average}
            </p>
            {showLink && <Link to={`/movie/${movie.id}`}>See more</Link> }
        </div>
    )
}


export default MovieCard