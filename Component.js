sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/odata/v2/ODataModel",
	"sapTwitter/util/Formatter",
	"sap/m/MessageBox"
],
function(
	UIComponent,
	JSONModel,
	ODataModel,
	Formatter,
	MessageBox
) {
	"use strict";

// goDataModel.read("/BW_MTV_PORTAL_RATE(ICalmonth=201704,IEmployee=00000000)", {success: function () {debugger;}, error: function () {debugger;}})
	return UIComponent.extend("sapTwitter.Component", {
		metadata: {
			manifest: "json"
		},
		init: function () {
			// Отключаем кэш, чтобы не было ошибки, связанной с отсутствием файла Component-changes.json
			sap.ui.fl.Cache.setActive(false);

			// Объявляем одата модели
			var oComponent = this;
			var oResourceBundle = oComponent.getModel("i18n").getResourceBundle();
			window.goController = {};
			document.title = oResourceBundle.getText("appTitle");
			var oComponent = window.goComponent = this;
			var oGlobalModel = window.goGlobalModel = new JSONModel({

			});
			oComponent.setModel(oGlobalModel, "globalModel");
			
			UIComponent.prototype.init.apply(this, arguments);
			oComponent.getRouter().initialize();
		}
	});
});

window.convertCMYKtoRGB = function (sCMYK) {
	// принимает строку вида 11 22 33 44
	var aCMYK = sCMYK.split(" ");
	var c = aCMYK[0], m = aCMYK[1], y = aCMYK[2], k = aCMYK[3];
	c /= 100; m /= 100; y /= 100; k /= 100;
	var r, g, b;
	r = Math.min(255, Math.ceil(255 * (1 - c) * (1 - k)));
	g = Math.min(255, Math.ceil(255 * (1 - m) * (1 - k)));
	b = Math.min(255, Math.ceil(255 * (1 - y) * (1 - k)));
	return "rgb(" + r + ", " + g + ", " + b + ");";
}