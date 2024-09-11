import axios from "axios"
import { useState, useEffect } from "react"
import MovieCard from "../components/MovieCard"
import SortHeader from "../components/SortHeader"
import sortMovies from "../utils/sortMovies"

import './MoviesGrid.css'


const moviesURL = import.meta.env.VITE_API
const apiKey = import.meta.env.VITE_API_KEY

const Home = () => {
  const [topMovies, setTopMovies] = useState([])
  const [sort, setSort] = useState("rating-desc")

  const getTopRatedMovies = async (url) => {
    try {
      const res = await axios.get(url)
      setTopMovies(res.data.results)
    } catch (err) {
      console.error('Error fetching movies:', err);
    }
  }

  const handleSetSort = (opt) => {
    setSort(opt.target.value)
  }

  useEffect(() => {
    const topRatedUrl = `${moviesURL}top_rated?${apiKey}`
    getTopRatedMovies(topRatedUrl)
  }, [sort])

  return (
    <div className="container">
      <SortHeader title="Best Moveis" handleSetSort={handleSetSort} />
      <div className="movies-container">
        {!topMovies.length && <p>Loading...</p>}
        {
          topMovies.length &&
          sortMovies(topMovies, sort)
            .map((movie) => <MovieCard key={movie.id} movie={movie} />)
        }
      </div>
    </div>
  )
}
export default Home