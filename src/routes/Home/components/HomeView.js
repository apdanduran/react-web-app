import React from 'react'

export const HomeView = () => (
  <div className="home-container">
  <div className="container">
    <h1> Öğretmenler için <br/> başlangıç noktası! </h1>
    <form className="form-inline">
      <div className="form-group">
        <input type="text" className="form-control" placeholder="E-Posta"/>
      </div>
      <div className="form-group mx-sm-3">
        <input type="password" className="form-control" id="inputPassword2" placeholder="Şifre" />
      </div>
      <button type="submit" className="btn btn-primary">Giriş Yap</button>
      <a href="#"> Şifremi Unuttum </a>
    </form>
    <p> Henüz üye olmadınız mı ? <br/>
    Ücretsiz kayıt olmak için
    <b><u> tıklayınız. </u></b></p>


    </div>
  </div>
)

export default HomeView
