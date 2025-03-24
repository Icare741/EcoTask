import '@testing-library/jest-dom';

// Mock pour matchMedia
window.matchMedia = window.matchMedia || function() {
  return {
    matches: false,
    addListener: function() {},
    removeListener: function() {}
  };
};

// Mock pour ResizeObserver
class ResizeObserverMock {
  observe() {}
  unobserve() {}
  disconnect() {}
}

window.ResizeObserver = ResizeObserverMock;

// Mock pour requestAnimationFrame
window.requestAnimationFrame = function(callback) {
  return setTimeout(callback, 0);
};

// Mock pour cancelAnimationFrame
window.cancelAnimationFrame = function(id) {
  clearTimeout(id);
}; 