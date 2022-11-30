const fileinpt = document.querySelector("input"),
downloadbtn = document.querySelector("button");

downloadbtn.addEventListener('click', (e) => {
    e.preventDefault();
    downloadbtn.innerHTML = "Downloading....."
    fetchFile(fileinpt.value);
})

function fetchFile(url){
    fetch(url)
    .then(res => res.blob())
    .then(file => {
        let tempURL = URL.createObjectURL(file);
        let aTag = document.createElement("a");
        aTag.href = tempURL;
        aTag.download = url.replace(/^.*[\\\/]/, '');
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
        URL.revokeObjectURL(tempURL);
        downloadbtn.innerHTML = "Download";
    }).catch(() => {
        downloadbtn.innerHTML = "Download";
        alert("Failed to Download!!");
    })
}