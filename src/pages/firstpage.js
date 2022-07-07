import React from "react";
import "../styles/firstpage.css";
import logo from '../assets/logoo.png';
import { useNavigate } from "react-router-dom";

export default function Home() {

  const navigate = useNavigate();

  const navigateSign = () => {
    navigate('/sign');
  };

  return (
    <section className="LoginBG">
      <header>
        <a href="/" className="logo">
          <img src={logo} alt='logo'/>
        </a>
        <ul className="navigations">
          <li>
            <a href="/login" className="active">
              Oturum Aç
            </a>
          </li>
        </ul>
      </header>
      <div className="content">
            <div className="textBox">
                <h2> Dünyanın en iyi film izleme sitesine Hoşgeldiniz</h2>
                <a> Sınırsız film ve sınırsız eğlence</a>
                <p>Bir sürü film, dizi ve eğlencenin binbir çeşit yolu burada. Sende aramıza
                katılmak istemez misin?</p>
                  <button onClick={navigateSign}className="grow_skew_backward">Başlayın</button>
            </div>
          </div>
    </section>
  );
}
