import { Footer } from "../footer"
import { Header } from "../header"
import { Main } from "../main"

import produto from '../../img/virkon500.png'
import { FaFacebook, FaInstagram, FaMapMarkerAlt } from "react-icons/fa" ; 
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
       <p>Terraviva</p>
       <div className="header_1">
          <div  className='face_cont'>
            <FaFacebook />
            <p>Facebook</p>
          </div>
          <div id='insta'>
            <FaInstagram />
            <p>Instagram</p>
          </div>
       </div>
    </Header>
    <Main>
       <section className="sec1">
         
            <div className="sec_cont">
               <h1><strong>Virkon S</strong> 500g</h1>
               <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus facere est exercitationem sequi aliquam adipisci fuga corrupti explicabo? </p>
            </div>
            <div className="sec_img">
                     <img src={produto} alt="produto virkon"/>
            </div>        
       </section>
            
       <section className="sec2">
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
              
             <a ref={lin} onClick={register} href="https://api.whatsapp.com/send?1=pt_BR&amp;phone=5585997157520">Enviar</a> 
            </div>                 
                 
         </form>  
         
      
       </section>
   </Main>
   {/* ----------------------------footer------------------------------------------------------- */}
    <Footer>
      <div>
         <FaMapMarkerAlt />
         <p>Fortaleza - CE</p>
       </div>
    </Footer>
    </>)
    }