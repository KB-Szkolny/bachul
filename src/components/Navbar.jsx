import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Navbar = () => {
  const handleNavClick = (event, sectionId) => {
    event.preventDefault();
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });

    // Zamknięcie menu po kliknięciu (dla telefonów)
    const navbar = document.querySelector(".navbar-collapse");
    if (navbar.classList.contains("show")) {
      new bootstrap.Collapse(navbar).hide();
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container">
        <img src="images/logo.webp" alt="Logo" className="navbar-brand" width={150} />

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#about" onClick={(e) => handleNavClick(e, "about")}>
                O firmie
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#gallery" onClick={(e) => handleNavClick(e, "gallery")}>
                Galeria
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact" onClick={(e) => handleNavClick(e, "contact")}>
                Kontakt
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
