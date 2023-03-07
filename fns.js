require('dotenv').config();
const util = require('util');
const AWS = require("aws-sdk");
AWS.config.update({
  accessKeyId: process.env.MCC_AWS_KEY,
  secretAccessKey: process.env.MCC_AWS_SECRET_KEY,
  region: process.env.MCC_AWS_REGION
});
const s3Params = {Bucket: 'moscowchessclub', Delimiter: '/', Prefix: 'tournaments/'};
require("aws-sdk/lib/maintenance_mode_message").suppress = true;
const s3 = new AWS.S3();
const dbClient = new AWS.DynamoDB.DocumentClient();
const TOURNAMENTS = 'moscowchessclub-tournaments';
const listObjectsAsync = util.promisify(s3.listObjects).bind(s3);

//получает многоуровневый объект, превращает его в одноуровневый
function flattenObject(obj, parentKey = '') {
  let result = {};
  for (let key in obj) {
    let propName = parentKey ? `${parentKey}.${key}` : key;
    if (typeof obj[key] === 'object') {
      let nestedObj = flattenObject(obj[key], propName);
      result = { ...result, ...nestedObj };
    } else {
      result[propName] = obj[String(key)];
    }
  }
  return result;
}

//добавить в базу турнир или обновить существующий
const putOrUpdateTournament = async (data, id) => {
  // data = flattenObject(data);
  if (id) {data.id = 2}
    const params = {
      TableName: TOURNAMENTS,
      Item: data
    }
    return await dbClient.put(params).promise();
}

// возвращает список турниров из датабазы
const getAllTournaments = async () => {
  const params = {
    TableName: TOURNAMENTS
  };
  return await dbClient.scan(params).promise();
}

const getTournamentById = async () => {
  const params = {
    TableName: TOURNAMENTS,
    Key:{id}
  };
  return await dbClient.get(params).promise();
}

const deleteTournament = async (id) => {
  const params = {
    TableName: TABLE_NAME,
    Key:{id}
  };
  return await dbClient.delete(params).promise();
}


module.exports = {
    getAllTournaments,
    getTournamentById,
    putOrUpdateTournament,
    deleteTournament,
    s3,
    util,
    AWS,
    s3Params,
    s3,
    listObjectsAsync,
    dbClient,
  };