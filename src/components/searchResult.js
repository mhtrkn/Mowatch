import React from 'react'
import Modal from 'react-modal';
import '../styles/home.css';
import Swal from 'sweetalert2';

function SearchResult({ data }) {

    const MySwal = () => {

        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Film, listenize eklendi.',
            showConfirmButton: false,
            timer: 1000
        })

    }

    const defaultStyles = {
        overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(5, 5, 5, 0.6)",
            'backdrop-filter': "blur(5px)",
            'z-index': '100',
        },
        content: {
            position: "absolute",
            'align-items': 'center',
            'justify-content': "center",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            'backdrop-filter': "blur(25px)",
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

    console.log("data:", data);
    return (
        <div className='search-results'>

            <ul>
                {
                    data?.map((item, index) => {
                        return (
                            <li onClick={() => openModal(item)}>
                                {item.title}
                            </li>
                        )
                    })
                }
            </ul>
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
                        <p className='modalinfo'>IMDb RATING : {modalData.vote_average}/10</p>
                        <button className="modalbtns"> ► Oynat </button>
                        <button onClick={MySwal} className="modalbtns"> + Listeye Ekle </button>
                        <img className='modalimage' src={`https://image.tmdb.org/t/p/original/${modalData?.poster_path}`} alt="" />
                        <img className='modalbgimage' src={`https://image.tmdb.org/t/p/original/${modalData?.backdrop_path}`} alt="" />
                    </>
                )}
            </Modal>
        </div>
    )
}

export default SearchResult