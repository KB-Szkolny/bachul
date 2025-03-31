import { useState } from "react";
import machines from "../data/maszyny";

const Maszyny = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="container text-center my-4">
      <h2>Maszyny</h2>

      {/* Karuzela dla małych ekranów */}
      <div className="d-block d-lg-none">
        <div id="machinesCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            {machines.map((_, index) => (
              <button
                key={index}
                type="button"
                data-bs-target="#machinesCarousel"
                data-bs-slide-to={index}
                className={index === activeIndex ? "active" : ""}
                aria-label={`Slide ${index + 1}`}
                onClick={() => setActiveIndex(index)}
              ></button>
            ))}
          </div>

          <div className="carousel-inner">
            {machines.map((machine, index) => (
              <div key={machine.id} className={`carousel-item ${index === activeIndex ? "active" : ""}`}>
                <img src={machine.image} className="d-block w-100" alt={machine.name} />
                <div className="carousel-caption d-none d-md-block elo">
                  <p>{machine.name}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="carousel-control-prev" type="button" data-bs-target="#machinesCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#machinesCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
          </button>
        </div>
      </div>

      {/* Siatka dla dużych ekranów */}
      <div className="row d-none d-lg-flex justify-content-center">
        {machines.map((machine) => (
          <div key={machine.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card">
              <img src={machine.image} className="card-img-top" alt={machine.name} />
              <div className="card-body">
                <p className="card-text">{machine.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Maszyny;
