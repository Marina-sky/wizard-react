import React from "react";
import "./Wizard.css";
import UserData from "./UserData";

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
    };
  }

  _next = () => {
    let currentStep = this.state.currentStep;
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
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
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

  render() {
    return (
      <div className="App">
        <h1 className="text-center mb-5">Konfigurator servisa</h1>
        <form onSubmit={this.handleSubmit}>
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
          <Step4 currentStep={this.state.currentStep} store={store} />
          <Message currentStep={this.state.currentStep} />
          <div className="buttons">
            {this.previousButton()}
            {this.nextButton()}
            {this.sendButton()}
          </div>
        </form>
      </div>
    );
  }
}
export default Wizard;
