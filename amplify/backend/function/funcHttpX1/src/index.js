/* Amplify Params - DO NOT EDIT
	API_DESERT9_BLOGTABLE_ARN
	API_DESERT9_BLOGTABLE_NAME
	API_DESERT9_COMMENTTABLE_ARN
	API_DESERT9_COMMENTTABLE_NAME
	API_DESERT9_CREWTABLE_ARN
	API_DESERT9_CREWTABLE_NAME
	API_DESERT9_GRAPHQLAPIIDOUTPUT
	API_DESERT9_POSTTABLE_ARN
	API_DESERT9_POSTTABLE_NAME
	API_DESERT9_PRIVATENOTETABLE_ARN
	API_DESERT9_PRIVATENOTETABLE_NAME
	API_DESERT9_ROUTINESHIPTABLE_ARN
	API_DESERT9_ROUTINESHIPTABLE_NAME
	API_DESERT9_SHIPTABLE_ARN
	API_DESERT9_SHIPTABLE_NAME
	API_DESERT9_TASKTABLE_ARN
	API_DESERT9_TASKTABLE_NAME
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({ region: process.env.REGION });
const { v4: uuidv4 } = require('uuid');
const moment = require('moment');
const fetch = require('node-fetch')

'use strict';

exports.handler = async (event) => {

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    body: JSON.stringify({
      getResponse: await getRequest('https://httpbin.org/delay/1'),
      postResponse: await postRequest('https://httpbin.org/post', 'test=aaabbbccc'),
      event: event
    }),
  };

};

/**
 * Post
 * @param {string} url
 * @param {string} body
 */
async function postRequest(url, body) {
  const response = await fetch(url, { method: 'POST', body: body });
  return await response.json();
}

/**
 * Get
 * @param {string} url
 */
async function getRequest(url) {
  const response = await fetch(url);
  return await response.json();
}
