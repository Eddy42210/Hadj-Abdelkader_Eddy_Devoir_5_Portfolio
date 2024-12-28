import React, { useState, useEffect } from 'react';
import './Home.css';
import Modal from 'react-modal';
import johnDoe from '../images/john-doe-about.jpg';
import '../App.css';
import Trait from '../components/Trait';

const HomePage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [githubData, setGithubData] = useState(null);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        const fetchGithubData = async () => {
            try {
                const response = await fetch('https://api.github.com/users/github-john-doe');
                const data = await response.json();
                setGithubData(data);
            } catch (error) {
                console.error('Erreur lors de la récupération des données GitHub:', error);
            }
        };

        fetchGithubData();
    }, []); 

    return (
        <div>
            <button className='bouton' onClick={openModal}>En savoir plus</button>

            <Modal isOpen={isModalOpen} onRequestClose={closeModal} className="modal-style">
                <div className='header-modal'>
                    <h3>Mon profil Github</h3>
                    <p onClick={closeModal} className='X'>X</p>
                </div>
                <div className='body-modal'>
                    <div className='anonym'></div>
                    <div className='github'>
                        {githubData ? (
                            <>
                                <i className="bi bi-person"> 
                                    <a href={githubData.html_url} target="_blank" rel="noreferrer">John Doe</a>
                                </i>
                                <hr />
                                <i className="bi bi-geo-alt"></i>
                                <hr />
                                <i className="bi bi-card-text"> {githubData.bio || 'Aucune bio disponible.'}</i>
                                <hr />
                                <i className="bi bi-box"> Repositories : {githubData.public_repos}</i>
                                <hr />
                                <i className="bi bi-people"> Followers : {githubData.followers}</i>
                                <hr />
                                <i className="bi bi-people"> Following : {githubData.following}</i>
                            </>
                        ) : (
                            <p>Chargement des données...</p>
                        )}
                    </div>
                </div>
                <div className='footer-modal'>
                    <button onClick={closeModal} className='fermer'>Fermer</button>
                </div>
            </Modal>
        </div>
    );
};

const Home = () => {
    return (
        <main>
            <div className='presentation'>
                <h1 className='title'>Bonjour je suis John Doe</h1>
                <h2 className='title'>Développeur web full stack</h2>
                <div> 
                    <HomePage /> 
                </div>
            </div>
                <div className='description'>
                    <div className='apropos'>
                        <h2>A propos</h2>
                    <div className='separate'><Trait /></div>
                        <img className='about' src={johnDoe} alt='à propos de John Doe'></img>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Fusce pretium ut odio vitae sodales.
                            In finibus elit quis sem viverra congue.
                            Nunc vehicula mi et lorem congue scelerisque.
                            Donec vitae ullamcorper nisi, vitae faucibus magna.
                            Suspendisse ac libero placerat, venenatis lacus vel,
                            condimentum massa.</p>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Fusce pretium ut odio vitae sodales.
                            In finibus elit quis sem viverra congue.
                            Nunc vehicula mi et lorem congue scelerisque.
                            Donec vitae ullamcorper nisi, vitae faucibus magna.
                            Suspendisse ac libero placerat, venenatis lacus vel,
                            condimentum massa.</p>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Fusce pretium ut odio vitae sodales.
                            In finibus elit quis sem viverra congue.
                            Nunc vehicula mi et lorem congue scelerisque.
                            Donec vitae ullamcorper nisi, vitae faucibus magna.
                            Suspendisse ac libero placerat, venenatis lacus vel,
                            condimentum massa.</p>

                    </div>
                    <div className='competences'>
                        <h2>Mes Compétences</h2>
                        <div className='separate2'><Trait /></div>


                        
                            <h3>HTML5 90%</h3>
                        <div>
                            <div class="progress" role="progressbar" aria-label="Danger example" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar bg-danger" style={{ width: '90%' }}></div>
                            </div>
                        </div>

                       
                            <h3>CSS3 80%</h3>
                        <div>
                            <div class="progress" role="progressbar" aria-label="Info example" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                                <div class="progress-bar bg-info" style={{ width: "80%" }}></div>
                            </div>
                        </div>

                        
                            <h3>JAVASCRIPT 70%</h3>
                        <div>
                            <div class="progress" role="progressbar" aria-label="Warning example" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar bg-warning" style={{ width: '70%' }}></div>
                            </div>
                        </div>

                        
                            <h3>PHP 60%</h3>
                        <div>
                            <div class="progress" role="progressbar" aria-label="Success example" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar bg-success" style={{ width: '60%' }}></div>
                            </div>
                        </div>

                        
                            <h3>REACT 50%</h3>
                        <div>
                            <div class="progress" role="progressbar" aria-label="" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                                <div className="progress-bar" style={{ width: '50%' }}></div>
                            </div>
                        </div>



                    </div>
                </div>

        </main>
    
   
)
};

export default Home;