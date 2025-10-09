import type { Reducer } from 'redux';

const initialState: {
  filter: { value: string };
} = {
  filter: { value: '' },
};

const setFilterValue = (value: string) => {
  return {
    type: 'action/filterValueSet',
    payload: value,
  };
};

const filterReducer: Reducer<{ filter: { value: string } }, any> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case 'action/filterValueSet': {
      return {
        ...state,
        filter: { value: action.payload },
      };
    }

    default:
      return state;
  }
};

export { filterReducer, setFilterValue };
