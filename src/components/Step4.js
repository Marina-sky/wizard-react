import React from "react";

export default function Step4(props) {
  let total = props.store.sum - props.store.discount;

  function changeModel() {
    props.setStep(1);
  }

  function changeService() {
    props.setStep(2);
  }

  function changeContactInfo() {
    props.setStep(3);
  }

  if (props.currentStep !== 4) {
    return null;
  }
  return (
    <div className="Step4">
      <h2>Korak 4. Pregled i potvrda vašeg odabira</h2>
      <p>
        Molimo vas da još jednom pregledate i potvrdite unesene podatke. Ukoliko
        želite promijeniti neki od podataka, možete pritisnuti gumb za
        uređivanje pored svake od kategorija. Kada ste provjerili i potvrdili
        ispravnost svojih podataka pritisnite gumb "Pošalji" na dnu, za slanje
        upita za servis.
      </p>
      <div className="container mb-5">
        <div className="row">
          <div className="col">
            <h3 className="d-inline">MODEL VOZILA</h3>
            <button type="button" onClick={changeModel}>
              Uredi
            </button>
          </div>
          <div className="col">
            <h3 className="d-inline">ODABRANE USLUGE</h3>
            <button type="button" onClick={changeService}>
              Uredi
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col">{props.store.model}</div>
        </div>
        {props.store.service.map((item) => {
          const { id, service, price } = item;
          return (
            <div className="row" key={id}>
              <div className="col-6"></div>
              <div className="col">{service}</div>
              <div className="col text-end">{price.toFixed(2)} KN</div>
            </div>
          );
        })}
        <div className="row">
          <div className="col text-end">
            Popust (30%): -{props.store.discount.toFixed(2)} KN
          </div>
        </div>
        <div className="row">
          <div className="col text-end">
            UKUPNO: <strong>{total.toFixed(2)} KN</strong>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col">
            <h3 className="d-inline">KONTAKT PODACI</h3>
            <button type="button" onClick={changeContactInfo}>
              Uredi
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col">Ime i prezime:</div>
          <div className="col">{props.store.user.name}</div>
          <div className="col">Email adresa:</div>
          <div className="col">{props.store.user.email}</div>
        </div>
        <div className="row">
          <div className="col">Broj telefona:</div>
          <div className="col">{props.store.user.phone}</div>
          <div className="col">Napomena:</div>
          <div className="col">{props.store.user.remark}</div>
        </div>
      </div>
    </div>
  );
}
