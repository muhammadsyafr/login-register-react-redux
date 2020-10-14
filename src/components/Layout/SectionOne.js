import React from "react";
import "./SectionOne.scss";
import supp from "../../assets/24h.svg";
import secure from "../../assets/secure.svg";
import privacy from "../../assets/privacy.svg";
const SectionOne = () => {
  return (
    <div className="section-one">
      <div class="columns container is-content">
        <div className="column">
          <div className="box">
            <div className="columns is-mobile">
              <div className="column is-2">
                <img src={supp} className="icons-box" alt="asd" />
              </div>
              <div className="column">
                <p className="title is-5 title-box">Customer Service</p>
              </div>
            </div>

            <p className="subtitle is-6 content-box">
              Tim support kami siap membantu 1x24 Jam setiap hari, bahkan dihari
              libur.
            </p>
          </div>
        </div>
        <div className="column">
          <div className="box">
            <div className="columns is-mobile">
              <div className="column is-2">
                <img src={privacy} className="icons-box" alt="asd" />
              </div>
              <div className="column">
                <p className="title is-5 title-box">Privasi Data Pribadi</p>
              </div>
            </div>

            <p className="subtitle is-6 content-box">
              Kami tidak akan membagikan data anda pada pihak manapun, keamanan
              data anda adalah prioritas kami.
            </p>
          </div>
        </div>
        <div className="column">
          <div className="box">
            <div className="columns is-mobile">
              <div className="column is-2">
                <img src={secure} className="icons-box" alt="asd" />
              </div>
              <div className="column">
                <p className="title is-5 title-box">Aman</p>
              </div>
            </div>

            <p className="subtitle is-6 content-box">
              Kami menggunakan teknologi Cold Storage untuk menjaga keamanan
              E-Wallet anda.
            </p>
          </div>
        </div>
      </div>
      <div className="langkah-section">
        <h1 className="title is-2 title-langkah has-text-centered">
          Jual Beli Seni Digital dengan 3 Langkah Mudah
        </h1>
        <Langkah />
        <Level />
      </div>
      <div className="wave-footer">
          
      </div>
    </div>
  );
};

const Langkah = () => {
  return (
    <div className="is-mobile">
      <div className="columns container">
        <div className="column title-perlangkah">
          <h1 className="title">1. Daftar</h1>
          <h1 className="subtitle">
            Daftarkan email-mu dan ikuti proses verifikasi data diri untuk
            memulai pembelian aset digitalmu.
          </h1>
        </div>
        <div className="column has-text-centered">
          <img
            src="https://assets-global.website-files.com/5bfd1275cc56e15ce750b18e/5d0521f085f49b7cf4a43c43_21.png"
            alt="alt-img-daftar"
          />
        </div>
      </div>

      <div className="columns container">
        <div className="column has-text-centered">
          <img
            src="https://assets-global.website-files.com/5bfd1275cc56e15ce750b18e/5d0521f085f49b2575a43cc5_24.png"
            alt="alt-img-daftar"
          />
        </div>
        <div className="column title-perlangkah">
          <h1 className="title">2. Belanja</h1>
          <h1 className="subtitle">
            Daftarkan email-mu dan ikuti proses verifikasi data diri untuk
            memulai pembelian aset digitalmu.
          </h1>
        </div>
      </div>

      <div className="columns container">
        <div className="column title-perlangkah">
          <h1 className="title">3. Barang Diantar</h1>
          <h1 className="subtitle">
            Daftarkan email-mu dan ikuti proses verifikasi data diri untuk
            memulai pembelian aset digitalmu.
          </h1>
        </div>
        <div className="column has-text-centered">
          <img
            src="https://assets-global.website-files.com/5bfd1275cc56e15ce750b18e/5d0521f085f49b7479a43cb8_26.png"
            alt="alt-img-daftar"
          />
        </div>
      </div>
    </div>
  );
};

const Level = () => {
  return (
    <nav className="level is-mobile">
      <div className="level-item has-text-centered">
        <div>
          <p className="heading">Tweets</p>
          <p className="title">3,456</p>
        </div>
      </div>
      <div className="level-item has-text-centered">
        <div>
          <p className="heading">Following</p>
          <p className="title">123</p>
        </div>
      </div>
      <div className="level-item has-text-centered">
        <div>
          <p className="heading">Followers</p>
          <p className="title">456K</p>
        </div>
      </div>
      <div className="level-item has-text-centered">
        <div>
          <p className="heading">Likes</p>
          <p className="title">789</p>
        </div>
      </div>
    </nav>
  );
};

export default SectionOne;
