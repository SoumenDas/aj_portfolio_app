import evioWatermark from "../assets/evio-watermark.png";

export function FloatingWatermarks() {
  const fishes = [
    { id: 1, top: "20%", left: "10%", size: 80, animClass: "float-fish-1", delay: "0s" },
    { id: 2, top: "60%", left: "80%", size: 120, animClass: "float-fish-2", delay: "-5s" },
    { id: 3, top: "15%", left: "65%", size: 60, animClass: "float-fish-3", delay: "-12s" },
    { id: 4, top: "80%", left: "20%", size: 100, animClass: "float-fish-1", delay: "-18s" },
    { id: 5, top: "40%", left: "45%", size: 90, animClass: "float-fish-2", delay: "-7s" },
    { id: 6, top: "85%", left: "65%", size: 70, animClass: "float-fish-3", delay: "-22s" },
    { id: 7, top: "5%", left: "30%", size: 110, animClass: "float-fish-1", delay: "-2s" },
    { id: 8, top: "70%", left: "10%", size: 50, animClass: "float-fish-2", delay: "-9s" },
    { id: 9, top: "35%", left: "85%", size: 130, animClass: "float-fish-3", delay: "-15s" },
    { id: 10, top: "55%", left: "25%", size: 75, animClass: "float-fish-1", delay: "-25s" },
    { id: 11, top: "10%", left: "50%", size: 95, animClass: "float-fish-2", delay: "-4s" },
    { id: 12, top: "90%", left: "40%", size: 65, animClass: "float-fish-3", delay: "-11s" },
    { id: 13, top: "25%", left: "90%", size: 85, animClass: "float-fish-1", delay: "-19s" },
    { id: 14, top: "45%", left: "15%", size: 105, animClass: "float-fish-2", delay: "-8s" },
    { id: 15, top: "75%", left: "95%", size: 55, animClass: "float-fish-3", delay: "-21s" },
    { id: 16, top: "30%", left: "60%", size: 115, animClass: "float-fish-1", delay: "-3s" },
    { id: 17, top: "65%", left: "35%", size: 80, animClass: "float-fish-2", delay: "-14s" },
    { id: 18, top: "50%", left: "70%", size: 90, animClass: "float-fish-3", delay: "-26s" },
    { id: 19, top: "85%", left: "5%", size: 125, animClass: "float-fish-1", delay: "-6s" },
    { id: 20, top: "15%", left: "80%", size: 60, animClass: "float-fish-2", delay: "-17s" },
    { id: 21, top: "95%", left: "75%", size: 100, animClass: "float-fish-3", delay: "-10s" },
    { id: 22, top: "40%", left: "5%", size: 70, animClass: "float-fish-1", delay: "-23s" },
    { id: 23, top: "20%", left: "35%", size: 110, animClass: "float-fish-2", delay: "-13s" },
    { id: 24, top: "60%", left: "55%", size: 85, animClass: "float-fish-3", delay: "-1s" },
    { id: 25, top: "5%", left: "95%", size: 95, animClass: "float-fish-1", delay: "-20s" },
    { id: 26, top: "35%", left: "20%", size: 75, animClass: "float-fish-2", delay: "-28s" },
    { id: 27, top: "45%", left: "45%", size: 250, animClass: "float-fish-3d", delay: "0s" } // The 3D element
  ];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" style={{ perspective: '1000px' }}>
      {fishes.map(f => (
        <img
          key={f.id}
          src={evioWatermark}
          alt=""
          className={`absolute opacity-10 ${f.animClass}`}
          style={{
            top: f.top,
            left: f.left,
            width: `${f.size}px`,
            height: 'auto',
            animationDelay: f.delay
          }}
        />
      ))}
    </div>
  );
}
