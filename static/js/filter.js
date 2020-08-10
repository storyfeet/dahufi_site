
function filter(word){
    let ees = document.getElementsByClassName("dict_item");
    for (p in ees) {
        let e = ees[p];
        console.log(e);
        if (e.innerText?.toLowerCase().includes(word.toLowerCase())) {
            e.style.display = "inline";
        }else {
            if (e.style){
                e.style.display = "none";
            }
        }
    }

}
