import React, {Fragment} from 'react';


import Transporter from './components/Transporter';
import Address from './components/Address';
import Warehouse from './components/Warehouse'


const TransporterForm = props => (

    <Fragment>
        <Transporter {...props}/>
        <Address {...props}/>
        <Warehouse {...props}/>
    </Fragment>
);

export default TransporterForm;