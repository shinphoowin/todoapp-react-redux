import { VisibiltiyFilters } from './../actions';

const visibilityFilter = (state = VisibiltiyFilters.SHOW_ALL, action) => {
	switch(action.type){
		case 'SET_VISIBILITY_FILTER':
		  return action.dofilterspw
		default:
		  return state
	}
}
export default visibilityFilter;