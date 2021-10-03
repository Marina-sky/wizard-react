import React from "react";

export default function Step3(props) {
  function handleChange() {
    let nameValue = document.getElementById("name").value;
    let phoneValue = document.getElementById("phone").value;
    let emailValue = document.getElementById("email").value;
    let remarkValue = document.getElementById("remark").value;

    props.store.user.name = nameValue;
    props.store.user.phone = phoneValue;
    props.store.user.email = emailValue;
    props.store.user.remark = remarkValue;
  }

  if (props.currentStep !== 3) {
    return null;
  }
  return (
    <div className="Step3 mb-5">
      <h2>Korak 3. Vaši kontakt podaci</h2>
      <input
        type="text"
        className="form-control"
        defaultValue={props.store.user.name}
        name="name"
        id="name"
        placeholder="Ime i prezime*"
        onChange={handleChange}
      />
      <input
        type="text"
        className="form-control"
        defaultValue={props.store.user.phone}
        name="phone"
        id="phone"
        placeholder="Broj telefona*"
        onChange={handleChange}
      />
      <input
        type="email"
        className="form-control"
        defaultValue={props.store.user.email}
        name="email"
        id="email"
        placeholder="Email adresa*"
        onChange={handleChange}
      />
      <input
        type="text"
        className="form-control remark"
        defaultValue={props.store.user.remark}
        name="remark"
        id="remark"
        placeholder="Napomena (opcionalno)"
        onChange={handleChange}
      />
    </div>
  );
}
