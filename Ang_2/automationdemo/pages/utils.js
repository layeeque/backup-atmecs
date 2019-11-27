module.exports = function (browser) {

    this.openBrowser = function () {
        browser
            .windowMaximize()
            .url('http://artsjewels.com/')
            .waitForElementVisible('body', 1000);
        return browser;
    }
}