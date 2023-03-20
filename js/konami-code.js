$(document).ready(function() {
    const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
    let konamiIndex = 0;

    $(document).keydown(function(e) {
        if (e.which === konamiCode[konamiIndex]) {
            konamiIndex++;

            if (konamiIndex === konamiCode.length) {
                $('#secretMessage').removeClass('hidden');
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });
});
