import express from 'express';
import cors from 'cors'
import fileUpload from 'express-fileupload';
import fs from 'fs';

const app = express();

const uploadFolderPath = `${__dirname}/uploads/`;

app.use(fileUpload());
app.use(cors({origin: 'http://localhost:3000'}));

// Upload Endpoint
app.post('/upload', async (req, res) => {
    if (req.files === null) res.status(400).json({ msg: 'No file uploaded' });

    console.log(req);

    const { file } = req.files;
    const isFileExist = await fs.existsSync(`${uploadFolderPath}${file.name}`);
    if (isFileExist) {
        return res.json({
            msg: `File with name ${file.name} already exist`
        })
    }

     file.mv(`${uploadFolderPath}${file.name}`, err => {
        if (err) {
            console.error(err);
            return res.status(500).send(err);
        }

        res.json({
            fileName: file.name,
            filePath: `/uploads/${file.name}`,
            msg: 'Congrats :)'
        });
    });
});

app.get('/data', async (req,res) => {
  fs.readdir(uploadFolderPath, function (err, files) {
      //handling error
      if (err) res.json({error: 'Unable to scan directory: ' + err});
      const data = files.map( file => file);
      return res.send(data)
  });
});

app.listen(5000, () => console.log('Server Started...'));
