import { PiPlayLight } from "react-icons/Pi";
import { PiBookmarkSimpleBold } from "react-icons/Pi";
import { FaCrown } from "react-icons/Fa";

const Section_5 = () => {
  return (
    <div className="section-1 container-fluid  mt-5" >
        <div className="container mt-5 ">
        <div className="row cap  mt-5">            
            <div className="col-lg-4 col-md-6 col-sm-12">
              <a href="#">
                  <img src="https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/5e124c232496fb8b2c3e73102a9ab6e1.jpe" alt="" className="img-fluid"/>
              </a>
          </div>
          <div className="col-lg-8 col-md-6 col-sm-12 mt-2"> 
              <h3>Firefiter Daigo:Rescuer in Orange <span className="text-warning"><FaCrown/></span></h3>
              <h6 className="cap_series mt-4 mb-4">Series</h6>
              <h4>From battling blazes to daring rescues, firefighters risk their lives to protect others...</h4>
              <div className="btn-group mt-4"> 
                  <div className="btn btn-warning mt-3 mb-3 me-4"><i ><PiPlayLight/></i> Start Watching S1 E1</div> 
                  <div className="btn btn-outline-warning mt-3 mb-3"><i><PiBookmarkSimpleBold/></i> Add To WatchList</div>
              </div>
          </div>
        </div>
        <div className="row cap  mt-5 mb-5">           
            <div className="col-lg-4 col-md-6 col-sm-12">
              <a href="#">
                  <img src="https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/1ca03c4c178636f00cb1c56b915c9f90.jpe" alt="" className="img-fluid"/>
              </a>
          </div>
          <div className="col-lg-8 col-md-6 col-sm-12 mt-2"> 
              <h3>BULLBUSTER <span className="text-warning"><FaCrown/></span></h3>
              <h6 className="cap_series mt-4 mb-4">Series</h6>
              <h4>Mysterious creatures have been terrorizing an island, forcing locals to flee their once-thriving...</h4>
              <div className="btn-group mt-4"> 
                  <div className="btn btn-warning mt-3 mb-3 me-4"><i ><PiPlayLight/></i> Start Watching S1 E1</div> 
                  <div className="btn btn-outline-warning mt-3 mb-3"><i><PiBookmarkSimpleBold/></i> Add To WatchList</div>
              </div>
          </div>
        </div>
        </div>

        <div className="container watchnow mt-5 mb-5">
            <div className="row justify-content-center mt-5">
                <div className="">
                <a href="">
                    <img src="https://static.crunchyroll.com/fms/desktop_large/1350x450/00752e77-3a5f-4bab-939c-607bfec1e7b3.png" alt="" className="img-fluid" />
                </a>
                </div>
            </div>
        </div>
    
    </div>
  )
}

export default Section_5