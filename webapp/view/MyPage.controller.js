sap.ui.define([
	"sapTwitter/view/BaseController",
	"sapTwitter/util/DataAccess",
	"sap/m/MessageBox"
], function(
	Controller,
	DataAccess,
	MessageBox
) {
	"use strict";
	var oController = Controller.extend("sapTwitter.view.MyPage", {
		onInit: function () {
			window.goController.MyPage = this;
			this.getOwnerComponent().getRouter().getRoute("home").attachMatched(this.onRouteMatched, this);
		},
		onRouteMatched: function (oEvent) {
			var oComponent = this.getOwnerComponent();
			var oModel = oComponent.getModel("globalModel");
			var oController = this;
			this.oUrlParameters = $.extend(true, {}, oEvent.getParameter("arguments")) || {};
		},
		onAnyRouteMatched: function (oEvent) {
			
		},
		onPress: function (oEvent) {
			$.ajax({
				url: "http://api.twitter.com",
				success: function () {
					console.log("success", arguments);
				},
				error: function () {
					console.log("error", arguments);
				}
			});
		}
	});
return oController;
});