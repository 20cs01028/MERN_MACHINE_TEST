import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { API } from '../api';

const employeeInitialvalues = {
    name: '',
    email: '',
    mobile_no: '',
    designation: '',
    gender: '',
    course: {MCA: false, BCA: false, BSC: false},
    image: '',
    created_date: new Date()
}
const CreateEmployee = () => {
    const [employee, setEmployee] = useState(employeeInitialvalues);
    const [file, setFile] = useState('');
    const navigate = useNavigate();

    const handleNameChange = (e) => {
        setEmployee({...employee, name: e.target.value});
    }

    const handleEmailChange = (e) => {
        setEmployee({...employee, email: e.target.value});
    }

    const handleMobileChange = (e) => {
        setEmployee({...employee, mobile_no: e.target.value});
    }

    const handleDesignationChange = (e) => {
        setEmployee({...employee, designation: e.target.value});
    }

    const handleGenderChange = (e) => {
        setEmployee({...employee, gender: e.target.value});
    }

    const handleCourseChange = (e) => {
        const { name, checked } = e.target;
        setEmployee({...employee, course: {...employee.course, [name]: checked}});
    }

    const onSubmit = async () => {
        try {
            console.log(employee);
            await API.createEmployee(employee);
            navigate('/list');
        } catch(error) {
            console.log(error);
        }
    }

    useEffect(() => {
        const getURL = async () => {
            if (file) {
                const data = new FormData();
                data.append('name', file.name)
                data.append('file', file);
                try {
                    let response = await API.uploadFile(data);
                    setEmployee({...employee, image: response.data});
                } catch(error) {
                    console.log(error);
                }  
            }
        }
        getURL()
    }, [file])

    return (
        <div style={{ marginTop: '50px', marginLeft: '150px' }}>
            <div style={{ padding: '5px' }}>Logo</div>
            <div style={{ borderWidth: '2px', borderStyle: 'solid', borderColor: 'black', borderBottomWidth:'0px', padding: '2px', width: '1196px', display: 'flex', justifyContent: 'space-around', backgroundColor: '#C3DDEF'}}>
                <a href='/' style={{textDecoration: 'none', color: 'black'}}>Home</a>
                <a href='/list' style={{textDecoration: 'none', color: 'black'}}>Employee List</a>
                <a href='/' style={{textDecoration: 'none', color: 'black'}}>Hukum Gupta-</a>
                <a href='/login' style={{textDecoration: 'none', color: 'black'}}>Logout</a>
            </div>
            <div style={{ borderWidth: '2px', borderStyle: 'solid', borderColor: 'black', width: '1200px'}}>
                <div style={{ backgroundColor: 'yellow', padding: '2px', paddingBottom: '5px', paddingLeft: '4px' }}>Create Employee</div>
                <div style={{ width: '60%', marginLeft: '10%', marginTop: '2%' }}>
                    <label style={{ marginRight: '13%' }}>Name</label>
                    <input
                        style={{ width: '200px', height: '20px', borderWidth: '2px', borderStyle: 'solid', borderColor: 'black'}}
                        onChange={(e) => handleNameChange(e)}
                        value={employee.name}
                    />
                </div>
                <div style={{ width: '60%', marginLeft: '10%', marginTop: '2%' }}>
                    <label style={{ marginRight: '13.6%' }}>Email</label>
                    <input
                        style={{ width: '200px', height: '20px', borderWidth: '2px', borderStyle: 'solid', borderColor: 'black' }}
                        onChange={(e) => handleEmailChange(e)}
                        value={employee.email}
                    />
                </div>
                <div style={{ width: '60%', marginLeft: '10%', marginTop: '2%' }}>
                    <label style={{ marginRight: '8.6%' }}>Mobile No</label>
                    <input
                        style={{ width: '200px', height: '20px', borderWidth: '2px', borderStyle: 'solid', borderColor: 'black' }}
                        onChange={(e) => handleMobileChange(e)}
                        value={employee.mobile_no}
                    />
                </div>
                <div style={{ width: '60%', marginLeft: '10%', marginTop: '2%' }}>
                    <label style={{ marginRight: '7.4%' }}>Designation</label>
                    <select
                        style={{ width: '207px', height: '25.5px', borderWidth: '2px', borderStyle: 'solid', borderColor: 'black' }}
                        onChange={(e) => handleDesignationChange(e)}
                        value={employee.designation}
                    >
                        <option disabled defaultValue value=''>-- select --</option>
                        <option value="HR">HR</option>
                        <option value="Manager">Manager</option>
                        <option value="sales">sales</option>
                    </select>
                </div>
                <div style={{ width: '60%', marginLeft: '10%', marginTop: '2%', display: 'flex'}}>
                    <label style={{ marginRight: '11.4%' }}>Gender</label>
                    <input
                        style={{ width: '20px', height: '20px', borderWidth: '2px', borderStyle: 'solid', borderColor: 'black'}}
                        type='radio'
                        name='gender'
                        value='M'
                        checked={employee.gender === 'M'}
                        onChange={(e) => handleGenderChange(e)} 
                    /><label style={{marginRight: '20px'}}>M</label><br />
                    <input
                        style={{ width: '20px', height: '20px', borderWidth: '2px', borderStyle: 'solid', borderColor: 'black' }}
                        type='radio'
                        name='gender'
                        value='F'
                        checked={employee.gender === 'F'}
                        onChange={(e) => handleGenderChange(e)}
                    /><label>F</label>
                </div>
                <div style={{ width: '60%', marginLeft: '10%', marginTop: '2%', display: 'flex'}}>
                    <label style={{ marginRight: '11.9%' }}>Course</label>
                    <input
                        style={{ width: '20px', height: '20px', borderWidth: '2px', borderStyle: 'solid', borderColor: 'black' }}
                        type='checkbox'
                        name='MCA'
                        checked={employee.course.MCA ? employee.course.MCA : false}
                        onChange={(e) => handleCourseChange(e)}
                    /><label style={{marginRight: '2%'}}>MCA</label><br />
                    <input
                        style={{ width: '20px', height: '20px', borderWidth: '2px', borderStyle: 'solid', borderColor: 'black' }}
                        type='checkbox'
                        name='BCA'
                        checked={employee.course.BCA ? employee.course.BCA : false}
                        onChange={(e) => handleCourseChange(e)}
                    /><label style={{marginRight: '2%'}}>BCA</label>
                    <input
                        style={{ width: '20px', height: '20px', borderWidth: '2px', borderStyle: 'solid', borderColor: 'black' }}
                        type='checkbox'
                        name='BSC'
                        checked={employee.course.BSC ? employee.course.BSC : false}                        
                        onChange={(e) => handleCourseChange(e)}
                    /><label>BSC</label>
                </div>

                <div style={{ width: '60%', marginLeft: '10%', marginTop: '2%', display: 'flex', marginBottom: '15px'}}>
                    <label style={{ marginRight: '7.9%' }}>Img Upload</label>
                    <input
                        type="file"
                        accept='.jpeg, .png, .jpg'
                        width='1000px'
                        onChange={(e) => setFile(e.target.files[0])}
                    />
                </div>
                <button
                    style={{backgroundColor: 'yellowgreen', borderWidth: '0px', width: '200px', height: '25px', marginLeft: '259px', marginBottom: '20px', cursor: 'pointer'}}
                    onClick={()=>onSubmit()}
                >
                    Submit
                </button>
            </div>
        </div>
    )
}

export default CreateEmployee;