import { atom, RecoilState } from 'recoil';

type Deps = {
  value: number;
};

export const InjectDependecies = (): RecoilState<Deps> => {
  return atom({
    default: {
      value: 1,
    },
    key: 'DEPS',
    effects: [
      ({ onSet }) => {
        onSet((data) => {
          console.warn('data mutating', data);
        });
      },
    ],
  });
};
