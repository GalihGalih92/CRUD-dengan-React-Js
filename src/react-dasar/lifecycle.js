import React, { Component } from 'react'
import Sublifecycle from './sublifecycle';

export default class lifecycle extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            makanan: 'Bakso',
            data: {},
            tampilSub: false,
        };
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => {
                this.setState({
                    data : json
                })
        });
    }

    ubahMakanan(value) {
        this.setState({
            makanan: value
        })
    }

    render() {
      
        return (
            <div>
                <h2>life cycle</h2>
                <h2>{this.state.makanan}</h2>
                {this.state.tampilSub && <Sublifecycle ubahMakanan={(value) => this.ubahMakanan(value)} />}
                
                <button onClick={()=>this.setState({tampilSub: !this.state.tampilSub})}>Pencet</button>
            </div>
        )
    }
}
