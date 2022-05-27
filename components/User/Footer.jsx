import Link from 'next/link';
// import Image from 'react-bootstrap/Image';

const Footer = () => {
    return(
        <div className="footer d-flex justify-content-center align-items-sm-start align-items-center px-2 my-5 flex-sm-row flex-column">
            <div className="address ms-sm-3 ms-0 me-sm-5 me-0 my-2 text-sm-start text-center">
                <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                <p>binarcarrental@gmail.com</p>
                <p>081-233-334-808</p>
            </div>
            <div className="navigation d-flex flex-column mx-2 my-2 text-sm-start text-center">
                <p className="text-dark font-weight-bold">Our services</p>
                <p className="text-dark font-weight-bold mt-2">Why Us</p>
                <p className="text-dark font-weight-bold">Testimonial</p>
                <p className="text-dark font-weight-bold mt-2">FAQ</p>
            </div>
            <div className="social-media mx-5 my-2 text-sm-start text-center">
                <p>Connect with us</p>
                <div className="sosmed-link">
                    <Link href="#"><img src="/assets/icon_facebook.svg"/></Link>
                    <Link href="#" className="icon-img"><img src="/assets/icon_instagram.svg"/></Link>
                    <Link href="#" className="icon-img"><img src="/assets/icon_twitter.svg"/></Link>
                    <Link href="#" className="icon-img"><img src="/assets/icon_mail.svg"/></Link>
                    <Link href="#" className="icon-img"><img src="/assets/icon_twitch.svg"/></Link>
                </div>
            </div>
            <div className="copyright me-sm-3 me-0 ms-sm-2 ms-0 my-2 d-flex align-items-sm-start align-items-center flex-column">
                <p>Copyright Binar 2022</p>
                <Link href="/"><p className="nav-brand"></p></Link>
            </div>
        </div>
    )
}
export default Footer;