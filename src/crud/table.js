import React from 'react';
import { Table } from 'react-bootstrap';

const table = ({ siswa, editData ,hapusData}) => {
    return (
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Full Name</th>
                    <th>Phone Number</th>
                    <th>Email</th>
                    <th>Aksi</th>
                </tr>
            </thead>
            <tbody>
                {siswa.map((siswa, index) => {
                    return (
                        <tr key ={index}>
                            <td>{index + 1}</td>
                            <td>{siswa.full_name}</td>
                            <td>{siswa.phone_number}</td>
                            <td>{siswa.email}</td>
                            <td> <button className="btn btn-danger" onClick={() =>hapusData(siswa.id)}>Hapus</button>
                                <button className="btn btn-primary" onClick={() => editData(siswa.id)}>Edit Data</button>
                            </td>
                        </tr>
                    );
                })}
                
            </tbody>
        </Table>
    );
};

export default table
