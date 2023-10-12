import { PiPlayLight } from "react-icons/Pi";
import { PiBookmarkSimpleBold } from "react-icons/Pi";
import { FaCrown } from "react-icons/Fa";


export const Section_3 = () => {
  return (
    <div className="section-1   ">
      <button data-text="Awesome" className="button mt-5  ">
        <span className="actual-text">&nbsp;Love_Store&nbsp;</span>
        <span className="hover-text" aria-hidden="true">
          &nbsp;Love_Store&nbsp;
        </span>
      </button>
      <h3 className="S-1h mt-5 ">Just Get Married Already</h3>
      <h5 className="h5 S-1h  mb-4">
        These couples are clearly meant for each other.
      </h5>
      <div className="row">
        <div className="show_card d-flex flex-wrap">
          <a href=" " className="m-3 ">
            <div className="image mb-3 ">
              <img
                src="https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/48b9c687382510e7ae195f61fee65c61.jpe"
                className="d-block"
                style={{ width: "17rem", height: "25rem" }}
                alt="..."
              />
            </div>
            <h5>KAGUYA-SAMA:LOVE IS WAR</h5>
            <h6 className="text-secondary">Subtitle</h6>
          </a>
          <a href="" className="m-3 ">
            <div className="image mb-3 ">
              <img
                src="https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/9f93bb58e47e5ca59d0980de6351eac9.jpe"
                className="d-block"
                style={{ width: "17rem", height: "25rem" }}
                alt="..."
              />
            </div>
            <h5>Ouran High School host club</h5>
            <h6 className="text-secondary">Sub|Dub</h6>
          </a>
          <a href="" className="m-3 ">
            <div className="image mb-3 ">
              <img
                src="https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/7d402dc6bb4c01fe11f62832252d03fc.jpe"
                className="d-block"
                style={{ width: "17rem", height: "25rem" }}
                alt="..."
              />
            </div>
            <h5>Tomo-Chan Is a Girl!</h5>
            <h6 className="text-secondary">Sub|Dub</h6>
          </a>
          <a href="" className="m-3 ">
            <div className="image mb-3 ">
              <img
                src="https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/78ff9a9b718349568558c7e073921276.jpe"
                className="d-block"
                style={{ width: "17rem", height: "25rem" }}
                alt="..."
              />
            </div>
            <h5>More Then Married Couple</h5>
            <h6 className="text-secondary">Sub|Dub</h6>
          </a>
          <a href="" className="m-3 ">
            <div className="image mb-3 ">
              <img
                src="https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/db5f3a74f2f7cdd0b9c8f51cc9d54e34.jpe"
                className="d-block"
                style={{ width: "17rem", height: "25rem" }}
                alt="..."
              />
            </div>
            <h5>In / Spectre</h5>
            <h6 className="text-secondary">Sub|Dub</h6>
          </a>
          <a href="" className="m-3 ">
            <div className="image mb-3 ">
              <img
                src="https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/71d4ca6bf1e272699a11ee3a76998293.jpe"
                className="d-block"
                style={{ width: "17rem", height: "25rem" }}
                alt="..."
              />
            </div>
            <h5>Love After World Domination</h5>
            <h6 className="text-secondary">Sub|Dub</h6>
          </a>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row cap">
          <div className="col-lg-4 col-md-6 col-sm-12">
              <a href="#">
                  <img src="https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/bcc213e8825420a85790049366d409fd.jpe" alt="" className="img-fluid"/>
              </a>
          </div>
          <div className="col-lg-8 col-md-6 col-sm-12 mt-2"> 
              <h3>Frieren: Beyond Journeys End <span className="text-warning"><FaCrown/></span></h3>
              <h6 className="cap_series mt-4 mb-4">Series</h6>
              <h4>After the party of heroes defeated the Demon King, they restored peace to the land and...</h4>
              <div className="btn-group mt-4"> 
                  <div className="btn btn-warning mt-3 mb-3 me-4"><i ><PiPlayLight/></i> Start Watching S1 E1</div> 
                  <div className="btn btn-outline-warning mt-3 mb-3"><i><PiBookmarkSimpleBold/></i> Add To WatchList</div>
              </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Section_3;
