
import React, { useEffect, useState } from 'react'
import ProdutoDataService from '../../services/produto.services'

function ItensList() {
    const [produtos, setProdutos] =  useState([])
    const [nome, setNome] = useState('')
    const [preco, setPreco] = useState('')
    const [quantidade, setQuantidade] = useState('')
    const [idFinal, setIdFinal] = useState('')
    
    useEffect(() =>{
        getProduto();
        
    },[])

    const editHandler = async(id) =>{
        
        try{
            const docSnap = await ProdutoDataService.getProduto(id)
            
            setNome(docSnap.data().nome)
            setPreco(docSnap.data().preco)
            setQuantidade(docSnap.data().quantidade)
        }catch(err){
            console.log(err)

        }
    }

    const getProdutoId = (id)=>{
        setIdFinal(id)
        if(id !== undefined && id !== " "){
            editHandler(id)
            
        }
      }
    const getProduto = async()=>{
        const data = await ProdutoDataService.getAllProdutos()
        setProdutos(data.docs.map((doc)=>({...doc.data(), id: doc.id})))
    }
    const deleteHandler = async(id) =>{
        await  ProdutoDataService.deleteProduto(id)
        getProduto()
    }
    const handleEdit = async(e) =>{
        e.preventDefault()
    
        const uddateProduto = {
          nome,
          preco,
          quantidade
        }
        console.log(uddateProduto)
    
        try{
          await ProdutoDataService.updateProduto(idFinal, uddateProduto)
          
        }catch(err){
          console.log(err)
        }
        setNome('')
        setPreco('')
        setQuantidade('')
        window.location.reload(false)
    
      }
  return (
        <>
            {/* <pre>{JSON.stringify(produtos, undefined, 2)}</pre> */}
            <table  className="table table-striped">
                <thead>
                    <tr>
                        <th>Produtos</th>
                        <th>Qtd</th>
                        <th>Preço</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
    
                    {produtos.map((produto)=>{
                        return (
                            <tr key={produto.id}>
                                <td>{produto.nome}</td>
                                <td>{produto.quantidade}</td>
                                <td>€ {produto.preco}</td>
                                <td width={2}>
                                    <button 
                                    className="btn btn-success  btn-sm" 
                                    title="Editar " 
                                    data-target="#editar"
                                    data-toggle="modal" 
                                    onClick={ (e) => getProdutoId(produto.id)}
                                    >
                                        <i className="fas fa-pencil-alt nav-icon" />
                                    </button>

                                </td>
                                <td width={2}>
                                    <button 
                                    className="btn btn-danger  btn-sm"

                                    title="Deletar "
                                    onClick={(e)=> deleteHandler(produto.id)}
                                    >
                                        <i className="fas fa-trash-alt nav-icon" />
                                    </button>
                                </td>
                            </tr>
                        )
                    })}
                                
                </tbody>
             
            </table>

        <div className="modal"   id="editar">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Novo Produto</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <form onSubmit={handleEdit} className="form-horizontal" >
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
        </>
    )
}

export default ItensList
