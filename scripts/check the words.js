'use strict';

//============================================================================================================================

burger_menu_1.addEventListener('click', function() {

    menu.style.display = 'block';

    burger_menu_1.style.display = 'none';
    burger_menu_2.style.display = 'block';

});

burger_menu_2.addEventListener('click', function() {

    menu.style.display = 'none';

    burger_menu_1.style.display = 'block';
    burger_menu_2.style.display = 'none';

});

//============================================================================================================================

button_input.addEventListener('click', function() {

    if (input.value == '') {

        main_word.innerHTML = 'Вы не ввели слово';
        how_to_read_word.innerHTML = '';
        translation_1.innerHTML = '';
        translation_2.innerHTML = '';
        translation_3.innerHTML = '';
        additional_information_word.innerHTML = '';
        number_word.innerHTML = '';

    } else {

        for (let i = 0; i < array_of_words.length; i++) {

            if (input.value === array_of_words[i][1]) {
  
                input.value = '';
  
                main_word.innerHTML = 'Слово - ' + array_of_words[i][1];
                how_to_read_word.innerHTML = 'Как читается - ' + array_of_words[i][2];

                translation_1.innerHTML = 'Перевод - ' + array_of_words[i][3.1];

                if (3.2 in array_of_words[i]) {
                    translation_2.innerHTML = 'Перевод - ' + array_of_words[i][3.2];
                } else {
                    translation_2.innerHTML = '';
                }

                if (3.3 in array_of_words[i]) {
                    translation_3.innerHTML = 'Перевод - ' + array_of_words[i][3.3];
                } else {
                    translation_3.innerHTML = '';
                }

                if (array_of_words[i][4.1] != '') {

                    if (4.1 in array_of_words[i]) {
                        additional_information_word.innerHTML = 'Дополнительная информация - ' + array_of_words[i][4.1];
                    }
                    if (4.2 in array_of_words[i]) {
                        additional_information_word.innerHTML += ' | ' + array_of_words[i][4.2];
                    }
                    if (4.3 in array_of_words[i]) {
                        additional_information_word.innerHTML += ' | ' + array_of_words[i][4.3];
                    }

                } else {
                    additional_information_word.innerHTML = 'Нет';
                }

                number_word.innerHTML = 'Строка в документе - ' + (i + 102);

                break;
      
            } else {
  
                main_word.innerHTML = 'В базе данных нет такого слова';
                how_to_read_word.innerHTML = '';
                translation_1.innerHTML = '';
                translation_2.innerHTML = '';
                translation_3.innerHTML = '';
                additional_information_word.innerHTML = '';
                number_word.innerHTML = '';
        
            }

        }

    }

});

var array_of_words = [
    
    {1:'root', 2: '(рУут)', 3.1: 'корень', 3.2: 'корневой', 3.3: 'укоренять', 4.1: 'сущ', 4.2: 'прил', 4.3: 'глаг(1)'},
  
];
  



























