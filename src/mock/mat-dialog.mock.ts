import { of } from 'rxjs';

export const matDialogMock = {
  open: jest.fn((_, dataObj) => ({
    afterClosed: jest.fn(() =>
      dataObj?.data.pokemon
        ? of({
            pokemon: ''
          })
        : of(null)
    )
  }))
};
