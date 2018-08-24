exports = function(order) {
  const ses = context.services.get("SendMail");
  
  const db = context.services.get("mongodb-atlas").db("swagstore");
  const users = db.collection("users");
  
  var itemString = '- ' + order.products.map(product => product.name).join("\n- ");
  
  return users.findOne({"user_id": order.user_id}).then(user => {
    return ses.send({
      "toAddress": user.email,
      "body": "Order " + order.id + "'s status is now " + order.status + "!\n\nOrder " + order.id + " contains: \n" + itemString + "\n\nEnjoy!\nMongoDB Store",
      "fromAddress": context.values.get("storeEmail"),
      "subject": "Order " + order.id + "\'s status has changed!"
    });
  });
};