import React from 'react';
import { connect } from 'react-redux';


const pStyle = {
    textAlign: 'center',
    marginTop: '30px'
};

const Login = props => (
    <div>
        <h4 className="pageSub">Login</h4>

        <div className="row">
            <div className="col-sm-1">&nbsp;</div>
            <div className="col-sm-5">
                <p style={pStyle}><a href="login.html" className="glass greenglass">Have Junk Removed</a></p>
            </div>
            <div className="col-sm-5">
                <p style={pStyle}><a href="#" className="glass blueglass">Be a Junk Removal Contractor</a></p>
            </div>
            <div className="col-sm-1">&nbsp;</div>
        </div>
    </div>
);


export default connect()(Login);