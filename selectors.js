$('#sidebar');    // выбор элемента с id = sidebar
$('.post');       // выбор элементов с class = post
$('div#sidebar'); // выбор элемента div с id = sidebar
$('div.post');    // выбор элементов div с class = post

$('div span');            // выбор всех span элементов в элементах div
$('div').find('span');    // выбор всех span элементов в элементах div
$('div > span');          // выбор всех span элементов в элементах div, где span является прямым потомком div'a
$('div, span');          // выбор всех div и span элементов

$('span + img');         // выбор всех img элементов перед которыми идут span элементы
$('span ~ img');         // выбор всех img элементов после первого элемента span
$('#banner').prev();     // выбор предыдущего элемента от найденого
$('#banner').next();     // выбор следующего элемента от найденого

$('*');                // выбор всех элементов
$('p > *');            // выбор всех потомков элементов p
$('p').children();     // --
$('p').parent();       // выбор всех прямых предков элементов p
$('* > p');            // выбор всех предков элементов p (скорей всего Вам не понадобится)
$('p').parents();      // --
$('p').parents('div'); // выбор всех предков элемента p которые есть div (parents принимает в качестве параметра селектор)

$('div:first');     // выбираем первый div в доме
$('div:last');      // выбираем последний div в доме
$('div:not(.red)'); // выбираем div'ы у которых нету класса red
$('div:even');      // выбираем четные div'ы
$('div:odd');       // выбираем нечетные div'ы
$('div:eq(N)');     // выбираем div идущим под номером N в DOMe
$('div:gt(N)');     // выбираем div'ы, индекс которых больше чем N в DOMe
$('div:lt(N)');     // выбираем div'ы, индекс которых меньше чем N в DOMe
$(':header');       // выбо заголовоков h1, h2, h3 и т.д.
$('div:animated');  // выбор элементов с активной анимацией

$('div:contains(text)');     // выбираем div'ы содержащие текст
$('div:empty');              // выбираем пустые div'ы
$('div:has(p)');             // выбираем div'ы которые содержат p
$('div.red').filter('.bold') // выбираем div'ы которые содержат класс red и класс bold
$('div:hidden');             // выбираем скрытые div'ы
$('div:visible');            // выбираем видимые div'ы
 
// Так же есть фильтры по атрибутам:
 
$("div[id]");           // выбор всех div с атрибутом id
$("div[title='my']");   // выбор всех div с атрибутом title=my
$("div[title!='my']");  // выбор всех div с атрибутом title не равного my
$("div[title^='my']");  // выбор всех div с атрибутом title начинающихся с my 
                        // <div title="myCat">,<div title="myCoffee">, <div title="my...">
$("div[title$='my']");  // выбор всех div с атрибутом title заканчивающихся на my 
                        // <div title="itsmy">,<div title="somy">, <div title="...my">
$("div[title*='my']");  // выбор всех div с атрибутом title содержащим my
                        // <div title="itsmy">,<div title="myCat">, <div title="its my cat">,<div title="...my...">
                        
// так же стоит отдельно отметить следующий фильтр:                    
$("a[rel~='external']"); // выбор всех A с атрибутом rel содержащим external в списке значений разделенных пробелом

// <a href="" rel="external">link</a> — да
// <a href="" rel="nofollow external">link</a> — да
// <a href="" rel="external nofollow">link</a> — да
// <a href="" rel="friend external follow">link</a> — да
// <a href="" rel="external-link">link</a> — нет

$(":text");            // выбор всех input элементов с типом =text 
$(":radio");           // выбор всех input элементов с типом =radio и так далее
$("input:enabled");    // выбор всех включенных элементов input
$("input:checked");    // выбор всех отмеченных чекбоксов

$("div[name=city]:visible:has(p)"); // выбор видимого div'a с именем city, который содержит тег p

$("form select[name=city] option:selected").val(); // получение выбранного(-ых) элементов в селекте city
$("form :radio[name=some]:checked").val(); // получение выбранного значения радиобатона с именем some
$("form :checkbox:checked"); // выбор всех выбранных чекбоксов

// 1. удалить все элементы списка mySelect
$('select[@name=mySelect] option').remove();

// 2. добавить в список новый элемент
$('select[@name=mySelect]').append('<option>Новый элемент списка</option>');

// 3. сделать выделенным первый пунки списка
$('select[@name=loadFileName] option:first').attr('selected', 'yes');

// 4. принудительно снять выделение с элемента списка
$('select[@name=loadFileName] option:first').removeAttr('selected');

// 5. получить значение выделенного пункта из списка если вы используете атрибут <option value="some value">:
var file = $('select[@name=loadFileName] option:selected').val();
// если вас интересует то, что заключено между <option>...</option>:
var file = $('select[@name=loadFileName] option:selected').text();

// 6. проверить, выбран ли какой-нибудь элемент списка
if( typeof $('select[@name=loadFileName] option:selected').text() === 'undefined' ){
       alert('Ни один элемент списка не выбран');
}

// 7. превратить список в "автомасштабируемый"
$('select[@name=loadFileName]').attr('size', $('select[@name=loadFileName] option').size());

// 8. сделать недоступны для выбора отдельный элемент
$('select[@name=loadFileName] option:contains('текст нужного элемента')').attr('disabled', 'disabled');
// разрешить выделение всех ранее недоступных элементов можно так:
$('select[@name=loadFileName] option:disabled').removeAttr('disabled');



