import { Footer } from "../footer"
import { Header } from "../header"
import { Main } from "../main"
import { Section } from "../section"
import produto from '../../img/virkon500.png'
import { FaFacebook, FaInstagram, FaMapMarkerAlt } from "react-icons/fa" ; 

export const Home = () =>{
   return(
    <>
    <Header> 
       <p>logo</p>
    </Header>
    <Main>
       <Section>
          <div className="sec_cont">
            <h1><strong>Virkon S</strong> 500g</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className="sec_img">
            <img src={produto} alt="produto virkon"/>
          </div>
       </Section>
      
       <Section>
          <div className="sec2">
            <h2>Contato</h2>
            <form action="">
               <label htmlFor="">Nome</label>
               <input type="text" />
               <label htmlFor="">Email</label>
               <input type="text" />
               <label htmlFor="">Telefone</label>
               <input type="text" />
               <button type="submit">
                  <a href="https://api.whatsapp.com/send?1=pt_BR&amp;phone=5585997157520" target="_blank">Enviar</a>
               </button>
          </form>
          </div>
         
       </Section>
   </Main>
    <Footer>
       <div className="footer_sec1">
          <div>
            <FaFacebook />
            <p>Facebook</p>
          </div>
          <div>
            <FaInstagram />
            <p>Instagram</p>
          </div>
       </div>
       <div className="footer_sec2">
         <FaMapMarkerAlt />
         < p>Fortaleza - CE</p>
       </div>
    </Footer>
    </>)
    }