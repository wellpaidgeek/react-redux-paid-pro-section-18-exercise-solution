import Random from './random';
import { connect } from 'react-redux';
import { showGiphyDisplay } from '../../../actions/giphy-display';
import { getRandomGiphy } from '../../../actions/random';

function mapStateToProps (state) {
    return {
        giphy: state.random.giphy,
    };
}

function mapDispatchToProps (dispatch) {
    return {
        thumbnailClicked: (giphy) => dispatch(showGiphyDisplay(giphy)),
        getRandomGiphy: () => dispatch(getRandomGiphy()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Random);