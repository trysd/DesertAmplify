/* Amplify Params - DO NOT EDIT
  API_DASIMAPI_CANNONTABLE_ARN
  API_DASIMAPI_CANNONTABLE_NAME
  API_DASIMAPI_GRAPHQLAPIENDPOINTOUTPUT
  API_DASIMAPI_GRAPHQLAPIIDOUTPUT
  API_DASIMAPI_TARGETAAATABLE_ARN
  API_DASIMAPI_TARGETAAATABLE_NAME
  API_DASIMAPI_TARGETBBBTABLE_ARN
  API_DASIMAPI_TARGETBBBTABLE_NAME
  API_DASIMAPI_TARGETSTABLE_ARN
  API_DASIMAPI_TARGETSTABLE_NAME
  ENV
  REGION
Amplify Params - DO NOT EDIT */

'use strict';

const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({ region: process.env.REGION });
const { v4: uuidv4 } = require('uuid'); // npm i --save uuid ※functionフォルダで実行
const moment = require('moment'); // npm i --save moment
const fetch = require('node-fetch');
const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require('constants');



exports.handler = async (event) => {

  // UUID生成
  const newid = uuidv4();
  // クライアントへの返却用
  var result;
  // param
  var params = {
    TransactItems: [
      {
        Put: {
          TableName: process.env.API_DASIMAPI_TARGETSTABLE_NAME,
          Item: {
            '__typename': 'Targets',
            'createdAt': moment().utc().format('YYYY-MM-DDTHH:mm:ss.SSS') + 'Z',
            'updatedAt': moment().utc().format('YYYY-MM-DDTHH:mm:ss.SSS') + 'Z',
            id: newid,
            type: 99,
            date: '2021-12-12'
          }
        }
      }, {
        Update: {
          TableName: process.env.API_DASIMAPI_CANNONTABLE_NAME,
          Key: { id: '3b9224a2-72ca-4789-9d0c-cb31da546d8e' },
          UpdateExpression: 'set #version = #version + :Increment',
          ConditionExpression: '#version = :version',
          ExpressionAttributeNames: {
            '#version': 'version'
          },
          ExpressionAttributeValues: {
            ':Increment': 1,
            ':version' : 2
          }
        }
      }
    ]
  };

  try {
    result = await docClient.transactWrite(params).promise();
  } catch (e) {
    console.log('=====# err #=====');
    console.log(e);
    console.log('=====# // #===== ');
  }

  const mdtest = require(`./md-test`);
  const ttt = await mdtest.handler(event, '#20210110!', null)

  const mdsample = (require(`./md-sample`)).handler;
  const sss = await mdsample(event, '#20210110!', null)

  // TODO implement
  return {
    statusCode: 200,
    //  Uncomment below to enable CORS requests
    //  headers: {
    //      "Access-Control-Allow-Origin": "*",
    //      "Access-Control-Allow-Headers": "*"
    //  },
    body: JSON.stringify({
      message: 'Hello from Lambda!',
      event: event,
      mdtest: ttt,
      mdsample: sss
    }),

  };

};
