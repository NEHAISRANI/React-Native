/**
 * This function is used for like image
 * add color in icon-${id} and remove color from unlick-icon-${id}
 */
function like (id) {
    let findElement = document.getElementById(`icon-${id}`);
    findElement.style.color = 'blue';

    let findEle = document.getElementById(`unlick-icon-${id}`);
    findEle.style.color = '';

    // TO DO -> Do Another thing 
}

/**
 * This function is used for unlike image
 * add color in unlick-icon-${id} and remove color from icon-${id}
 */
function unlike (id) {
    let findElement = document.getElementById(`unlick-icon-${id}`);
    findElement.style.color = 'red';

    let findEle = document.getElementById(`icon-${id}`);
    findEle.style.color = '';
    
    // TO DO -> Do Another thing 
}

/**
 * Create a element and append it to a <div> element with id #app:
 * This function is creating html element and rendering to html dom
 * */

function renderData() {
    var data = [
        {
            "img": "img/artwork_1.png",
            "title": "Title"
        },
        {
            "img": "img/artwork_2.png",
            "title": "Title"
        },
        {
            "img": "img/artwork_3.png",
            "title": "Title"
        },
        {
            "img": "img/artwork_4.png",
            "title": "Title"
        },
        {
            "img": "img/artwork_5.png",
            "title": "Title"
        },
        {
            "img": "img/artwork_6.png",
            "title": "Title"
        },
        {
            "img": "img/artwork_7.png",
            "title": "Title"
        },
        {
            "img": "img/artwork_8.png",
            "title": "Title"
        },
        {
            "img": "img/artwork_9.png",
            "title": "Title"
        },
        {
            "img": "img/artwork_10.png",
            "title": "Title"
        }
    ];
    for (let index = 0; index < data.length; index++) {
        const element = data[index];
        let elem = document.createElement('li');
        let div = elem.appendChild(document.createElement('div'));
        div.classList.add('brand'); 

        let img = div.appendChild(document.createElement('img'))
        img.classList.add('brand_img');
        img.setAttribute('src', element.img); 
        img.setAttribute('alt', '');

        let title = div.appendChild(document.createElement('div'));
        title.classList.add('title');
        title.appendChild(document.createTextNode(element.title));

        let iconDiv = div.appendChild(document.createElement('div'));
        let btnClasses = ['btn', 'btn-icon']; iconDiv.classList.add(...btnClasses);
        let iElem = iconDiv.appendChild(document.createElement('i'));
        let classesToAdd = [ 'fa', 'fa-thumbs-up' ];
        iElem.setAttribute('id', `icon-${index}`);
        iElem.setAttribute('onclick', `like(${index})`);
        iElem.classList.add(...classesToAdd); 

        let i2Elem = iconDiv.appendChild(document.createElement('i')); 
        let classesToAdd1 = [ 'fa', 'fa-thumbs-down' ];
        i2Elem.setAttribute('id', `unlick-icon-${index}`);
        i2Elem.setAttribute('onclick', `unlike(${index})`);
        i2Elem.classList.add(...classesToAdd1);

        document.getElementById("app").appendChild(elem);
    }
}
 
renderData();