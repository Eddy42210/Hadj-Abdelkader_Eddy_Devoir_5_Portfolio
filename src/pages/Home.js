import React from 'react';
import './Home.css';
import Portal from '../components/Portal'
import johnDoe from '../images/john-doe-about.jpg'
import '../App.css';
import Trait from '../components/Trait';


const Home = () => {
    return (
        <main>
            <div className='presentation'>
                <h1 className='title'>Bonjour je suis John Doe</h1>
                <h2 className='title'>Développeur web full stack</h2>
                <div> 
                    <Portal /> 
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