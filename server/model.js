import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
    MCA: {
        type: Boolean,
        default: false,
    },
    BCA: {
        type: Boolean,
        default: false,
    },
    BSC: {
        type: Boolean,
        default: false,
    }
});

const employeeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function (value) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
            },
            message: 'Invalid email address format'
        },
    },
    mobile_no: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    course: {
        type: courseSchema,
    },
    image: {
        type: String,
        required: true
    },
    created_date: {
        type: Date
    }
})

const employee = mongoose.model('employee', employeeSchema);

export default employee;