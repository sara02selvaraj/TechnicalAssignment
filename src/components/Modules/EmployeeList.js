import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { paginate } from '../utils/paginate';
import Pagination from '../common/Pagination';
import Spinner from '../utils/spinner';
import EmployeeTable from './EmployeeTable';
import * as employeeAction from '../../redux/Employee/employeeActions';
import * as employeeReducer from '../../redux/Employee/employeeReducer';


let EmployeeList = () => {
    let dispatch = useDispatch();

    let [items, setItems] = useState({
        pageSize: 4,
        currentPage: 1
    })

    let employeeInfo = useSelector((state) => {
        return state[employeeReducer.employeeFeatureKey]
    })

    useEffect(() => {
        dispatch(employeeAction.getAllEmp())
    }, [])

    let handlePageChange = page => {
        setItems({
            ...items,
            currentPage: page
        })
    }
    let {pageSize, currentPage} = items
    let { loading, employees : allEmployees } = employeeInfo

    let employees = paginate(allEmployees, currentPage, pageSize)
    
    return (
        <React.Fragment>
            <div className='wrap'>
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            <h2>Employee Contact Details</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, expedita! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos iure veritatis repellat velit est animi voluptatum hic, provident similique mollitia!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container section mt-5'>
                {
                    loading ? <Spinner/> : 
                    <React.Fragment>
                        <div className='row mt-4'>
                            <div className='col'>
                                <EmployeeTable employees={employees}/>
                                <Pagination itemsCount={allEmployees.length} currentPage={currentPage} pageSize={pageSize} onPageChange={handlePageChange}/>
                            </div>
                        </div>
                    </React.Fragment>
                }
            </div>
        </React.Fragment>
        )
    }

export default EmployeeList