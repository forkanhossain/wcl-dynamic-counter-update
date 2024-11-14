document.addEventListener('DOMContentLoaded', function() {
    const counterElement = document.querySelector('.wcl-transactions-counter');
    // Parse the formatted string by removing commas for accurate counting
    const targetCount = parseInt(counterElement.getAttribute('data-count').replace(/,/g, ''));
    let count = 1;
    const duration = 2000;
    const increment = Math.ceil(targetCount / (duration / 10));

    function updateCounter() {
        count += increment;
        if (count > targetCount) count = targetCount;
        counterElement.textContent = count.toLocaleString(); // Adds commas on the frontend

        if (count < targetCount) {
            setTimeout(updateCounter, 10);
        }
    }
    updateCounter();
});
