import "./carousel-1.css";

const Section_1 = () => {
  return (
    <div className="section-1 ">
      <button data-text="Awesome" className="button mt-5  ">
          <span className="actual-text">&nbsp;Anime_uiverse&nbsp;</span>
          <span className="hover-text" aria-hidden="true">&nbsp;Anime_uiverse&nbsp;</span>
      </button>
      
      <h3 className="S-1h mt-5 ">October 2023 Simulcasts</h3>
      <h5 className="h5 S-1h  mb-4">
        Find the best new and continuing simulcasts here!
      </h5>
      <div className="row">
        <div className="show_card d-flex flex-wrap">
          <a href=" " className="m-3 ">
            <div className="image mb-3 ">
              <img
                src="https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/689e2efcf9f192ba6c0f7a538ee99027.jpe"
                className="d-block"
                style={{ width: "17rem", height: "25rem" }}
                alt="..."
              />
            </div>
            <h5>Spy X Family</h5>
            <h6 className="text-secondary">Sub|Dub</h6>
          </a>
          <a href="" className="m-3 ">
            <div className="image mb-3 ">
              <img
                src="https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/77fb4ad8d5c781685695bc574eb34b0a.jpe"
                className="d-block"
                style={{ width: "17rem", height: "25rem" }}
                alt="..."
              />
            </div>
            <h5>JUJUTSU KAISEN</h5>
            <h6 className="text-secondary">Sub|Dub</h6>
          </a>
          <a href="" className="m-3 ">
            <div className="image mb-3 ">
              <img
                src="https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/8cf56e51a982975b0987534985fa67c7.jpe"
                className="d-block"
                style={{ width: "17rem", height: "25rem" }}
                alt="..."
              />
            </div>
            <h5>GOBLIN SLAYER</h5>
            <h6 className="text-secondary">Sub|Dub</h6>
          </a>
          <a href="" className="m-3 ">
            <div className="image mb-3 ">
              <img
                src="https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/cf20e7a1792149f9655c52c4fa7e2b18.jpe"
                className="d-block"
                style={{ width: "17rem", height: "25rem" }}
                alt="..."
              />
            </div>
            <h5>The Ancient Magus Bride</h5>
            <h6 className="text-secondary">Sub|Dub</h6>
          </a>
          <a href="" className="m-3 ">
            <div className="image mb-3 ">
              <img
                src="https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/7f2aff9b498788fc48d376ea326297d0.jpe"
                className="d-block"
                style={{ width: "17rem", height: "25rem" }}
                alt="..."
              />
            </div>
            <h5>Shangri-La Frontier</h5>
            <h6 className="text-secondary">Sub|Dub</h6>
          </a>
          <a href="" className="m-3 ">
            <div className="image mb-3 ">
              <img
                src="https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/3b166f7f535823589980641210b88e69.jpe"
                className="d-block"
                style={{ width: "17rem", height: "25rem" }}
                alt="..."
              />
            </div>
            <h5>The Faraway Paladin</h5>
            <h6 className="text-secondary">Sub|Dub</h6>
          </a>
        </div>
      </div>
      
      
    </div>
  );
};

export default Section_1;
