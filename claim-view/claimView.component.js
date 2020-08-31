import React from "react";
import "../style/Styles.css";

function ClaimView() {
  return (
    <div>
      <div>
        <header>
          <h3>
            Met<span>Life</span> - Claim Summary
          </h3>
        </header>
      </div>
      <div class="main">
        <br />
        <form class="form-horizontal">
          <div class="form-group">
            <label class="control-label col-sm-2" for="">
              Employee Id:&nbsp;&nbsp;
            </label>

            <input
              type="number"
              class="form-control"
              id="userid"
              name="userid"
              value="808240"
              readonly
            />
          </div>
          <br />
          <div class="form-group">
            <label class="control-label col-sm-2" for="text">
              Employee Name:&nbsp;&nbsp;
            </label>

            <input
              type="text"
              class="form-control"
              id="userName"
              name="userName"
              value="Chaitanya G"
              readonly
            />
          </div>
          <br />
          <div class="form-group">
            <label class="control-label col-sm-2" for="">
              Claim Number:&nbsp;&nbsp;
            </label>

            <input
              type="text"
              class="form-control"
              id="claimNo"
              name="claimNo"
              value="23415"
              readonly
            />
          </div>
          <br />
          <div class="form-group">
            <label class="control-label col-sm-2" for="">
              Claim Type:&nbsp;&nbsp;
            </label>

            <input
              type="text"
              class="form-control"
              id="claimType"
              name="claimType"
              value="Submitted"
              readonly
            />
          </div>
          <br />
          <div class="form-group">
            <label class="control-label col-sm-2" for="email">
              Claim Program:&nbsp;&nbsp;
            </label>

            <input
              type="text"
              class="form-control"
              id="claimProgram"
              name="claimProgram"
              value="Health Issue"
              readonly
            />
          </div>
          <br />
          <div class="form-group">
            <label class="control-label col-sm-2" for="email">
              Claim Start Date:&nbsp;&nbsp;
            </label>

            <input
              type="text"
              class="form-control"
              id="startDate"
              name="startDate"
              value="08/08/199"
              readonly
            />
          </div>
          <br />
          <div class="form-group">
            <label class="control-label col-sm-2" for="pwd">
              Claim End Date:&nbsp;&nbsp;
            </label>

            <input
              type="text"
              class="form-control"
              id="endDate"
              name="endDate"
              value="08/08/2040"
              readonly
            />
          </div>
          <br />
          <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10">
              <button
                type="button"
                class="btn btn-primary"
                onClick={(event) => (window.location.href = "/update")}
              >
                Update Claim Details
              </button>
            </div>
          </div>
        </form>
      </div>
      <footer class="footer-distributed">
        <div class="footer-left">
          <h3>
            Met<span>Life</span>
          </h3>
          <p class="footer-company-name">MetLife © 2015</p>
        </div>
      </footer>
    </div>
  );
}

export default ClaimView;
