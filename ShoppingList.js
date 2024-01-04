$(function() {
    let callback = function(event) {
        event.preventDefault();
        let input = $('input[type=text][name=item]'),
            value = input.val(),
            need = ($(event.target).attr('id') === 'addNeed'),
            item = $('<li><input type="checkbox" name="item"> ' + value + ' <a href="#">&#10006;</a></li>'),
            list = (need) ? $('ul').first() : $('ul').last();

        input.val("");
        input.focus();

        if (value === "") return;

        if (!need) {
            item.find('input').prop('checked', true);
        }

        list.append(item);
    };

    $('#addHave, #addNeed').click(callback);

    $('ul').on('click', 'li a', function (event) {
        $(event.target).closest('li').remove();
    });

    $('ul').on('click', 'input[type=checkbox]', function (event) {
        let listItem = $(event.target).closest('li'),
            list = $(event.target).prop('checked') ? $('ul').last() : $('ul').first();
        listItem.appendTo(list);
    });
});
