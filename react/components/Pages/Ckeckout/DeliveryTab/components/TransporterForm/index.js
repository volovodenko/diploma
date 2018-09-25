import React, {Fragment} from 'react';


import Transporter from './components/Transporter/index';
import Address from './components/Address/index';
import Warehouse from './components/Warehouse/index'


const TransporterForm = props => (

    <Fragment>
        <Transporter {...props}/>
        <Address {...props}/>
        <Warehouse {...props}/>
    </Fragment>
);

export default TransporterForm;