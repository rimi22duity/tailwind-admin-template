import React from "react"
import { FaEye, FaUsers } from "react-icons/fa"
import { FaRotate, FaTrashCan } from "react-icons/fa6"
import tableData from '../../tableData.json'

const TableCard = () => {
    return (
        <div className="card has-table">
            <header className="card-header">
                <p className="card-header-title">
                    <span className="icon"><FaUsers /></span>
                    Clients
                </p>
                <a href="#" className="card-header-icon">
                    <span className="icon"><FaRotate /></span>
                </a>
            </header>
            <div className="card-content">
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Company</th>
                            <th>City</th>
                            <th>Progress</th>
                            <th>Created</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.tableData.map((element, index) => {
                            return (
                            <tr key={index}>
                                <td className="image-cell">
                                    <div className="image">
                                        <img src={element.image} className="rounded-full"/>
                                    </div>
                                </td>
                                <td data-label="Name">{element.name}</td>
                                <td data-label="Company">{element.company}</td>
                                <td data-label="City">{element.city}</td>
                                <td data-label="Progress" className="progress-cell">
                                    <progress max={element.progress.max} value={element.progress.value}>{element.progress.value}</progress>
                                </td>
                                <td data-label="Created">
                                    <small className="text-gray-500" title={element.created}>{element.created}</small>
                                </td>
                                <td className="actions-cell">
                                    <div className="buttons right nowrap">
                                        <button className="button small blue --jb-modal"  data-target="sample-modal-2" type="button">
                                            <span className="icon"><FaEye /></span>
                                        </button>
                                        <button className="button small red --jb-modal" data-target="sample-modal" type="button">
                                            <span className="icon"><FaTrashCan /></span>
                                        </button>
                                    </div>
                                </td>
                            </tr>)
                            
                        })}
                    </tbody>
                </table>
                <div className="table-pagination">
                    <div className="flex items-center justify-between">
                        <div className="buttons">
                            <button type="button" className="button active">1</button>
                            <button type="button" className="button">2</button>
                            <button type="button" className="button">3</button>
                        </div>
                        <small>Page 1 of 3</small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TableCard