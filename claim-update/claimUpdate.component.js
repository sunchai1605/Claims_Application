import React from "react";
import "../style/Styles.css";

function ClaimUpdate() {
  return (
    <div>
      <header>
        <h3>
          Met<span>Life</span> - Update Claim Info
        </h3>
      </header>
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
            />
          </div>
          <br />
          <div class="form-group">
            <label class="control-label col-sm-2" for="">
              Claim Type:&nbsp;&nbsp;
            </label>

            <select id="claimType">
              <option value="Submitted">Submitted</option>
              <option value="Received">Received</option>
              <option value="Pending">Pending</option>
              <option value="MoreInfoRequired">More Info Required</option>
              <option value="Denied">Denied</option>
              <option value="Rejected">Rejected</option>
              <option value="Paid">Paid</option>
            </select>
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
            />
          </div>
          <br />
          <div class="form-group">
            <label class="control-label col-sm-2" for="email">
              Claim Start Date:&nbsp;&nbsp;
            </label>

            <input
              type="date"
              class="form-control"
              id="startDate"
              name="startDate"
            />
          </div>
          <br />
          <div class="form-group">
            <label class="control-label col-sm-2" for="pwd">
              Claim End Date:&nbsp;&nbsp;
            </label>

            <input
              type="date"
              class="form-control"
              id="endDate"
              name="endDate"
            />
          </div>
          <br />
          <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10">
              <button type="submit" class="btn btn-primary">
                Submit
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
export default ClaimUpdate;
