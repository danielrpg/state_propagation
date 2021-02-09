import { Component } from "react";

export default class ContadorNumero extends Component {
    render() {
        console.log('Contador Numero render()')
        return <> <span>{this.props.numero}</span></>
    }
}