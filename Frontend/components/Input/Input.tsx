import React, {useState} from 'react';

import style from './style';
import {KeyboardTypeOptions, Text, TextInput, View} from 'react-native';

type Props = {
  label: string;
  placeholder?: string;
  onChangeText?: (val: string) => void;
  keyboardType?: KeyboardTypeOptions;
  secureTextEntry?: boolean;
};

const Input = ({
  label,
  placeholder,
  onChangeText = () => {},
  keyboardType = 'default',
  secureTextEntry = false,
}: Props): JSX.Element => {
  const [value, setValue] = useState<string>('');

  return (
    <View>
      <Text style={style.label}>{label}</Text>
      <TextInput
        placeholder={placeholder ? placeholder : undefined}
        style={style.input}
        value={value}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        onChangeText={val => {
          setValue(val);
          onChangeText && onChangeText(val);
        }}
      />
    </View>
  );
};

export default Input;
