import { Component } from "react";
import ContadorNumero from "./ContadorNumero";

export class Contador extends Component {
    constructor() {
        super();
        this.state = {
            contador: 0
        }

        setInterval(() => {
            console.log('Llamando cada segundo');
            this.setState({ contador: this.state.contador + 1 })
        }, 1000);
    }

   // state = { contador: 0 } // class field

    render() {
        return <ContadorNumero numero={this.state.contador} />
    }
}