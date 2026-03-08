sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment",
    "sap/m/MessageToast"
], function (Controller, Fragment, MessageToast) {
    "use strict";

    return Controller.extend("sap.ui.demo.timesheet.controller.Timesheet", {
        onInit: function () {
            // Controller initialization logic
        },

        onOpenSelectActivities: function () {
            var oView = this.getView();

            if (!this._pSelectActivitiesDialog) {
                this._pSelectActivitiesDialog = Fragment.load({
                    id: oView.getId(),
                    name: "sap.ui.demo.timesheet.view.SelectActivities",
                    controller: this
                }).then(function (oDialog) {
                    oView.addDependent(oDialog);
                    return oDialog;
                });
            }

            this._pSelectActivitiesDialog.then(function (oDialog) {
                oDialog.open();
            });
        },

        onCloseDialog: function () {
            if (this._pSelectActivitiesDialog) {
                this._pSelectActivitiesDialog.then(function(oDialog){
                    oDialog.close();
                });
            }
        },

        onAddActivities: function () {
            MessageToast.show("Activities added to Timesheet");
            this.onCloseDialog();
        },

        onDeleteRow: function() {
            MessageToast.show("Row deleted");
        },

        onExpandAll: function() {
            var oTree = this.byId("activitiesTree");
            oTree.expandToLevel(99);
        },

        onCollapseAll: function() {
            var oTree = this.byId("activitiesTree");
            oTree.collapseAll();
        }
    });
});