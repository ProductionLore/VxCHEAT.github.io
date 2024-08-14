function alerts(type, text) {
    if (lang == 'ru'){
        var error_title = 'Ошибка';
        var danger_title = 'Внимание';
        var success_title = 'Успешно';
    } else if (lang == 'en'){
        var error_title = 'Error';
        var danger_title = 'Danger';
        var success_title = 'Success';
    } else {
        var error_title = 'Ошибка';
        var danger_title = 'Внимание';
        var success_title = 'Успешно';
    }

    if (type == 'error') {
        var alerts = $(
            "<div class='alerts__block-alert error' style='display: none;'>" +
            "<div class='alerts__block-icon'><i class='fa-solid fa-xmark'></i></div>" +
            "<div class='alerts__block-text'>" +
            "<div class='alerts__block-label'>" + error_title + "</div>" +
            "<div class='alerts__block-desc'>" + text + "</div>" +
            "</div>" +
            "</div>"
        );
    } else if (type == 'danger') {
        var alerts = $(
            "<div class='alerts__block-alert danger' style='display: none;'>" +
            "<div class='alerts__block-icon'><i class='fa-solid fa-exclamation'></i></div>" +
            "<div class='alerts__block-text'>" +
            "<div class='alerts__block-label'>" + danger_title + "</div>" +
            "<div class='alerts__block-desc'>" + text + "</div>" +
            "</div>" +
            "</div>"
        );
    } else if (type == 'success') {
        var alerts = $(
            "<div class='alerts__block-alert success' style='display: none;'>" +
            "<div class='alerts__block-icon'><i class='fa-solid fa-check'></i></div>" +
            "<div class='alerts__block-text'>" +
            "<div class='alerts__block-label'>" + success_title + "</div>" +
            "<div class='alerts__block-desc'>" + text + "</div>" +
            "</div>" +
            "</div>"
        );
    }

    $('.alerts__block').append(alerts);

    var options = {};
    var selectedEffectOn = 'fade';
    var selectedEffectOff = 'drop';
    alerts.show(selectedEffectOn, options, 500);
    setTimeout(function() {
        alerts.effect( selectedEffectOff, options, 600 );
    }, 2600 );
    setTimeout(function() {
        alerts.remove();
    }, 3400 );


}