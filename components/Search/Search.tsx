import React, {useRef, useState} from 'react';
import style from './style';
import {View, TextInput, Pressable} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {scaleFontSize} from '../../assets/styles/scaling';

type Props = {
  onSearch?: (searchValue: string) => void;
};

const Search = ({onSearch = () => {}}: Props) => {
  const textInputRef = useRef<TextInput>(null);
  const [search, setSearch] = useState('');
  const handleFocus = () => {
    if (textInputRef.current) {
      textInputRef.current.focus();
    }
  };

  const handleSearch = (searchValue: string) => {
    setSearch(searchValue);
    onSearch(searchValue);
  };

  return (
    <Pressable style={style.searchInputContainer} onPress={handleFocus}>
      <FontAwesomeIcon
        icon={faSearch}
        color={'#25C0FF'}
        size={scaleFontSize(22)}
      />
      <TextInput
        ref={textInputRef}
        style={style.searchInput}
        value={search}
        onChangeText={value => handleSearch(value)}
      />
    </Pressable>
  );
};

export default Search;
