export const config = {
    runner: 'local',
    specs: ['./test/*.js'],
    maxInstances: 1,
    capabilities: [{
        platformName: 'Android',
        'appium:deviceName': 'RRCRC00GB3F',
        'appium:platformVersion':"14",
        'appium:automationName': 'UiAutomator2',
        'appium:appPackage': 'io.appium.android.apis',
        'appium:appActivity': '.ApiDemos',
        'appium:noReset': false
    }],
    logLevel: 'info',
    framework: 'mocha',
    reporters: ['spec',['allure',{
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverStepshotsReporting: false
    }]],
    hostname: 'localhost',
    port: 4723,
    path: '/',
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    afterTest: async function (_, __, {passed}) {
        if (!passed) {
            await browser.takeScreenshot();
        }
    }
};