function toggleNotes(item) {
    var x = item.parentNode.children[5];
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function addnewitem(intext) {
    d = document.createElement("div");
    d.id = "item";
    d.innerHTML = '<input type="checkbox" name="is-done" id="is-done">';
    d.innerHTML += '<input type="textbox" id="main-text"  value="' + intext + '"></input>';
    d.innerHTML += '<a onclick="toggleNotes(this)">📝</a>';
    d.innerHTML += '<a onclick="this.parentNode.remove()">❌</a><br>';
    d.innerHTML += '<textarea id="editor" new="true" style="display:none;"></textarea></p>';
    return (d);
}
document.getElementById('item-input').onkeypress = function (e) {
    if (e.keyCode == 13) {
        let newitem = document.getElementById('item-input').value;
        document.getElementById('uncompleted-box').appendChild(addnewitem(newitem));

        //this is to add a rich text editor for note
        $("[new='true'").trumbowyg({
            //  btns: [
            //    ['insertImage'],
            // ],
            autogrow: true,
        });
        $(".trumbowyg-box").css("display", "none");
        $("[new='true']").removeAttr("new");
        $('.trumbowyg-button-pane').remove();

        document.getElementById('item-input').value = "";

    }
}
