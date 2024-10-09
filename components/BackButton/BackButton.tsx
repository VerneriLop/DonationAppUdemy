import React from 'react';
import {Pressable} from 'react-native';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';

import style from './style';

type Props = {
  onPress: () => void;
};

const BackButton = ({onPress}: Props): JSX.Element => {
  return (
    <Pressable style={style.container} onPress={() => onPress()}>
      <FontAwesomeIcon icon={faArrowLeft} />
    </Pressable>
  );
};

export default BackButton;
