import React from "react";

export default function Message(props) {
  if (props.currentStep !== 5) {
    return null;
  } else {
    return (
      <div className="Message">
        <h2 className="text-center">Vaša prijava je uspješno poslana</h2>
        <p className="text-center mb-4">
          Vaša prijava je uspješno poslana i zaprimljena. Kontaktirati ćemo vas
          u najkraćem mogućem roku. Hvala vam.
        </p>
      </div>
    );
  }
}
