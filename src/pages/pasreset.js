import React from 'react';
import '../styles/login.css';
import { useNavigate } from 'react-router-dom';

function Pasreset() {
    const navigate = useNavigate();
    const navigateLogin = () => {
        navigate("/login");
    }

    return (
        <div className='LoginBG'>
                <div className="contact-container">
                    <div className="screen">
                        <div className="screen-headers">
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
                        <div className="screen-bodys">
                        <h1 className='screen-body-h1'>YAKINDA SİZLERLE</h1>
                        <button onClick={navigateLogin} className='loginbtnss'> ➜ </button>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Pasreset