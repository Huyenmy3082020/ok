import { Fireworks } from "fireworks-js";
import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [isExploding, setIsExploding] = useState(false);
  const fireworksRef = useRef(null);

  const startFireworks = () => {
    setIsExploding(true);
    const container = fireworksRef.current;

    const fireworks = new Fireworks(container, {
      rocketsPoint: {
        min: 0,
        max: 100,
      },
      hue: {
        min: 0,
        max: 360,
      },
      delay: {
        min: 15,
        max: 30,
      },
      speed: 2,
      acceleration: 1.05,
      friction: 0.95,
      gravity: 1.5,
      particles: 100,
      trace: 3,
      explosion: 6,
      autoresize: true,
      brightness: {
        min: 50,
        max: 80,
      },
      decay: {
        min: 0.015,
        max: 0.03,
      },
      mouse: {
        click: false,
        move: false,
        max: 0,
      },
    });

    fireworks.start();

    setTimeout(() => {
      fireworks.stop();
      setIsExploding(false);
    }, 5000);
  };

  return (
    <div className="App">
      <marquee className="marquee">
        🎉 Chúc mừng sinh nhật Bùi Thị Thu Phương! Chúc bạn tuổi mới thật rực rỡ
        và ngập tràn niềm vui! 🎉
      </marquee>

      <h1>🎊 Chúc mừng sinh nhật Bùi Thị Thu Phương! 🎊</h1>
      <img
        src="/z6839143492729_c8cb566c5a1ad1d658a358bf3f8895c8.jpg"
        alt="Bùi Thị Thu Phương"
        className="birthday-image"
      />
      <div className="message-box">
        <h2>📋 Hồ sơ hệ thống sinh nhật</h2>
        <ul className="message-list">
          <li>
            <strong>🎯 Mục tiêu:</strong>{" "}
            <span className="highlight">Bùi Thị Thu Phương</span>
          </li>
          <li>
            <strong>🎉 Cập nhật tuổi mới:</strong>{" "}
            <span className="status success">Thành công</span>
          </li>
          <li>
            <strong>💡 Trí tuệ:</strong> Đang tăng trưởng{" "}
            <em>không giới hạn</em>
          </li>
          <li>
            <strong>🔋 Năng lượng:</strong> Luôn ở mức <em>tối đa</em>
          </li>
          <li>
            <strong>🩺 Sức khỏe:</strong> Được bảo trì định kỳ –{" "}
            <span className="status ok">Không lỗi hệ thống</span>
          </li>
          <li>
            <strong>❤️ Hạnh phúc:</strong> Hoạt động ổn định —{" "}
            <span className="status ngon">Tình trạng: NGON</span>
          </li>
          <li className="final-message">
            ✅ Sinh nhật triển khai thành công.
            <br />
            <strong>Chúc bạn một năm đầy bứt phá, thành công và rực rỡ!</strong>
          </li>
        </ul>
      </div>

      <button className="firework-button" onClick={startFireworks}>
        🎆 Bấm để bắn pháo hoa tung toé! 🎆
      </button>

      {/* Container để render pháo hoa */}
      <div ref={fireworksRef} className="firework-canvas" />
    </div>
  );
}

export default App;
