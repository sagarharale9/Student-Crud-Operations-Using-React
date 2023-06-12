import React  from "react";
import './styles/style.css';

const SideBar = () =>  {
    return (
        <div id="sidebar" >
            <div
                class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white  min-vh-100">
                <a href="#"
                    class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white  text-decoration-none">
                    <span id="menus"><u> Menu</u></span>
                </a>
                <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center  align-items-sm-start"
                    id="menu">
                    <li>
                        <a href="#" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-speedometer2"></i> <span class="ms-1 d-none   d-sm-inline">Add
                                Student</span> </a>
                    </li>
                    <li>
                        <a href="#list" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-speedometer2"></i> <span id="list" class="ms-1 d-none d-sm-inline">List</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-speedometer2"></i> <span
                                class="ms-1 d-none d-sm-inline">Reports</span> </a>
                    </li>
                </ul>
            </div>
        </div>

    )
}
export default SideBar;