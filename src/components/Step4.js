import React from "react";

export default function Step4(props) {
  if (props.currentStep !== 4) {
    return null;
  } else {
    return (
      <div className="Step4">
        <h2>Korak 4. Pregled i potvrda vašeg odabira</h2>
        <p>
          Molimo vas da još jednom pregledate i potvrdite unesene podatke.
          Ukoliko želite promijeniti neki od podataka, možete pritisnuti gumb za
          uređivanje pored svake od kategorija. Kada ste provjerili i potvrdili
          ispravnost svojih podataka pritisnite gumb "Pošalji" na dnu, za slanje
          upita za servis.
        </p>
        <div className="container mb-5">
          <div className="row">
            <div className="col">
              <h3 className="d-inline">MODEL VOZILA</h3>
              <button type="button">Uredi</button>
            </div>
            <div className="col">
              <h3 className="d-inline">ODABRANE USLUGE</h3>
              <button type="button">Uredi</button>
            </div>
          </div>
          <div className="row">
            <div className="col-6">Volkswagen</div>
            <div className="col">Zamjena ulja i filtera</div>
            <div className="col text-end">500,00 KN</div>
          </div>
          <div className="row">
            <div className="col-6"></div>
            <div className="col">Promjena pakni</div>
            <div className="col text-end">450,00 KN</div>
          </div>
          <div className="row">
            <div className="col text-end">Popust (30%): -285 KN</div>
          </div>
          <div className="row">
            <div className="col text-end">
              UKUPNO: <strong>665,00 KN</strong>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col">
              <h3 className="d-inline">KONTAKT PODACI</h3>
              <button type="button">Uredi</button>
            </div>
          </div>
          <div className="row">
            <div className="col">Ime i prezime:</div>
            <div className="col">Marina Momčilov</div>
            <div className="col">Email adresa:</div>
            <div className="col">mmomcilov@chem.pmf.hr</div>
          </div>
          <div className="row">
            <div className="col">Broj telefona:</div>
            <div className="col">091 123 4567</div>
            <div className="col">Napomena:</div>
            <div className="col">
              Kod auta se prilikom prelaska preko rupa čuje lupanje pa bi i to
              trebalo pogledati.
            </div>
          </div>
        </div>
      </div>
    );
  }
}
