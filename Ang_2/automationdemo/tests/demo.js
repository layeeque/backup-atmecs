var fs = require('fs'), fileStream;
var data1 = fs.readFileSync('./temp/temp','utf8').split(',')
    
    console.log(data1[0],data1[1],data1[2],data1[3],data1[4]);

    module.exports = {
        'Demo test': function (client) {
            client
                .url('http://localhost:8080')
                .waitForElementVisible('body', 1000)
                //.assert.title('Google')
                .assert.visible('input[id=fname]')
                .setValue('#fname', data1[0])
                 .pause(1000)
    
                 .assert.visible('input[id=lname]')
                 .setValue('#lname', data1[1])
                .pause(1000)
    
                .assert.visible('input[id=country]')
                 .setValue('#country', data1[2])
                .pause(1000)
    
                .assert.visible('input[id=email]')
                .setValue('#email', data1[3])
               .pause(1000)
    
               .assert.visible('input[id=pwd]')
                 .setValue('#pwd', data1[4])
                .pause(1000)
    
                 .assert.visible('#gender')
                .click('#gender > option:nth-child(3)')
                 .pause(1000)
    
                 .assert.visible('#mstatus')
                 .click('#mstatus > option:nth-child(3)')
                  .pause(1000)
    
    
                .waitForElementVisible('input[type=button]', 1000)
                .assert.visible('input[type=button]')
                .click('input[type=button]')
                
                .pause(6000)
    
                .assert.visible('h1[id=complete]')
           
                 .pause(1000)
    
                .end();
        }
    };



