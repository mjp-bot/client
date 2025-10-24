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
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

function Index() {
  const role = Number(localStorage.getItem("role"));

  // MODAL FUNCTION
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);

  const openAddModal = () => setAddModalOpen(true);
  const closeAddModal = () => setAddModalOpen(false);

  const openUpdateModal = () => setUpdateModalOpen(true);
  const closeUpdateModal = () => setUpdateModalOpen(false);

  // DROPDOWN SELECTION
  const [selected, setSelected] = useState("");

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
                      <button className="edit" onClick={openUpdateModal}>
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
        <div className="add-modal">
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Add New Item</h2>
            </div>

            <div className="modal-body">
              <div className="modal-left">
                <h2>Deployment Details</h2>
                <div className="section">
                  <label>Client Name</label>
                  <input type="text" />
                  <label>Address</label>
                  <input type="text" />
                  <label>Date Deployed</label>
                  <input type="date" />
                </div>

                <h2>Device Details</h2>
                <div className="section">
                  <label>Type</label>
                  <div className="select-options">
                    <select>
                      <option>None</option>
                      <option>3.3.3</option>
                      <option>3.3.3</option>
                    </select>
                  </div>
                  <label>Model</label>
                  <input type="text" />
                  <label>Serial Number</label>
                  <input type="text" />
                  <label>SKU</label>
                  <input type="text" />
                  <label>Specification</label>
                  <div className="select-options">
                    <select>
                      <option>None</option>

                      <option>3.3.3</option>
                      <option>3.3.3</option>
                    </select>
                  </div>
                  <label>Status</label>
                  <div className="select-options">
                    <select>
                      <option>None</option>

                      <option>3.3.3</option>
                      <option>3.3.3</option>
                    </select>
                  </div>
                </div>

                <h2>Administrative Details</h2>
                <div className="section">
                  <label>Delsan PO#</label>
                  <input type="text" />
                  <label>Delsan DR#</label>
                  <input type="text" />
                  <label>Client PO#</label>
                  <input type="text" />
                  <label>Client DR#</label>
                  <input type="text" />
                  <label>Product Manager</label>
                  <div className="select-options">
                    <select>
                      <option>None</option>

                      <option>3.3.3</option>
                      <option>3.3.3</option>
                    </select>
                  </div>
                  <label>Account Manager</label>
                  <div className="select-options">
                    <select>
                      <option>None</option>

                      <option>3.3.3</option>
                      <option>3.3.3</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="modal-right">
                <h2>Warranty Information</h2>
                <div className="section">
                  <label>Date Purchased</label>
                  <input type="date" />
                  <label>Warranty</label>
                  <div className="select-options">
                    <select>
                      <option>None</option>

                      <option>3.3.3</option>
                      <option>3.3.3</option>
                    </select>
                  </div>
                  <label>Warranty Expiration Date</label>
                  <input type="date" />
                </div>

                <h2>Support Management</h2>
                <div className="section support-section">
                  <label>Last Support Date</label>
                  <input type="date" />

                  <label>Last Support Remarks</label>

                  <textarea type="text" />

                  <label>Last PMS Date</label>
                  <input type="date" />

                  <label>Last PMS Remarks</label>
                  <textarea type="text" />
                </div>

                <h2>General Information</h2>
                <div className="section">
                  <label>Remarks</label>

                  <textarea type="text" />
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button className="cancel-btn" onClick={closeAddModal}>
                Cancel
              </button>
              <button className="save-btn">Save</button>
            </div>
          </div>
        </div>
      )}
      {updateModalOpen && (
        <div className="add-modal">
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Update Item</h2>
            </div>

            <div className="modal-body">
              <div className="modal-left">
                <h2>Deployment Details</h2>
                <div className="section">
                  <label>Client Name</label>
                  <input type="text" />
                  <label>Address</label>
                  <input type="text" />
                  <label>Date Deployed</label>
                  <input type="date" />
                </div>

                <h2>Device Details</h2>
                <div className="section">
                  <label>Type</label>
                  <div className="select-options">
                    <select>
                      <option>None</option>
                      <option>3.3.3</option>
                      <option>3.3.3</option>
                    </select>
                  </div>
                  <label>Model</label>
                  <input type="text" />
                  <label>Serial Number</label>
                  <input type="text" />
                  <label>SKU</label>
                  <input type="text" />
                  <label>Specification</label>
                  <div className="select-options">
                    <select>
                      <option>None</option>

                      <option>3.3.3</option>
                      <option>3.3.3</option>
                    </select>
                  </div>
                  <label>Status</label>
                  <div className="select-options">
                    <select>
                      <option>None</option>

                      <option>3.3.3</option>
                      <option>3.3.3</option>
                    </select>
                  </div>
                </div>

                <h2>Administrative Details</h2>
                <div className="section">
                  <label>Delsan PO#</label>
                  <input type="text" />
                  <label>Delsan DR#</label>
                  <input type="text" />
                  <label>Client PO#</label>
                  <input type="text" />
                  <label>Client DR#</label>
                  <input type="text" />
                  <label>Product Manager</label>
                  <div className="select-options">
                    <select>
                      <option>None</option>

                      <option>3.3.3</option>
                      <option>3.3.3</option>
                    </select>
                  </div>
                  <label>Account Manager</label>
                  <div className="select-options">
                    <select>
                      <option>None</option>

                      <option>3.3.3</option>
                      <option>3.3.3</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="modal-right">
                <h2>Warranty Information</h2>
                <div className="section">
                  <label>Date Purchased</label>
                  <input type="date" />
                  <label>Warranty</label>
                  <div className="select-options">
                    <select>
                      <option>None</option>

                      <option>3.3.3</option>
                      <option>3.3.3</option>
                    </select>
                  </div>
                  <label>Warranty Expiration Date</label>
                  <input type="date" />
                </div>

                <h2>Support Management</h2>
                <div className="section support-section">
                  <label>Last Support Date</label>
                  <input type="date" />

                  <div className="input-with-btn">
                    <label>Last Support Remarks</label>

                    <button className="btn-supports">View</button>
                  </div>
                  <textarea type="text" />

                  <label>Last PMS Date</label>
                  <input type="date" />

                  <div className="input-with-btn">
                    <label>Last PMS Remarks</label>
                    <button className="btn-pms">View</button>
                  </div>
                  <textarea type="text" />
                </div>

                <h2>General Information</h2>
                <div className="section">
                  <div className="input-with-btn">
                    <label>Remarks</label>

                    <button className="btn-remarks">View</button>
                  </div>
                  <textarea type="text" />
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button className="cancel-btn" onClick={closeUpdateModal}>
                Cancel
              </button>
              <button className="save-btn">Save</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Index;
