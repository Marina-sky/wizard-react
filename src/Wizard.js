import React from "react";
import Modal from "./Modal"
import "./Wizard.css";
import UserData from "./UserData";
import logo from "./tokic-logo.png"

import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Step4 from "./components/Step4";
import Message from "./components/Message";

const store = new UserData();

class Wizard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1,
      show: false,
    };
  }
  

  _next = () => {
    let currentStep = this.state.currentStep;

    if (this.validateForm(currentStep) === false) {
      return false;
    }
    currentStep = currentStep >= 4 ? 5 : currentStep + 1;
    this.setState({
      currentStep: currentStep,
    });
  };

  _prev = () => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({
      currentStep: currentStep,
    });
    document.getElementById("error").innerText = "";
  };

  validateForm(step) {
    switch (step) {
      case 1:
        if (store.model) {
          document.getElementById("error").innerText = "";
          return true;
        }
        document.getElementById("error").innerText =
          "Molimo vas odaberite proizvođača vašeg vozila";
        return false;
      case 2:
        if (store.service.length !== 0) {
          document.getElementById("error").innerText = "";
          return true;
        }
        document.getElementById("error").innerText =
          "Molimo vas odaberite barem jednu uslugu";
        return false;
      case 3:
        if (store.user.name && store.user.phone && store.user.email) {
          document.getElementById("error").innerText = "";
          return true;
        }
        document.getElementById("error").innerText =
          "Molimo vas ispunite obavezna polja";
        return false;
      default:
        document.getElementById("error").innerText = "";
    }
  }

  setStep = (step) => {
    this.setState({
      currentStep: step,
    });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  previousButton() {
    let currentStep = this.state.currentStep;
    if (currentStep !== 1) {
      return (
        <button
          className="btn btn-secondary"
          type="button"
          onClick={this._prev}
        >
          Nazad
        </button>
      );
    }
    return null;
  }

  nextButton() {
    let currentStep = this.state.currentStep;
    if (currentStep < 4) {
      return (
        <button className="btn btn-primary" type="button" onClick={this._next}>
          Dalje
        </button>
      );
    }
    return null;
  }

  sendButton() {
    let currentStep = this.state.currentStep;
    if (currentStep === 4) {
      return (
        <button className="btn btn-success" type="button" onClick={this._next}>
          Pošalji
        </button>
      );
    }
    return null;
  }

  closeButton() {
    let currentStep = this.state.currentStep;
    if (currentStep === 5) {
      return (
        <button className="btn btn-success" type="button" onClick={this.closeModal}>
          Zatvori
        </button>
      );
    }
    return null;
  }

  showModal = () => {
    this.setState({ show: true });
  };

  closeModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div className="App">
        <header>
          <img src={logo} className="app-logo img-fluid" alt="logo" />
          <h1 className="d-inline main-heading">Konfigurator servisa</h1>
          <h2 className="subheading">Izračunajte trošak servisa</h2><hr />
        </header>
        <div className="text-center mt-5">
        <p>Pritisnite gumb niže kako biste pokrenuli</p>
        <button type="button" className="btn btn-primary" onClick={this.showModal}>
          Pokreni konfigurator
        </button>
        </div>
        <Modal show={this.state.show}>
          <h1 className="text-center mb-5">Konfigurator servisa</h1>
          <form>
            <Step1
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              store={store}
            />
            <Step2
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              store={store}
            />
            <Step3
              currentStep={this.state.currentStep}
              handleChange={this.handleChange}
              store={store}
            />
            <Step4
              currentStep={this.state.currentStep}
              store={store}
              setStep={this.setStep}
            />
            <Message currentStep={this.state.currentStep} />
            <div id="error" style={{ color: "red" }}></div>
            <div className="buttons">
              {this.previousButton()}
              {this.nextButton()}
              {this.sendButton()}
              {this.closeButton()}
            </div>
          </form>
        </Modal>
      </div>
    );
  }
}
export default Wizard;
