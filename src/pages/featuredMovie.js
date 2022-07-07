import React, { useState } from 'react'
import '../styles/home.css';
import ModalVideo from 'react-modal-video'
import Swal from 'sweetalert2';

function FeaturedMovie() {

  const [isOpen, setOpen] = useState(false);
  const MySwal = (newData) => {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Film, listenize eklendi.',
      showConfirmButton: false,
      timer: 1000
    })
  }

  return (
    <React.Fragment>
      <div className="card_left">
        <div className="card_datails">
          <div className="left-side">
            <h1>Doctor Strange in the Multiverse of Madness</h1>
            <p className="disc">Hem eski hem de yeni mistik yol arkadaşlarının yardımıyla, gizemli yeni bir düşmanla yüzleşmek için Çoklu Evrenin akıllara durgunluk veren ve tehlikeli alternatif gerçekliklerini kat eden Doktor Strange ile bilinmeyene yolculuk başlıyor.</p>
            <p className="stars"> Oyuncular : Benedict Cumberbatch, Elizabeth Olsen & Chiwetel Ejiofor </p>
            <p className="stars"> Kategori : Aksiyon, Macera & Fantastik </p>
            <p className="stars"> IMDb RATING : 7.1/10 </p>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="4m57bIsd9nU" onClose={() => setOpen(false)} />
            <div className="card-buttons">
              <button className="loginbtns" onClick={() => setOpen(true)}> ► Oynat </button>
              <button onClick={MySwal} className="loginbtns"> + Listeye Ekle </button>
            </div>
          </div>
          <div className="right-side">
            <img src="https://image.tmdb.org/t/p/original/61PVJ06oecwvcBisoAQu6SDfdcS.jpg" width="100%" alt="" />

          </div>
        </div>
      </div>
    </React.Fragment>
  );
}


export default FeaturedMovie;


