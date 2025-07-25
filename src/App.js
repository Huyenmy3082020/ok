import { Fireworks } from "fireworks-js";
import { useRef, useState, useEffect } from "react";
import "./App.css";

function App() {
  const [isExploding, setIsExploding] = useState(false);
  const [isGiftOpening, setIsGiftOpening] = useState(false);
  const [isGiftOpened, setIsGiftOpened] = useState(false);
  const fireworksRef = useRef(null);
  const audioRef = useRef(null);

  useEffect(() => {
    if (isGiftOpened && audioRef.current) {
      audioRef.current.play();
    }
  }, [isGiftOpened]);

  const startFireworks = () => {
    setIsExploding(true);
    const container = fireworksRef.current;

    const fireworks = new Fireworks(container, {
      rocketsPoint: { min: 0, max: 100 },
      hue: { min: 0, max: 360 },
      delay: { min: 15, max: 30 },
      speed: 2,
      acceleration: 1.05,
      friction: 0.95,
      gravity: 1.5,
      particles: 100,
      trace: 3,
      explosion: 6,
      autoresize: true,
      brightness: { min: 50, max: 80 },
      decay: { min: 0.015, max: 0.03 },
      mouse: { click: false, move: false, max: 0 },
    });

    fireworks.start();

    setTimeout(() => {
      fireworks.stop();
      setIsExploding(false);
    }, 5000);
  };

  const handleOpenGift = () => {
    if (!isGiftOpening && !isGiftOpened) {
      setIsGiftOpening(true);
      setTimeout(() => {
        setIsGiftOpening(false);
        setIsGiftOpened(true);
      }, 2000); // delay 2s để giả lập "mở quà"
    }
  };

  return (
    <div className="App">
      <audio ref={audioRef} src="/noname.mp3" preload="auto" />

      <marquee className="marquee">
        🎂 Happy Birthday Bùi Thị Thu Phương 🎂 – Chúc bạn tuổi mới thật rực rỡ,
        hạnh phúc và toả sáng!
      </marquee>

      <h1 className="title">
        🎉 CHÚC MỪNG SINH NHẬT <br />
        <span className="name">Bùi Thị Thu Phương</span> 🎉
      </h1>

      <img
        src="/birthday-center.jpg"
        alt="Hình sinh nhật chính"
        className="birthday-center-image"
      />

      <div
        className={`gift-box ${isGiftOpened ? "opened" : ""}`}
        onClick={handleOpenGift}
        style={{ cursor: isGiftOpened ? "default" : "pointer" }}
      >
        {!isGiftOpened && !isGiftOpening && (
          <img
            src="/gift-box.png"
            alt="Click để mở quà"
            className="gift-image"
          />
        )}

        {isGiftOpening && (
          <div className="gift-opening">
            <h2>🎁 Đang mở quà...</h2>
          </div>
        )}

        {isGiftOpened && (
          <div className="gift-message">
            <h2>🎁 Mở Quà Rồi Nè 🎁</h2>
            <p>
              🎈Chúc Phương luôn vui vẻ, đáng yêu, toả sáng và gặp nhiều may mắn
              trong tuổi mới! 🎈
            </p>
            <img
              src="/birthday-center.jpg" // Thay bằng ảnh meme bạn muốn hiển thị
              alt="Meme vui"
              style={{
                width: "200px",
                marginTop: "1rem",
                borderRadius: "12px",
                boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
              }}
            />
          </div>
        )}
      </div>

      <div className="animated-text">
        <p>
          💖 Một tuổi mới với nhiều ước mơ, yêu thương và thành công sẽ đến với
          bạn! Mở quả đi bạn ơi
        </p>
      </div>

      <div className="slider-container">
        <div className="slider-track">
          <img src="/anh2.jpg" alt="Kỷ niệm 1" className="slider-image" />
          <img src="/anh3.jpg" alt="Kỷ niệm 2" className="slider-image" />
          <img src="/anh4.jpg" alt="Kỷ niệm 3" className="slider-image" />
        </div>
      </div>

      <button className="firework-button" onClick={startFireworks}>
        🎆 BẤM ĐỂ BẮN PHÁO HOA 🎆
      </button>

      <div ref={fireworksRef} className="firework-canvas" />
    </div>
  );
}

export default App;
