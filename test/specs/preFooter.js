const preFooterPage = require('../pageobjects/preFooter.page');
const basicPage = require('../pageobjects/basic.page');
const generateTestFile = require('../../TestFileGenerator.js');
const runAccessbilityTest = require('../../TestA11y.js');
require('../setup/basic.js');

describe('Prefooter section tests for GCWeb', () => {
    const theme = 'gcweb';
     
    generateTestFile('./test/html/gcweb/template-gcweb-en.html', 'gcweb', 'gcweb-preFooter-en', {
        refTop: '{"cdnEnv": "localhost"}',
        top: '{"cdnEnv": "localhost"}',
        preFooter: '{"showShare": false, "showFeedback": false, "screenIdentifier": "0123456789", "dateModified": "2020-09-11", "versionIdentifier": "0123456789", "cdnEnv": "localhost"}',
        footer: '{"cdnEnv": "localhost"}',
        refFooter: '{"cdnEnv": "localhost"}'
	});

    generateTestFile('./test/html/gcweb/template-gcweb-fr.html', 'gcweb', 'gcweb-preFooter-fr', {
        refTop: '{"cdnEnv": "localhost"}',
        top: '{"cdnEnv": "localhost"}',
        preFooter: '{"showShare": false, "showFeedback": false, "screenIdentifier": "0123456789", "dateModified": "2020-09-11", "versionIdentifier": "0123456789", "cdnEnv": "localhost"}',
        footer: '{"cdnEnv": "localhost"}',
        refFooter: '{"cdnEnv": "localhost"}'
	});

    generateTestFile('./test/html/gcweb/template-gcweb-en.html', 'gcweb', 'gcweb-preFooter-modifiedBtn-en', {
        refTop: '{"cdnEnv": "localhost"}',
        top: '{"cdnEnv": "localhost"}',
        preFooter: '{"showShare": ["email", "facebook", "linkedin", "twitter"], "showFeedback": "www.google.ca", "cdnEnv": "localhost"}',
        footer: '{"cdnEnv": "localhost"}',
        refFooter: '{"cdnEnv": "localhost"}'
	});

    generateTestFile('./test/html/gcweb/template-gcweb-en.html', 'gcweb', 'gcweb-preFooter-modifiedBtn-fr', {
        refTop: '{"cdnEnv": "localhost"}',
        top: '{"cdnEnv": "localhost"}',
        preFooter: '{"showShare": ["email", "facebook", "linkedin", "twitter"], "showFeedback": "www.google.ca", "cdnEnv": "localhost"}',
        footer: '{"cdnEnv": "localhost"}',
        refFooter: '{"cdnEnv": "localhost"}'
	});

    generateTestFile('./test/html/gcweb/template-gcweb-en.html', 'gcweb', 'gcweb-preFooter-pageDetails-en', {
        refTop: '{"cdnEnv": "localhost"}',
        top: '{"cdnEnv": "localhost"}',
        preFooter: '"cdnEnv": "localhost", "pagedetails": false}',
        footer: '{"cdnEnv": "localhost"}',
        refFooter: '{"cdnEnv": "localhost"}'
	});

    generateTestFile('./test/html/gcweb/template-gcweb-en.html', 'gcweb', 'gcweb-preFooter-pageDetails-fr', {
        refTop: '{"cdnEnv": "localhost"}',
        top: '{"cdnEnv": "localhost"}',
        preFooter: '"cdnEnv": "localhost", "pagedetails": false}',
        footer: '{"cdnEnv": "localhost"}',
        refFooter: '{"cdnEnv": "localhost"}'
	});

    generateTestFile('./test/html/gcweb/template-gcweb-en.html', 'gcweb', 'gcweb-preFooter-feedbackFalse-en', {
        refTop: '{"cdnEnv": "localhost"}',
        top: '{"cdnEnv": "localhost"}',
        preFooter: '{"cdnEnv": "localhost", "showFeedback": false}',
        footer: '{"cdnEnv": "localhost"}',
        refFooter: '{"cdnEnv": "localhost"}'
	});

    generateTestFile('./test/html/gcweb/template-gcweb-en.html', 'gcweb', 'gcweb-preFooter-feedbackFalse-fr', {
        refTop: '{"cdnEnv": "localhost"}',
        top: '{"cdnEnv": "localhost"}',
        preFooter: '{"cdnEnv": "localhost", "showFeedback": false}',
        footer: '{"cdnEnv": "localhost"}',
        refFooter: '{"cdnEnv": "localhost"}'
	});

    it('Feedback button exists', async () => {
        await feedbackBtnExists(theme, 'en');
        await feedbackBtnExists(theme, 'fr');
    });

    it('Feedback button does not exist', async () => {
        await feedbackBtnDoesNotExist(theme, 'en');
        await feedbackBtnDoesNotExist(theme, 'fr');
    });

    it('Share button exists', async () => {
        await shareBtnExists(theme, 'en');
        await shareBtnExists(theme, 'fr');
    });

    it('Share button does not exist', async () => {
        await shareBtnDoesNotExist(theme, 'en');
        await shareBtnDoesNotExist(theme, 'fr');
    });

    it('Page details show on page', async () => {
        await pageDetailsExist(theme);
        await pageDetailsExist_FR(theme);
    });

    it('Page details do not show on page', async () => {
        await pageDetailsDoNotExist(theme, 'en');
        await pageDetailsDoNotExist(theme, 'fr');
    });

    it('Feedback button with custom URL', async () => {
        await feedbackBtnCustomUrl(theme, 'en');
        await feedbackBtnCustomUrl(theme, 'fr');
    });

    it('Share button with custom modal', async () => {
        await customShareModal(theme, 'en');
        await customShareModal(theme, 'fr');
    });

    it('Page details div does not show', async () => {
        await noPageDetails(theme, 'en');
        await noPageDetails(theme, 'fr');
    });

    it('Verify showShare button classes when showFeedback is visible', async () => {
        await showShareClassDefault(theme, 'en');
        await showShareClassDefault(theme, 'fr');
    });

    it('Verify showShare button classes when showFeedback is not visible', async () => {
        await showShareClassModified(theme, 'en');
        await showShareClassModified(theme, 'fr');
    });

    it('Accessibility', async () => {
        await accessibility(theme, 'en');
        await accessibility(theme, 'fr');
    });
});

