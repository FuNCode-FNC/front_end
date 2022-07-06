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
    let h2 = document.createElement('p');
    h2.className = 'film_title';
    h2.innerText = getString("Похороны Короля Роз", 13);
    link.append(h2);
    object.append(link);
    //h3
    h3 = document.createElement('p');
    h3.className = 'film_genres';
    h3.innerText = getString("Сверхестественное, Драма, Экшен", 17);
    object.append(h3);
    return object;
}
function add_arrow() {
    let img = document.createElement('img');
    img.className = "arrow"
    img.src = 'static/img/arrow_white.png';
    img.title = 'Arrow';
    return img;
}

var main = document.querySelector('div.to_watch');
for (var i = 0; i < 4; i++) {
    main.append(create_object());
}
main.append(add_arrow());
var main = document.querySelector('div.favourites');
for (var i = 0; i < 4; i++) {
    main.append(create_object());
}
main.append(add_arrow());

var main = document.querySelector('div.watched');
for (var i = 0; i < 4; i++) {
    main.append(create_object());
}
main.append(add_arrow());