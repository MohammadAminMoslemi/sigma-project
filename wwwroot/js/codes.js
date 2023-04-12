
try {
    //search box
    const searchFocus = document.getElementById('search-focus');
    const keys = [
        { keyCode: 'AltLeft', isTriggered: false },
        { keyCode: 'ControlLeft', isTriggered: false },
    ];

    window.addEventListener('keydown', (e) => {
        keys.forEach((obj) => {
            if (obj.keyCode === e.code) {
                obj.isTriggered = true;
            }
        });

        const shortcutTriggered = keys.filter((obj) => obj.isTriggered).length === keys.length;

        if (shortcutTriggered) {
            searchFocus.focus();
        }
    });

    window.addEventListener('keyup', (e) => {
        keys.forEach((obj) => {
            if (obj.keyCode === e.code) {
                obj.isTriggered = false;
            }
        });
    });

    //mega menu
    $(document).ready(function () {
        $(".navigate .menu-container ul>li.dropdown").mouseenter(function () {
            $('>.menu', this).slideToggle(500);
        });
        $(".navigate .menu-container ul>li.dropdown").mouseleave(function () {
            $('>.menu', this).hide(500);
        });
    })
} catch (error) {
    console.log(error.toString());
}