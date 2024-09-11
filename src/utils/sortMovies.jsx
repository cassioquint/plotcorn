const sortMovies = (movies, sortOption) => {
    return movies.sort((a, b) => {
        switch (sortOption) {
            case 'rating-desc':
                return b.vote_average - a.vote_average
            case 'rating-asc':
                return a.vote_average - b.vote_average
            case 'release-desc':
                return new Date(b.release_date) - new Date(a.release_date)
            case 'release-asc':
                return new Date(a.release_date) - new Date(b.release_date)
            default:
                return 0
        }
    })
}

export default sortMovies