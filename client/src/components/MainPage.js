
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import {Router} from '@reach/router';
import Header from './Header';
import Navigator from './Navigator';

const MainPage = (props) => {
    const {user} = props;
    return (
        <div className = "mainFrame">
            <div className = "leftNav">
                <Navigator />
            </div>
            <div className = "centerPage">
                {/* <img src="/logo512.png" alt="scilab Pic" className="defaultPic" /> */}
            </div>
        </div>
    )
}

export default MainPage;