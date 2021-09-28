import React from "react";

export default function Step1(props) {
  function handleChange(event) {
    props.store.model = event.target.value;
  }

  if (props.currentStep !== 1) {
    return null;
  }
  return (
    <div className="Step1 mb-5">
      <h2>Korak 1. Odaberite proizvođača vašeg vozila</h2>
      <input
        type="radio"
        value="Peugeot"
        name="make"
        id="peugeot"
        onChange={handleChange}
      />
      <label htmlFor="peugeot">Peugeot</label>
      <input
        type="radio"
        value="Volkswagen"
        name="make"
        id="volkswagen"
        onChange={handleChange}
      />
      <label htmlFor="volkswagen">Volkswagen</label>
      <input
        type="radio"
        value="Citroen"
        name="make"
        id="citroen"
        onChange={handleChange}
      />
      <label htmlFor="citroen">Citroen</label>
      <input
        type="radio"
        value="Audi"
        name="make"
        id="audi"
        onChange={handleChange}
      />
      <label htmlFor="audi">Audi</label>
      <input
        type="radio"
        value="Bmw"
        name="make"
        id="bmw"
        onChange={handleChange}
      />
      <label htmlFor="bmw">Bmw</label>
      <input
        type="radio"
        value="Seat"
        name="make"
        id="seat"
        onChange={handleChange}
      />
      <label htmlFor="seat">Seat</label>
      <input
        type="radio"
        value="Alfa Romeo"
        name="make"
        id="alfa-romeo"
        onChange={handleChange}
      />
      <label htmlFor="alfa-romeo">Alfa Romeo</label>
      <input
        type="radio"
        value="Kia"
        name="make"
        id="kia"
        onChange={handleChange}
      />
      <label htmlFor="kia">Kia</label>
      <input
        type="radio"
        value="Hyudai"
        name="make"
        id="hyudai"
        onChange={handleChange}
      />
      <label htmlFor="hyudai">Hyudai</label>
      <input
        type="radio"
        value="Honda"
        name="make"
        id="honda"
        onChange={handleChange}
      />
      <label htmlFor="honda">Honda</label>
      <input
        type="radio"
        value="Toyota"
        name="make"
        id="toyota"
        onChange={handleChange}
      />
      <label htmlFor="toyota">Toyota</label>
    </div>
  );
}
