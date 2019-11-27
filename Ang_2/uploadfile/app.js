var express = require('express')
var multer = require('multer')
var app = express()
var fs = require('fs');
var dir = './uploads';

if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
}

const upload = multer({
    storage: multer.diskStorage({
        destination: function (req, file, cb) {
            console.log(FormData.get('name'))
            if (!fs.existsSync('./uploads/' + req.body.name)) {
                fs.mkdirSync('./uploads/' + req.body.name);
            }
            cb(null, './uploads/' + req.body.name + '/');
        },
        filename: function (req, file, cb) {
            cb(null, Date.now() + '-' + file.originalname);

        }
    })
})

app.post('/', upload.single('productImage'), (req, res, next) => {
    console.log(req.file)
    res.send({
        message: 'Welcome to the API'
    });
});

app.listen(5000, () => console.log(`Example app listening on port 5000!`))