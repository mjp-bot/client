import React from "react";
import "./dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilter,
  faDownload,
  faSearch,
  faUserPen,
  faTrash,
  faBasketShopping,
  faShield,
  faCartShopping,
  faWarehouse,
} from "@fortawesome/free-solid-svg-icons";

function index() {
  const role = Number(localStorage.getItem("role"));

  return (
    <div className="dashboard">
      <div className="top-dashboard">
        <div className="top-left">Dashboard</div>
        <div className="top-right">
          <button className="filter">
            <FontAwesomeIcon
              icon={faFilter}
              className="account-icon"
              // onClick={toggleDropdown}
            />
            Filter
          </button>
        </div>
      </div>
      <div className="bottom-dashboard">
        <div className="deployed-products">
          <div className="first index">
            <FontAwesomeIcon icon={faCartShopping} />
            <div className="text">
              <h1>90</h1>
              <h2>Deployed Products</h2>
            </div>
          </div>

          <div className="second index">
            <FontAwesomeIcon icon={faWarehouse} />
            <div className="text">
              <h1>90</h1>
              <h2>Stock Available</h2>
            </div>
          </div>

          <div className="third index">
            <FontAwesomeIcon icon={faShield} />
            <div className="text">
              <h1>90</h1>
              <h2>Under Warranty</h2>
            </div>
          </div>

          <div className="fourth index">
            <FontAwesomeIcon icon={faShield} />
            <div className="text">
              <h1>90</h1>
              <h2>Near Expiration</h2>
            </div>
          </div>

          <div className="fifth index">
            <FontAwesomeIcon icon={faShield} />
            <div className="text">
              <h1>90</h1>
              <h2>Expired Warranty</h2>
            </div>
          </div>
        </div>

        <div className="table-products">
          <div className="first index">
            <h1>Deployed Products</h1>
            <div className="table-wrapper">
              <table className="product-table">
                <thead>
                  <tr>
                    <th>Brand</th>
                    <th>Type</th>
                    <th>Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Apple</td>
                    <td>Laptop</td>
                    <td>5</td>
                  </tr>
                  <tr>
                    <td>Samsung</td>
                    <td>Monitor</td>
                    <td>8</td>
                  </tr>
                  <tr>
                    <td>Apple</td>
                    <td>Laptop</td>
                    <td>5</td>
                  </tr>
                  <tr>
                    <td>Samsung</td>
                    <td>Monitor</td>
                    <td>8</td>
                  </tr>
                  <tr>
                    <td>Apple</td>
                    <td>Laptop</td>
                    <td>5</td>
                  </tr>
                  <tr>
                    <td>Samsung</td>
                    <td>Monitor</td>
                    <td>8</td>
                  </tr>
                  <tr>
                    <td>Apple</td>
                    <td>Laptop</td>
                    <td>5</td>
                  </tr>
                  <tr>
                    <td>Samsung</td>
                    <td>Monitor</td>
                    <td>8</td>
                  </tr>
                  <tr>
                    <td>Apple</td>
                    <td>Laptop</td>
                    <td>5</td>
                  </tr>
                  <tr>
                    <td>Samsung</td>
                    <td>Monitor</td>
                    <td>8</td>
                  </tr>
                  <tr>
                    <td>Apple</td>
                    <td>Laptop</td>
                    <td>5</td>
                  </tr>
                  <tr>
                    <td>Samsung</td>
                    <td>Monitor</td>
                    <td>8</td>
                  </tr>
                  <tr>
                    <td>Apple</td>
                    <td>Laptop</td>
                    <td>5</td>
                  </tr>
                  <tr>
                    <td>Samsung</td>
                    <td>Monitor</td>
                    <td>8</td>
                  </tr>
                  <tr>
                    <td>Apple</td>
                    <td>Laptop</td>
                    <td>5</td>
                  </tr>
                  <tr>
                    <td>Samsung</td>
                    <td>Monitor</td>
                    <td>8</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="second index">
            <h1>On Stock Products</h1>
            <div className="table-wrapper">
              <table className="product-table">
                <thead>
                  <tr>
                    <th>Brand</th>
                    <th>Type</th>
                    <th>Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Dell</td>
                    <td>Desktop</td>
                    <td>4</td>
                  </tr>
                  <tr>
                    <td>Asus</td>
                    <td>Laptop</td>
                    <td>6</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
