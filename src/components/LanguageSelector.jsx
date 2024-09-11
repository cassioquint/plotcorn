import { useTranslation } from 'react-i18next'
import BraFlag from '../assets/BraFlag.svg'
import UsaFlag from '../assets/UsaFlag.svg'

const LanguageSelector = () => {
    const { i18n } = useTranslation();

    const handleLanguageChange = (event) => {
        i18n.changeLanguage(event.target.id);
    }

    return (
        <div className='language-selection'>
            <button className='language-button' onClick={handleLanguageChange}>
                <img src={UsaFlag} alt="USA flag" id="en" />
            </button>
            <button className='language-button' onClick={handleLanguageChange}>
                <img src={BraFlag} alt="Brazilian flag" id="pt" />
            </button>
        </div>
    )
}

export default LanguageSelector