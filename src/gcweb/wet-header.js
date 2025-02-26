/* eslint no-use-before-define: "off", block-scoped-var: "off", no-undef: "off", eqeqeq: "off", vars-on-top: "off", no-var: "off", prefer-arrow-callback: "off", object-shorthand: "off", no-eq-null: "off", func-name-matching: "off" */
if (typeof wet == 'undefined') { var wet = {}; } //eslint-disable-line
if (typeof wet.builder == 'undefined') { wet.builder = {}; } //eslint-disable-line

/**
 * @param cdnEnv Used to switch between esdc envrionments and Akamai implementations.
 */
wet.builder.environment = function cdtsWetBuilderEnvironment(cdnEnv) {
    var baseUrl;
    if (cdnEnv === 'esdcqat') {
        baseUrl = 'https://cdn-canada.services.gc.qat/app/cls/WET';
    }
    else if (cdnEnv === 'esdcnonprod') {
        baseUrl = 'https://s2tst-cdn-canada.sade-edap.prv/app/cls/WET';
    }
    else if (cdnEnv === 'esdcprod') {
        baseUrl = 'https://ssl-templates.services.gc.ca/app/cls/WET';
    }
    else if (cdnEnv === 'localhost') {
        baseUrl = '../../../..';
    }
    else if (cdnEnv != null && cdnEnv.startsWith('http')) {
        return cdnEnv; //if starts with http: return as-is
    }
    else {
        baseUrl = 'https://www.canada.ca/etc/designs/canada/cdts';
    }
    return baseUrl + '/gcweb/v4_0_44/';
}
