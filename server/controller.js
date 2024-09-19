
import Employee from "./model.js";

import grid from 'gridfs-stream';
import mongoose from 'mongoose';

const url = 'http://localhost:8000';


let gfs, gridfsBucket;
const conn = mongoose.connection;
conn.once('open', () => {
    gridfsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
        bucketName: 'fs'
    });
    gfs = grid(conn.db, mongoose.mongo);
    gfs.collection('fs');
});

export const createEmployee = async (request, response) => {
    try {
        const employee = request.body;

        const newEmployee = new Employee(employee);
        await newEmployee.save();

        return response.status(200).json({msg: 'employee record created successfully'});
    } catch(error) {
        return response.status(500).json({msg: 'Error while creating employee record'});
    }
}

export const uploadImage = (request, response) => {
    if(!request.file) 
        return response.status(404).json("File not found");
    
    const imageUrl = `${url}/file/${request.file.filename}`;

    response.status(200).json(imageUrl); 
}

export const getImage = async (request, response) => {
    try {   
        const file = await gfs.files.findOne({ filename: request.params.filename });
        const readStream = gridfsBucket.openDownloadStream(file._id);
        readStream.pipe(response);
    } catch (error) {
        response.status(500).json({ msg: error.message });
    }
}

export const getAllEmployees = async (request, response) => {
    try {
        const data = await Employee.find({});
        return response.status(200).json(data);
    } catch(error) {
        return response.status(500).json(error);
    }
}

export const getEmployee = async (request, response) => {
    try {
        let d = await Employee.findById(request.params.id);
        return response.status(200).json(d);
    } catch(error) {
        return response.status(500).json(error);
    }
}

export const updateEmp = async (request, response) => {
    try {
        const employee = await Employee.findById(request.params.id);

        if (!employee) {
            response.status(404).json({ msg: 'Employee not found' });
        }
        
        await Employee.findByIdAndUpdate( request.params.id, { $set: request.body });

        response.status(200).json('Employee data updated successfully');
    } catch(error) {
        return response.status(500).json(error);
    }
}

export const deleteEmployeeById = async (request, response) => {
    try {
        const employee = await Employee.findById(request.params.id);

        if (!employee) {
            response.status(404).json({ msg: 'Employee not found' });
        }
        
        await Employee.findByIdAndDelete(request.params.id);

        response.status(200).json('Employee data deleted successfully');
    } catch(error) {
        return response.status(500).json(error);
    }
} 