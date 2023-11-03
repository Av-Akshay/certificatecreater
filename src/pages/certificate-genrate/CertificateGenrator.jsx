import React from "react";
import "./certificatesGenerate.css";

const CertificateGenrator = () => {
  let showCandites = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="certificates_holder">
      <div className="Certificate_Genrator">
        <div className="entries">
          <div className="generate_certificate">
            <button className="certificate_generate_btn">
              Generate Certificate
            </button>
          </div>
          <div className="show_canditate">
            <div>
              <label> Show </label>
              <select>
                {showCandites.map((item) => {
                  return (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  );
                })}
              </select>
              <label> entries </label>
            </div>
            <div>
              <label>Search:-</label>
              <input type="text" placeholder="Search" />
            </div>
          </div>
        </div>
        <div className="certificate_holder_table">
          <table>
            <thead>
              <tr>
                <th>S.no.</th>
                <th>Name</th>
                <th>Designatiom</th>
                <th>Form</th>
                <th>To</th>
                <th>UID</th>
                <th>Generate File</th>
                <th>View File</th>
                <th>Send Mail</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CertificateGenrator;
