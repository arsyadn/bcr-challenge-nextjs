import {Container} from 'react-bootstrap'
const OurServices = () => {
    return(
        <>
        <Container>
        <div className="our-services d-flex flex-sm-row flex-column my-5" id="id-services">
            <div className="girl-pic w-sm-50 w-100 p-sm-5 p-3 d-flex justify-content-end">
                <img src="/assets/img_service.png" alt="car" className="img-fluid w-sm-100 w-75"/>
            </div>
            <div className="description w-sm-50 w-100 d-flex flex-column align-item-center justify-content-start p-sm-5 p-3">
                <h1 className="mb-3">Best Car Rental for any kind of trip in Bali!</h1>
                <p>Sewa mobil di Bali bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>

                <ul className="list-sewa ps-0">
                <li className="d-flex align-items-start justify-content-start list-unstyled m-1">
                    <img src="/assets/checklist.svg" alt=""/>
                    <p className="ms-3">Sewa Mobil Dengan Supir di Bali 12 Jam</p>
                </li>
                <li className="d-flex align-items-start justify-content-start list-unstyled m-1">  
                    <img src="/assets/checklist.svg" alt=""/>          
                    <p className="ms-3">Sewa Mobil Lepas Kunci di Bali 24 Jam</p>
                </li>
                <li className="d-flex align-items-start justify-content-start list-unstyled m-1">   
                    <img src="/assets/checklist.svg" alt=""/>         
                    <p className="ms-3">Sewa Mobil Jangka Panjang Bulanan</p>
                </li>
                <li className="d-flex align-items-start justify-content-start list-unstyled m-1">   
                    <img src="/assets/checklist.svg" alt=""/>         
                    <p className="ms-3">Gratis Antar - Jemput Mobil di Bandara</p>
                </li>
                <li className="d-flex align-items-start justify-content-start list-unstyled m-1"> 
                    <img src="icon/checklist.svg" alt=""/>           
                    <p className="ms-3">Layanan Airport Transfer / Drop In Out</p>
                </li>
                </ul>
            </div>
        </div>
        </Container>
        </>
    )
}
export default OurServices;