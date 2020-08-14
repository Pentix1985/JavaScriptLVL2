const products = [
    {id: 1, title: 'Notebook', price: 2000, img: 'Notebook.jpg'},
    {id: 2, title: 'Mouse', price: 20, img: 'Mouse.jpeg'},
    {id: 3, title: 'Keyboard', price: 200, img: 'Keyboard.jpg'},
    {id: 4, title: 'Gamepad', price: 50, img: 'Gamepad.jpg'},
];
//Функция для формирования верстки каждого товара
const renderProduct = (({title = 'Имя товара не задано!', price = 'Цена не задана!', img = 'Нет изображения!'}) => {
    return `<div class="product-item">
                <h3>${title}</h3>
                <img src="img/${img}" alt="${title}" width = '138' height = '100'>
                <p>Цена: ${price}р.</p>
                <button class="buy-btn">Купить</button>
            </div>`
});
const renderPage = list => {
    // productsList это массив, элементы которого отделены друг от друга запятыми, чтобы их убрать нужно использовать метод join
    const productsList = list.map(item => renderProduct(item)).join(' ');
    console.log(productsList);
    document.querySelector('.products').innerHTML = productsList;
};

renderPage(products);