sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function (Controller, MessageToast) {
    "use strict";

    return Controller.extend("sap.ui.demo.timesheet.controller.Timesheet", {
        onInit: function () {
            // Controller initialization logic
        },

        onAddRow: function () {
            MessageToast.show("Add Row clicked");
        },

        onCopyWeek: function () {
            MessageToast.show("Copy Week clicked");
        },

        onGoToEmpty: function () {
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("empty");
        }
    });
});