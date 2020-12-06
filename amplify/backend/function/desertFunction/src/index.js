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

'use strict';

const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient({ region: process.env.REGION });
const { v4: uuidv4 } = require('uuid'); // npm i --save uuid ※functionフォルダで実行
const moment = require('moment'); // npm i --save moment

exports.handler = async (event) => {

  // // 書き込み
  // const put_params = {
  //   TableName: 'Ship-clanptii6fenhenfxsgaaad2im-dev', // 予測不能ならクライアントからの引数でもいい
  //   Item: {
  //     '__typename': 'Ship',
  //     'id': uuidv4(), // idは必須?
  //     'title': 'randam-' + Math.random(1),
  //     'capacity': 3,
  //     'registered': 0,
  //     'updatedAt': moment().utc().format('YYYY-MM-DDTHH:mm:ss.SSS') + 'Z'
  //   }
  // }
  // // 結果を待つ
  // try {
  //   await docClient.put(put_params).promise()
  // } catch (e) {
  //   console.log(e.message)
  // }

  // クライアントからの引数
  const argv = event.arguments;
  argv.expectRegValue = argv.expectRegValue === null ? 0 : argv.expectRegValue;

  // クライアントへのエラー通知用
  var errorCode = 0;

  // クライアントへの返却用
  var result;

  // UUID生成
  const newid = uuidv4();

  // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB/DocumentClient.html
  var params = {
    TransactItems: [
      {
        Put: {
          TableName: process.env.API_DESERT9_CREWTABLE_NAME,
          Item: {
            '__typename': 'Crew',
            id: newid,
            shipId: argv.shipId,
            userName: argv.userName,
            'updatedAt': moment().utc().format('YYYY-MM-DDTHH:mm:ss.SSS') + 'Z'
          }
        }
      // },{ // 引数が期待する値かで判定するパターン
      //   Update: {
      //     TableName: process.env.API_DESERTFUNCTION_SHIPTABLE_NAME,
      //     Key: {
      //       id: argv.shipId
      //     },
      //     UpdateExpression: 'set #registered = :Next',
      //     ConditionExpression: '#registered = :Prev',
      //     ExpressionAttributeNames: {
      //       '#registered' : 'registered'
      //     },
      //     ExpressionAttributeValues: {
      //       ':Prev': argv.expectRegValue,
      //       ':Next': argv.expectRegValue + 1
      //     },
      //     ReturnValues: 'UPDATED_NEW'
      //   }
      },{ // 他のフィールドで判定するパターン
        Update: {
          TableName: process.env.API_DESERT9_SHIPTABLE_NAME,
          Key: { id: argv.shipId },
          UpdateExpression: 'set #registered = #registered + :Increment',
          ConditionExpression: '#registered < #capacity',
          ExpressionAttributeNames: {
            '#registered': 'registered',
            '#capacity': 'capacity'
          },
          ExpressionAttributeValues: {
            ':Increment': 1
          }
        }
      }
    ]
  };

  try {
    result = await docClient.transactWrite(params).promise();
  } catch (e) {
    errorCode = 1;
    console.log('=====# err #=====');
    console.log(e);
    console.log('=====# // #===== ');
  }

  // TODO implement
  const response = {
    statusCode: 200,
    headers: { "Access-Control-Allow-Origin": "*" },
    body: JSON.stringify({
      message: 'returnfunc from Lambda!',
      errorCode: errorCode,
      argv: {
        expectRegValue: argv.expectRegValue,
        userName: argv.userName,
        shipId: argv.shipId,
        uuid: newid,
        result: result
      }
    }),
  };

  return response;
};
