//БЛОК КЛАСС и производная база данных ОБЪЕКТОВ

const autoDB = []; //База данных автомобилей
const rateUsdByn = 2.53 //курс доллар - бел.руб
let i; //индекс для расчетов

//класс авто
class Auto{
	constructor( //основные параметры
		brand,
		model,
		costUsd,
		engine,
		engineVolume,
		){
        this.brand = brand; //бренд
        this.model = model; //модель
		this.costUsd = costUsd + ' $'; //стоимость в USD
		this.costByn = this.#usdToByn(costUsd) + ' бел.руб.'; //стоимость в BYN
        this.engine = engine; //тип двигателя
		this.engineVolume = engineVolume; //объем двигателя
		this.#electro(); //проверка на электромобиль
	};

    // метод счета курса валют с USD на бел.руб.
	#usdToByn(usd){return Math.round(usd * rateUsdByn)};
	
    //если электромобиль, то и объем двигателя не нужен
    #electro(){
		this.engine == 'электро' ? delete this.engineVolume : false;
	};
};

//Добавляем новый объект
autoDB.push(new Auto(
	'Ford', 
	'Mustang', 
	60000,
	'бензин',
	'4.7',
	));
//опциональные свойства
i = 0; //нач.значение индекса
autoDB[i].color = "Синий"; 
autoDB[i].body = "Купе"; 
autoDB[i].image = `<img src='./imageDB/000${i}.jpg'>`;

//Добавляем новый объект
autoDB.push(new Auto(
	'Ford', 
	'Mustang Mach-E', 
	67000,
	'электро',
	false,
	));
//опциональные свойства
i++; //автосмена значения индекса
autoDB[i].range = 450 + ' км';
autoDB[i].color = "Красный";
autoDB[i].body = "Внедорожник 5 дв";
autoDB[i].image = `<img src='./imageDB/000${i}.jpg'>`;

//Добавляем новый объект
autoDB.push(new Auto(
	'Ford', 
	'Mustang', 
	73950,
	'бензин',
	'5.0',
	));
//опциональные свойства
i++;
autoDB[i].color = "Белый"; 
autoDB[i].body = "Купе"; 
autoDB[i].image = `<img src='./imageDB/000${i}.jpg'>`;

//Добавляем новый объект
autoDB.push(new Auto(
	'Dodge', 
	'Challenger', 
	45000,
	'бензин',
	'3.6',
	));
//опциональные свойства
i++;
autoDB[i].color = "Gold Rush"; 
autoDB[i].body = "Купе"; 
autoDB[i].image = `<img src='./imageDB/000${i}.jpg'>`;

//Добавляем новый объект
autoDB.push(new Auto(
	'Chevrolet', 
	'Camaro', 
	25500,
	'бензин',
	'2.0',
	));
//опциональные свойства
i++;
autoDB[i].color = "Красный"; 
autoDB[i].body = "Купе"; 
autoDB[i].image = `<img src='./imageDB/000${i}.jpg'>`;

//Добавляем новый объект
autoDB.push(new Auto(
	'Hummer', 
	'H2', 
	50000,
	'бензин',
	'6.0',
	));
//опциональные свойства
i++;
autoDB[i].color = "Белый"; 
autoDB[i].body = "Лимузин"; 
autoDB[i].image = `<img src='./imageDB/000${i}.jpg'>`;

//Добавляем новый объект
autoDB.push(new Auto(
	'BMW', 
	'X4M', 
	93000,
	'бензин',
	'3.0',
	));
//опциональные свойства
i++;
autoDB[i].color = "Красный"; 
autoDB[i].body = "Внедорожник 5 дв"; 
autoDB[i].image = `<img src='./imageDB/000${i}.jpg'>`;

//Добавляем новый объект
autoDB.push(new Auto(
	'Mercedes-Benz', 
	'G-Класс AMG', 
	140000,
	'бензин',
	'5.5',
	));
//опциональные свойства
i++;
autoDB[i].color = "Черный"; 
autoDB[i].body = "Внедорожник 5 дв"; 
autoDB[i].image = `<img src='./imageDB/000${i}.jpg'>`;

//Добавляем новый объект
autoDB.push(new Auto(
	'Lamborghini', 
	'Urus', 
	360000,
	'бензин',
	'4.0',
	));
