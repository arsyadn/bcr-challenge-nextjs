import {Card, Button} from 'react-bootstrap';
const CardCar = () => {

    const ArrCars = [
        {
            id: 1,
            name: "Innova",
            passenger: "4 orang",
            price: 430000,
            rentstart: "Updated at 4 Apr 2022, 09.00",
            image: "https://firebasestorage.googleapis.com/v0/b/rent-car-507f6.appspot.com/o/1653289556802-car.png?alt=media",
        },
        {
            id: 2,
            name: "Innova",
            passenger: "4 orang",
            price: 430000,
            rentstart: "Updated at 4 Apr 2022, 09.00",
            image: "https://firebasestorage.googleapis.com/v0/b/rent-car-507f6.appspot.com/o/1653289556802-car.png?alt=media",
        },
        {
            id: 3,
            name: "Innova",
            passenger: "4 orang",
            price: 430000,
            rentstart: "Updated at 4 Apr 2022, 09.00",
            image: "https://firebasestorage.googleapis.com/v0/b/rent-car-507f6.appspot.com/o/1653289556802-car.png?alt=media",
        }
    ];

    const dataCar = ArrCars?.map((data) => 
    <Card key={data.id} className="card-cars" style={{ width: '300px' }} >
    <Card.Img variant="top" src={data.image} className="card-img"/>
    <Card.Body className="card-body">
        <Card.Text className="text-car-type img-fluid">{data.name}</Card.Text>
        <Card.Text className="car-pricetag">Rp {data.price} / hari</Card.Text>
        <div className="start-finish d-flex align-items-center">
							<img src="/assets/icon_key.svg" alt="icon key"/>
							<p className="mb-0 cars-start-update font-weight-light text-card-rent">Start rent - Finish rent</p>
						</div>
						<div className="updated-cars d-flex align-items-center">
							<img src="/assets/icon_clock.svg" alt="icon clock"/>
							<p className="mb-0 cars-start-update font-weight-light text-card-rent">Updated at 4 Apr 2022, 09.00</p>
						</div>
						
							<div className="btn-card d-flex justify-content-between">
								<a href="#" className="btn btn-card-link btn-card-delete d-flex align-items-center justify-content-center cars-start-update">
									<i className='bx bx-trash-alt'></i>
									<p className="mb-0 font-delete-edit">Delete</p>
								</a>
								<a href="/edit-cars" className="btn btn-card-link btn-card-edit d-flex align-items-center justify-content-center cars-start-update">
									<i className='bx bx-edit'></i>
									<p className="mb-0 font-delete-edit">Edit</p>
								</a>
							</div>
    </Card.Body>
    </Card>
    )

    return(
        <>
         <div className="card-wrapper d-flex flex-row justify-content-center">
            {dataCar}
        </div>
        </>
    )
}
export default CardCar;