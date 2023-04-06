import './App.css';

import {useState} from 'react';

import PassList from './PassList';


function App() {

  const [res, SetRes] = useState('');
  const [passLength, SetPassLength] = useState(10);
  const [includeUpperCase, SetIncludeUpperCase] = useState(false);
  const [includeLC, SetIncludeLC] = useState(false);
  const [includeNum, SetIncludeNum] = useState(false);
  const [includeSymb, SetIncludeSymb] = useState(false);
  const [update, setUpdate] = useState(false);

  const numbers = '123456789';
  const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const symbols = "!@#$%^&*(){}[]=<>/,.";


  const generatePass = () => {
    let charList = '';

    if (includeLC) {
      charList = charList + lowerCaseLetters;
    }
    if (includeUpperCase) {
      charList = charList + upperCaseLetters;
    }
    if (includeNum) {
      charList = charList + numbers;
    }
    if (includeSymb) {
      charList = charList + symbols;
    }

    const password = createPass(charList);

    SetRes(password);

    localStorage.setItem('res', JSON.stringify([password]));

    setUpdate(!update);
  };

  const createPass = (charList) => {
    let password = '';
    const charListLength = charList.length;

    for (let i = 0; i < passLength; i++) {
      const charIndex = Math.round(Math.random() * charListLength);
      password = password + charList.charAt(charIndex);
    }
    return password;
  };

  const resetForm = () => {
    SetRes('');
    SetPassLength(10);
    SetIncludeUpperCase(false);
    SetIncludeLC(false);
    SetIncludeNum(false);
    SetIncludeSymb(false);
  };


  return (
    <div className="app">
      <h2>Password generator</h2>
      <div className="container d-flex">
        <div className="generator">
          <div className="last-passwords">
            <PassList update={update} />
          </div>
        </div>
        <div className="side">
          <div className="settings">
            <ul>
              <li>
                <div className="input-group mb-3">
                  <input type="number"
                    className="length-input form-control"
                    id="pass-lenght"
                    name="pass-length"
                    min="4" max="50"
                    defaultValue={passLength}
                    onChange={(e) => SetPassLength(e.target.value)} />
                  <span className="length-span input-group-text" id="basic-addon2">Length</span>
                </div>
              </li>
              <li>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="lower-case"
                    name="lower-case"
                    checked={includeLC}
                    onChange={(e) => SetIncludeLC(e.target.checked)} />
                  <label className="upperCase">Lowercase letters</label>
                </div>
              </li>
              <li>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="upper-case"
                    name="upper-case"
                    checked={includeUpperCase}
                    onChange={(e) => SetIncludeUpperCase(e.target.checked)} />
                  <label className="upperCase">Uppercase letters</label>
                </div>
              </li>
              <li>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="numbers"
                    name="numbers"
                    checked={includeNum}
                    onChange={(e) => SetIncludeNum(e.target.checked)} />
                  <label className="upperCase">Numbers</label>
                </div>
              </li>
              <li>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="symbols"
                    name="symbols"
                    checked={includeSymb}
                    onChange={(e) => SetIncludeSymb(e.target.checked)} />
                  <label className="upperCase">Symbols</label>
                </div>
              </li>
            </ul>
          </div>
          <div className="d-flex">
            <button className="generatePass btn" onClick={generatePass}>Generate</button>
            <button className="reset btn" onClick={resetForm}>Reset</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;