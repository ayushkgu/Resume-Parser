import './Table.css'

import './Table.css';

const Table = ({ data }) => {
//console.log("Table sees this data: " + data);
  return (
    <div className="container">
      <ul className="table">
        <table>
          <li className="table-header">
            <thead>
              <tr>
                <th className="resume">Resume(s):</th>
              </tr>
            </thead>
          </li>
          <tbody className="table-row">
            {data.map((item) => <TableRow item={item} />)}
          </tbody>
        </table>
      </ul>
    </div>
  );
};

const TableRow = ({ item }) => <tr><th>{item}</th></tr>;

export default Table;


