import styled from "styled-components";
import {INTERESTING_COUNTRIES} from "../../pages/KashahReception";

type Props = {
    data: {
        satType: string,
        total: number,
        country1: number,
        country2: number,
        country3: number,
        country4: number,
        country5: number,
        else: number,
    }
}
const TableComponent = ({data}: Props) => {
    return (
        <TableStyle>
            <TableHeaderStyle>
                <tr>
                    <th></th>
                    <th>Total</th>
                    {INTERESTING_COUNTRIES.map(country => {
                        return <th>{country}</th>
                    })}
                    <th>Else</th>
                    {/* Add more columns as needed */}
                </tr>
            </TableHeaderStyle>
            <TableBodyStyle>
                {data.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
                        <td><RowMainCell>{row.satType}</RowMainCell></td>
                        <td><RowCell>{row.total}</RowCell></td>
                        <td><RowCell>{row.country1}</RowCell></td>
                        <td><RowCell>{row.country2}</RowCell></td>
                        <td><RowCell>{row.country3}</RowCell></td>
                        <td><RowCell>{row.country4}</RowCell></td>
                        <td><RowCell>{row.country5}</RowCell></td>
                        <td><RowCell>{row.else}</RowCell></td>
                    </tr>
                ))}
            </TableBodyStyle>
        </TableStyle>
    );
};
const TableBodyStyle = styled.tbody`
  border-radius: 20px;

  tr:last-child {
    border-radius: 20px 0px 0px 20px;

    td:last-child {
      border-radius: 0px 0px 20px 0px;
    }

    td:first-child {
      border-radius: 0px 0px 0px 20px;
    }
  }

  td {
    border-style: hidden !important;
    height: 80px;
  }

  .even-row {
    background-color: #ffffff;
  }

  .odd-row {
    background-color: #F1F1F1;
  }

`

const RowMainCell = styled.div`
  color: #000;
  text-align: center;
  font-size: 24px;
  font-weight: 400;
  margin: auto;
  width: 150px;
`
const RowCell = styled.div`
  border-radius: 20px;
  background: rgba(232, 232, 232, 0.70);
  display: flex;
  width: 120px;
  height: 50px;
  color: #8E8E8E;
  font-size: 20px;
  justify-content: center;
  align-items: center;
  margin: auto;
`

const TableStyle = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-radius: 20px;
  background: #F8F8F8;
  text-align: center;
  box-shadow: 0px 0px 4px 4px rgba(0, 0, 0, 0.10);
  color: black;
  margin: auto;
`
const TableHeaderStyle = styled.thead`
  border-radius: 20px 20px 0px 0px;
  height: 80px;
  font-size: 24px;
  font-weight: 400;
  padding: 10px 0px 10px 192px;
  align-items: center;
  background: #F1F1F1;

  th:last-child {
    border-radius: 0px 20px 0px 0px;
  }

  th:first-child {
    border-radius: 20px 0px 0px 0px;
  }
}

th {
  font-weight: 400;
  font-size: 24px;
}
`

export default TableComponent;