function loadLinks(){
    linkTags=[]
    for(i=0;i<data.length;i++){
        f = data[i]["link"].split('/');
        f = f[f.length -1]
        linkTags.push("<a href='"+data[i]['link']+"'>"+f+"</a>");
    }
    return linkTags
}

console.log(loadLinks());