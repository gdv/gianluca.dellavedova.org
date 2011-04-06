function readRSS(source,target) {
    items = source.getElementsByTagName("item");
    for (i=0;i<items.length;i++) {
        title = items[i].getElementsByTagName("title")[0].innerHTML;
        link = items[i].getElementsByTagName("link")[0].innerHTML;
        target.innerHTML += "<a href='"+link+"'>"+title+"</a>";
    }
