import React from 'react';
import '../App.css';
import './Mentions.css';
import Trait from '../components/Trait';



const Mentions = () => {
    return (
        <main>
            <div>
                <div className='page'>
                    <h1>Mentions légales</h1>
                    <div className='separate3'><Trait /></div>
                </div>
                <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Editeur du site
                            </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <h4>John Doe</h4>
                                <i class="bi bi-map"> 40 rue Laure Diebold</i>
                                <i class="bi bi-geo-alt"> 69009 Lyon, France</i>
                                <i class="bi bi-phone"> 10 20 30 40 50</i>
                                <i class="bi bi-envelope"> johndoe@gmail.com</i>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Hébergeur
                            </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <h3>alwaysdata</h3>
                                <p>91 Rue du Faubourg Saint-Honoré, 75008 Paris</p>
                               <i class="bi bi-globe"> 
                               <a href="https://www.alwaysdata.com/fr/" target="_blank" rel="noreferrer" style={{color: 'blue'}}>
                                       www.alwaysdata.com
                                </a></i>

                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Crédits
                            </button>
                        </h2>
                        <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <h3>Crédits</h3>
                                <p>Ce site a été rélisé par John Doe, étudiant au <a href="https://www.centre-europeen-formation.fr/" 
                                target="_blank" rel='noreferrer'>Centre européen de formation</a>.
                                </p>
                                <p>Les images utilisées sur ce site sont libres de droits et ont été obtenues sur le site <a href="https://pixabay.com/fr/">Pixabay</a>.
                                </p>
                                <p>La favicon de ce site a été forunie par <a href='https://www.flaticon.com/de/kostenlose-icons/john-doe'>John doe Icons erstellt 
                                von Freepik - Flaticon</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    );
};


export default Mentions;