exports = function(event){
  
  console.log(Object.keys(event.fullDocument));
  const order = event.fullDocument;

  try{
    return Promise.all([context.functions.execute("sendOrderConfirmation", order)]);
  } 
  catch(error){
    console.log(error);
  }
};