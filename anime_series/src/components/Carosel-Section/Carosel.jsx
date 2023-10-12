import { MDBCarousel,MDBCarouselItem,} from 'mdb-react-ui-kit';
import "./carosel.css"

const Carosel = () => {
  return (
    <MDBCarousel showIndicators showControls fade className='Main_carosel h-75 '>
      <MDBCarouselItem
        className='w-100 h-75  d-block'
        itemId={1}
        src='https://static.crunchyroll.com/fms/landscape_large/94/png/8c566c3c-15e4-4c20-a224-174b0744eaf8.webp'
        alt='...'
        // https://static.crunchyroll.com/fms/logo/85/png/c1465630-cbe5-45ac-8bcd-62d17d54073e.webp
      > <div className='title'>            
              <img className="w-75 h-75 "  src="https://static.crunchyroll.com/fms/logo/85/png/c1465630-cbe5-45ac-8bcd-62d17d54073e.webp" alt="" />
        </div>
        
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src='https://static.crunchyroll.com/fms/landscape_large/94/png/a5bac8ac-8bf6-4a78-9674-4730fac66ab6.webp'
        alt='...'
        // https://static.crunchyroll.com/fms/logo/85/png/2f0f479f-e18f-4947-baa1-2cbf45cdda6d.webp
      > <div className='title'>
            <img className="w-75 h-75" src="https://static.crunchyroll.com/fms/logo/85/png/2f0f479f-e18f-4947-baa1-2cbf45cdda6d.webp" alt="" />
        </div>
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='https://static.crunchyroll.com/fms/landscape_large/94/png/b6e07b80-e5a7-48c6-8919-0aa7c3e70abb.webp'
        alt='...'
        // https://static.crunchyroll.com/fms/logo/85/png/a114705c-7d29-4ed4-9f30-7ebe633540dc.webp
      >
        <div className="title">
          <img className="w-75 h-75" src="https://static.crunchyroll.com/fms/logo/85/png/a114705c-7d29-4ed4-9f30-7ebe633540dc.webp" alt="" />
        </div>
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={4}
        src='https://static.crunchyroll.com/fms/landscape_large/94/png/fc7f2dfd-d0b3-4bfb-829a-8b7cffbd927b.webp'
        alt='...'
        // https://static.crunchyroll.com/fms/logo/85/png/abb23246-68c3-4ffd-abc8-ea83876f4036.webp
      >
        <div className="title">
          <img className="w-75 h-75"  src="https://static.crunchyroll.com/fms/logo/85/png/abb23246-68c3-4ffd-abc8-ea83876f4036.webp" alt="" />
        </div>
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={5}
        src='https://static.crunchyroll.com/fms/landscape_large/94/png/27e4c160-45ba-44e1-8cdc-b369f0f225e8.webp'
        alt='...'
        // https://static.crunchyroll.com/fms/logo/85/png/fa34609b-55fb-4532-99cd-48568e3a8b60.webp
      >
        <div className="title">
          <img className="w-25 h-25" src="https://static.crunchyroll.com/fms/logo/85/png/fa34609b-55fb-4532-99cd-48568e3a8b60.webp" alt="" />
        </div>
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={6}
        src='https://static.crunchyroll.com/fms/landscape_large/94/png/8c335a93-daeb-44ee-9ef9-c9997339bab6.webp'
        alt='...'
        // https://static.crunchyroll.com/fms/logo/85/png/87beeb7a-51c1-4bc2-aef7-571de6d32391.webp
      >
        <div className="title">
          <img className="w-75 h-75"  src="https://static.crunchyroll.com/fms/logo/85/png/87beeb7a-51c1-4bc2-aef7-571de6d32391.webp" alt="" />
        </div>
      </MDBCarouselItem>

    </MDBCarousel>
  )
}

export default Carosel