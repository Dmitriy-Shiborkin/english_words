'use strict';

//============================================================================================================================

burger_menu_1.addEventListener('click', function() {

    menu.style.display = 'block';
    menu.style.zIndex = 1;

    burger_menu_1.style.display = 'none';
    burger_menu_2.style.display = 'block';
});

burger_menu_2.addEventListener('click', function() {

    menu.style.display = 'none';

    burger_menu_1.style.display = 'block';
    burger_menu_2.style.display = 'none';
});

//============================================================================================================================

let obj = {};

let key;

let lastKey;

//============================================================================================================================

button_section_start.addEventListener('click', function() {

    word_section_click_on_start_new_words.style.display = 'none';

    do {
          
        key = Number(String(Math.random()).slice(2, 6));
        
    } while (key < -1 || key > array_of_words.length - 1) 
      
      
    obj[key] = array_of_words[key][1];

    word_section_main.innerHTML = array_of_words[key][1];

    if ("3.1" in array_of_words[key]) {
        word_section_translation_1.innerHTML = array_of_words[key][3.1];
    }

    if ("3.2" in array_of_words[key]) {
        word_section_translation_2.innerHTML = array_of_words[key][3.2];
    }

    if ("3.3" in array_of_words[key]) {
        word_section_translation_3.innerHTML = array_of_words[key][3.3];
    }

    word_section_how_to_read.innerHTML = array_of_words[key][2];

    if ('4.1' in array_of_words[key]) {
        word_section_additional_information.innerHTML = array_of_words[key][4.1];
    } 
    
    if ('4.2' in array_of_words[key]) {
        word_section_additional_information.innerHTML += ' | ' + array_of_words[key][4.2];
    } 

    if ('4.3' in array_of_words[key]) {
        word_section_additional_information.innerHTML += ' | ' + array_of_words[key][4.3];
    }

    if (language_switch.value === 'English Russian') {

        word_section_main.style.opacity = '1';

        word_section_main.style.marginTop = '180px';

        word_section_main.style.display = 'block';
        word_section_translation_1.style.display = 'none'
        word_section_translation_2.style.display = 'none'
        word_section_translation_3.style.display = 'none'

    } else {

        word_section_main.style.opacity = '0';

        word_section_main.style.marginTop = '10px';

        word_section_translation_1.style.display = 'block'
        word_section_translation_2.style.display = 'block'
        word_section_translation_3.style.display = 'block'

    }
      
    button_section_start.style.display = 'none';
    button_section_the_next_word_1.style.display = 'block';
    button_section_translate_1.style.display = 'block';
    button_section_additional_information_1.style.display = 'block';
    button_section_how_to_read_1.style.display = 'block';
  
});
      
