/*вторая страница делает одно слово дргого цвета*/
const textElement = document.querySelector('.t1-c2');
textElement.innerHTML = textElement.innerHTML.replace(/\brange\b/g, '<span style="color: #FE5B00;">range</span>');


document.getElementById('search-button').addEventListener('click', function() {
 const query = document.getElementById('search-input').value.toLowerCase(); // Получаем текст из поля ввода
 const bodyText = document.body.innerText.toLowerCase(); // Получаем весь текст на странице

 if (query && bodyText.includes(query)) {
   alert('Результаты найдены!');
   // Можно добавить функционал для подсветки найденных слов, если нужно
 } else {
   alert('Ничего не найдено.');
 }
});