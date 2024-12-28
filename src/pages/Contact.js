/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import '../App.css';
import './Contact.css';
import Trait from '../components/Trait';



const Contact = () => {
    
    return (   
<main>        <div className='page-contact'>
        <h1 style={{marginTop: "20px"}}>Contact</h1>
    <p className='descriptif'>Pour me contacter en vue d'un entretien ou d'une future collaboration,
         merci de remplir le formulaire de contact</p>
         <div className='separate3'><Trait /></div>
         </div>
            <div className='contactez-moi'>
               
                <div className='formulaire'>
                    <form>
                        <h2>Formulaire de contact</h2>
                        <div style={{width: "100%" , marginBottom:"20px"}}><Trait /></div>

                        <input type = "text" placeholder='Votre nom' required></input>
                        <input type="email" placeholder="Votre adresse mail" pattern=".+@example\.com" required></input>
                        <input type = "tel" placeholder='Votre numéro de téléphone' required></input>
                        <input type = "text" placeholder='Sujet' required></input>
                        <textarea type = "text" placeholder='Votre message' style=
                        {{height: '300px' , paddingBottom:'220px'}}></textarea>
                        <button className='button' required type='submit'>Envoyer</button>
                    </form>
                </div>
                <div className='coordonees'>
               
                         <h2>Mes coordonnées</h2>
                <div style={{width: "100%" , marginBottom:"30px"}}><Trait /></div>
                <h4>John Doe</h4>
                <i className="bi bi-map"> 40 rue Laure Diebold</i>
                <i className="bi bi-geo-alt"> 69009 Lyon, France</i>
                <i className="bi bi-phone"> 10 20 30 40 50</i>
                <i className="bi bi-envelope"> john.doe@gmail.com</i>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.6271510189868!2d4.7989789!3d45.778662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure%20Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1734965791119!5m2!1sfr!2sfr"
                 width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>


               
                </div>
            </div>



</main>
         )
};

export default Contact;
