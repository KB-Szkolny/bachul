const Kontakt = () => {
    return (
      <section className="container text-center my-4">
        <h2>Kontakt</h2>
        <div className="row">
          <div className="col-md-6 text-start">
            <p><strong>Telefon:</strong> +48 664 036 713</p>
            <p><strong>Email:</strong> krystynabachul@gmail.com</p>
          </div>
          <div className="col-md-6">
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d322.74183884247464!2d19.7769805!3d49.6743685!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1spl!2spl!4v1743288498311!5m2!1spl!2spl"
              width="100%"
              height="200"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    )
  }
  
  export default Kontakt
  