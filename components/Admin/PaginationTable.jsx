import Link from 'next/link';

const PaginationTable = () => {
    return(
        <div className="first-pagination d-flex justify-content-between align-items-center">
						<div className="page-left d-flex">
							<div className="page-limit">
								<p className="font-limit">Limit</p>
								<div className="dropdown">
									<button className="btn btn-light dropdown-toggle btn-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
									10
									</button>
									<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
									<Link className="dropdown-item" href="">20</Link>
									<Link className="dropdown-item" href="">30</Link>
									<Link className="dropdown-item" href="">40</Link>
									</div>
								</div>
							</div>
							<div className="jump-page">
								<p className="font-limit">Jump to Page</p>
								<div className="page-go d-flex">
									<div className="dropdown">
										<button className="btn btn-light dropdown-toggle btn-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
										1  
										</button>
										<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
										<Link className="dropdown-item" href="">2</Link>
										<Link className="dropdown-item" href="">3</Link>
										<Link className="dropdown-item" href="">4</Link>
										</div>
									</div>
									<button className="btn btn-go btn-outline-success my-2 my-sm-0" type="submit">Go</button>
								</div>
							</div>
						</div>
						<div className="page">
							<ul className="pagination">
							<li className="page-item disabled">
								<a className="page-link" href="#">&laquo;</a>
							</li>
							<li className="page-item active">
								<a className="page-link" href="#">1</a>
							</li>
							<li className="page-item"><a className="page-link" href="">2</a></li>
							<li className="page-item"><a className="page-link" href="">3</a></li>
							<li className="page-item"><a className="page-link" href="">...</a></li>
							<li className="page-item"><a className="page-link" href="">9</a></li>
							<li className="page-item">
								<a className="page-link" href="#">&raquo;</a>
							</li>
							</ul>
						</div>			  
					</div>
    )
}
export default PaginationTable;