//опциональные свойства
i++;
autoDB[i].color = "Синий"; 
autoDB[i].body = "Внедорожник 5 дв"; 
autoDB[i].image = `<img src='./imageDB/000${i}.jpg'>`;

//Добавляем новый объект
autoDB.push(new Auto(
	'Dodge', 
	'Ram', 
	190000,
	'бензин',
	'6.2',
	));
//опциональные свойства
i++;
autoDB[i].color = "Оранжевый"; 
autoDB[i].body = "Пикап"; 
autoDB[i].image = `<img src='./imageDB/000${i}.jpg'>`;

//Добавляем новый объект
autoDB.push(new Auto(
	'Land Rover', 
	'Defender', 
	138000,
	'бензин',
	'3.0',
	));
//опциональные свойства
i++;
autoDB[i].color = "Черный"; 
autoDB[i].body = "Внедорожник 5 дв"; 
autoDB[i].image = `<img src='./imageDB/000${i}.jpg'>`;

//Добавляем новый объект
autoDB.push(new Auto(
	'Tesla', 
	'Model X', 
	123980,
	'бензин',
	'3.0',
	));
//опциональные свойства
i++;
autoDB[i].color = "Красный"; 
autoDB[i].body = "Купе"; 
autoDB[i].image = `<img src='./imageDB/000${i}.jpg'>`;

//Добавляем новый объект
autoDB.push(new Auto(
	'Jaguar', 
	'F-Type', 
	125000,
	'электро',
	false,
	));
//опциональные свойства
i++;
autoDB[i].color = "Красный"; 
autoDB[i].body = "Внедорожник 5 дв"; 
autoDB[i].image = `<img src='./imageDB/000${i}.jpg'>`;

//Добавляем новый объект
autoDB.push(new Auto(
	'Audi', 
	'RS Q8', 
	265000,
	'бензин',
	'4.0',
	));
//опциональные свойства
i++;
autoDB[i].color = "Серый"; 
autoDB[i].body = "Внедорожник 5 дв"; 
autoDB[i].image = `<img src='./imageDB/000${i}.jpg'>`;

//Добавляем новый объект
autoDB.push(new Auto(
	'Porsche', 
	'Panamera 970', 
	54000,
	'бензин',
	'3.0',
	));
//опциональные свойства
i++;
autoDB[i].color = "Коричневый"; 
autoDB[i].body = "Лифтбек"; 
autoDB[i].image = `<img src='./imageDB/000${i}.jpg'>`;

//Добавляем новый объект
autoDB.push(new Auto(
	'Cadillac', 
	'Escalade V', 
	222603,
	'бензин',
	'6.2',
	));
//опциональные свойства
i++;
autoDB[i].color = "Черный"; 
autoDB[i].body = "Внедорожник 5 дв"; 
autoDB[i].image = `<img src='./imageDB/000${i}.jpg'>`;

//Добавляем новый объект
autoDB.push(new Auto(
	'Bentley', 
	'Continental GT II', 
	219000,
	'бензин',
	'6.0',
	));
//опциональные свойства
i++;
autoDB[i].color = "Зеленый";
autoDB[i].body = "Купе";
autoDB[i].image = `<img src='./imageDB/000${i}.jpg'>`;

//Добавляем новый объект
autoDB.push(new Auto(
	'Mercedes-Benz', 
	'V-Класс W447', 
	200000,
	'дизель',
	'2.0',
	));
//опциональные свойства
i++;
autoDB[i].color = "Зеленый";
autoDB[i].body = "Купе";
autoDB[i].image = `<img src='./imageDB/000${i}.jpg'>`;

//Добавляем новый объект
autoDB.push(new Auto(
	'Porsche', 
	'911', 
	169500,
	'бензин',
	'3.0',
	));
//опциональные свойства
i++;
autoDB[i].color = "Зеленый";
autoDB[i].body = "Купе";
autoDB[i].image = `<img src='./imageDB/000${i}.jpg'>`;

//Добавляем новый объект
autoDB.push(new Auto(
	'Land Rover',
	'Range Rover IV',
	164900,
	'дизель',
	'4.4',
	));
//опциональные свойства
i++;
autoDB[i].color = "Черный";
autoDB[i].body = "Внедорожник 5 дв";
autoDB[i].image = `<img src='./imageDB/000${i}.jpg'>`;

//Добавляем новый объект
autoDB.push(new Auto(
	'Porsche',
	'Taycan',
	146525,
	'электро',
	false,
	));
