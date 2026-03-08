sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function (Controller, MessageToast) {
    "use strict";

    return Controller.extend("sap.ui.demo.timesheet.controller.Monthly", {
        onInit: function () {
            // Controller initialization logic
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.getRoute("monthly").attachPatternMatched(this._onObjectMatched, this);
        },

        _onObjectMatched: function (oEvent) {
            // Update models or logic when returning to Monthly Overview
        },

        onNavToTimesheet: function () {
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("timesheet");
        },

        onNavToMonthly: function () {
            // Already here, but just in case
        }
    });
});