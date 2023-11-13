"use strict";

(function() {

    window.addEventListener("load", init);

    /**
     * the function that runs when the page loads; adds event listener to buttons as needed
     */
    function init() {
        id("submit-btn").addEventListener("click", handleFormSubmission);
        id("clear-btn").addEventListener("click", handleFormClearing);
    }

    function handleFormSubmission() {
        console.log("submitted!");
        location.href = "output.html";
    }

    function handleFormClearing() {
        console.log("cleared!");
    }


    /**
     * a helper function to make returning an element based on id easier and faster
     * @param {string} idName - the id of the element to be located
     * @returns {Element} with id idName
     */
    function id(idName) {
        return document.getElementById(idName);
    }

    /**
     * a helper function to make creating an element easier and faster
     * @param {string} tagName - the name of the element to create
     * @returns {Element} of type tagName
     */
    function gen(tagName) {
        return document.createElement(tagName);
    }

})();