/* eslint-disable jsx-a11y/anchor-is-valid */
import Logo from '../assets/logoo.png';
import search from '../assets/search.png';
import '../styles/home.css';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';
import SearchResult from '../components/searchResult';


function Header() {

  const [onSearch, setOnSearch] = useState('');
  const [searchResult, setSearchResult] = useState([]);


  useEffect(() => {
    if (onSearch.length > 0) {
      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=8348c82cbf0c00dd0954a8fd1cc70035&query=${onSearch}&page=1`)
        .then(res => {
          console.log(res);
          setSearchResult(res?.data)
        })
        .catch(error => {
          console.log(error)
        })
    }
    else{setSearchResult([])}
  }, [onSearch]);


  let navigate = useNavigate();

  const signOut = (res) => {
    console.log("LOGOUT SUCCES!");
    localStorage.setItem("accessToken", "");
    
    
    navigate('/login');
  }

  return (
    <header>
      <a className="logoo"> <img src={Logo} className='logoimg' alt='logo'/></a>
      <div className="" style={{ display: 'flex', flexDirection: 'row', gap: '5rem' }}>
        <ul className="navigation">
          <li><a href="/home" className='active'> Ana Sayfa </a></li>
          <li><a href="/mylist"> Listem </a></li>
        </ul>
        <div className="search">
          <input className="info-input" onChange={(e) => setOnSearch(e.target.value)} type="text" placeholder="Arama" />
          <img className='fa fa-search' aria-hidden="true" src={search} alt='' />
          {searchResult?.results?.length > 0 && <SearchResult data={searchResult?.results} />}
        </div>
      </div>
      <div id="menuToggle">
        <input type="checkbox" />
        <span className='spanone'></span>
        <span className='spantwo'></span>
        <span className='spanthree'></span>
        <ul id="menu">
          <li><a href="/home">ana sayfa</a></li>
          <li><a href="/mylist">listem</a></li>
          <li><a href="/contact">iletişim</a></li>
          <li><a onClick={signOut}>çıkış yap</a></li>
        </ul>
      </div>
    </header>
  );
}

export default Header;