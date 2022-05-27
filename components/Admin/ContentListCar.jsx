import Link from 'next/link'
const ContentListCar = () => {
    return(
        <>
    			<div className="dash-title">
					<div className="title-dashboard d-flex align-items-center">
						<p className="title-bold">Cars</p>
						<p className="logo-chevron">&gt;</p>
						<p className="title-light">List Car</p>
					</div>
					<div className="title-list-cars d-flex justify-content-between">
						<p className="font-dashboard">List Cars</p>
						<Link href="/admin/addCars"><button className="btn btn-go my-2 my-sm-0" type="button">+  Add New Car</button></Link>
					</div>
					<div className="type-cars mb-3">
						<ul className="pagination">
						<li className="page-item active">
							<a className="page-link" href="#">All <span className="sr-only"></span></a>
						</li>
						<li className="page-item cars-small "><a className="page-link" href="#">Small</a></li>
						<li className="page-item"><a className="page-link" href="#">Medium</a></li>
						<li className="page-item cars-large "><a className="page-link" href="#">Large</a></li>
						</ul>
					</div>	
				</div>
        </>
    )
}
export default ContentListCar;