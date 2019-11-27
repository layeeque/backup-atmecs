var fs = require('fs'), fileStream;
var str='firstname layeeque\nlastname rehman\ncountry india\nemail layeequerehman786@gmail.com\npassword abc\ngender male\nmaritalstatus married\n';
var res = str.split("\n");
console.log(res.length)
var data=[]
for (var i=1;i<res.length;i++)
{
 
    var a =res[i-1].split(' ');
 
    data.push(a[1])
}

fs.writeFile("./temp/temp" , data, 'utf8', function (err) {

    if (err) {
        return console.log(err);
    }

 
});
// fs.readFile('./temp/temp','utf8', (err, data) => {
//     if (err) throw err;
//     data1=data.split(',')
//     console.log(data1[0],data1[1],data1[2],data1[3],data1[4]);
//   });
