import './App.css';
import React, { useState } from 'react';

function NewApp() {
  const [length, setLength] = useState(12);
  const [password, setPassword] = useState('');
  const [isUseLowerCase, setLowerCase] = useState(true);

  const [isCopied, setIsCopied] = useState(false);
  const [useUppercase, setUseUppercase] = useState(true);
  const [useSymbols, setUseSymbols] = useState(true);

  const [useNumbers, setUseNumbers] = useState(true);

  const handleLengthChange = (e) => setLength(e.target.value);

  const generatePassword = () => {
    const length = parseInt(document.getElementById("length").value);
    const isUseLowerCase = document.getElementById("lowercase").checked;
    const useUppercase = document.getElementById("uppercase").checked;
    const useSymbols = document.getElementById("symbols").checked;
    const useNumbers = document.getElementById("numbers").checked;


    let charset = '';
    if (useSymbols) charset += '!@#$%^&*';
    if (useUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (useNumbers) charset += '0123456789';
    if (isUseLowerCase) charset += 'abcdefghijklmnopqrstuvwxyz';



    let newPassword = '';
    for (let i = 0; i < length; i++) {
      newPassword += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    setPassword(newPassword);
  };

  const copyToClipboard = () => {
    if (password) {
      navigator.clipboard.writeText(password);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 1500);
    }
  };

  return (
    <div className='new-container'>
      <h1>HI,GENERATE YOUR PASSWORD HERE!</h1>
      <div className='password-display'>
        <span>{password}</span>
        <button className='copy-btn' onClick={copyToClipboard}>
          Copy to clipboard
        </button>
      </div>
      {isCopied && <div className='copied-notice'>Password copied!</div>}
      <div className='controls'>
        <div className='control'>
          <label>Length of password required</label>
          <input type='number' id='length' min='4' max='30' value={length} onChange={handleLengthChange} />
        </div>
        <div className='control'>
          <label>Need Uppercase?</label>
          <input type='checkbox' id='uppercase' checked={useUppercase} onChange={(e) => setUseUppercase(e.target.checked)} />
        </div>
        <div className='control'>
          <label>Need Lowercase?</label>
          <input type='checkbox' id='lowercase' checked={isUseLowerCase} onChange={(e) => setLowerCase(e.target.checked)} />
        </div>
        <div className='control'>
          <label>Need Numbers?</label>
          <input type='checkbox' id='numbers' checked={useNumbers} onChange={(e) => setUseNumbers(e.target.checked)} />
        </div>
        <div className='control'>
          <label>Need Symbols?</label>
          <input type='checkbox' id='symbols' checked={useSymbols} onChange={(e) => setUseSymbols(e.target.checked)} />
        </div>
      </div>
      <button className='generate-btn' onClick={generatePassword}>Click here to Generate</button>
    </div>
  );
}

export default NewApp;
