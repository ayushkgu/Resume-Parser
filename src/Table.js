import './Table.css'

const Table = ({data}) => {
  console.log("Table sees this data: " + data);

  return (
    <table>
        <thead >
            <tr>
            <th> Resume</th>
            </tr>
            
        </thead>
        <tbody>
            {data.map((item) => <TableRow item={item} />)}
        </tbody>
    </table>
  )

}

const TableRow = ({item}) => <tr><th>{item}</th></tr>


export default Table