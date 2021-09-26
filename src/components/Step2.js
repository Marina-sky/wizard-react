import React from "react";

export default function Step2(props) {
  if (props.currentStep !== 2) {
    return null;
  } else {
    return (
      <div className="Step2">
        <h2>Korak 2. Odaberite jednu ili više usluga za koje ste</h2>
        <input
          type="checkbox"
          value="Zamjena ulja i filtera (500 kn)"
          name="service"
          id="service1"
          onChange={props.handleChange}
        />
        <label htmlFor="service1">Zamjena ulja i filtera (500 kn)</label>
        <input
          type="checkbox"
          value="Promjena pakni (450 kn)"
          name="service"
          id="service2"
          onChange={props.handleChange}
        />
        <label htmlFor="service2">Promjena pakni (450 kn)</label>
        <input
          type="checkbox"
          value="Promjena guma (100 kn)"
          name="service"
          id="service3"
          onChange={props.handleChange}
        />
        <label htmlFor="service3">Promjena guma (100 kn)</label>
        <input
          type="checkbox"
          value="Servis klima uređaja (299 kn)"
          name="service"
          id="service4"
          onChange={props.handleChange}
        />
        <label htmlFor="service4">Servis klima uređaja (299 kn)</label>
        <input
          type="checkbox"
          value="Balansiranje guma (50 kn)"
          name="service"
          id="service5"
          onChange={props.handleChange}
        />
        <label htmlFor="service5">Balansiranje guma (50 kn)</label>
        <input
          type="checkbox"
          value="Zamjena ulja u kočnicama (299 kn)"
          name="service"
          id="service6"
          onChange={props.handleChange}
        />
        <label htmlFor="service6">Zamjena ulja u kočnicama (299 kn)</label>
        <div className="coupon">
          <a href="/">Imam kupon</a>
        </div>
        <div className="price">UKUPNO: 950 KN</div>
      </div>
    );
  }
}
