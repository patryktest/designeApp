﻿"use strict";

window.MyApp = {};

$(function() {
    MyApp.app = new DevExpress.framework.html.HtmlApplication({
        namespace: MyApp,
        
        defaultLayout: "navbar",
        navigation: [
          {
            title: "Home",
            action: "#home",
            icon: "home"
          },
          {
            title: "About",
            action: "#about",
            icon: "info"
          }
        ]
    });
    MyApp.app.router.register(":view", {view: "home"});
    MyApp.app.navigate();   
});