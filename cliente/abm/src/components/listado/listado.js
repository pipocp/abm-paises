import React from 'react';
import './listado.css';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

class Listado extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            paises: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:9000/api/paises')
        .then((response) => response.json())
        .then((json) => this.setState({paises : json }));
    }

    onEditarHandle() {
        alert("Editar");
    }

    onEliminarHandle(){
        alert("Eliminar");
    }
    
    render() {

        return (
            <Container className="contenedor-abm">

                <div className="botonera-abm">
                    <Button variant="primary" className="boton-nuevo">Nuevo</Button>
                </div>
                
                <Table striped bordered hover className="tabla-abm">
                    <thead>
                        <tr>
                            <th>Codigo</th>
                            <th>Descripcion</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.paises.map((pais, i) => {
                            return (
                                <tr key={pais.codigo}>
                                    <td>{pais.codigo}</td>
                                    <td>{pais.descripcion}</td>
                                    <td className="columna-acciones">
                                        <Button variant="primary" onClick={ () => this.onEditarHandle() } >Editar</Button>
                                        <Button variant="danger" onClick={ () => this.onEliminarHandle() }>Eliminar</Button>
                                    </td>
                                </tr>
                            )
                        })
                    }   
                    </tbody>
                </Table>
            </Container>
        )
    }


}

export default Listado;