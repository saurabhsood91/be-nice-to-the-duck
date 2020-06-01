import * as React from 'react';
// import { Emotion } from '../../state/app/types';
import { useEffect, useState } from 'react';
import { RootState } from '../../state/rootReducer';
import { selectShowAudioPlayer } from '../../state/app/selectors';
import { connect } from 'react-redux';

// interface AudioPlayerProps {
//     emotion: Emotion;
// }

interface AudioPlayerStateProps {
    shouldShowAudioPlayer: boolean;
}

type AudioPlayerProps = AudioPlayerStateProps;

const useAudio = (url: string) => {
    const [audio] = useState(new Audio(url));
    useEffect(() => {
        audio.play();
    });
};

const AudioPlayer: React.FunctionComponent = () => {
    const url = '/duck.mp3';
    useAudio(url);
    return <></>;
};

const AudioPlayerContainer: React.FunctionComponent<AudioPlayerProps> = ({ shouldShowAudioPlayer }) =>
    shouldShowAudioPlayer ? <AudioPlayer /> : null;

const mapStateToProps = (state: RootState) => ({
    shouldShowAudioPlayer: selectShowAudioPlayer(state),
});

export default connect(mapStateToProps)(AudioPlayerContainer);