button_section_the_next_word_1.addEventListener('click', function() {
      
    let length = Object.keys(obj).length;
        
    if (length < array_of_words.length) {

        do {
          
            key = Number(String(Math.random()).slice(2, 6));
          
        } while (key in obj || key < -1 || key > array_of_words.length - 1) 
      
        obj[key] = array_of_words[key][1];

         word_section_main.innerHTML = array_of_words[key][1];

        word_section_translation_1.innerHTML = '';
        word_section_translation_2.innerHTML = '';
        word_section_translation_3.innerHTML = '';
    
        if ("3.1" in array_of_words[key]) {
            word_section_translation_1.innerHTML = array_of_words[key][3.1];
        }
  
        if ("3.2" in array_of_words[key]) {
            word_section_translation_2.innerHTML = array_of_words[key][3.2];
        }
    
        if ("3.3" in array_of_words[key]) {
            word_section_translation_3.innerHTML = array_of_words[key][3.3];
        }
  
        word_section_how_to_read.innerHTML = array_of_words[key][2];

        word_section_additional_information.innerHTML = '';
  
        if ('4.1' in array_of_words[key]) {
            word_section_additional_information.innerHTML = array_of_words[key][4.1];
        } 
      
        if ('4.2' in array_of_words[key]) {
            word_section_additional_information.innerHTML += ' | ' + array_of_words[key][4.2];
        } 
  
        if ('4.3' in array_of_words[key]) {
            word_section_additional_information.innerHTML += ' | ' + array_of_words[key][4.3];
        }

        if (language_switch.value === 'English Russian') {

            word_section_main.style.opacity = '1';
            word_section_main.style.marginTop = '180px';

            word_section_translation_1.style.display = 'none'
            word_section_translation_2.style.display = 'none'
            word_section_translation_3.style.display = 'none'

        } else {

            word_section_main.style.opacity = '0';
            word_section_main.style.marginTop = '10px';
            word_section_how_to_read.style.display = 'none';

            word_section_translation_1.style.display = 'block';
            word_section_translation_2.style.display = 'block';
            word_section_translation_3.style.display = 'block';

        }

        word_section_how_to_read.style.display = 'none';

        button_section_translate_1.style.display = 'block';
        button_section_translate_2.style.display = 'none';

        button_section_how_to_read_1.style.display = 'block';
        button_section_how_to_read_2.style.display = 'none';
  
    } else {

        lastKey = key;

        obj = {};
        
        do {
            
            key = Number(String(Math.random()).slice(2, 6));
          
        } while (lastKey == key || key < -1 || key > array_of_words.length - 1) 

        obj[key] = array_of_words[key][1];

        word_section_main.innerHTML = array_of_words[key][1];

        word_section_translation_1.innerHTML = '';
        word_section_translation_2.innerHTML = '';
        word_section_translation_3.innerHTML = '';
  
        if ("3.1" in array_of_words[key]) {
            word_section_translation_1.innerHTML = array_of_words[key][3.1];
        }
    
        if ("3.2" in array_of_words[key]) {
            word_section_translation_2.innerHTML = array_of_words[key][3.2];
        }
    
        if ("3.3" in array_of_words[key]) {
            word_section_translation_3.innerHTML = array_of_words[key][3.3];
        }
  
        word_section_how_to_read.innerHTML = array_of_words[key][2];

        word_section_additional_information.innerHTML = '';
  
        if ('4.1' in array_of_words[key]) {
            word_section_additional_information.innerHTML = array_of_words[key][4.1];
        } 
        
        if ('4.2' in array_of_words[key]) {
            word_section_additional_information.innerHTML += ' | ' + array_of_words[key][4.2];
        } 
    
        if ('4.3' in array_of_words[key]) {
            word_section_additional_information.innerHTML += ' | ' + array_of_words[key][4.3];
        }

        if (language_switch.value === 'English Russian') {

            word_section_main.style.opacity = '1';
            word_section_main.style.marginTop = '180px';

            word_section_translation_1.style.display = 'none'
            word_section_translation_2.style.display = 'none'
            word_section_translation_3.style.display = 'none'

        } else {

            word_section_main.style.opacity = '0';
            word_section_main.style.marginTop = '10px';
            word_section_how_to_read.style.display = 'none';

            word_section_translation_1.style.display = 'block';
            word_section_translation_2.style.display = 'block';
            word_section_translation_3.style.display = 'block';

        }

        word_section_how_to_read.style.display = 'none';

        button_section_translate_1.style.display = 'block';
        button_section_translate_2.style.display = 'none';

        button_section_how_to_read_1.style.display = 'block';
        button_section_how_to_read_2.style.display = 'none';
            
    }
      
});
      
//============================================================================================================================ 

button_section_translate_1.addEventListener('click', function() {

    word_section_main.style.display = 'block';
    word_section_main.style.marginTop = '10px';

    word_section_main.style.opacity = '1';
    word_section_how_to_read.style.display = 'block';

    word_section_translation_1.style.display = 'block';
    word_section_translation_2.style.display = 'block';
    word_section_translation_3.style.display = 'block';

    button_section_how_to_read_1.style.display = 'none';
    button_section_how_to_read_2.style.display = 'block';

    button_section_translate_1.style.display = 'none';
    button_section_translate_2.style.display = 'block';
          
}); 
          
