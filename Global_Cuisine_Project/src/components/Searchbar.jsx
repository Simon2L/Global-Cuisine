import './Searchbar.css'
import search_alt from '../images/Search_alt.png'
import filter from '../images/filter-image.png'


const Searchbar = () => {
    return(
        <>
        <section className="search-form">
            <h1 className="search-form__title">Global Cuisine</h1>
            <p className="search-form__subtitle">connects you to 2.3 millions recipes spread over 500+ websites</p>
            <form className="search-form__container">
                <input className="search-form__input" data-="text" placeholder="Search..."/>
                <button className="search-form__submit"><img src={search_alt}></img></button>
                <button className="search-form__filter"><img src={filter}></img></button>
            </form>
        </section>
        </>
    )
}

export default Searchbar;