import React, { useState } from 'react'
import '../styles/sign.css';
import logo from '../assets/logoo.png';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import Swal from 'sweetalert2'



export default function Login() {


  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    password: ''
  });

  const signUp = () => {
    console.log(formData);
    const x = {
      "firstName": formData.name,
      "lastName": formData.surname,
      "email": formData.email,
      "password": formData.password
    }


    axios.post("http://localhost:8080/api/users/register", x)
      .then(res => {
        console.log(res);
        if (res.status === 200) {
          localStorage.setItem("accessToken", res.data.accessToken);
          navigate('/home');
        }
        else {
        
        }
      })
      .catch(error => {
        Swal.fire({
          icon: 'error',
          title: 'HATA',
          text: 'Bu bilgilere ait kullanıcı zaten mevcut!',
        })
      })
  }


  return (
    <React.Fragment>
      <div className='SignBG'>
        <form className='sign-p'>
          <img src={logo} alt="logo" />
          <hr />
          <label for="name">Adı</label>
          <input className="info-input" onChange={(e) => setFormData({ ...formData, name: e.target.value })} type="text" placeholder="Ad" id="name" />
          <label for="surname">Soyadı</label>
          <input className="info-input" onChange={(e) => setFormData({ ...formData, surname: e.target.value })} type="text" placeholder="Soyad" id="surname" />
          <label for="email">Kullanıcı Adı</label>
          <input className="info-input" onChange={(e) => setFormData({ ...formData, email: e.target.value })} type="text" placeholder="Email veya Telefon" id="email" />
          <label for="password">Şifre</label>
          <input className="info-input" onChange={(e) => setFormData({ ...formData, password: e.target.value })} type="password" placeholder="Şifre" id="password" />
          <button onClick={signUp} type="button" className="loginbtn" >Kayıt Ol</button>
          <hr />
          <p className="desc">Devam ederek Mowatch'in Hizmet Şartları koşullarını kabul eder
            ve Gizlilik Politikası metnini okuduğunuzu onaylamış olursunuz.</p>
        </form>
      </div>
    </React.Fragment>
  )
};
