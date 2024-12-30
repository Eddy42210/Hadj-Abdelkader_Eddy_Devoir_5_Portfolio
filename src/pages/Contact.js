import React from 'react';
import '../App.css';
import './Contact.css';
import Trait from '../components/Trait';

const Contact = () => {
    return (
        <main className="container mt-5">
            <div className='text-center'>
                <h1>Contact</h1>
                <p className='descriptif'>Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact</p>
                <div className='my-4' style={{ width: '30%', margin: 'auto' }}><Trait /></div>
            </div>
            <div className='row'>
                <div className='col-md-6'>
                    <form className='formulaire'>
                        <h2>Formulaire de contact</h2>
                        <div className='trait-wrapper'><Trait /></div>
                        <input type="text" placeholder='Votre nom' required />
                        <input type="email" placeholder="Votre adresse mail" pattern=".+@example\.com" required />
                        <input type="tel" placeholder='Votre numéro de téléphone' required />
                        <input type="text" placeholder='Sujet' required />
                        <textarea type="text" placeholder='Votre message' style={{ height: '350px' }} />
                        <button className='btn btn-primary btn-sm mx-auto d-block' type='submit' style={{ marginTop: '3%' }}>Envoyer</button>
                    </form>
                </div>
                <div className='col-md-6 coordonees'>
                    <h2>Mes coordonnées</h2>
                    <div className='trait-wrapper'><Trait /></div>
                    <h4>John Doe</h4>
                    <div className='contact-info'>
                        <i className="bi bi-map"> 40 rue Laure Diebold</i>
                        <i className="bi bi-geo-alt"> 69009 Lyon, France</i>
                        <i className="bi bi-phone"> 10 20 30 40 50</i>
                        <i className="bi bi-envelope"> john.doe@gmail.com</i>
                    </div>
                    <iframe title='ville' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.6271510189868!2d4.7989789!3d45.778662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb65edac5b3f%3A0xe01c47049cb2e2b9!2s40%20Rue%20Laure Diebold%2C%2069009%20Lyon!5e0!3m2!1sfr!2sfr!4v1734965791119!5m2!1sfr!2sfr" 
                    width="100%" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </main>
    );
};

export default Contact;
