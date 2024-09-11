import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import MovieCard from "../components/MovieCard"
import SortHeader from "../components/SortHeader"
import sortMovies from "../utils/sortMovies"
import axios from "axios"

import './MoviesGrid.css'

const searchUrl = import.meta.env.VITE_SEARCH
const apiKey = import.meta.env.VITE_API_KEY

const Search = () => {
  const [searchParams] = useSearchParams()
  const [movies, setMovies] = useState([])
  const [sort, setSort] = useState("rating-desc")
  const query = searchParams.get("q")

  const getSearchedMovies = async (url) => {
    try {
      const res = await axios.get(url)
      setMovies(res.data.results)
    } catch (err) {
      console.error('Error fetching movies:', err);
    }
  }

  const handleSetSort = (opt) => {
    setSort(opt.target.value)
  }

  useEffect(() => {
    if (query) {
      const searchWithQueryUrl = `${searchUrl}?${apiKey}&query=${query}`
      getSearchedMovies(searchWithQueryUrl)
    }
  }, [query, sort])

  return (
    <div className="container">
      <SortHeader title="Results for" query={query} handleSetSort={handleSetSort} />
      <div className="movies-container">
        {!movies.length > 0 && <p>Loading...</p>}
        {
          movies.length > 0 &&
          sortMovies(movies, sort)
            .filter(movie => movie.poster_path)
            .map(
              (movie) => <MovieCard key={movie.id} movie={movie} />
            )
        }
      </div>
    </div>
  )
}

export default Search