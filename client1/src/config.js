// API NOTIFICATION MESSAGES
export const API_NOTIFICATION_MESSAGES = {
    success: {
        title: "Success",
        message: "Data successfully loaded"
    },
    requestFailure: {
        title: "Error!",
        message: "An error occured while parsing request data"
    },
    responseFailure: {
        title: "Error!",
        message: "An error occured while fetching response from server. Please try again"
    },
    networkError: {
        title: "Error!",
        message: "Unable to connect to the server. Please check internet connectivity and try again."
    }
}

// API SERVICE URL
// SAMPLE REQUEST
// NEED SERVICE CALL: { url: "/", method: "POST/GET/PUT/DELETE" }
export const SERVICE_URLS = {
    uploadFile: { url: '/upload', method: 'POST'},
    createEmployee: {url: '/create', method: 'POST'},
    getAllEmployees: {url: '/list', method: 'GET'},
    getEmployeeById: {url: '/update', method: 'GET', query: true},
    updateEmployeeById: {url: '/update/employee', method: 'PUT', query: true},
    deleteEmployee: {url: '/delete', method: 'DELETE', query: true}
    // userSignup: { url: '/signup', method: 'POST' },
    // userLogin: { url: '/login', method: 'POST' },
    // uploadFile: { url: '/file/upload', method: 'POST' },
    // createPost: { url: '/create', method: 'POST' },
    // getAllPosts: { url: '/posts', method: 'GET', params: true },
    // getPostById: { url: '/post', method: 'GET', query: true },
    // updatePost: { url: '/update', method: 'PUT', query: true },
    // deletePost: { url: '/delete', method: 'DELETE', query: true },
    // getAllComments: { url: '/comments', method: 'GET', query: true },
    // newComment: { url: '/comment/new', method: 'POST' },
    // deleteComment: { url: '/comment/delete', method: 'DELETE', query: true }
}