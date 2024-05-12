const btn = document.getElementById('load-btn');
const result = document.getElementById('result');

// btn.addEventListener('click', () => {
//     const xhr = new XMLHttpRequest;
//     xhr.open('GET', 'friends.json');
//     xhr.responseType = 'json'; // получить данные в формате json
//     xhr.send();

//     xhr.addEventListener('load', () => {
//         if (xhr.status >= 400) {
//             console.log('Something went wrong');
//             result.textContent = 'Something went wrong';
//         } else {    
//             result.innerHTML = '';
//             const friends = xhr.response; // мы указали тип получаемых данных в формате json, поэтому JSON.parse() не нужен
//             console.log(friends);
//             friends.forEach((friend) => {
//                 result.innerHTML += friend.name;
//                 result.innerHTML += friend.lastname;
//             })
//         }   
//     })
// })

// Функция fetch() возвращает объект Promise, который получает ответ после завершения запроса к сетевому ресурсу
// fetch('friends.json') в функцию fetch передам путь к файлу, содержимое которого хотим получить
// Своим результатом fetch возвращает промис
// Ответ сервера находится в объекте Response, который мы получаем в переменную response когда промис разрешится 
btn.addEventListener('click', () => {
    fetch('friends.json')
    .then((response) => {
        if(response.status >= 400) {
            return Promise.rejected();
        } else {
            return response.json();
        }
    })
    .then ((friends)=> {
        friends.forEach((friend) => {
            let item = document.createElement('li');
            item.append(`${friend.name} ${friend.lastName}`);
            result.append(item);
        })
    })
    .catch(()=> console.error('Ошибка получения данных'));
});