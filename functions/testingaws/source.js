exports = function(arg){
  context.services.get('aws2').s3().PutObject({
    "Bucket": "aws-service-testing",
    "Key": "hithere",
    "Body": "WELCOME!!!"
  });
};