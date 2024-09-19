import { React, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API } from '../api';
import Courses from './courses';

const EmployeeList = () => {
    const [employeesList, setEmployeesList]=useState([]);
    const [toggle, setToggle] = useState(false);
    const navigate=useNavigate();

    useEffect(() => {
        const getEmployees = async () => {
            try {
                let response = await API.getAllEmployees();
                setEmployeesList(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        getEmployees();
    }, [toggle]);

    const onButtonClick = () =>{
        navigate('/create');
    }

    const handleDeleteClick = async (id) =>{
        try {
            await API.deleteEmployee(id);
            setToggle(!toggle);
        } catch(error) {
            console.log(error);
        }
    }

    return (
        <div style={{ marginTop: '50px', marginLeft: '150px' }}>
            <div style={{ padding: '5px' }}>Logo</div>
            <div style={{ borderWidth: '2px', borderStyle: 'solid', borderColor: 'black', borderBottomWidth:'0px', padding: '2px', width: '1196px', display: 'flex', justifyContent: 'space-around', backgroundColor: '#C3DDEF'}}>
                <a href='/' style={{textDecoration: 'none', color: 'black'}}>Home</a>
                <a href='/list' style={{textDecoration: 'none', color: 'black'}}>Employee List</a>
                <a href='/' style={{textDecoration: 'none', color: 'black'}}>Hukum Gupta-</a>
                <a href='/login' style={{textDecoration: 'none', color: 'black'}}>Logout</a>
            </div>
            <div style={{ borderWidth: '2px', borderStyle: 'solid', borderColor: 'black', width: '1200px', paddingBottom: '5px'}}>
                <div style={{ backgroundColor: 'yellow', padding: '2px', paddingBottom: '5px', paddingLeft: '4px' }}>Employee List</div>
                <div style={{display: 'flex', justifyContent: 'right', padding: '2px'}}>
                    <span style={{marginRight: '100px'}}>Total Count:</span> 
                    <button
                        style={{ marginRight: '100px', backgroundColor: 'yellowgreen', height: '25px', width: '250px', borderWidth: '0', cursor: 'pointer' }}
                        onClick={() => onButtonClick()}
                    >Create Employee</button>
                </div>
                <table style={{width:'1200px'}}>
                    <thead>
                        {/* {employeesList && employeesList.length > 0 && */}
                            <tr style={{ display: 'flex', justifyContent: 'space-around' }}>
                                <td style={{ width: '80px', border: '1px solid black', textAlign: 'center'}}>Unique Id</td>
                                <td style={{ width: '116.3px', border: '1px solid black', textAlign: 'center'}}>Image</td>
                                <td style={{ width: '135px', border: '1px solid black', textAlign: 'center'}}>Name</td>
                                <td style={{ width: '190px', border: '1px solid black', textAlign: 'center'}}>Email</td>
                                <td style={{ width: '125px', border: '1px solid black', textAlign: 'center'}}>Mobile No</td>
                                <td style={{ width: '110px', border: '1px solid black', textAlign: 'center'}}>Designation</td>
                                <td style={{ width: '70px', border: '1px solid black', textAlign: 'center'}}>gender</td>
                                <td style={{ width: '80px', border: '1px solid black', textAlign: 'center'}}>Course</td>
                                <td style={{ width: '116.3px', border: '1px solid black', textAlign: 'center'}}>Created date</td>
                                <td style={{ width: '110px', border: '1px solid black', textAlign: 'center'}}>Action</td>
                            </tr>
                    </thead>
                    <tbody>
                        {
                            employeesList && employeesList.length > 0 ? employeesList.map((e, index) => (
                                <tr key={e._id} style={{ display: 'flex', justifyContent: 'space-around' }}>
                                    <td style={{ width: '80px', border: '1px solid black', height: '155px', textAlign: 'center'}}>{index}</td>
                                    <td style={{ width: '116.3px', border: '1px solid black', height: '155px', textAlign: 'center'}}><img style={{width: '111px', height: '148px', marginTop: '3px'}} src={e.image} /></td>
                                    <td style={{ width: '135px', border: '1px solid black', height: '155px', textAlign: 'center'}}>{e.name}</td>
                                    <td style={{ width: '190px', border: '1px solid black', height: '155px', textAlign: 'center'}}>{e.email}</td>
                                    <td style={{ width: '125px', border: '1px solid black', height: '155px', textAlign: 'center'}}>{e.mobile_no}</td>
                                    <td style={{ width: '110px', border: '1px solid black', height: '155px', textAlign: 'center'}}>{e.designation}</td>
                                    <td style={{ width: '70px', border: '1px solid black', height: '155px', textAlign: 'center'}}>{e.gender}</td>
                                    <td style={{ width: '80px', border: '1px solid black', height: '155px', textAlign: 'center'}}><Courses course={e.course} /></td>
                                    <td style={{ width: '116.3px', border: '1px solid black', height: '155px', textAlign: 'center'}}>{new Date(e.created_date).toDateString()}</td>
                                    <td style={{ width: '110px', border: '1px solid black', height: '155px', textAlign: 'center'}}><a href={`/update/${e._id}`} style={{textDecoration: 'none', color: 'black', cursor: 'pointer'}}>Edit</a>-<a onClick={() => handleDeleteClick(e._id)} style={{cursor: 'pointer'}}>Delete</a></td>
                                </tr>
                            )) : <tr style={{display: 'flex', justifyContent: 'center'}}><td>No Employees found</td></tr>
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default EmployeeList;