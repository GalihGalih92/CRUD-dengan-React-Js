import React, { Component } from 'react'
import Navbar_component from './navbar_component'
import Table from './table'
import Form from './form_add'

export default class index extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            siswa : [],
            full_name : "",
            phone_number : "",
            email : "",
            id : "",
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.id == "") {
            this.setState({
                siswa: [
                    ...this.state.siswa,
                    {
                        id: this.state.siswa.length + 1,
                        full_name: this.state.full_name,
                        phone_number: this.state.phone_number,
                        email: this.state.email
                    }
                ]
            });
        } else {
            const editsiswa = this.state.siswa
                .filter((siswa) => siswa.id !== this.state.id)
                .map((FilterSiswa) => {
                    return FilterSiswa
                });
            this.setState({
                siswa: [
                    ...editsiswa,
                    {
                        id: this.state.siswa.length + 1,
                        full_name: this.state.full_name,
                        phone_number: this.state.phone_number,
                        email: this.state.email
                    }
                ]
            })
        }

 
        this.setState({
            full_name: "",
            phone_number: "",
            email: "",
            id: "",
        })
    }
    
    editData = (id) => {
        console.log("ID:", id);
        const editsiswa = this.state.siswa
            .filter((siswa) => siswa.id == id)
            .map((FilterSiswa) => {
            return FilterSiswa
        })
        this.setState({
            full_name: editsiswa[0].full_name,
            phone_number: editsiswa[0].phone_number,
            email: editsiswa[0].email,
            id: editsiswa[0].id,
        })
    }
    
    hapusData = (id) => {
        console.log("Hapus Id :", id);
           const siswaBaru = this.state.siswa
                .filter((siswa) => siswa.id !== id)
                .map((FilterSiswa) => {
                    return FilterSiswa
                });
        this.setState({
            siswa : siswaBaru
        })
        
        
    }
    render() {
     console.log(this.state);
        return (
            <div>
                <Navbar_component />
                <div class="container mt-4">
                    <h2>CRUD React Js</h2>
                    <Table siswa={this.state.siswa} editData={this.editData} hapusData={ this.hapusData}/>
                    <Form {...this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
                </div>
            </div>
        )
    }
}
