import '@testing-library/jest-dom';

// Mock pour matchMedia qui n'est pas disponible dans l'environnement de test
window.matchMedia = window.matchMedia || function() {
  return {
    matches: false,
    addListener: function() {},
    removeListener: function() {}
  };
}; 