const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpackMerge = require("webpack-merge");
const path = require('path');
/**
 *  Single-spa will not load scripts from angular.json that must be included in index.html but it will loads styles.
 *  So, written this function to copy external js what application used into dist/assets/externalJs folder by copy-webpack-plugin
 *  and load them by <script> tab in index.html.
 */
function loadExternalJs () {
    const externalJs = [
        { file: "node_modules/jquery/dist/jquery.min.js", to: "jquery" },
        { file: "node_modules/tooltipster/dist/js/tooltipster.bundle.min.js", to: "tooltipster" },
        {
            file: "node_modules/bootstrap/dist/js/bootstrap.min.js",
            to: "bootstrap"
        },
        {
            file: "node_modules/hashmap/hashmap.js",
            to: "hashmap"
        },
        {
            file: "node_modules/tableexport.jquery.plugin/tableExport.min.js",
            to: "tableexport"
        },
        {
            file: "node_modules/tableexport.jquery.plugin/libs/FileSaver/FileSaver.min.js",
            to: "tableexport"
        },
        {
            file: "node_modules/tableexport.jquery.plugin/libs/js-xlsx/xlsx.core.min.js",
            to: "tableexport"
        },
        {
            file: "node_modules/tableexport.jquery.plugin/libs/jsPDF/jspdf.min.js",
            to: "tableexport"
        },
        {
            file: "node_modules/tableexport.jquery.plugin/libs/jsPDF-AutoTable/jspdf.plugin.autotable.js",
            to: "tableexport"
        },
        {
            file: "node_modules/tableexport.jquery.plugin/libs/es6-promise/es6-promise.auto.min.js",
            to: "tableexport"
        },
        {
            file: "node_modules/tableexport.jquery.plugin/libs/html2canvas/html2canvas.min.js",
            to: "tableexport"
        },
        {
            file: "node_modules/bootstrap-table/dist/bootstrap-table.min.js",
            to: "bootstrap-table"
        },
        {
            file: "node_modules/bootstrap-table/dist/extensions/export/bootstrap-table-export.min.js",
            to: "bootstrap-table"
        },
        {
            file: "node_modules/bootstrap-table/dist/extensions/print/bootstrap-table-print.min.js",
            to: "bootstrap-table"
        },
        {
            file: "node_modules/bootstrap-switch/dist/js/bootstrap-switch.min.js",
            to: "bootstrap-switch"
        },
        {
            file: "node_modules/bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js",
            to: "bootstrap-datepicker"
        },
        {
            file: "node_modules/moment/min/moment.min.js",
            to: "moment"
        },
        {
            file: "node_modules/eonasdan-bootstrap-datetimepicker-npm/build/js/bootstrap-datetimepicker.min.js",
            to: "bootstrap-datetimepicker"
        },
        {
            file: "node_modules/bootstrap-select/dist/js/bootstrap-select.min.js",
            to: "bootstrap-select"
        },
        {
            file: "node_modules/bootstrap-show-password/dist/bootstrap-show-password.min.js",
            to: "bootstrap-show-password"
        },
        {
            file: "node_modules/intl-tel-input/build/js/intlTelInput.min.js",
            to: "intl-tel-input"
        },
        {
            file: "node_modules/intl-tel-input/build/js/utils.js",
            to: "intl-tel-input"
        },
        {
            file: "node_modules/dropzone/dist/dropzone.js",
            to: "dropzone"
        },
        {
            file: "node_modules/froala-editor/js/froala_editor.pkgd.min.js",
            to: "froala-editor"
        }
    ];
    let jsonArray = new Array();
    for (let i = 0; i < externalJs.length; i++) {
        jsonArray.push({
            from: externalJs[i].file,
            to: 'assets/externalJs/' + externalJs[i].to,
            toType: 'dir'
        });
    }
    return jsonArray;
};

const webpackConfig = {
    output: {
        path: path.resolve(__dirname, 'dist/Common-UI-SDK')
    },
    plugins: [
        new CopyWebpackPlugin(loadExternalJs())
    ]
};

module.exports = (config, options) => {
    debugger;
    const mergedConfig = webpackMerge.smart(config, webpackConfig);
    return mergedConfig;
};