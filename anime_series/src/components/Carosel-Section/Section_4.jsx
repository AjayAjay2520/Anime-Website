import { HiOutlineArrowRight } from "react-icons/Hi";
import { FaCrown } from "react-icons/Fa";


const Section_4 = () => {
  return (
    <div className="section-1 mt-4" >
        <button data-text="Awesome" className="button mt-4  ">
            <span className="actual-text">&nbsp;NewEpisodes&nbsp;</span>
            <span className="hover-text" aria-hidden="true">
            &nbsp;NewEpisodes&nbsp;
            </span>
        </button>
        <div className="History mt-5  d-flex flex-wrap justify-content-between">
            <h3 className="S-1h ">Today</h3>
            <h5 className="h5 S-1h me-5 ">
            VIEW RELEASE CALENDER <HiOutlineArrowRight/>
            </h5>
        </div>
        <hr className="" style={{border:"2px solid gray",width:"97%"}} />
        
        {/* Today Section---------------------------- */}
        <div className="today">
            <div className="row d-flex flex-wrap mt-4">
                <div className="col-lg-4 col-sm-12 mb-2">
                    <img style={{cursor:"pointer"}} src="https://www.crunchyroll.com/imgsrv/display/thumbnail/320x180/catalog/crunchyroll/c4b2e994a8e74bbd7adf4e59912851c0.jpe" alt="" />                
                </div>
                <div className="col-lg-8 col-sm-12 " style={{cursor:"pointer"}}>                
                    <h4>The Maid | Hired Recently Is MySterius(Eng Dub)</h4>
                    <h5 className="text-secondary mt-3 mb-3 "> <span className="text-warning"> <FaCrown/> </span> Episodes 6 </h5>
                    <h5 className="text-secondary">Sub|Dub</h5>
                    <span className="timing" >8:30am</span>
                </div>             
            </div>
            <div className="row d-flex flex-wrap mt-5" >
                <div className="col-lg-4 col-sm-12 mb-2">
                    <img style={{cursor:"pointer"}} src="https://www.crunchyroll.com/imgsrv/display/thumbnail/320x180/catalog/crunchyroll/44ca7020d3de7a444724dc8e16c43142.jpe" alt="" />                
                </div>
                <div className="col-lg-8 col-sm-12" style={{cursor:"pointer"}}>                
                    <h4>(Dubs)VINLANDA SAGE</h4>
                    <h5 className="text-secondary mt-3 mb-3 "> <span className="text-warning"> <FaCrown/> </span> Episodes 3 </h5>
                    <h5 className="text-secondary">Sub|Dub</h5>
                    <span className="timing" >1:30am</span>
                </div>             
            </div>
        </div>
        <hr className="" style={{border:"2px solid gray",width:"97%"}} />
        <div className="History   d-flex flex-wrap justify-content-between">
            <h3 className="S-1h ">Yesterday</h3>
        </div>

        {/* Yeaterday Section---------------------------- */}
        <div className="yesterday">
            <div className="row d-flex flex-wrap mt-4">
                <div className="col-lg-4 col-sm-12 mb-2">
                    <img style={{cursor:"pointer"}} src="https://www.crunchyroll.com/imgsrv/display/thumbnail/320x180/catalog/crunchyroll/6b5f4fc8c0a7bb5012b9c0930a46570f.jpe" alt="" />                
                </div>
                <div className="col-lg-8 col-sm-12 " style={{cursor:"pointer"}}>                
                    <h4>Demon Slayer:Kimetsu no yaiba Mugen Train Arc</h4>
                    <h5 className="text-secondary mt-3 mb-3 "> <span className="text-warning"> <FaCrown/> </span> Episodes 12 </h5>
                    <h5 className="text-secondary">Sub|Dub</h5>
                    <span className="timing" >10:45pm</span>
                </div>             
            </div>
            <div className="row d-flex flex-wrap mt-5">
                <div className="col-lg-4 col-sm-12 mb-2">
                    <img style={{cursor:"pointer"}} src="https://www.crunchyroll.com/imgsrv/display/thumbnail/320x180/catalog/crunchyroll/9759758b490f9bea64c9d02da9b21e58.jpe" alt="" />                
                </div>
                <div className="col-lg-8 col-sm-12 " style={{cursor:"pointer"}}>                
                    <h4>SHY</h4>
                    <h5 className="text-secondary mt-3 mb-3 "> <span className="text-warning"> <FaCrown/> </span> Episodes 3 </h5>
                    <h5 className="text-secondary">Subtitle</h5>
                    <span className="timing" >9:30pm</span>
                </div>             
            </div>
            <div className="row d-flex flex-wrap mt-5">
                <div className="col-lg-4 col-sm-12 mb-2">
                    <img style={{cursor:"pointer"}} src="https://www.crunchyroll.com/imgsrv/display/thumbnail/320x180/catalog/crunchyroll/5ee158b7721e7763892a4479abc8eca0.jpe" alt="" />                
                </div>
                <div className="col-lg-8 col-sm-12 " style={{cursor:"pointer"}}>                
                    <h4>Dead Mount Dead Play</h4>
                    <h5 className="text-secondary mt-3 mb-3 "> <span className="text-warning"> <FaCrown/> </span> Episodes 13 </h5>
                    <h5 className="text-secondary">Subtitle</h5>
                    <span className="timing" >9:00pm</span>
                </div>             
            </div>
        {/* Anime Button---------------------------------- */}
            <div className="anime_button mt-5 mb-5 d-flex justify-content-center ">
                <button className="ani_btn" >
                    <div className="svg-wrapper-1">
                        <div className="svg-wrapper">
                        <svg height="25" width="25" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z" fill="currentColor"></path>
                        </svg>
                        </div>
                    </div>
                    <span>More</span>
                </button>
            </div>
        </div>
        <hr className="" style={{border:"2px solid gray",width:"97%"}} />

    
    
    </div>
  )
}

export default Section_4