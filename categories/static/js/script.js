document.querySelector('div#anime_action').onclick = function() {
    alert('Film action');
}

function getString(text, length) {
    if (text.length <= length) {
        return text;
    } else {
        return text.slice(0, length-1) + "...";
    }
}

//Заполнение сетки фильмов
function create_object() {
    let object = document.createElement('figure');
    object.className = "col film_object";
    //img
    let img = document.createElement('img');
    img.src = 'static/data/anime.jfif';
    img.title = 'Похороны Короля Роз';
    img.className = 'poster';
    object.append(img);
    //h2
    let link = document.createElement('a');
    link.className = 'film_link';
    link.href = '../account/main.html';
    let h2 = document.createElement('h2');
    h2.className = 'film_title';
    h2.innerText = getString("Похороны Короля Роз", 14);
    link.append(h2);
    object.append(link);
    //h3
    h3 = document.createElement('h3');
    h3.className = 'film_genres';
    h3.innerText = getString("Сверхестественное, Драма, Экшен", 17);
    object.append(h3);
    return object;
}

function create_row() {
    var row = document.createElement('div');
    row.className = "row";
    for (var i = 0; i < 5; i++) {
        row.append(create_object());
    }
    return row;
}

var main = document.querySelector('div.content');
for (var i = 0; i < 4; i++) {
    main.append(create_row());
}

document.querySelector('div.get_more').onclick = function() {
    for (var i = 0; i < 4; i++) {
        main.append(create_row());
    }
}