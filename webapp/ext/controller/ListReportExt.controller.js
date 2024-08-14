sap.ui.define(["sap/m/MessageToast"], function (MessageToast) {
  "use strict";

  return {
    errorLog: function (oEvent) {
      MessageToast.show("Custom handler invoked.");
    },
    onHochladenButtonPress: function () {
      console.log("Hochladen gedrückt");
    }
  };
});
