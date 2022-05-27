import {Navbar, Form, Button, FormControl } from 'react-bootstrap';
// import Image from 'next/image';
import Link from 'next/link';

const NavbarAdmin = () => {
    return(
        <>
        <section id="content w-100">
            <div className="navbar-bg position-sticky sticky-top">
                <Navbar className="nav navbar navbar-light d-flex justify-content-between">
                    <i className='bx bx-menu toggle-sidebar'></i>
                    <div className="nav-right d-flex">
                    <Form className="d-flex form">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                    {/* <Button className="btn btn-clicks btn-outline-success my-2 my-sm-0" type="submit">Search</Button> */}
                    <Button className="btn btn-clicks" type="submit">Search</Button>
                    </Form>
                    <div className="profile-nav d-flex align-items-center justify-content-end me-3">
                        <Link href="@"><img src="/assets/img_profile.svg" alt="profile picture"/></Link>
                        <p className="mx-3 my-auto">Unis Badri</p>
                        <Link href="!"><img src="/assets/icon_arrdown.svg" alt=""/></Link>
                    </div>
                    </div>
                </Navbar>
            </div>
        </section>
        </>
    )
}
export default NavbarAdmin;
