import React, { Component } from 'react'

export default class operan extends Component {
    
    render() {
        const { makanan,gantiMakanan}= this.props
        return (
            <div>
                <h2>operan state to props : {makanan}</h2>
                <button onClick={() => gantiMakanan("Soto")}>Ganti Makanan</button>
            </div>
        )
    }
}
