import {Container} from 'react-bootstrap';
const Why = () => {
    return(
        <>
            <Container>
                <div className="why-us container my-5" id="id-whyus">
                    <h1>Why Us?</h1>
                    <p className="mengapa">Mengapa harus pilih Binar Car Rental?</p>
                    <div className="list-item d-flex flex-sm-row flex-column ">
                    <div className="kotak p-4 mt-2">
                        {/* eslint-disable-next-line */}
                        <img src="/assets/icon_complete.svg" alt=""/>
                        <h1 className="mt-3">Mobil Lengkap</h1>
                        <p>Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
                    </div>
                    <div className="kotak p-4 ms-sm-4 mt-2">
                        {/* eslint-disable-next-line */}
                        <img src="/assets/icon_price.svg" alt=""/>
                        <h1 className="mt-3">Harga Murah</h1>
                        <p>Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
                    </div>
                    <div className="kotak p-4 ms-sm-4 mt-2">
                        {/* eslint-disable-next-line */}
                        <img src="/assets/icon_24hrs.svg" alt=""/>
                        <h1 className="mt-3">Layanan 24 Jam</h1>
                        <p>Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
                    </div>
                    <div className="kotak p-4 ms-sm-4 mt-2">
                        {/* eslint-disable-next-line */}
                        <img src="/assets/icon_professional.svg" alt=""/>
                        <h1 className="mt-3">Sopir Profesional</h1>
                        <p>Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
                    </div>
                    </div>
                </div>  
            </Container>
        </>
    )
}
export default Why;