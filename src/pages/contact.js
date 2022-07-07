import React from 'react';
import '../styles/contact.css';
import Swal from 'sweetalert2';
import Header from '../pages/Header';
import { useNavigate } from 'react-router-dom';

function Contact() {

    const navigate = useNavigate();

    const navigateHomePage = () => {
        navigate('/home');
    };

    const MySwal = () => {
        Swal.fire({
            icon: 'success',
            title: 'Teşekkürler!',
            text: 'Mailiniz bize ulaşmak üzere yola çıkmıştır.',
        })
    }
    return (
        <React.Fragment>
            <Header />
            <div className="contact-background">
                <div className="contact-container">
                    <div className="screen">
                        <div className="screen-header">
                            <div className="screen-header-left">
                                <div className="screen-header-button close"></div>
                                <div className="screen-header-button maximize"></div>
                                <div className="screen-header-button minimize"></div>
                            </div>
                            <div className="screen-header-right">
                                <div className="screen-header-ellipsis"></div>
                                <div className="screen-header-ellipsis"></div>
                                <div className="screen-header-ellipsis"></div>
                            </div>
                        </div>
                        <div className="screen-body">
                            <div className="screen-body-item left">
                                <div className="app-title">
                                    <span>BİZİMLE</span>
                                    <span>İLETİŞİME GEÇ</span>
                                </div>
                                <div className="app-contact">İLETİŞİM : linkedin/eteration</div>
                            </div>
                            <div className="screen-body-item">
                                <div className="app-form">
                                    <div className="app-form-group">
                                        <input className="app-form-control" placeholder="E - MAIL" />
                                    </div>
                                    <div className="app-form-group">
                                        <input className="app-form-control" placeholder="İLETİŞİM NO" />
                                    </div>
                                    <div className="app-form-group message">
                                        <input className="app-form-control" placeholder="MESAJ" />
                                    </div>
                                    <div className="app-form-group buttons">
                                        <button onClick={navigateHomePage} className="app-form-button">İPTAL</button>
                                        <button onClick={MySwal} className="app-form-button">GÖNDER</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment >
    )
}

export default Contact