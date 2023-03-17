import React from 'react'

function data(){
  var dataAtual = new Date();
  var mes = dataAtual.getMonth() + 1
  var ano = dataAtual.getFullYear()
  const meses = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];

  return(
    dataAtual =  meses[mes]+' - '+ ano
  )
}
function Compras() {
  
  return (
    <div>
          {/* Content Header (Page header) */}
          <div className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h5 className="m-0">Compras do Mês de: <span>{data()}</span></h5>
                </div>{/* /.col */}
              </div>{/* /.row */}
            </div>{/* /.container-fluid */}
          </div>
          {/* /.content-header */}
          {/* Main content */}
          <section className="content">
            <div className="container-fluid">

              {/* Default box */}
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">
                    <button  className="btn " data-toggle="modal" data-target="#novosItens" title="Adicionar Item">
                      <i className="fas fa-plus-circle" /> Adicionar Item
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
                </div>
                {/* /.card-body */}
              </div>
              {/* /.card */}
              </div>{/* /.container-fluid */}
          </section>
          {/* /.content */}

  <div className="modal fade" id="novosItens">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Adicionar Item no Carrinho</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <form action method="POST" className="form-horizontal">     
          <div className="modal-body">
            <div className="form-group">
              <label htmlFor="campo">Produto</label>
              <select id="campo" name="campo_um" className="form-control select2bs4" style={{width: '100%'}}>
                <option>Selecione um produto</option>
                <option>Feijão</option>
                <option>Arroz</option>
              </select>
            </div>
            <div className="form-group row">
              <div className="col-sm-6">                                                                       
                <label htmlFor="user">Quantidade</label>
                <input type="number" className="form-control" min={0} id="edit_name_setor" name="name_setor" required />
              </div>
              <div className="col-sm-6">
                <label htmlFor="user">Preço</label>
                <input type="number" className="form-control" step="0.01" min="0.01" id="edit_name_setor" name="name_setor" required />
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
