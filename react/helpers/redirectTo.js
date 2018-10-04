import React from 'react';
import {Redirect} from 'react-router-dom';


const redirectTo = to => () => <Redirect to={to}/>;

export default redirectTo;