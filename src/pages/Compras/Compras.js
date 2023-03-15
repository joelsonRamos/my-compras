import React from 'react'

function Compras() {
  return (
    <div>
      {/* Default box */}
      <div className="card">
        <div className="card-header">
          <h3 className="card-title">
            <button  className="btn lg" data-toggle="modal" data-target="#novosProdutos" title="Adicionar Item">
              <i className="fas fa-plus-circle" />
            </button>
          </h3>
        </div>
        <div className="card-body">
         
          <table className="table table-sm">
            <thead>
              <tr>
                <th />
                <th />
                <th />
                <th />
                <th />
              </tr>
            </thead>
            <tbody><tr>
                <td>1</td>
                <td>nome</td>
                <td>preco</td>
                <td>quantidade</td>
                <td>
                  <button className="btn btn-success  m-1 btn-sm" data-mytitle data-toggle="modal" title="Editar " data-target="#editcampo">
                    <i className="fas fa-edit nav-icon" />
                  </button>
                  <button className="btn btn-danger  m-1 btn-sm" data-toggle="modal" title="Deletar ">
                    <i className="fas fa-trash-alt nav-icon" />
                  </button>
                </td>
              </tr></tbody>
          </table>
        </div>
        {/* /.card-body */}
      </div>
      {/* /.card */}


<div className="modal fade" id="novosProdutos">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Novo Produto</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">×</span>
        </button>
      </div>
      <form action="/Produto/store" method="post" className="form-horizontal" data-netlify="true">
        <input name="form-name" defaultValue="Netlify Rocks" type="hidden" /> 
        <div className="modal-body">
          <div className="form-group">
            <label htmlFor="user">Nome do Produto</label>
            <input type="text" className="form-control" min={0} id="nome_produto" name="nome" required />
          </div>
          <div className="form-group row">
            <div className="col-sm-6">                                                                       
              <label htmlFor="user">Quantidade</label>
              <input type="number" className="form-control" min={0} id="quantidade_produto" name="quantidade" required />
            </div>
            <div className="col-sm-6">
              <label htmlFor="user">Preço</label>
              <input type="number" className="form-control" step="0.01" min="0.01" id="preco_produto" name="preco" required />
            </div>
          </div>
        </div>
        <div className="modal-footer justify-content-between">
          <button type="button" className="btn btn-default btn-sm" data-dismiss="modal">Cancelar</button>
          <button type="submit" className="btn btn-primary btn-sm">Salavar item</button>
        </div>
      </form>
    </div>
    {/* /.modal-content */}
  </div>
  {/* /.modal-dialog */}
</div>
{/* /.modal */}


    </div>
  )
}

export default Compras
