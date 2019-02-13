
input= [2,4,64,7,1]
var output = input.map((x)=> x*2);
//console.log(output)

var a=[1,2,3,4]
var b=[17,12,11,10]
var c=[-1,-4,5,9]
var map1= a.map((x,i)=> x+b[i])
//console.log(map1)
var map2= a.map((x,i)=> x+b[i]+ c[i])
//console.log(map2)
var map3 = a.map((x,i)=> x+b[i]- c[i])
//console.log(map3)


var filter1 =  a.filter(i => i>3);
//console.log(filter1)
var filter2 =  b.filter(i => i>10 && i<16);
//console.log(filter2)

var sum1= a.reduce((x,i)=> x+=i)
//console.log(sum1)



var str= "Sai Kiran Pocham"
var str3= "Hello"
var str1= str.substring(3,7)
var str2= str.charAt(4)
var str4 = str+" "+ str3
var len= str.length
var splitted= str.split(" ")
//console.log(typeof(splitted))
var set= new Set();
set.add("Taylor")
set.add("Lakewood")
set.add("Gibson")
set.add("Fender")
//console.log(set)
set.delete("Fender")

//console.log(set)

var roles = new Map();
roles.set('r1', '1')
.set('r2', '3')
.set('r3', '5');
//console.log(typeof(roles))
roles.set('r4', '6')
//console.log(roles)
roles1 ={'r1':1, 'r2':3, 'r3':5}
//console.log(Object.values(roles1))


function total(intial=5, num, keywords)
{
  count = intial
  count+= num.reduce((x,i)=> x+=i)
  count+= Object.values(keywords).reduce((x,i)=> x+=i)
  console.log(count)
}
numb= [1,4,5,7]
keyw= { vegetables:50, fruits:100}
//total(5,numb, keyw)


const posts = [
  {id: 1, upVotes: 2},
  {id: 2, upVotes: 89},
  {id: 3, upVotes: 1}
];
const totalUpvotes = posts.reduce((totalUpvotes, currentPost) =>
  totalUpvotes + currentPost.id, 0 );

const sum = posts.reduce((total, currentPost) => total += currentPost.upVotes, 0);
//console.log(sum)

var says = ((s, times=1)=> s.repeat(times))
//console.log(says("hello",3))
//console.log(says("World",4))

var opt1 = (a,b,c)=> console.log("a is "+ a+ " b is "+ b + " c is "+ c)
//console.log(opt1(3,4,5))

function printMax(x,y)
{
  var x= Number(x)
  var y= Number(y)
  if(x>y)
  { console.log(x, "is Maximum");}
  else { console.log(y, "is Maiximum");}
}
//printMax(7,13)

function min_max(numbers)
{
  var smallest= numbers[0];
  var largest= numbers[0];
  for (i=0;i<numbers.length; i++)
  {
    if(numbers[i]>largest)
    {
      largest=numbers[i];
    }
    else if(numbers[i]<smallest)
    {
      smallest= numbers[i];
    }
  }
  return [largest , smallest];
}
num1= [1,2,5,3,7,9,4]
//console.log(min_max(num1))
