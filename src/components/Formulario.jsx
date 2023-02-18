// Formulario Para probar los Componentes de Clase
import React from "react";


class Formulario extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            nombre: "",
            correo: ""
        }
        this.changeName = this.changeName.bind(this);
        this.changeEmail = this.changeEmail.bind(this);
    }

    // Creando Metodos para Separar codigo
    changeName(e) {
        this.setState({
            nombre: e.target.value
            })
    }

    changeEmail(e) {
        this.setState({
            correo: e.target.value
            })
    }


    render() {
        return (
            <>
            <h2 className="title">Formulario</h2>
            <div className="main-container">
                <form action="/">
                    <div className="form-item">
                        <label htmlFor="name">Nombre</label>
                        <input type="text" id="name" onChange={this.changeName} />
                    </div>
                    <div className="form-item">
                        <label htmlFor="email">Correo</label>
                        <input type="email" id="email" onChange={this.changeEmail} />
                    </div>
                    <div className="form-item">
                    <button className="button" type="submit">Enviar</button>
                    </div>
                </form>
                <div className="message">
                    <h2>{`Hola ${this.state.nombre}`}</h2>
                    <span>{`Gracias por llenar el formulario, tu correo es: ${this.state.correo}`}</span>
                </div>
                    <div className="section-divider"></div>
            </div>
            </>
        )
    }
}

export default Formulario