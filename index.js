let counter = 1;

$(function() {
    $('#buttonAdd').click(function() {
        if ($('#taskName').val() === "")
            alert("Veuillez renseigner un nom de tâche");
        else {
            $('#todo').append("<tr id=\"" + counter + "\"><td>" + $('#taskName').val() + "</td><td class=\"isDone\"><a onclick=\"done(" + counter + ")\" href=\"#\"><button type=\"button\">Fait</button></a></td><td class=\"delete\"><a href=\"#\" onclick=\"removeElement(" + counter + ")\"><button type=\"button\">Supprimer</button></a></td></tr>");
            counter++;
        }
    });
    /*
    $(".save").click(function(){
        console.log("ou");
        $.ajax({
           url : 'save.php',
           type : 'POST', // Le type de la requête HTTP, ici devenu POST
           //data : 'email=' + email + '&contenu=' + contenu_mail, // On fait passer nos variables, exactement comme en GET, au script more_com.php
           dataType : 'html'
        });

    });
    */
});

function removeElement(id) {
    var element = document.getElementById(id);
    element.parentNode.removeChild(element);
}

function done(id) {
    var content = document.getElementById(id);
    $('#done').append("<tr id=\"" + counter + "\"><td>" + content.children[0].innerHTML + "</td><td class=\"delete\"><a onclick=\"removeElement(" + counter + ")\" href=\"#\"><button type=\"button\">Supprimer</button></a></td></tr>");
    counter++;
    removeElement(id);
}