button_section_translate_2.addEventListener('click', function() {

    if (language_switch.value === 'English Russian') {

        word_section_translation_1.style.display = 'none';
        word_section_translation_2.style.display = 'none';
        word_section_translation_3.style.display = 'none';
      
        word_section_main.style.marginTop = '180px';

    } else {

        word_section_main.style.opacity = '0';
        
    }    

    word_section_how_to_read.style.display = 'none';

    button_section_how_to_read_1.style.display = 'block';
    button_section_how_to_read_2.style.display = 'none';

    button_section_translate_1.style.display = 'block';
    button_section_translate_2.style.display = 'none';
          
});
        
//============================================================================================================================

button_section_additional_information_1.addEventListener('click', function() {
      
    word_section_additional_information.style.display = 'block';
        
    button_section_additional_information_1.style.display = 'none';
    button_section_additional_information_2.style.display = 'block';
        
});
        
button_section_additional_information_2.addEventListener('click', function() {
        
    word_section_additional_information.style.display = 'none';
        
    button_section_additional_information_1.style.display = 'block';
    button_section_additional_information_2.style.display = 'none';
        
});
  
//============================================================================================================================
 
button_section_how_to_read_1.addEventListener('click', function() {
      
    word_section_how_to_read.style.display = 'block';
        
    button_section_how_to_read_1.style.display = 'none';
    button_section_how_to_read_2.style.display = 'block';
        
}); 
        
button_section_how_to_read_2.addEventListener('click', function() {
        
    word_section_how_to_read.style.display = 'none';
  
    button_section_how_to_read_1.style.display = 'block';
    button_section_how_to_read_2.style.display = 'none';
        
});
        
//============================================================================================================================ 
      
let array_of_words = [

{1: 'easy-going', 2: '(Изи-Гоуин)', 3.1: 'добродушно-весёлый', 4.1: 'прил'},
{1: 'annoy', 2: '(энОй)', 3.1: 'раздражать', 4.1: 'глаг(1)'},
{1: 'annoyed', 2: '(энОйд)', 3.1: 'раздражал / раздражённый', 4.1: 'глаг[(e)d]'},
{1: 'annoying', 2: '(энОйин)', 3.1: 'раздражая / раздражающий / раздражение', 4.1: 'глаг[ing]'},
{1: 'annoys', 2: '(энОйс)', 3.1: 'раздражает', 4.1: 'глаг[s]'},
{1: 'jealous', 2: '(джОлис)', 3.1: 'завистливый', 4.1: 'прил'},
{1: 'sensitive', 2: '(сЭнситив)', 3.1: 'чувствительный', 4.1: 'прил'},
{1: 'sensitivity', 2: '(сЭнситивити)', 3.1: 'чувствительность', 4.1: 'сущ'},
{1: 'sensitivities', 2: '(сЭнситивитис)', 3.1: 'чувствительности', 4.1: 'сущ[s]'},
{1: 'confident', 2: '(кОнфидэнт)', 3.1: 'уверенный', 4.1: 'прил'},
{1: 'confidently', 2: '(кОнфидэнтли)', 3.1: 'уверенно', 4.1: 'нареч'},
{1: 'generous', 2: '(джЭнирэс)', 3.1: 'щедрый', 4.1: 'прил'},
{1: 'generously', 2: '(джЭнирэсли)', 3.1: 'щедро', 4.1: 'нареч'},
{1: 'generosity', 2: '(джЭнирэсити)', 3.1: 'щедрость', 4.1: 'сущ'},
{1: 'silly', 2: '(сИли)', 3.1: 'глупый', 4.1: 'прил'},
{1: 'arrogant', 2: '(Арогент)', 3.1: 'надменный', 4.1: 'прил'},
{1: 'arrogance', 2: '(Арогентс)', 3.1: 'надменность', 4.1: 'сущ'},


];

// let arrFilter = [];

// for (let i = 1; i < array_of_words.length; i++) {

//     if (array_of_words[i][4.1] === 'сущ' || 
//         array_of_words[i][4.2] === 'сущ' ||
//         array_of_words[i][4.3] === 'сущ') {

//         arrFilter.push(array_of_words[i]);

//     }

//     if (array_of_words[i][4.1] === 'прил' || 
//         array_of_words[i][4.2] === 'прил' ||
//         array_of_words[i][4.3] === 'прил') {

//         arrFilter.push(array_of_words[i]);
        
//     }

// }

// console.log('arrFilter', arrFilter);























