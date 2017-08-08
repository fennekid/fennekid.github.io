"use strict";

var colorEmbeds = function () {
    document.querySelectorAll(".embed").forEach(function (y) {
        y.style.borderLeftColor = y.dataset.color;
    });
};

document.addEventListener("DOMContentLoaded", colorEmbeds);
