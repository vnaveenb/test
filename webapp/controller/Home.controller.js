sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function (Controller, MessageToast) {
    "use strict";

    return Controller.extend("sap.ui.demo.timesheet.controller.Home", {
        onInit: function () {
            // Controller initialization logic
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.getRoute("home").attachPatternMatched(this._onObjectMatched, this);
        },

        _onObjectMatched: function (oEvent) {
            // Update models or logic when returning to Home
        },

        onNavToTimesheet: function () {
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("timesheet");
        },

        onActionPress: function (oEvent) {
            var sText = oEvent.getSource().getItems()[1].getText(); // Get Title text from VBox
            MessageToast.show(sText + " clicked");
        }
    });
});