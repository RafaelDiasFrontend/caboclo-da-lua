const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');

aws.config.update({
    secretAccessKey: process.env.AWSSecretKEY,
    accessKeyId: process.env.AWSAccessKeyId
});

const S3 = new aws.S3();

const upload = multer({
    storage: multerS3({
        s3: S3,
        bucket: "kpaxpetsclinic",
        acl: "public-read",
        metadata: (req, file, cb) => {
            cb(null, { fieldName: file.fieldname });   
        },
        key: (req, file, cb) => {
            cb(null, Date.now().toString() + '.pdf');
        }
    })
});

module.exports = upload;