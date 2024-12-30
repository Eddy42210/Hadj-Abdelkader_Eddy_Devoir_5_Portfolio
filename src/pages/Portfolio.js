import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import './Portfolio.css';
import Trait from '../components/Trait';
import FreshFoodImage from "../images/portfolio/fresh-food.jpg";
import RestaurantImage from "../images/portfolio/restaurant-japonais.jpg";
import BienEtreImage from "../images/portfolio/espace-bien-etre.jpg";
import SeoImage from "../images/portfolio/seo.jpg";
import ApiImage from "../images/portfolio/coder.jpg";
import MaquetteImage from "../images/portfolio/screens.jpg";

const Button = () => {
    return (
        <Link to="/Portfolio" className='btn btn-primary btn-sm mx-auto d-block' style={{marginBottom:'5%'}}>Voir le site</Link>
    );
};

const CardPortfolio = ({ image, title, text, footerText }) => {
    return (
        <div className="card mb-4">
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
        <main className="container mt-5">
            <div className='text-center'>
                <h1>Portfolio</h1>
                <p className='descriptif'>Voici quelques-unes de mes réalisations</p>
            </div>
            <div className='my-4' style={{width: '30%', margin:'auto'}}><Trait /></div>

            <div className="row">
                <div className="col-lg-4 col-md-6 mb-4">
                    <CardPortfolio 
                        image={FreshFoodImage}
                        title="Fresh Food" 
                        text="Site de vente de produits frais en ligne" 
                        footerText="Site réalisé avec PHP et MySQL" 
                    />
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <CardPortfolio 
                        image={RestaurantImage} 
                        title="Restaurant Akira" 
                        text="Site de vente de produits frais en ligne" 
                        footerText="Site réalisé avec WordPress" 
                    />
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <CardPortfolio 
                        image={BienEtreImage} 
                        title="Espace bien-être" 
                        text="Site de vente de produits frais en ligne" 
                        footerText="Site réalisé avec LARAVEL" 
                    />
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <CardPortfolio 
                        image={SeoImage} 
                        title="SEO" 
                        text="Amélioration du référencement d'un site e-commerce" 
                        footerText="Utilisation des outils SEO" 
                    />
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <CardPortfolio 
                        image={ApiImage} 
                        title="Création d'une API" 
                        text="Création d'une API RESTFULL publique" 
                        footerText="PHP - SYMFONY" 
                    />
                </div>
                <div className="col-lg-4 col-md-6 mb-4">
                    <CardPortfolio 
                        image={MaquetteImage} 
                        title="Maquette d'un site web" 
                        text="Création du prototype d'un site" 
                        footerText="Réalisé avec FIGMA" 
                    />
                </div>
            </div>
        </main>
    );
};

export default Portfolio;
