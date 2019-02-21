import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

const pStyle = {
    textAlign: 'center',
    marginTop: '30px'
};
const greenBtn = {
    textAlign: 'center',
    marginTop: '30px'
};


const Home = props => (
    <div>
        <h4 className="pageSub">What are you here to do?</h4>

        <div className="row">
            <div className="col-sm-1">&nbsp;</div>
            <div className="col-sm-5">
                <p style={pStyle}>
                    <Link to={'/Login'}><a href="" className="glass greenglass">Have Junk Removed</a></Link>
                </p>
            </div>
            <div className="col-sm-5">
                <p style={pStyle}><a href="#" className="glass blueglass">Be a Junk Removal Contractor</a></p>
            </div>
            <div className="col-sm-1">&nbsp;</div>
        </div>
  </div>
);

export default connect()(Home);
