import React, { Component } from 'react';

class Buscador extends Component{
    render(){
        return (
            <form action="">
                <div className='row'>
                    <div className="form-group col-md-8">
                        <input type="text" className="form-control form-control-lg" placeholder='Busca tu imagen. Ejemplo: Geodas'/>
                    </div>
                </div>
            </form>
        );
    }
}