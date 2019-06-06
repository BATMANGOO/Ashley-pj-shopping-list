'use strict';
/*eslint-env jquery*/

$(function submit(){
  $('#js-shopping-list-form').submit(event => {
    event.preventDefault();
    const textInput = 
    $(event.currentTarget).find('#shopping-list-entry');

    $('ul').append(`<li>
        <span class="shopping-item">${textInput.val()}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>
      <li>`);

    textInput.val('');
  });
});

const toggleCheck = $(function(event){
  $('.shopping-item-toggle').on('click', function(){
    $('.shopping-item').toggleClass('shopping-item__checked');
  });
});




