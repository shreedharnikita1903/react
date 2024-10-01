﻿/**
 * Downloads a binary file with the given name and data using the browser interface.
 *
 * @method downloadFile
 * @member CKEDITOR.plugins.exportpdf
 * @param {String} fileName
 * @param {String} data
 */

/**
 * Export to PDF plugin namespace exposing helpers used by the plugin.
 *
 * @class CKEDITOR.plugins.exportpdf
 * @singleton
 */

/**
 * @fileOverview Plugin definition for the Export to PDF feature, which provides a button
 * to export the editor's data to PDF.
 */

/**
 * Event fired when executing the `exportPdf` command that allows for additional data manipulation.
 * With this event, the raw HTML content of the editor which will be sent to the HTML to PDF converter service
 * can be altered or modified. It also allows to modify CSS rules and conversion options.
 *
 * It is possible by adding listeners with the different priorities:
 *
 *	* 1-14: The data is available in the original string format.
 *	* 15: The data is processed by the plugin.
 *	* 16-19: The data that will be sent to the endpoint can be modified.
 *	* 20: The data is sent to the endpoint.
 *
 * Read more in the {@glink features/exporttopdf#data-preprocessing documentation}.
 *
 * @event exportPdf
 * @member CKEDITOR.editor
 * @param {CKEDITOR.editor} editor This editor instance.
 * @param {Object} data The data that is about to be sent to the endpoint.
 * @param {String} data.html
 * @param {String} data.css
 * @param {Object} data.options
 */

/**
 * Specifies paths to custom CSS stylesheets that will be attached to the document
 * sent to the HTML to PDF converter service. This allows adding additional styling to the generated PDF file.
 *
 * Relative stylesheet paths are converted to absolute ones, so all resources must be accessible
 * globally to allow the HTML to PDF converter service to fetch them. If this option is used, the default
 * styles are not sent (in case of classic editor).
 *
 * Read more in the {@glink features/exporttopdf#custom-css-rules documentation}.
 *
 * @cfg {Array} [exportPdf_stylesheets=[]]
 * @member CKEDITOR.config
 */

/**
 * Specifies the name for files generated by the Export to PDF plugin. It can define a fixed name or can be configured
 * as a function that will be evaluated right before saving the file, for example:
 *
 * 		// The file name will be set to the value of the first '<h1>' element in the editor:
 * 		config.exportPdf_fileName = function( editor ) {
 * 			return editor.editable().findOne( 'h1' ).getText() + '.pdf';
 * 		}
 *
 * Read more in the {@glink features/exporttopdf#setting-dynamic-file-name documentation}.
 *
 * @cfg {String/Function} [exportPdf_fileName='ckeditor4-export-pdf.pdf']
 * @member CKEDITOR.config
 */

/**
 * The configuration of the HTML to PDF converter service.
 * Refer to the ['Export to PDF' endpoint documentation](https://pdf-converter.cke-cs.com/docs) for more details.
 *
 * Read more in the {@glink features/exporttopdf#output-file-configuration documentation}.
 *
 * @cfg {Object} [exportPdf_options={}]
 * @member CKEDITOR.config
 */

/**
 * The default URL of the HTML to PDF converter service used by the Export to PDF plugin.
 *
 * @cfg {String} [exportPdf_service='https://pdf-converter.cke-cs.com/v1/convert']
 * @member CKEDITOR.config
 */
