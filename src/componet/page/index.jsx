
import { Header } from "../header"
import { Main } from "../main"


import {api} from '../../service/api'
import { useRef, useState }from 'react'
import {telefoneMask} from '../../mask'
import './home.css'




let err = {
menssage:""
}
function validarEmail(email) {
 const re = /\S+@\S+\.\S+/;
 return re.test(email);
}
export const Home = () =>{
// --------------------------------------------------------

const [nome, setNome] = useState('');
const [email, setEmail] = useState('');
const [telefone, setTelefone] = useState('');
const [myError, setMyError] = useState(false);

const lin = useRef(null)




async function register(e){
   
    try {

        const dados = {
            nome:nome,
            email: email,
            telefone:telefone,
        }
        
        
        if(dados.nome === "" || dados.email === ""|| dados.telefone === ""){           
           err.menssage ='existe campo vazio'
           setMyError(true)
           e.preventDefault();
           setTimeout(()=>{
              setMyError(false)
              err.menssage =''
            },4000)
            return 
         }
         
         if(!validarEmail(email)){
          err.menssage ='o email não é valido'
          setMyError(true)
          e.preventDefault();
          setTimeout(()=>{
             setMyError(false)
             err.menssage =''
          },4000)
          return
         }
   
             
      await api.post('/contato', dados);
                
        
        
    } catch (error) {
   console.log(error)  ;
    }

}



// -------------------------------------------------------------




   return(
    <>
    <Header> 
       <div>

      <h1>Virkon S 500g <span>Quem ama protege</span></h1>
       </div>
       <div>
         <p>elimina fungos, bactérias e vírus, proporcionado
          um ambiente protegido para o desenvolvimento saudável de seu pet.</p> 
       </div>
      
    </Header>
    <Main>
           
       <section className="sect">
          <form  >
            <h2>Contato</h2>
             {myError &&
              <p id="err">{err.menssage}</p>
            }
               <div>

                   <label htmlFor="nome">Nome:</label>  
                    <input type='text' name={'nome'}   
                     minLength= {3}
                     value={nome}
                     onChange={e=> setNome(e.target.value)}
                     id="nome"/>
                 
            </div>
            <div>


                <label htmlFor="email">Email:</label> 
                    <input type='text'
                     name={'email'}
                     value={email}
                     onChange={e=> setEmail(e.target.value)}
                     id="email"/>
                 
            </div>
            <div>

                <label htmlFor="telefone">Telefone:</label>              
                    <input type='text'
                    name={'telefone'}
                    placeholder={'somente números'}
                    value={telefone}
                    onChange={e=> setTelefone(telefoneMask(e.target.value))}
                    id="telefone"/>
            </div>
            <div>
              
             <a ref={lin} onClick={register} href="https://api.whatsapp.com/send?1=pt_BR&amp;phone=5585997157520">Comprar</a> 
            </div>                 
                 
         </form>  
         
      
       </section>
   </Main>

    </>)
    }