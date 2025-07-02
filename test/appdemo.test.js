import { expect } from 'chai';

describe('Sesi 14 Test Mobile App', () => {

    afterEach(async () => {
        await browser.execute('mobile: terminateApp', { appId: 'io.appium.android.apis'});
        await browser.pause(1000);
        await browser.execute('mobile: activateApp', { appId: 'io.appium.android.apis'});
    });

    it('Memastikan App terbuka dan  elemen Accessibility ada', async () => {
        const accessibilityMenu = await $('//android.widget.TextView[@content-desc="Accessibility"]');
        await accessibilityMenu.waitForDisplayed({ timeout: 10000 });
        const isVisible = await accessibilityMenu.isDisplayed();
        expect(isVisible).to.be.true;
    });

    it('Memasukan data ke elemen', async () => {
        const appMenu = await $('//android.widget.TextView[@content-desc="App"]')
        await appMenu.waitForDisplayed({ timeout: 10000 });
        const isVisible = await appMenu.isDisplayed();
        expect(isVisible).to.be.true;
        await appMenu.click();

        const alertdialogMenu = await $('//android.widget.TextView[@content-desc="Alert Dialogs"]')
        await alertdialogMenu.waitForDisplayed({ timeout: 10000 });
        const tampak = await alertdialogMenu.isDisplayed();
        expect(tampak).to.be.true;
        await alertdialogMenu.click();

        const texttentryMenu = await $('//android.widget.Button[@content-desc="Text Entry dialog"]')
        await texttentryMenu.waitForDisplayed({ timeout: 10000 });
        const lihat = await texttentryMenu.isDisplayed();
        expect(lihat).to.be.true;
        await texttentryMenu.click();
        
        const nameField = await $('//android.widget.EditText[@resource-id="io.appium.android.apis:id/username_edit"]')
        const passField = await $('//android.widget.EditText[@resource-id="io.appium.android.apis:id/password_edit"]')
        await nameField.setValue('hendra');
        await passField.setValue('hendra1672');
    })

    it('Memastikan App terbuka dan elemen Graphics ada', async () => {
        const graphicsMenu = await $('//android.widget.TextView[@content-desc="Graphics"]');
        await graphicsMenu.waitForDisplayed({ timeout: 10000 });
        const isVisible = await graphicsMenu.isDisplayed();
        expect(isVisible).to.be.true;
    });
        
})