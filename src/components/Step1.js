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
        defaultChecked={props.store.model === "Peugeot" ? true : false}
        name="make"
        id="peugeot"
        onChange={handleChange}
      />
      <label htmlFor="peugeot">Peugeot</label>
      <input
        type="radio"
        value="Volkswagen"
        defaultChecked={props.store.model === "Volkswagen" ? true : false}
        name="make"
        id="volkswagen"
        onChange={handleChange}
      />
      <label htmlFor="volkswagen">Volkswagen</label>
      <input
        type="radio"
        value="Citroen"
        defaultChecked={props.store.model === "Citroen" ? true : false}
        name="make"
        id="citroen"
        onChange={handleChange}
      />
      <label htmlFor="citroen">Citroen</label>
      <input
        type="radio"
        value="Audi"
        defaultChecked={props.store.model === "Audi" ? true : false}
        name="make"
        id="audi"
        onChange={handleChange}
      />
      <label htmlFor="audi">Audi</label>
      <input
        type="radio"
        value="Bmw"
        defaultChecked={props.store.model === "Bmw" ? true : false}
        name="make"
        id="bmw"
        onChange={handleChange}
      />
      <label htmlFor="bmw">Bmw</label>
      <input
        type="radio"
        value="Seat"
        defaultChecked={props.store.model === "Seat" ? true : false}
        name="make"
        id="seat"
        onChange={handleChange}
      />
      <label htmlFor="seat">Seat</label>
      <input
        type="radio"
        value="Alfa Romeo"
        defaultChecked={props.store.model === "Alfa Romeo" ? true : false}
        name="make"
        id="alfa-romeo"
        onChange={handleChange}
      />
      <label htmlFor="alfa-romeo">Alfa Romeo</label>
      <input
        type="radio"
        value="Kia"
        defaultChecked={props.store.model === "Kia" ? true : false}
        name="make"
        id="kia"
        onChange={handleChange}
      />
      <label htmlFor="kia">Kia</label>
      <input
        type="radio"
        value="Hyudai"
        defaultChecked={props.store.model === "Hyudai" ? true : false}
        name="make"
        id="hyudai"
        onChange={handleChange}
      />
      <label htmlFor="hyudai">Hyudai</label>
      <input
        type="radio"
        value="Honda"
        defaultChecked={props.store.model === "Honda" ? true : false}
        name="make"
        id="honda"
        onChange={handleChange}
      />
      <label htmlFor="honda">Honda</label>
      <input
        type="radio"
        value="Toyota"
        defaultChecked={props.store.model === "Toyota" ? true : false}
        name="make"
        id="toyota"
        onChange={handleChange}
      />
      <label htmlFor="toyota">Toyota</label>
    </div>
  );
}