describe('PreFooter section tests for GCIntranet', () => {
    const theme = 'gcintranet';
    
    generateTestFile('./test/html/gcintranet/template-gcintranet-en.html', 'gcintranet', 'gcintranet-preFooter-en', {
        refTop: '{"cdnEnv": "localhost"}',
        top: '{"cdnEnv": "localhost", "siteMenu": false}',
        preFooter: '{"screenIdentifier": "0123456789", "dateModified": "2020-09-11", "versionIdentifier": "0123456789", "cdnEnv": "localhost"}',
        footer: '{"cdnEnv": "localhost"}',
        refFooter: '{"cdnEnv": "localhost"}'
	});

    generateTestFile('./test/html/gcintranet/template-gcintranet-fr.html', 'gcintranet', 'gcintranet-preFooter-fr', {
        refTop: '{"cdnEnv": "localhost"}',
        top: '{"cdnEnv": "localhost", "siteMenu": false}',
        preFooter: '{"screenIdentifier": "0123456789", "dateModified": "2020-09-11", "versionIdentifier": "0123456789", "cdnEnv": "localhost"}',
        footer: '{"cdnEnv": "localhost"}',
        refFooter: '{"cdnEnv": "localhost"}'
	});

    generateTestFile('./test/html/gcintranet/template-gcintranet-en.html', 'gcintranet', 'gcintranet-preFooter-pageDetails-en', {
        refTop: '{"cdnEnv": "localhost"}',
        top: '{"cdnEnv": "localhost"}',
        preFooter: '"cdnEnv": "localhost", "pagedetails": false}',
        footer: '{"cdnEnv": "localhost"}',
        refFooter: '{"cdnEnv": "localhost"}'
	});

    generateTestFile('./test/html/gcintranet/template-gcintranet-fr.html', 'gcintranet', 'gcintranet-preFooter-pageDetails-fr', {
        refTop: '{"cdnEnv": "localhost"}',
        top: '{"cdnEnv": "localhost"}',
        preFooter: '"cdnEnv": "localhost", "pagedetails": false}',
        footer: '{"cdnEnv": "localhost"}',
        refFooter: '{"cdnEnv": "localhost"}'
	});

    it('Page details show on page', async () => {
        await pageDetailsExist(theme, 'en');
        await pageDetailsExist_FR(theme, 'fr');
    });

    it('Page details do not show on page', async () => {
        await pageDetailsDoNotExist(theme, 'en');
        await pageDetailsDoNotExist(theme, 'fr');
    });

    it('Page details div does not show', async () => {
        await noPageDetails(theme, 'en');
        await noPageDetails(theme, 'fr');
    });

    it('Accessibility', async () => {
        await accessibility(theme, 'en');
        await accessibility(theme, 'fr');
    });
});

