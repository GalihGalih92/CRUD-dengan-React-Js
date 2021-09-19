import React, { Component } from 'react'

export default class sublifecycle extends Component {

    componentWillUnmount() {
        this.props.ubahMakanan("Sate")
    }
    render() {
        return (
            <div>
                <h2>Compnen Sub LifeCycle</h2>
            </div>
        )
    }
}
