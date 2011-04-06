var loadRSSFeeds, getRSSFeeds;
var rssData;

getRSSFeeds = function() {
  if (( rssData.readyState === 4 ) || ( rssData.readyState === "complete" )) {

   div = (( document.getElementById ) ? document.getElementById("content") : document.all.content ); 

   feeds = rssData.responseXML.getElementsByTagName("rss")[0]; // Specifying the root element

   tnodes = ""; // Will be used to display our feeds

      for ( var x = 0; x < 2; x++ ) { // incrementing variable x by two, were "two" is the number <title> element's inside the feeds.

      tnodes += "<h2>" + feeds.getElementsByTagName("title")[x].childNodes[0].nodeValue + "</h2>\n"; // Getting all the titles in the feeds, using the getElementsByTagName method.

      tnodes += "<div>" + feeds.getElementsByTagName("description")[x].childNodes[0].nodeValue + "<br />\n"; // Now grabs the content for each title's

     tnodes += String( "Visit the link for title" + ( x + 1 )).link( feeds.getElementsByTagName("link")[x].childNodes[0].nodeValue ); // Sends out the links available on this feeds.

      tnodes += "</div>\n"; 
      } div.innerHTML = tnodes; 
   }
};

loadRSSFeeds = function( url ) {
rssData = null;
   if ( window.XMLHttpRequest ) { // Creates XMLHttpRequest object for IE7+, OP, ff etc.
         rssData = new XMLHttpRequest();
   } else if ( window.ActiveXObject ) {
      try { // Works well in IE Browser's
          rssData = new ActiveXObject("Microsoft.XMLHTTP");
      } catch( e ) {
          rssData = new ActiveXObject("Msxml2.XMLHTTP");
      }
   }
   if ( rssData !== null ) { // Initiating function reference ( getRSSFeeds )
      rssData.onreadystatechange = getRSSFeeds; 
      rssData.open("GET", url, true);
 // sending out request
      rssData.send( null );
   } else {
      alert("\nYour browser does not support AJAX Request!"); 
   }
};
