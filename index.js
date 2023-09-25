import qr from "qr-image";
import inquirer from "inquirer";
import fs, { writeFile } from "fs";
inquirer
  .prompt([
    {
        message: "type in your URL : ",
        name: "URL"
    },
  ])
  .then((answers) => {
    const URL = answers.URL;
    var qr_svg = qr.image(URL);
    qr_svg.pipe(fs.createWriteStream('qr-image.png'));

    writeFile("message.txt",URL,(err) =>{
        if(err) throw err;
        console.log("File saved successfully");
    });

  })
  .catch((error) => {
    if (error.isTtyError) {
      
    } else {

    }
  });
