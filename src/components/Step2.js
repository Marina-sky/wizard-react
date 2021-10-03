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
    props.store.coupon = document.getElementById("coupon-input").value;

    if (props.store.coupon === "Tokić123") {
      document.getElementById("confirmation").style.display = "block";
      document.getElementById("calculate-discount").style.display = "block";
      document.getElementById("coupon-link").style.display = "none";
      document.getElementById("coupon-form").style.display = "none";

      props.store.discount = props.store.sum * 0.3;
      document.getElementById("discount").innerHTML =
        props.store.discount.toFixed(2);
      refreshTotal();
    } else {
      document.getElementById("coupon-error").style.display = "block";
    }
  }

  function showCouponForm(event) {
    event.preventDefault();
    document.getElementById("coupon-form").style.display = "block";
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
        defaultChecked={
          props.store.service.find(
            (service) => service.service === "Zamjena ulja i filtera"
          )
            ? true
            : false
        }
        name="service"
        data-price={500}
        id="service1"
        onChange={handleChange}
      />
      <label htmlFor="service1">Zamjena ulja i filtera (500 kn)</label>
      <input
        type="checkbox"
        value="Promjena pakni"
        defaultChecked={
          props.store.service.find(
            (service) => service.service === "Promjena pakni"
          )
            ? true
            : false
        }
        name="service"
        data-price={450}
        id="service2"
        onChange={handleChange}
      />
      <label htmlFor="service2">Promjena pakni (450 kn)</label>
      <input
        type="checkbox"
        value="Promjena guma"
        defaultChecked={
          props.store.service.find(
            (service) => service.service === "Promjena guma"
          )
            ? true
            : false
        }
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
        defaultChecked={
          props.store.service.find(
            (service) => service.service === "Servis klima uređaja"
          )
            ? true
            : false
        }
        data-price={299}
        name="service"
        id="service4"
        onChange={handleChange}
      />
      <label htmlFor="service4">Servis klima uređaja (299 kn)</label>
      <input
        type="checkbox"
        value="Balansiranje guma"
        defaultChecked={
          props.store.service.find(
            (service) => service.service === "Balansiranje guma"
          )
            ? true
            : false
        }
        data-price={50}
        name="service"
        id="service5"
        onChange={handleChange}
      />
      <label htmlFor="service5">Balansiranje guma (50 kn)</label>
      <input
        type="checkbox"
        value="Zamjena ulja u kočnicama"
        defaultChecked={
          props.store.service.find(
            (service) => service.service === "Zamjena ulja u kočnicama"
          )
            ? true
            : false
        }
        data-price={299}
        name="service"
        id="service6"
        onChange={handleChange}
      />
      <label htmlFor="service6">Zamjena ulja u kočnicama (299 kn)</label>
      <div className="coupon text-end mt-5">
        <a
          href="/"
          id="coupon-link"
          style={{ display: "block" }}
          onClick={showCouponForm}
        >
          Imam kupon
        </a>
        <div
          id="confirmation"
          className="mb-3"
          style={{ display: "none", color: "green" }}
        >
          Hvala vam, unijeli ste ispravan kod kupona
        </div>
        <div id="coupon-form" style={{ display: "none" }}>
          <input
            type="text"
						defaultValue={props.store.coupon}
            placeholder="Unesite kod kupona ovdje"
            id="coupon-input"
          />
          <button type="button" onClick={useCoupon}>
            Primjeni
          </button>
          <div
            id="coupon-error"
            className="mb-3"
            style={{ display: "none", color: "red" }}
          >
            Kod kupona nije ispravan
          </div>
        </div>
      </div>
      <div className="price text-end">
        <div id="calculate-discount" style={{ display: "none" }}>
          OSNOVICA: <span id="sum">{props.store.sum.toFixed(2)}</span> KN
          <br />
          POPUST (30%): -
          <span id="discount">{props.store.discount.toFixed(2)}</span> KN
        </div>
        <div className="fs-4">
          UKUPNO:
          <strong>
            {" "}
            <span id="total">{props.store.sum - props.store.discount}</span> KN
          </strong>
        </div>
      </div>
    </div>
  );
}
