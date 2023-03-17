import { firestore } from "../firebase-config"

import {
    collection, 
    getDocs, 
    getDoc, 
    addDoc, 
    updateDoc, 
    deleteDoc, 
    doc } 
    from "firebase/firestore"

    const ProdutoCollectionRef = collection(firestore, "compras")

    class ProdutoDataService{

        addProduto = ( newProduto ) =>{
            return addDoc(ProdutoCollectionRef, newProduto)

        }
        updateProduto = ( id, updateProduto ) => {
            const produtoDoc = doc(firestore, "compras", id)

            return updateDoc(produtoDoc, updateProduto)
        }
        deleteProduto = ( id ) =>{
            const produtoDoc =  doc(firestore, "compras", id );
            return deleteDoc(produtoDoc)

        }
        getAllProdutos = () =>{
            return getDocs(ProdutoCollectionRef)
        }
        getProduto = ( id ) =>{
            const produtoDoc  =  doc(firestore, "compras", id );
            return getDoc(produtoDoc)
        }

    }

    // eslint-disable-next-line import/no-anonymous-default-export
    export default new ProdutoDataService();