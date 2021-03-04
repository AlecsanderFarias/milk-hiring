import produce from 'immer';

const INITIAL_STATE = {
  cityName: null,
  days: [],
  lastAtt: null,
  loading: false,
};

export default function climate(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@climate/DEFINE': {
        draft.cityName = action.payload.cityName;
        draft.days = action.payload.days;
        draft.lastAtt = new Date();
        draft.loading = false;

        break;
      }

      case '@climate/REQUEST': {
        draft.loading = true;

        break;
      }

      case '@climate/REQUEST_ERROR': {
        draft.loading = false;

        break;
      }

      case '@climate/RESET': {
        draft.cityName = null;
        draft.days = [];
        draft.lastAtt = null;
        draft.loading = false;

        break;
      }

      default:
    }
  });
}
