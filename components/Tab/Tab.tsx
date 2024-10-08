import React, {useState, useRef} from 'react';

import {Pressable, Text} from 'react-native';
import style from './style';
import {horizontalScale} from '../../assets/styles/scaling';

type Props = {
  title: string;
  isInactive?: boolean;
  onPress?: (tabId: number) => void;
  tabId: number;
};

const Tab = ({
  title,
  isInactive = false,
  onPress = () => {}, //default value is empty function
  tabId,
}: Props): JSX.Element => {
  const [width, setWidth] = useState(0);
  const textRef = useRef<Text>(null);
  const paddingHorizontal = 33;
  const tabWidth = {
    width: horizontalScale(paddingHorizontal * 2 + width),
  };

  return (
    <Pressable
      style={[style.tab, isInactive && style.inactiveTab, tabWidth]}
      onPress={() => onPress(tabId)}>
      <Text
        onTextLayout={event => {
          setWidth(event.nativeEvent.lines[0].width);
        }}
        ref={textRef}
        style={[style.title, isInactive && style.inactiveTitle]}>
        {title}
      </Text>
    </Pressable>
  );
};

export default Tab;
