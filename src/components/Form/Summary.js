import React from "react";

const Summary = ({ setForm, formData, navigation }) => {
  
const {
    street, 
    city, 
    postCode, 
    phone, 
    date, 
    time, 
    note,
    location,
    bag,
    helpGroup,
    giveAwayOption,
    localizationSpecific
  } = formData;

  const { go, previous } = navigation;

  return (
    <div>
      <h1>Podsumowanie Twojej darowizny</h1>
      <h2>Oddajesz:</h2>
      <p> {`${bag}`} worki, {`${helpGroup}`} GroupHelpers, {`${giveAwayOption}`} opcje</p>
      <p>dla lokalizacji: {`${location}`}</p>
      <div>
        Adres odbioru:
        <p>Ulica</p>{`${street}`}
        <p>Miasto</p>{`${city}`}
        <p>Kod pocztowy</p>{`${postCode}`}
        <p>Numer Telefonu</p>{`${phone}`}
      </div>
      <div>
        Adres odbioru:
        <p>Data</p>{`${date}`}
        <p>Godzina</p>{`${time}`}
        <p>Uwagi dla kuriera</p>{`${note}`}
      </div>
      <div>
        <button onClick={previous}>Previous</button>
        <button onClick={() => go("submit")}>Submit</button>
      </div>
    </div>
  );
};

export default Summary;
