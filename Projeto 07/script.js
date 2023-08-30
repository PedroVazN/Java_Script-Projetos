document.querySelector('item').forEach(item => {
    item.addEventListener('dragstart', dragStart); 
    item.addEventListener('dragend', dragEnd);
    });

    // Funções Item

    function dragStart(event) {
        e.currentTarget.classList.add('dragging');
        
    }
    function dragEnd(event) {
        event.target.style.opacity = 1;
    }

    // Funções Area