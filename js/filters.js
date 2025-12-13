document.addEventListener('DOMContentLoaded', () => {
    const filters = document.querySelectorAll('.filter');

    function closeAllDropdowns() {
        filters.forEach(filter => {
            const dropdown = filter.querySelector('.filter-content');
            const arrow = filter.querySelector('.selected_filter img');
            
            dropdown.classList.remove('is-open');
            arrow.style.transform = '';
        });
    }

    filters.forEach(filter => {
        const selectedText = filter.querySelector('.selected_filter p');
        const dropdown = filter.querySelector('.filter-content');
        const resetBtn = filter.querySelector('.cancel-category');
        const arrow = filter.querySelector('.selected_filter img');
        const originalText = selectedText.textContent;

        filter.querySelector('.selected_filter').addEventListener('click', e => {
            e.stopPropagation();
            
            const isOpen = dropdown.classList.contains('is-open');
            closeAllDropdowns();
            
            if (!isOpen) {
                dropdown.classList.add('is-open');
                arrow.style.transform = 'rotate(180deg)';
            }
        });

        dropdown.addEventListener('click', e => {
            e.stopPropagation();
            
            const reset = e.target.closest('.cancel-category');
            if (reset) {
                selectedText.textContent = originalText;
                closeAllDropdowns();
                return;
            }

            const option = e.target.closest('.filter-option');
            if (!option) return;

            selectedText.textContent = option.textContent;
            closeAllDropdowns();
        });
    });

    document.addEventListener('click', closeAllDropdowns);
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') closeAllDropdowns();
    });
});