import * as React from 'react';
import { RootState } from '../../state/rootReducer';
import { connect } from 'react-redux';
import { selectDuckText } from '../../state/app/selectors';
import './index.css'

interface StateProps {
    duckText: string;
}

type DuckProps = StateProps;

const Duck: React.FunctionComponent<DuckProps> = ({ duckText }) => <pre className="Duck-text">{duckText}</pre>;

const mapStateToProps = (state: RootState) => ({
    duckText: selectDuckText(state),
});

export default connect(mapStateToProps)(Duck);
