import React from "react";

export default function Step2(props) {
  function handleChange(event) {
    if (event.target.checked) {
      props.store.service.push(event.target.value);
    } else {
      let index = props.store.service.indexOf(event.target.value);
      if (index !== -1) {
        props.store.service.splice(index, 1);
      }
    }
  }

  if (props.currentStep !== 2) {
    return null;
  }
  return (
    <div className="Step2 mb-5">
      <h2>Korak 2. Odaberite jednu ili više usluga za koje ste</h2>
      <input
        type="checkbox"
        value="Zamjena ulja i filtera"
        name="service"
        id="service1"
        onChange={handleChange}
      />
      <label htmlFor="service1">Zamjena ulja i filtera (500 kn)</label>
      <input
        type="checkbox"
        value="Promjena pakni"
        name="service"
        id="service2"
        onChange={handleChange}
      />
      <label htmlFor="service2">Promjena pakni (450 kn)</label>
      <input
        type="checkbox"
        value="Promjena guma"
        name="service"
        id="service3"
        onChange={handleChange}
      />
      <label htmlFor="service3">Promjena guma (100 kn)</label>
      <br />
      <input
        type="checkbox"
        value="Servis klima uređaja"
        name="service"
        id="service4"
        onChange={handleChange}
      />
      <label htmlFor="service4">Servis klima uređaja (299 kn)</label>
      <input
        type="checkbox"
        value="Balansiranje guma"
        name="service"
        id="service5"
        onChange={handleChange}
      />
      <label htmlFor="service5">Balansiranje guma (50 kn)</label>
      <input
        type="checkbox"
        value="Zamjena ulja u kočnicama"
        name="service"
        id="service6"
        onChange={handleChange}
      />
      <label htmlFor="service6">Zamjena ulja u kočnicama (299 kn)</label>
      <div className="coupon text-end">
        <a href="/">Imam kupon</a>
      </div>
      <div className="price text-end">UKUPNO: 950 KN</div>
    </div>
  );
}
