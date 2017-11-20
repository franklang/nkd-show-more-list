var nkdShowMoreList = {

    // will be jQuery var
    sel: undefined,
    dataNbValue: undefined,

    init: function (selector) {
        this.sel = $(selector);
        this.dataNbValue = this.sel.attr('data-visible-amount');
        this.initInternal();
        this.bind();
    },

    initInternal: function () {
        $('.nkd-show-more-list').each(function (index, element) {
            var $actions = $('.nkd-actions', element);
            $(this).removeClass('no-js');
            $('.nkd-list-item', element).each(function (index) {
                if (index >= nkdShowMoreList.dataNbValue) {
                    $actions.removeClass('nkd-hidden');
                }
            });
        });

        if ($('.nkd-show-more-list').length > 0) {
            this.showItemsOnInit();
        }
    },

    bind: function(){
        $(document).on('click', '.nkd-show-more', this.showMoreItems);
        $(document).on('click', '.nkd-show-less', this.showLessItems);
    },

    showItemsOnInit: function () {
        this.sel.find('.nkd-list-item:nth-child(-n+' + this.dataNbValue + ')')
            .addClass('nkd-visible');
    },

    showMoreItems: function () {
        $(this)
            .closest('.nkd-show-more-list')
            .children('.nkd-has-hidden-content')
            .removeClass('nkd-has-hidden-content')
            .addClass('nkd-show-all');
    },

    showLessItems: function () {
        $(this)
            .closest('.nkd-show-more-list')
            .children('.nkd-show-all')
            .removeClass('nkd-show-all')
            .addClass('nkd-has-hidden-content');
    },

};
