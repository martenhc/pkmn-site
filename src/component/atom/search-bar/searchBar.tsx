import { FC, FormEvent, KeyboardEvent, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  PokedexContext,
  PokedexContextProps,
} from '../../../context/PokedexContext';
import {
  StyledContainerDiv,
  StyledMagnifierImage,
  StyledPopUp,
  StyledSearchButton,
  StyledTextInput,
} from './searchBar.styled';
import magnifierSvg from '../../../assets/svg/magnifier.svg';

export const SearchBar: FC = () => {
  const { pokedex } = useContext(PokedexContext) as PokedexContextProps;
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSearch = () => {
    setErrorMessage('');

    if (searchQuery === '') return;

    if (!isNaN(Number(searchQuery))) navigate(`/details/${searchQuery}`);

    pokedex
      .getPokemonIdByName(searchQuery)
      .then((id) => navigate(`/details/${id}`))
      .catch(({ response: { status } }) =>
        status === 404
          ? setErrorMessage("The pokémon doesn't exist")
          : setErrorMessage('Something went wrong, try again.')
      );
  };

  const handleChange = ({
    currentTarget: { value: inputText },
  }: FormEvent<HTMLInputElement>) => {
    errorMessage && setErrorMessage('');

    const currentQuery = !inputText
      .charAt(inputText.length - 1)
      .match(/[a-z]|[A-Z]|[0-9]/)
      ? inputText.substring(0, inputText.length - 1)
      : inputText;

    setSearchQuery(currentQuery);

    return currentQuery;
  };

  const handleKeyDown = ({ key }: KeyboardEvent<HTMLInputElement>) => {
    if (key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <StyledContainerDiv>
      <StyledTextInput
        type="text"
        placeholder="Search pokémon by name or number"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        value={searchQuery}
      />
      <StyledSearchButton onClick={handleSearch}>
        <StyledMagnifierImage src={magnifierSvg} />
      </StyledSearchButton>
      <StyledPopUp isVisible={!!errorMessage}>{errorMessage}</StyledPopUp>
    </StyledContainerDiv>
  );
};
