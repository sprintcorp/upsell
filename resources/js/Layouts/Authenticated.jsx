import React, { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/inertia-react';
import Container from "react-bootstrap/Container";
import {Nav, Navbar, NavDropdown} from "react-bootstrap";

export default function Authenticated({ auth, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar variant="light" bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Toggle aria-controls="navbar-dark-example" />
                    <Navbar.Collapse id="navbar-dark-example" className="justify-content-end">
                        <Nav>
                            <Link href={route('heroes')} className="inline-flex items-center px-1 pt-2 text-decoration-none text-black-50" active={route().current('heroes')}>
                                Heroes
                            </Link>

                            <Link href={route('weapons')} className="inline-flex items-center px-1 pt-2 text-decoration-none text-black-50" active={route().current('weapons')}>
                                Weapons
                            </Link>
                            <NavDropdown
                                id="nav-dropdown-dark-example"
                                title={auth.user.name}
                                color="dark"
                                menuVariant="light"
                            >
                                <Link className="text-decoration-none text-black-50" method="post" href={route('logout')}>
                                    Log Out
                                </Link>

                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <main>
                {children}
            </main>
        </div>
    );
}