async function feedbackBtnExists(theme, lang){
    await basicPage.open(theme, lang);
    await expect(preFooterPage.feedbackBtn).toExist();
    if (lang == 'en') { await expect(preFooterPage.feedbackBtn).toHaveHrefContaining('https://www.canada.ca/en/report-problem.html'); }
    else {await expect(preFooterPage.feedbackBtn).toHaveHrefContaining('https://www.canada.ca/fr/signaler-probleme.html'); }
}

async function feedbackBtnDoesNotExist(theme, lang){
    await preFooterPage.open(theme, lang);
    await expect(preFooterPage.feedbackBtn).not.toExist();
}

async function shareBtnExists(theme, lang){
    await basicPage.open(theme, lang);
    const shareBtn = await preFooterPage.shareBtn;
    await shareBtn.click();
    await (await preFooterPage.shareModal).waitForExist({timeout: 3000})
    //await expect(preFooterPage.shareModal).toExist();
}

async function shareBtnDoesNotExist(theme, lang){
    await preFooterPage.open(theme, lang);
    await expect(preFooterPage.shareBtn).not.toExist();
}

async function pageDetailsExist(theme){
    await preFooterPage.open(theme, 'en');
    await expect(preFooterPage.screenID).toHaveTextContaining('Screen Identifier:');
    await expect(preFooterPage.screenIDText).toHaveTextContaining('012345678');
    await expect(preFooterPage.dateModified).toHaveTextContaining('Date modified:');  
    await expect(preFooterPage.dateModifiedText).toHaveTextContaining('2020-09-11');
    await expect(preFooterPage.version).toHaveTextContaining('Version:');
    await expect(preFooterPage.versionText).toHaveTextContaining('0123456789');
}

async function pageDetailsExist_FR(theme){
    await preFooterPage.open(theme, 'fr');
    await expect(preFooterPage.screenID).toHaveTextContaining("Identificateur d'écran :");
    await expect(preFooterPage.screenIDText).toHaveTextContaining('012345678');
    await expect(preFooterPage.dateModified).toHaveTextContaining('Date de modification :');
    await expect(preFooterPage.dateModifiedText).toHaveTextContaining('2020-09-11');
    await expect(preFooterPage.version).toHaveTextContaining('Version :');
    await expect(preFooterPage.versionText).toHaveTextContaining('0123456789');
}

async function pageDetailsDoNotExist(theme, lang){
    await basicPage.open(theme, lang);
    await expect(preFooterPage.screenID).not.toExist();
    await expect(preFooterPage.dateModified).not.toExist();
    await expect(preFooterPage.version).not.toExist();
}

async function feedbackBtnCustomUrl(theme, lang){
    await preFooterPage.open(theme, lang, 'modifiedBtn');

    const feedbackBtn = await preFooterPage.feedbackBtn;
    await expect(preFooterPage.feedbackBtn).toHaveHrefContaining('google');
}

async function customShareModal(theme, lang){
    await preFooterPage.open(theme, lang, 'modifiedBtn');

    const shareBtn = await preFooterPage.shareBtn;
    await shareBtn.click();

    await (await preFooterPage.emailBtn).waitForExist({timeout: 3000})
    await expect(preFooterPage.emailBtn).toHaveTextContaining('Email');
    await expect(preFooterPage.facebookBtn).toHaveTextContaining('Facebook');
    await expect(preFooterPage.linkedinBtn).toHaveTextContaining('LinkedIn');
    await expect(preFooterPage.twitterBtn).toHaveTextContaining('Twitter');

}

async function noPageDetails(theme, lang){
    await preFooterPage.open(theme, lang, 'pageDetails');
    await expect(preFooterPage.pageDetails).not.toExist();
}

async function showShareClassDefault(theme, lang){
    await preFooterPage.open(theme, lang, 'modifiedBtn');
    await expect(preFooterPage.shareDiv).toHaveElementClassContaining('col-sm-offset-2');
    await expect(preFooterPage.shareDiv).toHaveElementClassContaining('col-md-offset-4');
    await expect(preFooterPage.shareDiv).toHaveElementClassContaining('col-lg-offset-5');
}

async function showShareClassModified(theme, lang){
    await preFooterPage.open(theme, lang, 'feedbackFalse');
    await expect(preFooterPage.shareDiv).toHaveElementClassContaining('col-sm-offset-8');
    await expect(preFooterPage.shareDiv).toHaveElementClassContaining('col-md-offset-9');
    await expect(preFooterPage.shareDiv).not.toHaveElementClassContaining('col-lg-offset-5');
}

async function accessibility(theme, lang) {
    await preFooterPage.open(theme, lang);
    await runAccessbilityTest();
}
