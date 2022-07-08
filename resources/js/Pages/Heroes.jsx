import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import {Head, InertiaLink,usePage} from '@inertiajs/inertia-react';
import Container from "react-bootstrap/Container";
import {Table} from "react-bootstrap";

export default function Heroes(props) {
    const { heroes } = usePage().props;

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Heroes</h2>}
        >
            <Head title="Heroes" />

            <Container className="mt-5">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 bg-white border-b border-gray-200">
                            <Table striped bordered hover>
                                <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Health</th>
                                    <th>Damage</th>
                                </tr>
                                </thead>
                                <tbody>
                                {heroes.map((hero,index) => (
                                    <tr key={index}>
                                        <td>{index+1}</td>
                                        <td>{hero.name}</td>
                                        <td>{hero.health}</td>
                                        <td>{hero.weapons_sum_damage}</td>
                                    </tr>
                                ))}
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            </Container>

        </Authenticated>
    );
}
