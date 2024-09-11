import { useTranslation } from 'react-i18next'
import '../config/i18next'

const SortHeader = ({title, query = "", handleSetSort}) => {
  const { t } = useTranslation();

  return (
    <div className="search-header">
        <p className="title">
          {title}: <span className="query-text">{query}</span>
        </p>
        <p className="sort">
          <label htmlFor="sort-select">{t('sort')}</label>
          <select name="sort" id="sort-select" onChange={handleSetSort}>
            <option value="rating-desc">{t('rating_high')}</option>
            <option value="rating-asc">{t('rating_low')}</option>
            <option value="release-desc">{t('release_new')}</option>
            <option value="release-asc">{t('release_old')}</option>
          </select>
        </p>
      </div>
  )
}

export default SortHeader