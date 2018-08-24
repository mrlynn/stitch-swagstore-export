exports = function(order){
  const db = context.services.get("mongodb-atlas").db("swagstore");
  const sales = db.collection("sales_reports");
  
  return sales.updateOne(
    {name:"current_quarter_sales"},
    { "$inc": {receipts: order.total , units_sold: order.units }}
  );
};