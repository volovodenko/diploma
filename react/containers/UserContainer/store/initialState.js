const initialState = {
    loginRequest: false,
    token: localStorage.getItem('JWT') ? localStorage.getItem('JWT') : '',
    userName: localStorage.getItem('userName') ? localStorage.getItem('userName') : '',
    userId: localStorage.getItem('userId') ? +localStorage.getItem('userId') : 0,
    userLoggedIn: localStorage.getItem('userLoggedIn') ? !!+localStorage.getItem('userLoggedIn') : false,
    errorLogin: false,

    emailExists: true,
};

export default initialState;