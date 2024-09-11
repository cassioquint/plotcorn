const SortHeader = ({title, query = "", handleSetSort}) => {
  return (
    <div className="search-header">
        <p className="title">
          {title}: <span className="query-text">{query}</span>
        </p>
        <p className="sort">
          <label htmlFor="sort-select">Sort by:</label>
          <select name="sort" id="sort-select" onChange={handleSetSort}>
            <option value="rating-desc">Best Rating [high to low]</option>
            <option value="rating-asc">Best Rating [low to high]</option>
            <option value="release-desc">Release Date [new to old]</option>
            <option value="release-asc">Release Date [old to new]</option>
          </select>
        </p>
      </div>
  )
}

export default SortHeader