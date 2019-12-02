
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const TableHeader = () => {
    return (
        <thead className=" border">
            <tr className="bg-light ">
                <th scope="col"><input className="form-check-input mx-auto" type="checkbox" value="" id="defaultCheck1" /></th>
                <th scope="col">EMPLOYEE</th>
                <th scope="col">SALARY</th>
                <th scope="col">STATUS</th>
                <th scope="col">MANAGE</th>
            </tr>
        </thead>
    )
}

const TableBody = props => {
    const rows = props.characterData.map((row, index) => {
    return (
        <tr key={index} className="bg-white mt-0 row-hover border">
            <td className=" border "><input className="form-check-input mx-auto border" type="checkbox" value="" id="defaultCheck1" /></td>
            <td className=" border">{row.employee}</td>
            <td>{row.salary}</td>
            <td>{row.status}</td>
            <td className=" border">
            <button type="button" class="btn rounded-0 py-0" onClick={() => props.removeCharacter(index)}><FontAwesomeIcon icon="trash-alt" /></button>
                <button type="button" class="btn border-left rounded-0 py-0" onClick={() => props.removeCharacter(index)}><FontAwesomeIcon icon="trash-alt" /></button>
            </td>
        </tr>
    )
})
    return  <tbody>{rows}</tbody>
}

class EmployeeList extends React.Component {
    render() {
        const { characterData, removeCharacter } = this.props

        return (
            <div className= "position-absolute border mt-4 top bg-light" style={{width: '910px'}} >
                <button  type="button" class="btn btn-success btn-lg py-1 align-middle px-3  rounded-pill float-right">add employee</button>
                <table className="table table-bordered">
                    <TableHeader className="" />
                    <TableBody className="tap" characterData={characterData} removeCharacter={removeCharacter} />
                </table>
            </div>

        )

    }
}




export default EmployeeList;