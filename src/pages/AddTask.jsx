import React, { useEffect } from 'react'
import { FaCalendarAlt, FaPen } from 'react-icons/fa'
import { MdBallot } from 'react-icons/md'

const AddTask = ({onPageLoad}) => {
    useEffect(() => {
        onPageLoad('Add Task')
    }, [])

    return (
        <section className="section main-section">
            <div className="card mb-6">
                <header className="card-header">
                    <p className="card-header-title">
                        <span className="icon">
                            <FaPen/>
                        </span>
                        Create a New Task
                    </p>
                </header>
                <div className="card-content">
                    <form method="get">
                        <div className="field">
                            <label className="label">Title</label>
                            <div className="field-body">
                                <div className="field">
                                    <div className="control icons-left">
                                        <input className="input"
                                            type="text"
                                            placeholder="Title" />
                                        {/* <span className="icon left">
                                            <i className="mdi mdi-account"></i>
                                        </span> */}
                                    </div>
                                </div>

                                <div className="field">
                                    <label className="label">Description</label>
                                    <div className="control">
                                        <textarea
                                            className="textarea"
                                            placeholder="Describe the task here"></textarea>
                                    </div>
                                </div>
                                <hr />

                                <div className="field">
                                    <label className="label">Start Date</label>
                                    <div className="control icons-left">
                                        <input className="input"
                                            type="date"
                                            placeholder="Start Date" />
                                        <span className='icon left'>
                                            <FaCalendarAlt/>
                                        </span>
                                    </div>
                                </div>

                                <div className="field">
                                    <label className="label">Due Date</label>
                                    <div className="control icons-left">
                                        <input className="input"
                                            type="date"
                                            placeholder="Due Date" />
                                        <span className='icon left'>
                                            <FaCalendarAlt/>
                                        </span>

                                        {/* <span className="icon left">
                                            <i className="mdi mdi-account"></i>
                                        </span> */}
                                    </div>
                                </div>

                                <div className="field">
                                    <label className="label">Reported By</label>
                                    <div className="control">
                                        <div className="select">
                                            <select>
                                                <option>Business development</option>
                                                <option>Marketing</option>
                                                <option>Sales</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className="field">
                                    <label className="label">Priority</label>
                                    <div className="control">
                                        <div className="select">
                                            <select>
                                                <option>High</option>
                                                <option>Medium</option>
                                                <option>Low</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className="field">
                                    <label className="label">Task Status</label>
                                    <div className="control">
                                        <div className="select">
                                            <select>
                                                <option>To do</option>
                                                <option>In Progress</option>
                                                <option>Completed</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className="field">
                                    <label className="label">Task Allowance</label>
                                    <div className='field'>
                                        <div className="field addons">
                                            <div className="control">
                                                <input className="input"
                                                    value="BDT"
                                                    size="3" readOnly='true' />
                                            </div>
                                            <div className="control expanded">
                                                <input className="input"
                                                    type="text"
                                                    placeholder="Task Allowance" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="field grouped">
                            <div className="control">
                                <button type="submit" className="button green">
                                    Submit
                                </button>
                            </div>
                            <div className="control">
                                <button type="reset" className="button red">
                                    Reset
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default AddTask