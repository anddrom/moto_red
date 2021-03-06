"use strict";

function openTab(evt, selected) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");

        var tabParent = tablinks[i].parentNode;
        if(tabParent && tabParent.tagName == 'LI') {
            tabParent.className = tabParent.className.replace(" activeTab", "");
        }
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(selected).style.display = "block";
    evt.currentTarget.className += " active";

    var listParent = evt.currentTarget.parentNode;
    if(listParent && listParent.tagName == 'LI') {
        listParent.className += " activeTab";
    }
}

function openSubTab(evt, selected) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tab-subcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tab-sublinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(selected).style.display = "block";
    evt.currentTarget.className += " active";
}

if (document.getElementById("defaultTab")) {
    document.getElementById("defaultTab").click();
}

if (document.getElementById("defaultSubTab")) {
    document.getElementById("defaultSubTab").click();
}

function openSideNav() {
    document.getElementById("mt_sidenav").style.width = "150px";
    document.getElementById("home").style.marginLeft = "150px";
    // document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeSideNav() {
    document.getElementById("mt_sidenav").style.width = "0";
    document.getElementById("home").style.marginLeft= "0";
    // document.body.style.backgroundColor = "white";
}

function tableSearch(index) {
    // Declare variables 
    var input, filter, table, tr, td, i;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("searchTable");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[index];
        if (td) {
            if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

function checkOpponent(evt) {
    var elWrap, elements;

    elWrap = document.getElementById("contest_opponent");
    elements = elWrap.getElementsByClassName("btn-normal");

    for (var i = 0; i < elements.length; i ++) {
        elements[i].className = elements[i].className.replace(" active", "");
    }

    evt.currentTarget.className += " active";
}

if (document.getElementById("defaultOpponent")) {
    document.getElementById("defaultOpponent").click();
}

function checkType(evt) {
    var elWrap, elements;

    elWrap = document.getElementById("contest_type");
    elements = elWrap.getElementsByClassName("btn-normal");

    for (var i = 0; i < elements.length; i ++) {
        elements[i].className = elements[i].className.replace(" active", "");
    }

    evt.currentTarget.className += " active";
}

if (document.getElementById("defaultType")) {
    document.getElementById("defaultType").click();
}

