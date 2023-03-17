import React, { useEffect, useState } from 'react'
import ProdutoDataService from '../../services/produto.services'
import ItensList from './ItensList'

function Itens() {
  const [nome, setNome] = useState('')
  const [preco, setPreco] = useState('')
  const [quantidade, setQuantidade] = useState('')
  


  const handleSubmit = async(e) =>{
    e.preventDefault()

    const newProduto = {
      nome,
      preco,
      quantidade
    }

    try{
      await ProdutoDataService.addProduto(newProduto)
      
    }catch(err){
      console.log(err)
    }
    setNome('')
    setPreco('')
    setQuantidade('')
    window.location.reload(false)
    
    

  }

  return (
    <div>
         {/* Content Header (Page header) */}
         <div className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h5 className="m-0">Produtos</h5>
                </div>{/* /.col */}
              </div>{/* /.row */}
            </div>{/* /.container-fluid */}
          </div>
          {/* /.content-header */}
          {/* Main content */}
          <section className="content">
            <div className="container-fluid">
              {/* {message?.msg && (
              <alert variant={message?.error ? "danger": "success"} 
              dismissible 
              onClose={() => setMessage('')}
              >
                {message?.msg}

                </alert>
              )} */}

              {/* Default box */}
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">
                    <button className="btn" data-toggle="modal" data-target="#novosProdutos" title="Adicionar Produto">
                      <i className="fas fa-plus-circle" /> Adicionar Produto
                    </button>
                  </h3>
                </div>
                <div className="card-body">
                <ItensList />

                </div>
                {/* /.card-body */}
              </div>
              {/* /.card */}
              </div>{/* /.container-fluid */}
          </section>
          {/* /.content */}



        <div className="modal"   id="novosProdutos">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Novo Produto</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <form onSubmit={handleSubmit}  method="post" className="form-horizontal" >
                <input name="form-name" defaultValue="Netlify Rocks" type="hidden" /> 
                <div className="modal-body">
                  <div className="form-group">
                    <label htmlFor="user">Nome do Produto</label>
                    <input 
                    type="text" 
                    className="form-control" 
                    min={0} 
                    id="nome_produto" 
                    name="nome" 
                    value={nome} 
                    onChange={(e) =>setNome(e.target.value)}
                    required />
                  </div>
                  <div className="form-group row">
                    <div className="col-sm-6">                                                                       
                      <label htmlFor="user">Quantidade</label>
                      <input 
                      type="number" 
                      className="form-control" 
                      min={0} 
                      id="quantidade_produto" 
                      name="quantidade" 
                      value={quantidade}
                      onChange={(e) =>setQuantidade(e.target.value)}
                      required />
                    </div>
                    <div className="col-sm-6">
                      <label htmlFor="user">Preço</label>
                      <input 
                      type="number" 
                      className="form-control" 
                      step="0.01" 
                      min="0.01" 
                      id="preco_produto" 
                      name="preco"
                      mask="#00.000.000,00"
                      value={preco}
                      onChange={(e) =>setPreco(e.target.value)}
                      required />
                    </div>
                  </div>
                </div>
                <div className="modal-footer justify-content-between">
                  <button type="button" className="btn btn-default btn-sm" data-dismiss="modal">Cancelar</button>
                  <button type="submit" className="btn btn-primary btn-sm" >Salavar item</button>
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

export default Itens
