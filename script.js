'use strict';
/*eslint-env jquery*/

function submit(){
  $('#js-shopping-list-form').submit(function(event) {
    event.preventDefault();
    const textInput = $(event.currentTarget).find('#shopping-list-entry');
    if(textInput.val() !== ''){
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
    }
  });
}


const toggleCheck = $('.shopping-list').on('click','.shopping-item-toggle', function(){
  $(this).closest('.shopping-item-controls').siblings('.shopping-item').toggleClass('shopping-item__checked');
});

const toggleDelete = $('.shopping-list').on('click','.shopping-item-delete', function(){
  $(this).closest('li').remove();
});

$(submit);


