
import React, { useState } from 'react';
import TextInput from './TextInput';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';
import NumberInput from './NumberInput';
import FileInput from './FileInput';
import DateTimePicker from './DateTimePicker';

const Form = () => {
  const [textValue, setTextValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [numberValue, setNumberValue] = useState('');
  const [fileValue, setFileValue] = useState(null);
  const [dateTimeValue, setDateTimeValue] = useState('');

  
  const handleSubmit = (e) => {
    e.preventDefault();

   
    console.log('Отправленные данные:', {
      textValue,
      emailValue,
      passwordValue,
      numberValue,
      fileValue,
      dateTimeValue,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Текстовый ввод */}
      <TextInput label="Text Input" placeholder="Enter text" value={textValue} onChange={(e) => setTextValue(e.target.value)} />

      {/* Ввод электронной почты */}
      <EmailInput label="Email Input" placeholder="Enter email" value={emailValue} onChange={(e) => setEmailValue(e.target.value)} />

      {/* Ввод пароля */}
      <PasswordInput label="Password Input" placeholder="Enter password" value={passwordValue} onChange={(e) => setPasswordValue(e.target.value)} />

      {/* Ввод числа */}
      <NumberInput label="Number Input" placeholder="Enter number" value={numberValue} onChange={(e) => setNumberValue(e.target.value)} />

      {/* Ввод файла */}
      <FileInput label="File Input" onChange={(e) => setFileValue(e.target.files[0])} />

      {/* Выбор даты и времени */}
      <DateTimePicker label="Date & Time Picker" value={dateTimeValue} onChange={(e) => setDateTimeValue(e.target.value)} />

      {/* Кнопка отправки формы */}
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
