import React,{useState} from 'react'
import styles from "./mycar.module.css"



const RegisterCarros = () => {
   const[carro, setCarro]= useState("")
   const[photo, setPhoto]= useState("")
   const [chave, setChave] = useState([])
   const [descricao, setDescricao] = useState("")


    const handSubmit = (e) => {
        e.preventDefault()
        setCarro("")
        setPhoto("")
        setChave("")
        setDescricao("")
    }


    return(<div className={styles.register}>
       <h3> Registre seu Carro</h3>

          <form onSubmit={handSubmit}>
            <label >Marca do carro:
            <input type="text" name='carro' required value={carro} 
            onChange={(e) => setCarro(e.target.value)}
            />    

            </label>  
            <label >Photo do carro:
            <input type="text" name='carro' required value={photo} 
            onChange={(e) => setPhoto(e.target.value)}
            />    
            </label>      
            
            <label >Marca do carro:
            <input type="text" name='carro' required value={descricao} 
            onChange={(e) => setDescricao(e.target.value)}
            /> 

            </label>  
            <label >chave:
            <input type="text" name='carro' required value={chave} 
            onChange={(e) => setChave(e.target.value)}
            />    
            </label>  
            
            <input id='otherinput' type='submit' />
          </form>          

    </div>)


}

export default RegisterCarros