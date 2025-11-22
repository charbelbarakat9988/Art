import React from "react";
const ViewAllNames = ({ names }) => {
  return (
    <div>
      <h1>All Names</h1>
      {names.length === 0 ? (
        <p>No Name available.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>name</th>
              <th>id</th>
            </tr>
          </thead>
          <tbody>
            {names.map((name, index) => (
              <tr key={index}>
                <td>{name.name}</td>
                <td>{name.id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ViewAllNames;
