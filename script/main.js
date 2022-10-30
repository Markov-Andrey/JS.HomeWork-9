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
i = 0;
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
i = 1;
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
i = 2;
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
i = 3;
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
i = 4;
autoDB[i].color = "Красный"; 
autoDB[i].body = "Купе"; 
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

//функция преобразования кода свойств в текст
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

//цикл наполнения всех объектов со всеми параметрами в таблицу
for (let i = 0; i <= autoDB.length; i++){
	for (let property in autoDB[i]) {
		addProperty(propertyString(property));//доб. названия свойства с преобразованием
		addProperty(autoDB[i][property]);//доб. значения свойства
	};
	//вставить пустую строку, если есть еще машины в базе данных
	autoDB[i+1] ? (addProperty('&nbsp;<br>&nbsp;'), addProperty('&nbsp;<br>&nbsp;')) : false;
};