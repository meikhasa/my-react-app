import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';

export default function BirthdayTrain() {
  const [showSecondPage, setShowSecondPage] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const openModal = (imgSrc) => {
    setSelectedImage(imgSrc);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedImage(null);
  };

  const pageVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -30 },
  };

  return (
    <AnimatePresence mode="wait">
      {showSecondPage ? (
        <motion.div
          key="secondPage"
          className="second-page"
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            className="headline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            style={{
              fontFamily: "'Pacifico', cursive",
              fontSize: '2rem',
              marginBottom: '20px',
              color: '#0d47a1',
              textAlign: 'center',
            }}
          >
            🎉 Selamat Ulang Tahun, Eca! 🎉
          </motion.h1>

          <motion.div
            className="description"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            style={{
              whiteSpace: 'pre-wrap',
              maxWidth: '700px',
              height: '60vh',
              overflowY: 'auto',
              padding: '20px',
              fontSize: '1.1rem',
              lineHeight: '1.6',
              backgroundColor: '#ffffffb0',
              borderRadius: '12px',
              boxShadow: '0 0 20px rgba(255, 64, 129, 0.2)',
              fontFamily: "'Segoe UI', sans-serif",
              color: '#333',
            }}
          >
            {`Dear Ezra Gilang Raharjo,

Hallo Eca, sebelumnya terima kasih banyak telah hadir di dunia ini yaaa.
Terima kasih banyak sudah mau menjalani hidup Eca dengan baik sampai hari ini hingga nanti.
Dan terima kasih banyak sudah menjadi orang yang amat sangat positive vibes dimanapun dan kapapun itu.

Untuk orang yang suka kereta api,
Untuk orang yang suka planet saturnus,
Untuk orang yang hobby main alat musik,
Untuk orang yang suka baso aci,
Untuk orang yang suka kehangatan ruangan,
Untuk orang yang suka main mobile legends,
Untuk orang yang tidak suka sayur sama sekali,
Kuucapkan,

Selamat ulang tahun Ezra Gilang Raharjo, selamat bertambah umurmu yang ke-21 tahun.
Semoga hal-hal yang baik dan indah akan selalu datang di hidup Eca!

Terima kasih banyak atas kesabaran dan bimbingannya selama ini ke Mahisa,
Terima kasih banyak sudah mau menjadi teman Mahisa yaaa

Eca,
Ezra,
Apapun panggilanmu, apapun keadaanmu, dan siapapun dirimu, 
Mahisa tetap menyayangi Eca.

Akhir kata dari kartu ucapan yang mungkin tidak sepadan dengan semua ini,
Sekali lagi, selamat ulang tahun Eca.

Jesus Bless You`}
          </motion.div>

          {/* Carousel Foto */}
          <div
            className="carousel-container"
            style={{
              marginTop: '60px',
              width: '100%',
              overflowX: 'auto',
              whiteSpace: 'nowrap',
              padding: '10px 20px',
            }}
          >
            {[1, 2, 3, 4, 5, 6, 7].map((num) => (
              <img
                key={num}
                src={`/image/eca${num}.jpg`}
                alt={`Eca ${num}`}
                className="carousel-image"
                style={{
                  display: 'inline-block',
                  width: '300px',
                  height: 'auto',
                  marginRight: '20px',
                  borderRadius: '12px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                  transition: 'transform 0.3s ease',
                  cursor: 'pointer',
                }}
                onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                onClick={() => openModal(`/image/eca${num}.jpg`)}
              />
            ))}
          </div>

          {/* Audio Player dengan teks di samping */}
          <div
            style={{
              marginTop: '30px',
              width: '100%',
              maxWidth: '400px',
              marginLeft: 'auto',
              marginRight: 'auto',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <audio controls>
              <source src="/audio/pesan_suara.ogg" type="audio/ogg" />
              Your browser does not support the audio element.
            </audio>
            <span style={{ fontSize: '1rem', color: '#555' }}>
              didengerin yaaa, makasih 🎧
            </span>
          </div>

          {/* GIF lucu bergerak di bawah audio player */}
          <div
            style={{
              marginTop: '20px',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <img
              src="/image/giflucu.gif"
              alt="GIF Lucu"
              className="gif-lucu"
            />
          </div>

          {showModal && (
            <div
              className="modal-overlay"
              onClick={closeModal}
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 1000,
              }}
            >
              <img
                src={selectedImage}
                alt="Popup"
                style={{
                  maxWidth: '90%',
                  maxHeight: '90%',
                  borderRadius: '12px',
                  boxShadow: '0 0 20px rgba(0,0,0,0.5)',
                }}
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          )}

          <button
            onClick={() => setShowSecondPage(false)}
            className="back-button"
            style={{
              marginTop: '30px',
              padding: '10px 20px',
              fontSize: '14px',
              borderRadius: '8px',
              backgroundColor: '#ff4081',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
              zIndex: 10,
            }}
          >
            ⬅ Kembali
          </button>
        </motion.div>
      ) : (
        <motion.div
          key="firstPage"
          className="first-page sky-background"
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.6 }}
        >
          <div className="content">
            <div className="blue-box"></div>

            <img src="image/matahari.png" alt="Matahari" className="sun-image" />

            <motion.div
              className="birthday-box"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2>𝑯𝒂𝒑𝒑𝒚 𝑩𝒊𝒓𝒕𝒉𝒅𝒂𝒚 𝑬𝒛𝒓𝒂 𝑮𝒊𝒍𝒂𝒏𝒈 𝑹𝒂𝒉𝒂𝒓𝒋𝒐!</h2>
              <p>
                Selamat bertambah umur Ecaaaaa <br />
                Semoga hal yang baik dan bermanfaat selalu hadir di hidup Eca
              </p>
            </motion.div>

            <div className="button-section">
              <button
                onClick={() => setShowSecondPage(true)}
                className="next-button"
              >
                Ayo Naik Kereta 🎂
              </button>

              <img src="/image/kereta_kanan.png" alt="Kereta" className="train-right" />
              <img src="/image/kereta_kiri.png" alt="Kereta" className="train-left" />
            </div>

            <div className="train-arc" />

            <img src="/image/rumput.png" alt="Rumput Kiri" className="grass-left" />
            <img src="/image/rumput.png" alt="Rumput Tengah" className="grass-center" />
            <img src="/image/rumput.png" alt="Rumput Kanan" className="grass-right" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
