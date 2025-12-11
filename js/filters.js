document.addEventListener('DOMContentLoaded', function() {

    const filters = document.querySelectorAll('.filter');
    
    filters.forEach(filter => {
        const selectedText = filter.querySelector('.selected_filter p');
        const dropdown = filter.querySelector('.filter-content');
        const resetBtn = filter.querySelector('.cancel-category');
        const options = dropdown.querySelectorAll('label');
        const arrow = filter.querySelector('.selected_filter img');   

        const originalText = selectedText.textContent;
        
        function closeAllDropdowns() {
            filters.forEach(f => {
                const otherDropdown = f.querySelector('.filter-content');
                const otherArrow = f.querySelector('.selected_filter img');
                otherDropdown.style.display = 'none';
                otherArrow.style.transform = '';
            });
        }
        
        filter.querySelector('.selected_filter').addEventListener('click', function(e) {
            e.stopPropagation();
            
            closeAllDropdowns();
            
            if (dropdown.style.display === 'block') {
                dropdown.style.display = 'none';
                arrow.style.transform = '';
            } else {
                dropdown.style.display = 'block';
                arrow.style.transform = 'rotate(180deg)';
            }
        });
        
        options.forEach(option => {
            if (!option.classList.contains('cancel-category')) {
                option.addEventListener('click', function() {
                    const optionText = this.querySelector('p').textContent;
                    selectedText.textContent = optionText;
                    dropdown.style.display = 'none';
                    arrow.style.transform = '';
                });
            }
        });
        
        resetBtn.addEventListener('click', function() {
            selectedText.textContent = originalText;
            dropdown.style.display = 'none';
            arrow.style.transform = '';
        });
        
        document.addEventListener('click', function(e) {
            if (!filter.contains(e.target)) {
                dropdown.style.display = 'none';
                arrow.style.transform = '';
            }
        });
        
        dropdown.addEventListener('mouseleave', function() {
            dropdown.style.display = 'none';
            arrow.style.transform = '';
        });
        
        dropdown.addEventListener('mouseenter', function() {
            dropdown.style.display = 'block';
        });
    });
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            filters.forEach(filter => {
                const dropdown = filter.querySelector('.filter-content');
                const arrow = filter.querySelector('.selected_filter img');
                dropdown.style.display = 'none';
                arrow.style.transform = '';
            });
        }
    });
});