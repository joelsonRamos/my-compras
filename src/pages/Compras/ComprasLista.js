import React from 'react'

function ComprasLista() {
    return (
        <>
                            
            <table className="table table-sm">
                <thead>
                    <tr>
                        <th/>
                        <th />
                        <th />
                        <th />
                        <th />
                    </tr>
                </thead>
                <tbody><tr>
                    <td>1</td>
                    <td>Carne de sol</td>
                    <td>20.00</td>
                    <td>5</td>
                    <td>
                        <button className="btn btn-success  m-1 btn-sm" data-mytitle data-toggle="modal" title="Editar " data-target="#editcampo">
                            <i className="fas fa-pencil-alt nav-icon" />
                        </button>
                        <button className="btn btn-danger  m-1 btn-sm" data-toggle="modal" title="Deletar ">
                            <i className="fas fa-trash-alt nav-icon" />
                        </button>
                    </td>
                    </tr></tbody>
                </table>
        </>
    )
}

export default ComprasLista
