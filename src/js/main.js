 // Code to populate the navbar menu
 var introSubMenu = document.getElementById('introductionSubmenu');
 var storSubMenu = document.getElementById('storiesSubMenu');
 var proSubMenu = document.getElementById('processSubMenu');
 var mapSubMenu = document.getElementById('mappingSubMenu');
 
 function makeList(list, arrayTitles, arrayLinks) {

         for (var i = 0; i < arrayTitles.length; i++) {
             // Create the list item:
             var item = document.createElement('li');
             // Create the a item:
             var itemA = document.createElement('a');
             // Connect a to li
             item.appendChild(itemA);
             // Set its contents:
             itemA.appendChild(document.createTextNode(arrayTitles[i]));
             // Set the link
             itemA.setAttribute("href", arrayLinks[i]);
             // Add it to the list:
             list.appendChild(item);
         }
     }

 // Add the contents
 makeList(introSubMenu, menuItemsIntro[0], menuItemsIntro[1]);
 makeList(storSubMenu, menuItemsStories[0], menuItemsStories[1]);
 makeList(proSubMenu, menuItemsProcess[0], menuItemsProcess[1]);
 makeList(mapSubMenu, menuItemsStoryMapping[0], menuItemsStoryMapping[1]);

 // Toggle showing the navbar
 $(document).ready(function () {

     $('#sidebarCollapse').on('click', function () {
         $('#sidebar').toggleClass('active');
     });

 });