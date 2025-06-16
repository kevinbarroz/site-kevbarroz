import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      background: 'rgba(0,0,0,0.9)',
      padding: '1rem 2rem',
      zIndex: 1000,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <div style={{
        fontSize: '1.5rem',
        fontWeight: '800',
        color: '#ffffff'
      }}>
        KEVBARROZ
      </div>
      
      <nav style={{display: 'flex', gap: '2rem'}}>
        <a href="#home" style={{color: '#ccc', textDecoration: 'none'}}>Home</a>
        <a href="#about" style={{color: '#ccc', textDecoration: 'none'}}>Sobre</a>
        <a href="#portfolio" style={{color: '#ccc', textDecoration: 'none'}}>Portfolio</a>
        <a href="#contato" style={{color: '#ccc', textDecoration: 'none'}}>Contato</a>
      </nav>
      
      <button style={{
        background: '#ffffff',
        color: '#000000',
        border: 'none',
        padding: '0.75rem 1.5rem',
        borderRadius: '8px',
        fontWeight: '600',
        cursor: 'pointer'
      }}>
        Solicitar orçamento
      </button>
    </header>
  );
};

export default Header;