sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
], function (Controller, MessageToast) {
    "use strict";

    return Controller.extend("sap.ui.demo.timesheet.controller.Empty", {
        onInit: function () {
            // Controller initialization logic
        },

        onNavBack: function () {
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("timesheet");
        },

        onAddActivity: function () {
            MessageToast.show("Add Activity clicked");
        },

        onCopyLastWeek: function () {
            MessageToast.show("Copy Last Week clicked");
        },

        onBrowseTemplates: function () {
            MessageToast.show("Browse Templates clicked");
        }
    });
});