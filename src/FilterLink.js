import { connect } from 'react-redux';
import { setVisilityFilter } from '././actions';
import Link from './components/Link';

const mapStateToProps = (state, ownProps) => ({
	active: ownProps.filter === state.visibilityFilter 
})

const mapDispatchToProps = (dispatch, ownProps) => ({
	onClick: () => dispatch(setVisilityFilter(ownProps.filter))
})

export default connect(mapStateToProps,mapDispatchToProps)(Link)