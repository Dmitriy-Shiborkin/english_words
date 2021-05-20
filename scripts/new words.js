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
   
button_section_start_btn1_1.addEventListener('click', function() {

  word_section_click_on_start_new_words.style.display = 'none';

  do {
          
    key = Number(String(Math.random()).slice(2, 6));
        
  } while (key < -1 || key > array_of_words.length - 1) 
      
      
  obj[key] = array_of_words[key][1];

  if (window.innerWidth < 423) {

    if (button_section_show_how_it_reads_btn2_1.style.display !== 'none') {

      if (array_of_words[key][1].length > 10 && array_of_words[key][1].length <= 13) {

        word_section_main.style.fontSize = '63px';
        word_section_main.style.marginTop = '145px';
    
      } else if (array_of_words[key][1].length > 13) {

        word_section_main.style.fontSize = '45px';
        word_section_main.style.marginTop = '165px';

      } else {
        
        word_section_main.style.fontSize = '70px';
        word_section_main.style.marginTop = '135px';
  
      }

    } 
    
  }
        
  word_section_main.innerHTML = array_of_words[key][1];
  word_section_how_to_read.innerHTML = array_of_words[key][2];
  word_section_translation.innerHTML = array_of_words[key][3];
  word_section_additional_information.innerHTML = array_of_words[key][4];
      
  button_section_start_btn1_1.style.display = 'none';
  button_section_the_next_word_btn1_2.style.display = 'block';
  button_section_show_how_it_reads_btn2_1.style.display = 'block';
  button_section_show_additional_information_btn3_1.style.display = 'block';
      
});
      
button_section_the_next_word_btn1_2.addEventListener('click', function() {
      
  let length = Object.keys(obj).length;
        
  if (length < array_of_words.length) {

    do {
          
      key = Number(String(Math.random()).slice(2, 6));
          
    } while (key < -1 || key > array_of_words.length - 1) 
      
    if (!(key in obj)) {
      
      obj[key] = array_of_words[key][1];

      if (window.innerWidth < 423) {

        if (button_section_show_how_it_reads_btn2_1.style.display !== 'none') {
  
          if (array_of_words[key][1].length > 10 && array_of_words[key][1].length <= 13) {
  
            word_section_main.style.fontSize = '63px';
            word_section_main.style.marginTop = '145px';
        
          } else if (array_of_words[key][1].length > 13) {
    
            word_section_main.style.fontSize = '45px';
            word_section_main.style.marginTop = '165px';
    
          } else {
            
            word_section_main.style.fontSize = '70px';
            word_section_main.style.marginTop = '135px';
      
          }
  
        } 
        
      }
      
      word_section_main.innerHTML = array_of_words[key][1];
      word_section_how_to_read.innerHTML = array_of_words[key][2];
      word_section_translation.innerHTML = array_of_words[key][3];   
      word_section_additional_information.innerHTML = array_of_words[key][4];  
        
    } else {
      
      do {
          
        key = Number(String(Math.random()).slice(2, 6));
            
      } while (key in obj || key < -1 || key > array_of_words.length - 1)
      
      obj[key] = array_of_words[key][1];
      
      word_section_main.innerHTML = array_of_words[key][1];
      word_section_how_to_read.innerHTML = array_of_words[key][2];
      word_section_translation.innerHTML = array_of_words[key][3];
      word_section_additional_information.innerHTML = array_of_words[key][4];
            
    }
      
  } else {

    lastKey = key;

    obj = {};
        
    do {
            
      key = Number(String(Math.random()).slice(2, 6));
          
    } while (lastKey == key || key < -1 || key > array_of_words.length - 1) 

    obj[key] = array_of_words[key][1];
    
    word_section_main.innerHTML = array_of_words[key][1];
    word_section_how_to_read.innerHTML = array_of_words[key][2];
    word_section_translation.innerHTML = array_of_words[key][3];
    word_section_additional_information.innerHTML = array_of_words[key][4];
            
  }
      
});
      
//============================================================================================================================ 
      
button_section_show_how_it_reads_btn2_1.addEventListener('click', function() {
      
  word_section_how_to_read.style.display = 'block';
  word_section_translation.style.display = 'block';

  word_section_main.style.marginTop = '30px';
      
  button_section_show_how_it_reads_btn2_1.style.display = 'none';
  button_section_hide_how_to_read_btn2_2.style.display = 'block';
      
}); 
      
button_section_hide_how_to_read_btn2_2.addEventListener('click', function() {
      
  word_section_how_to_read.style.display = 'none';
  word_section_translation.style.display = 'none';

  word_section_main.style.marginTop = '130px';
      
  button_section_show_how_it_reads_btn2_1.style.display = 'block';
  button_section_hide_how_to_read_btn2_2.style.display = 'none';
      
});
      
//============================================================================================================================ 
      
button_section_show_additional_information_btn3_1.addEventListener('click', function() {
      
  word_section_additional_information.style.display = 'block';
      
  button_section_show_additional_information_btn3_1.style.display = 'none';
  button_section_hide_additional_information_btn3_2.style.display = 'block';
      
});
      
button_section_hide_additional_information_btn3_2.addEventListener('click', function() {
      
  word_section_additional_information.style.display = 'none';
      
  button_section_show_additional_information_btn3_1.style.display = 'block';
  button_section_hide_additional_information_btn3_2.style.display = 'none';
      
});

//============================================================================================================================

let array_of_words = [

  {1: 'add',                 2: '(Эд)',                       3: 'добавить',                                4: ''},
  {1: 'tie',                 2: '(тАй)',                      3: 'галстук',                                 4: ''},
  {1: 'plum',                2: '(плАм)',                     3: 'слива',                                   4: ''},
  {1: 'egg',                 2: '(Эг)',                       3: 'яйцо',                                    4: ''},

];


























