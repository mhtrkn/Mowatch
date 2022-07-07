import React, { useState } from 'react'
import '../styles/login.css';
import logo from '../assets/logoo.png';
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import axios from 'axios';




export default function Login() {


  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const Login = () => {
    console.log(formData);
    const x = {
      "email": formData.email,
      "password": formData.password
    }
    axios.post("http://localhost:8080/api/users/login", x)
      .then(res => {
        console.log(res);
        if (res.status === 200) {
          localStorage.setItem("accessToken", res.data.accessToken);
          navigate("/home")
        }

        else {
          Swal.fire({
            icon: 'error',
            title: 'HATA',
            text: 'Bu bilgilere ait kullanıcı bulunamamaktadır!',
          })
        }
      })
      .catch(error => {
        Swal.fire({
          icon: 'error',
          title: 'HATA',
          text: 'Bu bilgilere ait kullanıcı bulunamamaktadır!',
        })
      }
      )
  }

  return (
    <>
      <div className='LoginBG'>
        <form>
          <img src={logo} alt="logo" />
          <hr />
          <label for="email">Kullanıcı Adı</label>
          <input className="info-input" onChange={(e) => setFormData({ ...formData, email: e.target.value })} autoComplete="off" type="text" placeholder="Email veya Telefon" id="email" />

          <label for="password">Şifre</label>
          <input className="info-input" onChange={(e) => setFormData({ ...formData, password: e.target.value })} autoComplete="off" type="password" placeholder="Şifre" id="password" />
          <a className='pasreset' href='/pasreset'>Parolanızı mı unuttunuz?</a>
          <button onClick={Login} type="button" className="loginbtn" >Giriş Yap</button>
          <hr />
          <a className='end-text' href='/sign'>Hala Mowatch'a üye değil misiniz?</a>
          <p className="desc">Devam ederek Mowatch'in Hizmet Şartları koşullarını kabul eder
            ve Gizlilik Politikası metnini okuduğunuzu onaylamış olursunuz.</p>
        </form>
      </div>
    </>
  )
};
