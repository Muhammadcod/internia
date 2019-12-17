
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const TableHeader = () => {
    return (
        <thead className=" border">
            <tr className="bg-light">
                <th className="align-middle"  scope="col"><input className="form-check-input mx-auto" type="checkbox" value="" id="defaultCheck1" /></th>
                <th className=" " style={{paddingLeft: '60px'}} scope="col">EMPLOYEE<FontAwesomeIcon icon= "longArrowAltUp" style={{color: "#000"}} /></th>
                <th scope="col">SALARY<FontAwesomeIcon icon= "longArrowAltUp" style={{color: "#000"}} /></th>
                <th scope="col">STATUS<FontAwesomeIcon icon= "longArrowAltDown" style={{color: "#000"}} /></th>
                <th scope="col">MANAGE</th>
            </tr>
        </thead>
    )
}

const TableBody = props => {
    const rows = props.characterData.map((row, index) => {
    return (
        <tr key={index} className="bg-white mt-0 row-hover">
            <td className=""><input className="form-check-input mx-auto" type="checkbox" value="" id="defaultCheck1" /></td>
            <td className="py-1">
                <div>
                    <img src="{row.avatar_url}" alt= "yg" className="rounded-circle mr-2"  style={{width: '40px', height: '40px'}} />
                    <div className="d-inline-block align-middle py-0">
                        <h6 className="m-0 font-weight-bold">{row.login}</h6>
                        <p className="m-0 font-weight-light pt-0">fccwddwdwdwd</p>
                    </div>
                </div>
                
            
            </td>
            <td className="py-1">
                <span>
                    <div className="d-inline-block align-middle py-0">
                        <h6 className="m-0 font-weight-bold">tfydwdwdwdwd<span className="badge badge-pill badge-success ml-2">Succ</span></h6>
                        <p className="m-0 font-weight-light pt-0">fccwddwdwdwd</p>
                        
                    </div>
                </span>
                
            </td>
            <td className="py-1">
                <div>
                    <div className="d-inline-block align-middle py-0">
                        <h6 className="m-0 font-weight-bold">tfydwdwdwdwd</h6>
                        <p className="m-0 font-weight-light pt-0">fccwddwdwdwd</p>
                    </div>
                </div>
            </td>
            <td className="py-1">
                <div>
                    <div className="d-inline-block ">
                        <button type="button" class="btn rounded-0 py-0" onClick={() => props.removeCharacter(index)}><FontAwesomeIcon icon="pencil-alt" /></button>
                        <button type="button" class="btn border-left rounded-0 py-2" onClick={() => props.removeCharacter(index)}><FontAwesomeIcon icon="trash-alt" /></button>
            
                    </div>
                </div>
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
                <table className="table table-borderless">
                    <TableHeader className="" />
                    <TableBody className="tap" characterData={characterData} removeCharacter={removeCharacter} />
                </table>
            </div>

        )

    }
}




export default EmployeeList;