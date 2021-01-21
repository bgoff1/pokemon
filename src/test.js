const localStorageMock = () => {
  const store = {};

  return {
    getItem(key) {
      return store[key] || null;
    },
    setItem(key, value) {
      store[key] = value;
    }
  };
};

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock()
});
