import React, {createContext,useReducer} from 'react';
import TransactionReducer from './transactionReducer';
//initial state
const initialTransactions = [
    {amount:700, desc: "Cash"},
    {amount:-40, desc: "cold drink"},
    {amount:-300, desc: "Camera"},
]

export const TransactionContext = createContext(initialTransactions);


export const TransactionProvider = ({children})=> {
    let [state, dispatch] = useReducer(TransactionReducer,initialTransactions);
    
    function deleteTransaction(transObj) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: {
                id: transObj.index},
        });
    }

    function addTransaction(transObj){
        dispatch({
            type:"ADD_TRANSACTION",
            payload:{
                amount:transObj.amount,
                desc: transObj.desc
            },
        })
    }

    return(
        <TransactionContext.Provider value= {{
            transactions: state,
            addTransaction,
            deleteTransaction
        }}>
            {children}
        </TransactionContext.Provider>
    )
    

}