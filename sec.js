function readData (filename)
{ var fs = require('fs')
  return new Promise((resolve, reject)=> {
    fs.readFile(filename, 'utf8',(err, data) => resolve(data));
})
}
var orderspath = "customerdetails.csv"
readData(orderspath)
  .then(function(value) {
    //console.log(value.split('\n'));
    ordersshipped(value.split('\n'));
    return (value)
  })
  .then((value) => ordersdate(value.split('\n')))
  .catch((err)=> console.log(err))




function ordersshipped(orders)
{
  var ordersFiltered=[];
  var res = orders.map((order)=>
  {
    if(order.split(',')[1]== '41')
      return order;
  });
  console.log(res.filter((task)=> task != undefined));
}



function ordersdate(orders)
{
  var ordersFiltered1=[];
  var res = orders.map((order)=>
  {
    if(order.split(',')[10]== 'Motorcycles')
      return order;
  });
  console.log(res.filter((task)=> task != undefined));

}
