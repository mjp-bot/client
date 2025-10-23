import React, { useState } from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilter,
  faDownload,
  faSearch,
  faUserPen,
  faTrash,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

function Index() {
  const role = Number(localStorage.getItem("role"));

  // MODAL FUNCTION
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);

  const openAddModal = () => setAddModalOpen(true);
  const closeAddModal = () => setAddModalOpen(false);

  return (
    <>
      <div className="computers">
        <div className="top-computers">
          <div className="top-left">Computers</div>
          <div className="top-right">
            <input
              type="text"
              placeholder="Search..."
              className="search-input"
            />
            <button className="filter">
              <FontAwesomeIcon icon={faFilter} className="filter-icon" />
              Filter
            </button>
            <button className="download">
              <FontAwesomeIcon icon={faDownload} className="account-icon" />
            </button>
            <button className="addItem" onClick={openAddModal}>
              <FontAwesomeIcon icon={faPlus} className="add-icon" />
              Add Item
            </button>
          </div>
        </div>

        <div className="bottom-computers">
          <div className="bottom-top">
            <div className="bot-top-left">
              <h1>Product Brand</h1>
            </div>
            <div className="bot-top-right">
              <div className="select-options">
                <select>
                  <option>Status</option>
                  <option>Deployed</option>
                </select>
              </div>
              <div className="select-options">
                <select>
                  <option>All</option>
                  <option>Lenovo</option>
                </select>
              </div>

              <div className="pagination">
                <button type="button" className="page-btn" disabled>
                  ‹
                </button>
                <div className="page-numbers">
                  <button type="button" className="page-number active">
                    1
                  </button>
                  <button type="button" className="page-number">
                    2
                  </button>
                  <button type="button" className="page-number">
                    3
                  </button>
                </div>
                <button type="button" className="page-btn">
                  ›
                </button>
                <span className="page-info">Page 1 of 10 (100 rows)</span>
              </div>
            </div>
          </div>

          <div className="bottom-table">
            <table>
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Client</th>
                  <th>Date Purchase</th>
                  <th>Date Deployed</th>
                  <th>Warranty</th>
                  <th>Warranty Exp</th>
                  <th>Model</th>
                  <th>Serial No.</th>
                  <th>Account Manager</th>
                  <th>Product Manager</th>
                  <th>Last Support Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>No.</td>
                  <td>Client</td>
                  <td>Date Purchase</td>
                  <td>Date Deployed</td>
                  <td>Warranty</td>
                  <td>Warranty Exp</td>
                  <td>Model</td>
                  <td>Serial No.</td>
                  <td>Account Manager</td>
                  <td>Product Manager</td>
                  <td>Last Support Date</td>
                  <td>
                    <div className="button-container">
                      <button className="edit">
                        <FontAwesomeIcon
                          icon={faUserPen}
                          className="edit-icon"
                        />
                      </button>
                      <button className="delete">
                        <FontAwesomeIcon
                          icon={faTrash}
                          className="delete-icon"
                        />
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* ✅ Modal moved OUTSIDE the .computers div */}
      {addModalOpen && (
        <div className="add-modal" onClick={closeAddModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Add New Product</h2>
              <button className="close-btn" onClick={closeAddModal}>
                ×
              </button>
            </div>
            <div className="modal-body">
              {/* Add form fields here */}
              <p>Modal content goes here...</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Index;
