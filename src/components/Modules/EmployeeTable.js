import React from "react";

let EmployeeTable = (props) => {
    let {employees} = props
    return (
        <React.Fragment>
           <div>
               <div className="row">
                   <div className="col">
                   <table className='table table-hover text-center table-striped table-white'>
                                    <thead className='bg-dark text-white'>
                                        <tr>
                                            <th>Emp.Id</th>
                                            <th>FirstName</th>
                                            <th>LastName</th>
                                            <th>Role</th>
                                            <th>Department</th>
                                            <th>Gender</th>
                                            <th>Address</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {employees.length > 0 ? 
                                        <React.Fragment>
                                            {employees.map(employee => {
                                                return(
                                                    <tr key={employee.id}>
                                                        <td>{employee.id}</td>
                                                        <td>{employee.firstName}</td>
                                                        <td>{employee.lastName}</td>
                                                        <td>{employee.Job.title}</td>
                                                        <td>{employee.Department.name}</td>
                                                        <td>{employee.Gender.gender}</td>
                                                        <td>{employee.Address.unit}, {employee.Address.city}, {employee.Address.province}, {employee.Address.postalcode}</td>
                                                        <td><span className='m-2'><i class="fa fa-pencil" aria-hidden="true"/></span><span><i class="fa fa-times" aria-hidden="true"/></span></td>
                                                    </tr>
                                                )
                                            } )}
                                        </React.Fragment> : null}
                                    </tbody>
                                </table>
                   </div>
               </div>
           </div>
        </React.Fragment>
    )
};
export default EmployeeTable;