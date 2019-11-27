var cmd=require('node-cmd');
 
cmd.get(
    'node nightwatch -e chrome',
    function(err, data, stderr){
        console.log('the current working dir is : ',data)
    }
);