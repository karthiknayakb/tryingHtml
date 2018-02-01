function loadLinks(){
    linkTags=[]
    for(i=0;i<data.length;i++){
        f = data[i]["link"].split('/');
        f = f[f.length -1]
        linkTags.push("<a href='"+data[i]['link']+"'>"+f+"</a>");
    }
    return linkTags
}

links = loadLinks().sort()
for(i=0;i<links.length;i++){
	console.log("infor")
	$("#details").append("<li>"+links[i]+"</li>")	
}
