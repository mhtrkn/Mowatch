import React, { useState, useEffect } from 'react'
import '../styles/home.css';
import Modal from 'react-modal';
import axios from 'axios';
import Swal from 'sweetalert2';


function ListMovie() {

  const MySwal = () => {
    Swal.fire({
      title: 'Emin Misiniz?',
      text: "Bu işlem geri alınamaz!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Evet, çıkar!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'İşlem Gerçekleştirildi!',
          'Film, listenizden çıkartıldı.',
          'success'
        )
      }
    })
  }

  const [posts, setPosts] = useState([])

  const [listData, setListData] = useState({
    id: '',
    backdrop_path: '',
    overview: '',
    poster_path: '',
    release_date: '',
    title: '',
    vote_average: ''
  });


  axios.get("https://api.themoviedb.org/3/movie/popular?api_key=8348c82cbf0c00dd0954a8fd1cc70035&language=en-US&page=1")
    .then(res => {
      console.log(res);
    })
    .catch(error => {
      console.log(error)
    })

  const defaultStyles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(5, 5, 5, 0.6)",
      'backdrop-filter': "blur(5px)",
      'z-index': '5',
    },
    content: {
      position: "absolute",
      'align-items': 'center',
      'justify-content': "center",
      border: "1px solid rgba(255, 255, 255, 0.1)",
      'backdrop-filter': "blur(10px)",
      'box-shadow': "0 0 100px -25px rgb(100 100 100 / 60%)",
      overflow: "auto",
      WebkitOverflowScrolling: "touch",
      outline: "none",
      padding: "10px"
    }
  };

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [modalData, setModalData] = React.useState(null);

  function openModal(data) {
    setModalData(data);
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    axios.get("https://api.themoviedb.org/3/movie/popular?api_key=8348c82cbf0c00dd0954a8fd1cc70035")
      .then(res => {
        console.log(res);
        setPosts(res?.data)
      })
      .catch(error => {
        console.log(error)
      })

  }, []);

  return (
    <>
      <div className='Listrowtitle'>
        <h2>Favori Listem</h2>

        <div className="cardswrapper">
          {
            posts?.results?.map((item, index) => {

              return (
                <div className="card" key={`movie-${index}`}>
                  <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} alt='' />
                  <div className="info">
                    <p>{item.overview}</p>
                    <button className="modaloginbtns" onClick={() => openModal(item)}>DETAY</button>
                  </div>
                </div>
              )
            })

          }

          <Modal className='modal'
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={defaultStyles}
          >
            {modalData && (
              <>
                <button className="modalinfobtn" onClick={closeModal}>X</button>
                <h1 className='modalinfoh1'>{modalData?.title}</h1>
                <p className='modalinfo'>{modalData?.overview}</p>
                <p className='modalinfo'>Vizyon Tarihi : {modalData.release_date} </p>
                <p className='modalinfo'>IMDb RATING : {modalData.vote_average}/10</p>
                <button className="modalbtns"> ► Oynat </button>
                <button onClick={MySwal} className="modalbtns"> Listeden Çıkar </button>
                <img className='modalimage' src={`https://image.tmdb.org/t/p/original/${modalData?.poster_path}`} alt="" />
                <img className='modalbgimage' src={`https://image.tmdb.org/t/p/original/${modalData?.backdrop_path}`} alt="" />
              </>
            )}
          </Modal>
        </div>
      </div>
    </>
  );
}
export default ListMovie