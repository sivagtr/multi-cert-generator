import { sendReply } from './test';

const fs = require('fs'); 
const {parse} = require('csv-parse');
const parser = parse({columns: true}, function (err, records) {
    console.log(records);
});



export const apprunner = () => {
    console.log("Hello World")
    console.log(__dirname)
    fs.createReadStream('/Users/simothuk/Downloads/sample-data.csv').pipe(parser);
    sendReply()
}