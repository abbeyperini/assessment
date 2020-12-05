import { statement } from "@babel/template";
import React, {useEffect, useState}  from "react";
import "./index.css";

function CustomerList(props) {
  const [customer, setCustomer] = useState({})
  const [customers, setCustomers] = useState([])

  const handleOnChange = (e) => {
    setCustomer({
      [e.target.name]: e.target.value
    })
  }

  const handleOnClick = () => {
    setCustomers([
      ...customers,
      customer
    ])
    console.log(customers)
  }

  useEffect(() => {}, [customers])

  const customerItems = customers.map((customer, index) => {
    return (
      <li className="slide-up-fade-in" data-testid="list-item1" key={index}>{customer.customer}</li>
    )
  })

  return (
    <div className="mt-75 layout-column justify-content-center align-items-center">
      <section className="layout-row align-items-center justify-content-center">
        <input type="text" className="large" placeholder="Name" data-testid="app-input" name="customer" onChange={handleOnChange}/>
        <button type="submit" className="ml-30" data-testid="submit-button" onClick={handleOnClick}>Add Customer</button>
      </section>

      <ul className="styled mt-50" data-testid="customer-list">
          {customerItems}
      </ul>
    </div>
  );
}

export default CustomerList

