import {Button} from 'react-bootstrap';
import Link from 'next/link';

const Hero = () => {
    return(
    <div className="relative">        
        <div className="hero d-flex justify-content-end w-100 flex-column flex-md-row">
        <div className="hero-text w-100 d-flex flex-column align-items-start">
            <h1 className="hero-bold">Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
            <p className="hero-light w-75">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
            <Link href="#"><Button className="hero-btn">Mulai Sewa Mobil</Button></Link>
        </div>
        <div className="hero-img w-100 w-sm-50 d-flex align-items-end">
            <img src="/assets/img_car.svg" className="img-fluid"/>
        </div>
        </div>
    </div>
    )
}
export default Hero;