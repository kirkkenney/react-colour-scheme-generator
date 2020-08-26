import React, { useState } from 'react';
import './App.css';
import ColourInput from './components/nav/ColourInput';
import SchemeSelect from './components/nav/SchemeSelect';
import Analogous from './components/colour-schemes/Analogous';
import Complementary from './components/colour-schemes/Complementary';
import Monochrome from './components/colour-schemes/Monochrome';
import SplitComplementary from './components/colour-schemes/SplitComplementary';
import SquareTetradic from './components/colour-schemes/SquareTetradic';
import RectTetradic from './components/colour-schemes/RectTetradic';
import Triadic from './components/colour-schemes/Triadic';
import { HexToHSL } from './util/HexToHSL';
import { HSLToHex } from './util/HslToHex';
import MySchemes from './components/colour-schemes/MySchemes';
import Header from './components/nav/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSync } from '@fortawesome/free-solid-svg-icons'

function App() {

  const generateColour = () => {
    const h = Math.floor(Math.random() * 360);
    const s = generateRand(30, 100);
    const l = generateRand(20, 80);
    return [h, s, l]
  }

  const generateRand = (min, max) => {
    let result =  Math.floor(Math.random()*(max-min+1)+min);
    if(result < min){
        result = min;
    }
    else if(result > max){
        result = max;
    }
    return result
  }

  const generateColourHandler = () => {
    setColour(generateColour);
  }

  const schemeChangeHandler = event => {
    setActiveScheme(event.target.value);
  }

  const colourInputHandler = event => {
    setColour(HexToHSL(event.target.value))
  }

  const showMySchemesHandler = () => {
    setShowMySchemes(prev => !prev)
  }

  const [colour, setColour] = useState(generateColour);
  const [activeScheme, setActiveScheme] = useState('Analogous');
  const [showMySchemes, setShowMySchemes] = useState(false);

  const colourSchemes = {
    'Analogous': <Analogous colour={colour} />,
    'Complementary': <Complementary colour={colour} />,
    'Monochrome': <Monochrome colour={colour} />,
    'SplitComplementary': <SplitComplementary colour={colour} />,
    'RectTetradic': <RectTetradic colour={colour} />,
    'SquareTetradic': <SquareTetradic colour={colour} />,
    'Triadic': <Triadic colour={colour} />
  }

  return (
    <div className="App">
      <header>
        <Header onUserSchemesClick={showMySchemesHandler} />
      </header>
      {/* <div className='input-controls'>
        <SchemeSelect onChange={schemeChangeHandler} />
        <div>
          <ColourInput onChange={colourInputHandler} colourValue={HSLToHex(colour[0], colour[1], colour[2])} />
          <div className='refresh' style={{ color: HSLToHex(colour[0], colour[1], colour[2])}}>
              <FontAwesomeIcon icon={faSync} onClick={generateColourHandler} />
          </div>
        </div>
      </div> */}
      {!showMySchemes && (
        <React.Fragment>
          <div className='input-controls'>
            <SchemeSelect onChange={schemeChangeHandler} />
            <div>
              <ColourInput onChange={colourInputHandler} colourValue={HSLToHex(colour[0], colour[1], colour[2])} />
              <div className='refresh' style={{ color: HSLToHex(colour[0], colour[1], colour[2])}}>
                  <FontAwesomeIcon icon={faSync} onClick={generateColourHandler} />
              </div>
            </div>
          </div>
          <div className='scheme-container'>
            {colourSchemes[activeScheme]}
          </div>
        </React.Fragment>
      )}
      {showMySchemes && (
        <div className='scheme-container'>
          <MySchemes />
        </div>
      )}
    </div>
  );
}

export default App;
