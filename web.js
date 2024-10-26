// Khi tài liệu đã sẵn sàng
$(document).ready(function() {
    // Thay đổi màu nền khi nhấn nút Red
    $('#btn-red').click(function() {
        $('body').css('background-color', 'red');
    });

    // Thay đổi màu nền khi nhấn nút Yellow
    $('#btn-yellow').click(function() {
        $('body').css('background-color', 'yellow');
    });

    // Thay đổi màu nền khi nhấn nút Blue
    $('#btn-blue').click(function() {
        $('body').css('background-color', 'blue');
    });
});