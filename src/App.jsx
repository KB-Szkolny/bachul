import Navbar from "./components/Navbar";
import Maszyny from "./components/Maszyny";
import Kontakt from "./components/Kontakt";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <header id="about" className="text-center py-5">
        <img src="/images/logo.webp" alt="Logo"  className="img-fluid logo" />
        <p className="px-4 container text-center my-4">Nasza firma z siedzibą w Osielcu specjalizuje się w wynajmie i obsłudze maszyn budowlanych oraz transportowych. Oferujemy szeroki wybór sprzętu, w tym dwie koparki idealne do prac ziemnych i wykopów, dwa wozidła do transportu materiałów na budowie, traktor z rębakiem do prac leśnych i ogrodniczych, ubijarki niezbędne do zagęszczania gruntu, lawetę do przewozu maszyn i pojazdów oraz młot wyburzeniowy umożliwiający skuteczną rozbiórkę i kruszenie.</p>
      </header>

      <section id="gallery">
        <Maszyny />
      </section>

      <section id="contact">
        <Kontakt />
      </section>

      <footer className="text-center p-3">
        <p>Kacper Bachul &copy; 2025</p>
      </footer>
    </>
  );
}

export default App;
