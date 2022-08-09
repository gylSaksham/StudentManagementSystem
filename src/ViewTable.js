import React from 'react';

export default function ViewTable(props) {

  return (
    <div>
      <table id="students">
        <thead>
          <tr>
            <th>
              Date <br />
              Students
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              Student 1
            </td>
          </tr>
        </tbody>
      </table>
      <hr />

    </div>
  );
}