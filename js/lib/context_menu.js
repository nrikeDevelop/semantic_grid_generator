
        //CONTEXT MENU 
        var menu = document.querySelector('.context_menu');

        function showMenu(x, y){
            menu.style.left = x + 'px';
            menu.style.top = y + 'px';
            menu.classList.add('menu-show');
        }

        function hideMenu(){
            menu.classList.remove('menu-show');
        }

        function onContextMenu(e){
            e.preventDefault();
            showMenu(e.pageX, e.pageY);
            document.addEventListener('mousedown', onMouseDown, false);
            //ACTION RIGHT CLICK
        }

        var handler;
        function onMouseDown(e){
            clearTimeout(handler);
            handler = setTimeout(function() {
                hideMenu();
                document.removeEventListener('mousedown', onMouseDown);
            },100);
        }

        document.addEventListener('contextmenu', onContextMenu, false);
