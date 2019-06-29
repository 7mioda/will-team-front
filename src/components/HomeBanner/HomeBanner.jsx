import React, { useReducer } from 'react';
import withStyle from './withStyle';
import Input from '../Input/Input';
import Button from '../Button/Button';

const HomeBanner = ({ className }) => {
  const [
    {
      destination,
    },
    setState,
  ] = useReducer((state, newState) => ({ ...state, ...newState }), {
    destination: '',
    startDate: null,
    startDateFocused: null,
    endDate: null,
    endDateFocused: null,
  });

  return (
    <div className={`${className}`}>
      <div className="landing">
        <h1>Nous joindre au plus près agence.</h1>
      </div>
      <div className="landing-search">
        <h1>Nous joindre au plus près agence.</h1>
        <form className="landing-search__form">
          <div className="search-input">
            <label htmlFor="search-input">OÙ</label>
            <Input
              type="text"
              highlighted
              classNames={['text-field']}
              autoCapitalize
              placeholder="Partout"
              name="location"
              value={destination}
              id="search-input"
              onChange={({ target: { value } }) => setState({ destination: value })
              }
            />
          </div>
          <div className="half" />
          <div className="half">
            <Button
              animated
              color="white"
              background="#ff5a5f"
              classNames={['landing-search__btn']}
              type="submit"
            >
              Rechercher
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default withStyle(HomeBanner);
