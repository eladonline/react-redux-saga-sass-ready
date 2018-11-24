import { Map } from 'immutable';
// import { getDefaultPath } from '../../../../../helpers/urlSync';
import actions, { getView } from './actions';

const preKeys = []; //getDefaultPath();
const initState = new Map({
  collapsed: false,
  view: getView(0),
  height: 0,
  width: 0,
});
export default function appReducer(state = initState, action) {
  switch (action.type) {
    case actions.TOGGLE_ALL:
      if (state.get('view') !== action.view || action.height !== state.height) {
        const height = action.height ? action.height : state.height;
        const width = action.width ? action.width : state.width;
        return state
          .set('collapsed', action.collapsed)
          .set('view', action.view)
          .set('height', height)
          .set('width', width);
      }
      break;
    default:
      return state;
  }
  return state;
}
