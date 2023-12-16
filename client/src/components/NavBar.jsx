import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <nav className="navbar bg-body-tertiary" data-bs-theme="dark">
                <form className="container-fluid justify-content-start">
                <Link className="btn btn-outline-success me-2" to="/">Dashboard</Link>
                <Link className="btn btn-outline-success me-2" to="/display">Employees List</Link>
                <Link className="btn btn-outline-success me-2" to="/add">Add Employee</Link>
                </form>
            </nav>
        </div>
    )
}

export default NavBar