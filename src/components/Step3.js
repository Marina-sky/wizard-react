import React from "react";

export default function Step3(props) {
  if (props.currentStep !== 3) {
    return null;
  } else {
    return (
      <div className="Step3">
        <h2>Korak 3. Vaši kontakt podaci</h2>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Ime i prezime*"
          onChange={props.handleChange}
        />
        <input
          type="text"
          name="phone"
          id="phone"
          placeholder="Broj telefona*"
          onChange={props.handleChange}
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email adresa*"
          onChange={props.handleChange}
        />
        <input
          type="text"
          name="remark"
          id="remark"
          placeholder="Napomena (opcionalno)"
          onChange={props.handleChange}
        />
      </div>
    );
  }
}