//опциональные свойства
i++;
autoDB[i].color = "Белый";
autoDB[i].body = "Седан";
autoDB[i].image = `<img src='./imageDB/000${i}.jpg'>`;

//Добавляем новый объект
autoDB.push(new Auto(
	'Ferrari',
	'488 GTB',
	300000,
	'бензин',
	'3.9',
	));
//опциональные свойства
i++;
autoDB[i].color = "Красный";
autoDB[i].body = "Купе";
autoDB[i].image = `<img src='./imageDB/000${i}.jpg'>`;

//Добавляем новый объект
autoDB.push(new Auto(
	'Mercedes-Benz',
	'Maybach Z223',
	519075,
	'бензин',
	'6.0',
	));
//опциональные свойства
i++;
autoDB[i].color = "Черный";
autoDB[i].body = "Седан";
autoDB[i].image = `<img src='./imageDB/000${i}.jpg'>`;

//БЛОК ОТОБРАЖЕНИЯ НА СТРАНИЦЕ

//Вставка в html документ
const select = document.querySelector('.car'); //поиск родительского элемента
let arr = []; //массив данных
let j = 0; //индекс данных

//функция создания дочернего элемента
let addProperty = (inHtml) => {
	arr[j] = document.createElement('p');
	arr[j].innerHTML = inHtml;
	select.appendChild(arr[j]);
	j++;
};

//функция преобразования кодировки свойств в текст
let propertyString = (prop) => {
	if (prop == 'brand') return 'Бренд';
	if (prop == 'model') return 'Модель';
	if (prop == 'costUsd') return 'Цена (USD)';
	if (prop == 'costByn') return 'Цена (BYN)';
	if (prop == 'engine') return 'Тип двигателя';
	if (prop == 'engineVolume') return 'Объем двигателя';
	if (prop == 'color') return 'Цвет';
	if (prop == 'image') return 'Фото';
	if (prop == 'body') return 'Кузов';
	if (prop == 'range') return 'Дальность хода';
};

//БЛОК СМЕНА СТРАНИЧЕК

//цикл наполнения всех объектов со всеми параметрами в таблицу
const item = 3; //количество контента на странице одновременно
let pageItem = (num) => {
    index = num;
    let fromItem = num * item - item; //начало выборки
    let toItem = num * item - 1; //конец выборки
    for (let i = fromItem; i <= toItem; i++){ //прокрутка по базе данных
	    for (let property in autoDB[i]) { //прокрутка по свойствам
	    	addProperty(propertyString(property));//доб. названия свойства с преобразованием
	    	addProperty(autoDB[i][property]);//доб. значения свойства
	    };
	    //вставить пустую не последнюю строку, если есть еще машины в базе данных
        if (i !== toItem) {
	        autoDB[i+1] ? (addProperty('&nbsp;<br>&nbsp;'), addProperty('')) : false;
        };
    };
};

//функция очистки страницы от объектов
let del;
let delet = () => {
    del = document.querySelectorAll('p');
    del.forEach((e) => {e.remove()});
}

//отображение текущей страницы
let pageNumber = (i) => document.querySelector('u').innerHTML = i

//СТРАНИЧКИ

let index = 1; //начальная страница
pageItem(index); //вызов 1-й страницы
const buttonBack = document.querySelector('.back'); //ловим кнопку "назад"
const buttonNext = document.querySelector('.next'); //ловим кнопку "вперед"
let test;

//функция плавного скролла
let scroll = () => {
    window.scrollTo({
        top: 450,
        behavior: "smooth",
    });
};

//функция проверки сл.страницы
let tester = () => {return autoDB[index * item] !== undefined};

//функция кнопка "Назад"
let back = () => {
    if (index == 1) buttonBack.classList.add('not');
    if (index > 1) {
        index -= 1
        delet();
        pageItem(index);
        pageNumber(index);
        buttonNext.classList.remove('not');
        scroll();
    };
    if (index == 1) buttonBack.classList.add('not');
};

//функция кнопка "Дальше"
let next = () => {
    tester()
    if (tester() == true) {//проверка следующей страницы
        index += 1;
        delet();
        pageItem(index);
        pageNumber(index);
        scroll();
    } else if (tester() == false) {
        buttonNext.classList.add('not');
	};
	tester();
	if (tester() == false) buttonNext.classList.add('not');
    if (index == 2) buttonBack.classList.remove('not');
};