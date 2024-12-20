import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import './Portfolio.css';
import FreshFoodImage from "../images/portfolio/fresh-food.jpg";
import RestaurantImage from "../images/portfolio/restaurant-japonais.jpg";
import BienEtreImage from "../images/portfolio/espace-bien-etre.jpg";
import SeoImage from "../images/portfolio/seo.jpg";
import ApiImage from "../images/portfolio/coder.jpg";
import MaquetteImage from "../images/portfolio/screens.jpg";

const Button = () => {
    return (
        <Link to="/Portfolio" className='button'>Voir le site</Link>
    );
};

const CardPortfolio = ({ image, title, text, footerText }) => {
    return (
        <div className="card">
            <img src={image} className="card-img-top" alt={title} />
            <div className="card-body">
                <h3 className="card-title">{title}</h3>
                <p className="card-text">{text}</p>
            </div>
            <Button />
            <div className="card-footer">
                <small className="text-body-secondary">{footerText}</small>
            </div>
        </div>
    );
};

const Portfolio = () => {
    return (
        <main>
            <div className='page'>
                <h1>Portfolio</h1>
                <p className='descriptif'>Voici quelques-unes de mes réalisations</p>
            </div>
            <div className='articles'>
                <div className='ensemble'>
                    <article>
                        <CardPortfolio 
                            image={FreshFoodImage}
                            title="Fresh Food" 
                            text="Site de vente de produits frais en ligne" 
                            footerText="Site réalisé avec PHP et MySQL" 
                        />
                    </article>
                    <article>
                        <CardPortfolio 
                            image={RestaurantImage} 
                            title="Restaurant Akira" 
                            text="Site de vente de produits frais en ligne" 
                            footerText="Site réalisé avec WordPress" 
                        />
                    </article>
                    <article>
                        <CardPortfolio 
                            image={BienEtreImage} 
                            title="Espace bien-être" 
                            text="Site de vente de produits frais en ligne" 
                            footerText="Site réalisé avec LARAVEL" 
                        />
                    </article>
                </div>
                <div className='ensemble2'>
                    <article>
                        <CardPortfolio 
                            image={SeoImage} 
                            title="SEO" 
                            text="Amélioration du référencement d'un site e-commerce" 
                            footerText="Utilisation des outils SEO" 
                        />
                    </article>
                    <article>
                        <CardPortfolio 
                            image={ApiImage} 
                            title="Création d'une API" 
                            text="Création d'une API RESTFULL publique" 
                            footerText="PHP - SYMFONY" 
                        />
                    </article>
                    <article>
                        <CardPortfolio 
                            image={MaquetteImage} 
                            title="Maquette d'un site web" 
                            text="Création du prototype d'un site" 
                            footerText="Réalisé avec FIGMA" 
                        />
                    </article>
                </div>
            </div>
        </main>
    );
};

export default Portfolio;