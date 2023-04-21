import './Searchbar.css'
import { FaSearch, FaAlignLeft } from 'react-icons/fa'
import logoimage from '../assets/logo-no-background.svg';

const Searchbar = () => {
    return(
        <>
        <section className="search-form">
            {/* <h1 className="search-form__title">Global Cuisine</h1>
            <p className="search-form__subtitle">connects you to 2.3 millions recipes spread over 500+ websites</p> */}
            <img src={logoimage} alt="global cuisine" className='logoimage'></img>
            <form className="search-form__container">
                <input className="search-form__input" maxLength={25} data-="text" placeholder="Search..."/>
                <FaSearch className="search-form__submit" />
                <button className="search-form__filter"> <FaAlignLeft /></button>
            </form>
        </section>
        </>
    )
}

export default Searchbar;