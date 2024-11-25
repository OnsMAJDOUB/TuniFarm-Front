
import React from "react";
import "./About.css"; 

const About = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>À propos de TuniFarm</h1>
        <p>Votre marché local en ligne</p>
      </header>

      <section className="about-content">
        <div className="about-text">
          <h2>Notre Mission</h2>
          <p>
            TuniFarm est une plateforme qui vise à rapprocher les producteurs
            agricoles locaux de Tunisie et les consommateurs. Nous croyons que
            l’achat direct de produits frais et locaux aide à soutenir
            l’économie locale, tout en garantissant une meilleure qualité pour
            les consommateurs. Découvrez des fruits, légumes, miel, produits
            laitiers et bien plus encore, directement issus des fermes
            tunisiennes.
          </p>
        </div>

        <div className="about-text">
          <h2>Notre Vision</h2>
          <p>
            Notre vision est de devenir la principale plateforme en ligne
            facilitant l'achat de produits locaux en Tunisie. Nous rêvons d'un
            avenir où chaque famille pourra acheter directement ses produits de
            ferme, soutenir les producteurs locaux et manger de manière plus
            saine et responsable.
          </p>
        </div>

        <div className="about-text">
          <h2>Nos Valeurs</h2>
          <ul>
            <li>
              <strong>Authenticité :</strong> Offrir des produits frais et de
              qualité provenant directement des fermes.
            </li>
            <li>
              <strong>Proximité :</strong> Renforcer les liens entre producteurs
              locaux et consommateurs.
            </li>
            <li>
              <strong>Durabilité :</strong> Favoriser des pratiques agricoles
              respectueuses de l'environnement.
            </li>
            <li>
              <strong>Équité :</strong> Assurer un prix juste pour les
              producteurs et les consommateurs.
            </li>
          </ul>
        </div>
      </section>

      <footer className="about-footer">
        <p>&copy; {new Date().getFullYear()} TuniFarm. Tous droits réservés.</p>
      </footer>
    </div>
  );
};

export default About;
