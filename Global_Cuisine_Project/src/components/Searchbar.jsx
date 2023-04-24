import './Searchbar.css'
import { FaSearch, FaAlignLeft } from 'react-icons/fa'
import logoimage from '../assets/logo-no-background.svg';

const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    data.set('search', data.get('search'));
    console.log(data);
    //getRecipes();
  };

const getRecipes = async (search) => {
    //const apiKey = 'ca68133f5df34a13b64e53f977918ba8';
    try {
        const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&query=${search}`;
        const response = await fetch(url);
        const result = await response.json();
        console.log(result);
        //setRecipes(result);
      } catch (e) {
        console.log(e);
      }
}

const Searchbar = () => {
    return(
        <>
        <section className="search-form">
            {/* <h1 className="search-form__title">Global Cuisine</h1>
            <p className="search-form__subtitle">connects you to 2.3 millions recipes spread over 500+ websites</p> */}
            <img src={logoimage} alt="global cuisine" className='logoimage'></img>
            <form className="search-form__container" onSubmit={handleSubmit}>
                <input id="search" name="search" className="search-form__input" maxLength={25} data-="text" placeholder="Search..."/>
                <FaSearch className="search-form__submit" />
                <button className="search-form__filter"> <FaAlignLeft /></button>
            </form>
        </section>
        </>
    )
}

export default Searchbar;