import inquirer from "inquirer";
import { url } from "inspector";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
    message: "input url",
    name:"URL",
    },
  ])
  .then((answers) => {
    const url = answers.URL
    var qrImg = qr.image(url, { type: 'png' });
    qrImg.pipe(fs.createWriteStream('qrCode.png'));

    fs.writeFile('qr.txt', url, (err) => {
    if (err) throw err;
    console.log('created')
    })
  })
  .catch((error) => {
    if (error.isTtyError) {
        
    } else {

    }
  });


