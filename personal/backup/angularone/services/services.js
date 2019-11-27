
app.factory("servicesdemo", function () {
   
     var robj={};
    robj.generate = function () {
      var num = Math.floor(Math.random() * 10); 
        return num;
    };
    return robj;
});