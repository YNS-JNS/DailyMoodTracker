import React from 'react';
import App from './App';

// Importation des utilitaires de test
import { render, fireEvent, screen } from '@testing-library/react';

/*
describe: est une fonction de Jest qui permet de regrouper des tests connexes. 
Dans ce cas, tous les tests concernent le composant App, donc ils sont regroupés sous cette description.
*/

// Description des tests pour le composant App
describe('App component', () => {
  // Test : Vérifie si le composant est rendu correctement
  test('renders correctly', () => {
    render(<App />); // Rend le composant App
    // Recherche l'élément contenant le texte 'Mood Tracker'
    const titleElement = screen.getByText('Mood Tracker');
    // Vérifie si l'élément est dans le document
    expect(titleElement).toBeInTheDocument();
  });

  // Test : Sélectionne une humeur et soumet cette humeur
  test('select and submit a mood', () => {
    render(<App />);
    // Simule le clic sur l'emoji pour sélectionner une humeur
    fireEvent.click(screen.getByText('😺')); 
    // Simule le clic sur le bouton de soumission
    fireEvent.click(screen.getByText('Choose'));
    // Recherche le message de confirmation
    const confirmationMessage = screen.getByText("You're feeling happy!");
    // Vérifie si le message de confirmation est dans le document
    expect(confirmationMessage).toBeInTheDocument();
  });

  // test('Back', () => {
  //   render(<App />);
  //   fireEvent.click(screen.getByText('😺')); 
  //   fireEvent.click(screen.getByText('Choose'));
  //   fireEvent.click(screen.getByText('Back')); 
  //   const moodButtons = screen.getAllByRole('button');
  //   expect(moodButtons[0]).toBeInTheDocument(); 
  // });
  

});

/*

import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  test('renders correctly', () => {
    render(<App />);
    const titleElement = screen.getByText('Mood Tracker');
    expect(titleElement).toBeInTheDocument();
  });

  test('select and submit a mood', () => {
    render(<App />);
    fireEvent.click(screen.getByText('😺')); 
    fireEvent.click(screen.getByText('Choose'));
    const confirmationMessage = screen.getByText("You're feeling happy!");
    expect(confirmationMessage).toBeInTheDocument();
  });

  test('Back', () => {
    render(<App />);
    fireEvent.click(screen.getByText('😺')); 
    fireEvent.click(screen.getByText('Choose'));
    const returnButton = screen.getByText('Back');
    fireEvent.click(returnButton);
    const moodButtons = screen.getAllByRole('button');
    expect(moodButtons[0]).toHaveTextContent('😺');
  });
});
*/