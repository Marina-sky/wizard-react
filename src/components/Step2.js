import React from "react";

export default function Step2(props) {
  
	function refreshTotal() {
		let total = props.store.sum - props.store.discount;
		document.getElementById("total").innerHTML = total.toFixed(2);
      
	}
	
	function handleChange(event) {
    const service = {
      service: event.target.value,
      price: parseInt(event.target.dataset.price),
    };
    if (event.target.checked) {
      props.store.service.push(service);
      props.store.sum += parseInt(event.target.dataset.price);
    } else {
      let index = props.store.service.findIndex(
        (i) => i.service === event.target.value
      );
      if (index !== -1) {
        props.store.service.splice(index, 1);
      }
      props.store.sum -= parseInt(event.target.dataset.price);
    }

		props.store.discount = 0;
		document.getElementById("discount").innerHTML =
      props.store.discount.toFixed(2);
    document.getElementById("sum").innerHTML = props.store.sum.toFixed(2);
		refreshTotal();
  }

	function useCoupon() {
		let coupon = document.getElementById("coupon-input").value;

		if (coupon === "Tokić123") {
			props.store.discount = props.store.sum * 0.3;
			document.getElementById("discount").innerHTML =
        props.store.discount.toFixed(2);
			refreshTotal();
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
        data-price={500}
        id="service1"
        onChange={handleChange}
      />
      <label htmlFor="service1">Zamjena ulja i filtera (500 kn)</label>
      <input
        type="checkbox"
        value="Promjena pakni"
        name="service"
        data-price={450}
        id="service2"
        onChange={handleChange}
      />
      <label htmlFor="service2">Promjena pakni (450 kn)</label>
      <input
        type="checkbox"
        value="Promjena guma"
        data-price={100}
        name="service"
        id="service3"
        onChange={handleChange}
      />
      <label htmlFor="service3">Promjena guma (100 kn)</label>
      <br />
      <input
        type="checkbox"
        value="Servis klima uređaja"
        data-price={299}
        name="service"
        id="service4"
        onChange={handleChange}
      />
      <label htmlFor="service4">Servis klima uređaja (299 kn)</label>
      <input
        type="checkbox"
        value="Balansiranje guma"
        data-price={50}
        name="service"
        id="service5"
        onChange={handleChange}
      />
      <label htmlFor="service5">Balansiranje guma (50 kn)</label>
      <input
        type="checkbox"
        value="Zamjena ulja u kočnicama"
        data-price={299}
        name="service"
        id="service6"
        onChange={handleChange}
      />
      <label htmlFor="service6">Zamjena ulja u kočnicama (299 kn)</label>
      <div className="coupon text-end">
        <a href="/" className="d-block">
          Imam kupon
        </a>
        <input
          type="text"
          placeholder="Unesite kod kupona ovdje"
          id="coupon-input"
        />
        <button type="button" onClick={useCoupon}>
          Primjeni
        </button>
      </div>
      <div className="price text-end">
        <p>
          OSNOVICA:
          <span id="sum">{props.store.sum.toFixed(2)}</span> KN
          <br />
          POPUST (30%): -
          <span id="discount">{props.store.discount.toFixed(2)}</span> KN
        </p>
        UKUPNO:
        <strong>
          <span id="total">{props.store.sum - props.store.discount}</span> KN
        </strong>
      </div>
    </div>
  );
}
