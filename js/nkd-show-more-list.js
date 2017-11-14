$.fn.nkdShowMoreList = function(){

  var getDataNbValue = $(this).attr('data-visible-amount');

  function showItemsOnInit(){
    $('.nkd-list-item:nth-child(-n+'+ getDataNbValue +')')
      .addClass('nkd-visible');
  }
  
  function showMoreItems(thisObj){
    thisObj
      .closest('.nkd-show-more-list')
      .children('.nkd-has-hidden-content')
      .removeClass('nkd-has-hidden-content')
      .addClass('nkd-show-all');
  }

  function showLessItems(thisObj){
    thisObj
      .closest('.nkd-show-more-list')
      .children('.nkd-show-all')
      .removeClass('nkd-show-all')
      .addClass('nkd-has-hidden-content');
  }

  $('.nkd-show-more-list').each(function (index, element) {
    var $actions = $('.nkd-actions', element);

    $(this).removeClass('no-js');
    $('.nkd-list-item', element ).each(function(index) {
      if (index >= getDataNbValue) {
        $actions.removeClass('nkd-hidden');
      }
    });
  }); 

  showItemsOnInit();

  $(document).on('click', '.nkd-show-more', function(){
    showMoreItems($(this));
  });

  $(document).on('click', '.nkd-show-less', function(){
    showLessItems($(this));
  });
}