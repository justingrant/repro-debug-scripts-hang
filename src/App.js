import React from "react";
import logo from "./logo.svg";
import "./App.css";
import * as Amplify from "aws-amplify";
import { API } from "aws-amplify";
import * as AWS from 'aws-sdk';
import * as ReactStrap from 'reactstrap';
import * as LibPhoneNumber from 'libphonenumber-js';
import * as Moment from 'moment';
import * as Swiper from 'swiper';
import * as DateFns from 'date-fns';
import * as Luxon from 'luxon';
import * as ReactBoostrap from 'react-bootstrap';
import * as MongoDB from 'mongodb';
import * as MongoDbClientEncryption from 'mongodb-client-encryption';
import * as Lodash from 'lodash';
import * as Axios from 'axios';
import * as Mysql from 'mysql';
import * as EmotionCore from '@emotion/core';
import * as EmotionStyled from '@emotion/styled';
import * as Mongoose from 'mongoose';


function App() {

  // The goal of this code below is to pull in as many packages as
  // possible which should boost the number of lines emitted by the
  // debugger's `.scripts` command, which in turn helps repro this
  // bug.
  let avoidUnusedVariables = 0;
  const drilldown = (drill, level) => {
    if (drill) {
      const drillKeys = Object.keys(drill);      
      const drillValues = Object.values(drill);
      avoidUnusedVariables += drillKeys.length + drillValues.length;
      if (--level > 0) {
        drillValues.forEach(value => drilldown(value, level));
      }
    }
  }; 
  API.get("test", "test", {});
  const packagesToPullInLotsaFiles = [AWS, Amplify, ReactStrap, LibPhoneNumber, Moment, Swiper, Moment, Luxon, DateFns, ReactBoostrap, MongoDB, MongoDbClientEncryption, Lodash, Axios, Mysql, EmotionCore, EmotionStyled, Mongoose];
  packagesToPullInLotsaFiles.forEach(pkg => {
    const keys = Object.keys(pkg);
    console.log (`This package has ${keys.length} keys`);
    const values = Object.values(pkg);
    values.forEach(drill => value => drilldown(value, 5));
  });
  console.log (avoidUnusedVariables);


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
