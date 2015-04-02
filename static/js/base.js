/*!
 * @author:    Divio AG
 * @copyright: http://www.divio.ch
 */

//######################################################################################################################
// #NAMESPACES#
/**
 * @module Cl
 */
var Cl = window.Cl || {};
/* global outdatedBrowser */

//######################################################################################################################
// #BASE#
(function ($) {
    'use strict';

    // shorthand for invoking jQuery(document).ready
    $(function () {
        // removes noscript form body and adds print-js
        if (window.Cl && window.Cl.Utils) {
            Cl.Utils._document();
            // INFO: additionally you will be able to use:
            // Cl.Utils.mobile() for detecting mobile devices
            // Cl.Utils.tablet() for detecting tablet devices
        }

        // DOCS: https://github.com/burocratik/outdated-browser
        if (window.outdatedBrowser) {
            outdatedBrowser({
                'languagePath': '',
                'lowerThan': 'boxShadow'
            });
        }

        // load debugging
        // DOCS: http://finalangel.github.io/classjs-plugins/examples/cl.debug/
        if (window.Cl && window.Cl.Debug) {
            new Cl.Debug();
        }
    });

})(jQuery);
