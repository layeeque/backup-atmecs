var carService = require('./carService.js');
 var swRegister = require('./swRegister.js');

window.pageEvents = {
    loadCarPage : function (carId) 
    {
        console.log("in app . js");
    //    this.carService.loadCarPage(carId);
       carService.loadCarPage(carId);
       console.log(carService.apiUrlPath);
    },loadMore:function(){
        carService.loadMoreRequest();
    }
}
carService.loadMoreRequest();
