import "jest-preset-angular";
import "hammerjs";

localStorage.getItem = jest.fn();
localStorage.setItem = jest.fn();
