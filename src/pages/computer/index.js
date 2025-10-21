import React from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilter,
  faDownload,
  faSearch,
  faUserPen,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

function Index() {
  const role = Number(localStorage.getItem("role"));

  return (
    <div className="computers">
      <div className="top-computers">
        <div className="top-left">Computers</div>
        <div className="top-right">
          {/* <div className="search-area"> */}
          <input type="text" placeholder="Search..." className="search-input" />
          {/* <button className="search-button">
              <FontAwesomeIcon
                icon={faSearch}
                className="search-icon"
                // onClick={toggleDropdown}
              />
            </button> */}
          {/* </div> */}
          <button className="filter">
            <FontAwesomeIcon
              icon={faFilter}
              className="account-icon"
              // onClick={toggleDropdown}
            />
            Filter
          </button>
          <button className="download">
            <FontAwesomeIcon
              icon={faDownload}
              className="account-icon"
              // onClick={toggleDropdown}
            />
          </button>
          <button className="addItem">Add Item</button>
        </div>
      </div>
      <div className="bottom-computers">
        <div className="bottom-top">
          <div className="bot-top-left">
            <h1>Product Brand</h1>
          </div>
          <div className="bot-top-right">
            <div className="select-options">
              <select className="" name="" id="">
                <option value="">All</option>
                <option value="">Lenovo</option>
              </select>
            </div>
            {/* Pagination Controls (bottom)
            <div className="pagination">
              <button
                type="button"
                disabled={currentPage <= 1}
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              >
                Previous
              </button>

              {(() => {
                const pageNumbers = [];
                const windowSize = 5;
                let start = Math.max(
                  1,
                  currentPage - Math.floor(windowSize / 2)
                );
                let end = start + windowSize - 1;

                if (end > totalPages) {
                  end = totalPages;
                  start = Math.max(1, end - windowSize + 1);
                }

                for (let p = start; p <= end; p++) {
                  pageNumbers.push(
                    <button
                      key={p}
                      className={p === currentPage ? "active" : ""}
                      type="button"
                      onClick={() => setCurrentPage(p)}
                    >
                      {p}
                    </button>
                  );
                }
                return pageNumbers;
              })()}

              <button
                type="button"
                disabled={currentPage >= totalPages}
                onClick={() =>
                  setCurrentPage((p) => Math.min(totalPages, p + 1))
                }
              >
                Next
              </button>

              <span className="page-info">
                Page {currentPage} of {totalPages} ({totalRows} rows)
              </span>
            </div> */}
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
                <td>Accont Manager</td>
                <td>Product Manager</td>
                <td>Last Support Date</td>
                <td>
                  <div className="button-container">
                    <button className="edit">
                      {" "}
                      <FontAwesomeIcon
                        icon={faUserPen}
                        className="edit-icon"
                        // onClick={toggleDropdown}
                      />
                    </button>
                    <button className="delete">
                      <FontAwesomeIcon
                        icon={faTrash}
                        className="delete-icon"
                        // onClick={toggleDropdown}
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
  );
}

export default Index;
