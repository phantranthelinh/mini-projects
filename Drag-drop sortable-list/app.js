
const sortableList = document.querySelector('.sortable-list')


function generateSortableListItems() {
    const items = [];

    for (let index = 1; index <= 8; index++) {
        const item = document.createElement('li');
        item.className = 'item';
        item.innerHTML = `
            <div class="details">
                <i class="uil uil-user"></i>
                <span>Item ${index}</span>
            </div>
            <i class="uil uil-draggabledots"></i>
        `;

        item.setAttribute('draggable', 'true');

        item.addEventListener('dragstart', (event) => {

            setTimeout(() => {
                event.target.classList.add('dragging');
                event.dataTransfer.effectAllowed = 'move';
                event.dataTransfer.setData('text/html', event.target.innerHTML);
            }, 0)

        });

        item.addEventListener('dragend', (event) => {
            event.target.classList.remove('dragging');
        });

        items.push(item);
    }

    sortableList.append(...items);
}
generateSortableListItems()

function onDragOver(event) {
    event.preventDefault();

    const draggedElement = document.querySelector('.dragging');
    const siblings = [...sortableList.querySelectorAll('.item:not(.dragging)')];

    const nextSibling = siblings.find(sibling => {
        const siblingRect = sibling.getBoundingClientRect();
        return (
            event.clientY >= siblingRect.top &&
            event.clientY <= siblingRect.bottom &&
            event.clientX >= siblingRect.left &&
            event.clientX <= siblingRect.right
        );
    });

    if (event.clientY < siblings[0].getBoundingClientRect().top) {
        sortableList.prepend(draggedElement);
    } else if (nextSibling) {
        sortableList.insertBefore(draggedElement, nextSibling.nextSibling);
    } else {
        sortableList.appendChild(draggedElement);
    }
}

sortableList.addEventListener('dragover', onDragOver)

sortableList.addEventListener('dragenter', (event) => {
    event.preventDefault()
})