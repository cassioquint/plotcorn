import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { BiSearchAlt2 } from 'react-icons/bi'
import { LuPopcorn } from 'react-icons/lu'
import { useTranslation } from 'react-i18next'
import '../config/i18next'
import LanguageSelector from './LanguageSelector'

import './Navbar.css'

const Navbar = () => {
    const { t } = useTranslation();
    const [search, setSearch] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!search) return

        navigate(`/search?q=${search}`)
        setSearch("")
    }


    return (
        <nav id="navbar">
            <h2>
                <Link to="/">
                    <LuPopcorn /> PlotCorn
                </Link>
            </h2>
            <LanguageSelector />
            <form onSubmit={handleSubmit} >
                <input
                    type="text"
                    placeholder={t('placeholder')}
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                />
                <button type="submit">
                    <BiSearchAlt2 />
                </button>
            </form>
        </nav>
    )
}

export default Navbar