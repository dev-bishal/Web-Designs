// JSON data for portfolio items
const portfolioData = sitesData;

// Function to generate portfolio grid from JSON data
function generatePortfolioGrid() {
    const gridContainer = document.getElementById('portfolioGrid');

    portfolioData.forEach(item => {
        const portfolioItem = document.createElement('div');
        portfolioItem.className = 'glass-card p-6 rounded-xl thumbnail-hover';

        portfolioItem.innerHTML = `
                    <div class="h-48 bg-gradient-to-r ${item.gradient} rounded-lg mb-4 flex items-center justify-center">
                        <img src="/Web-Designs/screenshots/${item.imgFile}" class="size-full rounded-lg" alt="">
                    </div>
                    <h3 class="text-xl font-semibold mb-2">${item.title}</h3>
                    <p class="text-gray-400 mb-4">${item.paragraph}</p>
                    <div class="flex justify-between items-center">
                        <span class="text-sm py-1 rounded-full text-${item.tagClass}-400">${item.tag}</span>
                        <a href="/Web-Designs/sites/${item.link}" class="text-sm glass-card px-3 py-1 rounded-full hover:bg-purple-500/20 transition-colors">
                            View
                        </a>
                    </div>
                `;

        gridContainer.appendChild(portfolioItem);
    });
}

// Initialize the portfolio grid when the page loads
document.addEventListener('DOMContentLoaded', generatePortfolioGrid);