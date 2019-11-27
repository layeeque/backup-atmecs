define([], function () {
    //newjhkkj44444

    if ('serviceWorker' in navigator) {
        navigator.serviceWorker
            .register('sw.js')
            .then(function (swRegistration) {
                var serviceWorker;
                if (swRegistration.installing) {
                    console.log("resolved at installing", swRegistration);
                    serviceWorker = swRegistration.installing;
                }
                else if (swRegistration.waiting) {
                    console.log("resolved at installed", swRegistration);
                    serviceWorker = swRegistration.waiting;
                }
                else if (swRegistration.active) {
                    console.log("resolved at activated", swRegistration);
                    serviceWorker = swRegistration.active;
                }
                if (serviceWorker) {
                    serviceWorker.addEventListener('statechange', function (e) {
                        console.log(e.target.state);
                    });
                }
                swRegistration.addEventListener('updatefound', function (e) {
                    swRegistration.installing.addEventListener('statechange',function(e){
                        console.log('New service worker found !!',e.target.state)
                    })
                    console.log('New Service worker found !', swRegistration);
                });
                setInterval(function () {
                   swRegistration.update();
                },5000)
            }).catch(function (error) {
                console.log('error occured', error);
            });
        navigator.serviceWorker.addEventListener('controllerchange', function (e) {
            console.log('Controlller changed !!!');
        })
    }

});