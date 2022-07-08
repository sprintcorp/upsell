import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import ApplicationLogo from "@/Components/ApplicationLogo";

export default function Welcome(props) {
    return (
        <>
            <Head title="Welcome" />
            <div className="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0">
                {/*<div className="fixed top-0 right-0 px-6 py-4 sm:block">*/}
                {/*    {props.auth.user ? (*/}
                {/*        <Link href={route('dashboard')} className="text-sm text-gray-700 underline">*/}
                {/*            Dashboard*/}
                {/*        </Link>*/}
                {/*    ) : (*/}
                {/*        <>*/}
                {/*            <Link href={route('login')} className="text-sm text-gray-700 underline">*/}
                {/*                Log in*/}
                {/*            </Link>*/}

                {/*            <Link href={route('register')} className="ml-4 text-sm text-gray-700 underline">*/}
                {/*                Register*/}
                {/*            </Link>*/}
                {/*        </>*/}
                {/*    )}*/}
                {/*</div>*/}



                <Navbar variant="light" bg="light" expand="lg">
                    <Container fluid>
                        <Navbar.Brand>
                            <Link href="/">
                                <ApplicationLogo />
                            </Link>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbar-dark-example" />
                        <Navbar.Collapse id="navbar-dark-example" className="justify-content-end ml-5">
                            <Nav>
                                {props.auth.user ? (
                                    <Link href={route('dashboard')} className="text-decoration-none text-black-50 mr-4">
                                        Dashboard
                                    </Link>
                                ) : (
                                    <>
                                        <Link href={route('login')} className="text-decoration-none text-black-50 mr-4">
                                            Log in
                                        </Link>

                                        <Link href={route('register')} className="text-decoration-none text-black-50 mr-4">
                                            Register
                                        </Link>
                                    </>
                                )}
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>


            </div>
        </>
    );
}
