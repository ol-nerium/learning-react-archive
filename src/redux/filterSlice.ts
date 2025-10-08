import type { contactType, actionType } from '@/utils/types';

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

const filterReducer = (state = initialState, action: actionType) => {
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
