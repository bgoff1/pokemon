import 'jest-preset-angular';

const localStorageMock = () => {
  const store: { [key: string]: string } = {};

  return {
    getItem(key: string): string | null {
      return store[key] || null;
    },
    setItem(key: string, value: string): void {
      store[key] = value;
    }
  };
};

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock()
});
