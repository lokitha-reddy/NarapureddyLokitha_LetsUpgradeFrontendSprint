// Mock Data
const categories = [
    {
        id: 'appetizers',
        name: 'Appetizers',
        description: 'Start your meal right',
        image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
        count: 24
    },
    {
        id: 'main-courses',
        name: 'Main Courses',
        description: 'Hearty and satisfying dishes',
        image: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=400',
        count: 45
    },
    {
        id: 'desserts',
        name: 'Desserts',
        description: 'Sweet endings to perfect meals',
        image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=400',
        count: 32
    },
    {
        id: 'beverages',
        name: 'Beverages',
        description: 'Refreshing drinks and cocktails',
        image: 'https://images.pexels.com/photos/544961/pexels-photo-544961.jpeg?auto=compress&cs=tinysrgb&w=400',
        count: 18
    }
];

const recipes = [
    {
        id: '1',
        title: 'Creamy Mushroom Risotto',
        description: 'A rich and creamy Italian classic made with arborio rice, wild mushrooms, and parmesan cheese.',
        image: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=600',
        cookTime: 25,
        prepTime: 15,
        servings: 4,
        difficulty: 'Medium',
        category: 'main-courses',
        tags: ['Italian', 'Vegetarian', 'Comfort Food'],
        ingredients: [
            '1½ cups arborio rice',
            '4 cups warm vegetable broth',
            '1 lb mixed mushrooms, sliced',
            '1 medium onion, finely chopped',
            '3 cloves garlic, minced',
            '½ cup dry white wine',
            '½ cup grated parmesan cheese',
            '3 tbsp butter',
            '2 tbsp olive oil',
            'Salt and pepper to taste',
            'Fresh parsley for garnish'
        ],
        instructions: [
            'Heat olive oil in a large pan and sauté mushrooms until golden. Set aside.',
            'In the same pan, melt 1 tbsp butter and cook onion until translucent.',
            'Add garlic and rice, stirring for 2 minutes until rice is lightly toasted.',
            'Pour in wine and stir until absorbed.',
            'Add warm broth one ladle at a time, stirring constantly until absorbed.',
            'Continue for 18-20 minutes until rice is creamy and al dente.',
            'Stir in mushrooms, remaining butter, and parmesan.',
            'Season with salt and pepper, garnish with parsley and serve immediately.'
        ],
        author: 'Chef Maria',
        publishedAt: '2024-01-15',
        rating: 4.8,
        reviews: 127
    },
    {
        id: '2',
        title: 'Chocolate Lava Cake',
        description: 'Decadent individual chocolate cakes with a molten center that flows like lava when cut.',
        image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=600',
        cookTime: 12,
        prepTime: 20,
        servings: 4,
        difficulty: 'Medium',
        category: 'desserts',
        tags: ['Chocolate', 'Dessert', 'Individual Portions'],
        ingredients: [
            '4 oz dark chocolate, chopped',
            '4 tbsp unsalted butter',
            '2 large eggs',
            '2 large egg yolks',
            '¼ cup granulated sugar',
            '2 tbsp all-purpose flour',
            'Pinch of salt',
            'Butter for ramekins',
            'Cocoa powder for dusting',
            'Vanilla ice cream for serving'
        ],
        instructions: [
            'Preheat oven to 425°F. Butter four 6-oz ramekins and dust with cocoa powder.',
            'Melt chocolate and butter in a double boiler until smooth.',
            'In a bowl, whisk eggs, egg yolks, and sugar until thick and pale.',
            'Stir in melted chocolate mixture, then fold in flour and salt.',
            'Divide batter among prepared ramekins.',
            'Bake for 12-14 minutes until edges are firm but centers jiggle slightly.',
            'Let cool for 1 minute, then run a knife around edges and invert onto plates.',
            'Serve immediately with vanilla ice cream.'
        ],
        author: 'Chef Antoine',
        publishedAt: '2024-01-12',
        rating: 4.9,
        reviews: 89
    },
    {
        id: '3',
        title: 'Mediterranean Quinoa Salad',
        description: 'A fresh and healthy salad packed with quinoa, vegetables, feta cheese, and a zesty lemon dressing.',
        image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
        cookTime: 15,
        prepTime: 20,
        servings: 6,
        difficulty: 'Easy',
        category: 'appetizers',
        tags: ['Healthy', 'Mediterranean', 'Vegetarian', 'Gluten-Free'],
        ingredients: [
            '1 cup quinoa, rinsed',
            '2 cups vegetable broth',
            '1 cucumber, diced',
            '2 tomatoes, diced',
            '½ red onion, finely chopped',
            '½ cup kalamata olives, pitted and halved',
            '½ cup feta cheese, crumbled',
            '¼ cup fresh parsley, chopped',
            '¼ cup fresh mint, chopped',
            '3 tbsp olive oil',
            '2 tbsp lemon juice',
            '1 tsp dried oregano',
            'Salt and pepper to taste'
        ],
        instructions: [
            'Cook quinoa in vegetable broth according to package directions. Let cool.',
            'In a large bowl, combine cooled quinoa, cucumber, tomatoes, and red onion.',
            'Add olives, feta cheese, parsley, and mint.',
            'In a small bowl, whisk together olive oil, lemon juice, oregano, salt, and pepper.',
            'Pour dressing over salad and toss gently to combine.',
            'Refrigerate for at least 30 minutes before serving.',
            'Serve chilled as a side dish or light lunch.'
        ],
        author: 'Chef Elena',
        publishedAt: '2024-01-10',
        rating: 4.7,
        reviews: 156
    }
];

const blogPosts = [
    {
        id: '1',
        title: 'The Art of Perfect Pasta: Tips from Italian Grandmothers',
        excerpt: 'Discover the secrets behind authentic Italian pasta-making techniques passed down through generations.',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
        image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=600',
        author: 'Chef Maria',
        publishedAt: '2024-01-18',
        readTime: 8,
        category: 'Techniques',
        tags: ['Italian', 'Pasta', 'Traditional']
    },
    {
        id: '2',
        title: 'Seasonal Cooking: Making the Most of Winter Produce',
        excerpt: 'Learn how to create delicious meals using the best winter vegetables and fruits available.',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
        image: 'https://images.pexels.com/photos/1640771/pexels-photo-1640771.jpeg?auto=compress&cs=tinysrgb&w=600',
        author: 'Chef David',
        publishedAt: '2024-01-16',
        readTime: 6,
        category: 'Seasonal',
        tags: ['Winter', 'Vegetables', 'Seasonal']
    },
    {
        id: '3',
        title: 'Mastering the Perfect Sourdough Starter',
        excerpt: 'A comprehensive guide to creating and maintaining a healthy sourdough starter for amazing bread.',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
        image: 'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=600',
        author: 'Chef Sarah',
        publishedAt: '2024-01-14',
        readTime: 12,
        category: 'Baking',
        tags: ['Sourdough', 'Bread', 'Fermentation']
    }
];

// State Management
let currentSearchQuery = '';
let currentSelectedCategory = null;
let filteredRecipes = [...recipes];

// DOM Elements
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileNav = document.getElementById('mobileNav');
const menuIcon = document.getElementById('menuIcon');
const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');
const mobileSearchForm = document.getElementById('mobileSearchForm');
const mobileSearchInput = document.getElementById('mobileSearchInput');
const categoriesGrid = document.getElementById('categoriesGrid');
const recipesGrid = document.getElementById('recipesGrid');
const recipesTitle = document.getElementById('recipesTitle');
const recipesDescription = document.getElementById('recipesDescription');
const backToAllRecipes = document.getElementById('backToAllRecipes');
const noResults = document.getElementById('noResults');
const viewAllRecipes = document.getElementById('viewAllRecipes');
const blogGrid = document.getElementById('blogGrid');
const newsletterForm = document.getElementById('newsletterForm');
const newsletterEmail = document.getElementById('newsletterEmail');
const newsletterBtn = document.getElementById('newsletterBtn');
const newsletterBtnText = document.getElementById('newsletterBtnText');
const newsletterCheck = document.getElementById('newsletterCheck');
const recipeModal = document.getElementById('recipeModal');
const modalClose = document.getElementById('modalClose');

// Utility Functions
function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString();
}

function getDifficultyClass(difficulty) {
    switch (difficulty) {
        case 'Easy': return 'difficulty-easy';
        case 'Medium': return 'difficulty-medium';
        case 'Hard': return 'difficulty-hard';
        default: return 'difficulty-easy';
    }
}

// Mobile Menu Toggle
mobileMenuBtn.addEventListener('click', () => {
    const isOpen = mobileNav.classList.contains('active');
    
    if (isOpen) {
        mobileNav.classList.remove('active');
        menuIcon.setAttribute('data-lucide', 'menu');
    } else {
        mobileNav.classList.add('active');
        menuIcon.setAttribute('data-lucide', 'x');
    }
    
    lucide.createIcons();
});

// Search Functionality
function handleSearch(query) {
    currentSearchQuery = query;
    currentSelectedCategory = null;
    filterRecipes();
    updateRecipesSection();
}

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    handleSearch(searchInput.value);
});

mobileSearchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    handleSearch(mobileSearchInput.value);
    mobileNav.classList.remove('active');
    menuIcon.setAttribute('data-lucide', 'menu');
    lucide.createIcons();
});

// Category Functionality
function handleCategoryClick(categoryId) {
    currentSelectedCategory = categoryId;
    currentSearchQuery = '';
    searchInput.value = '';
    mobileSearchInput.value = '';
    filterRecipes();
    updateRecipesSection();
}

// Recipe Filtering
function filterRecipes() {
    filteredRecipes = recipes.filter(recipe => {
        let matchesSearch = true;
        let matchesCategory = true;

        if (currentSearchQuery) {
            const query = currentSearchQuery.toLowerCase();
            matchesSearch = 
                recipe.title.toLowerCase().includes(query) ||
                recipe.description.toLowerCase().includes(query) ||
                recipe.tags.some(tag => tag.toLowerCase().includes(query));
        }

        if (currentSelectedCategory) {
            matchesCategory = recipe.category === currentSelectedCategory;
        }

        return matchesSearch && matchesCategory;
    });
}

// Update Recipes Section
function updateRecipesSection() {
    if (currentSelectedCategory) {
        const category = categories.find(c => c.id === currentSelectedCategory);
        recipesTitle.textContent = `${category.name} Recipes`;
        recipesDescription.textContent = category.description;
        backToAllRecipes.style.display = 'block';
    } else if (currentSearchQuery) {
        recipesTitle.textContent = `Search Results for "${currentSearchQuery}"`;
        recipesDescription.textContent = `Found ${filteredRecipes.length} recipe${filteredRecipes.length !== 1 ? 's' : ''}`;
        backToAllRecipes.style.display = 'block';
    } else {
        recipesTitle.textContent = 'Featured Recipes';
        recipesDescription.textContent = 'Discover our most popular and delicious recipes';
        backToAllRecipes.style.display = 'none';
    }

    renderRecipes();
}

// Back to All Recipes
backToAllRecipes.addEventListener('click', () => {
    currentSelectedCategory = null;
    currentSearchQuery = '';
    searchInput.value = '';
    mobileSearchInput.value = '';
    filteredRecipes = [...recipes];
    updateRecipesSection();
});

viewAllRecipes.addEventListener('click', () => {
    currentSelectedCategory = null;
    currentSearchQuery = '';
    searchInput.value = '';
    mobileSearchInput.value = '';
    filteredRecipes = [...recipes];
    updateRecipesSection();
});

// Render Functions
function renderCategories() {
    categoriesGrid.innerHTML = categories.map(category => `
        <div class="category-card" onclick="handleCategoryClick('${category.id}')">
            <div class="category-image">
                <img src="${category.image}" alt="${category.name}">
            </div>
            <div class="category-overlay"></div>
            <div class="category-content">
                <h3>${category.name}</h3>
                <p>${category.description}</p>
                <div class="category-footer">
                    <span class="category-count">${category.count} recipes</span>
                    <span class="category-explore">Explore →</span>
                </div>
            </div>
        </div>
    `).join('');
}

function renderRecipes() {
    if (filteredRecipes.length === 0) {
        recipesGrid.style.display = 'none';
        noResults.style.display = 'block';
        return;
    }

    recipesGrid.style.display = 'grid';
    noResults.style.display = 'none';

    recipesGrid.innerHTML = filteredRecipes.map(recipe => `
        <div class="recipe-card" onclick="openRecipeModal('${recipe.id}')">
            <div class="recipe-image">
                <img src="${recipe.image}" alt="${recipe.title}">
                <div class="recipe-difficulty ${getDifficultyClass(recipe.difficulty)}">
                    ${recipe.difficulty}
                </div>
                <div class="recipe-rating">
                    <i data-lucide="star"></i>
                    <span>${recipe.rating}</span>
                </div>
            </div>

            <div class="recipe-content">
                <div>
                    <h3 class="recipe-title">${recipe.title}</h3>
                    <p class="recipe-description">${recipe.description}</p>
                </div>

                <div class="recipe-meta">
                    <div class="recipe-meta-item">
                        <i data-lucide="clock"></i>
                        <span>${recipe.cookTime + recipe.prepTime} min</span>
                    </div>
                    <div class="recipe-meta-item">
                        <i data-lucide="users"></i>
                        <span>${recipe.servings} servings</span>
                    </div>
                    <div class="recipe-meta-item">
                        <i data-lucide="chef-hat"></i>
                        <span>${recipe.author}</span>
                    </div>
                </div>

                <div class="recipe-tags">
                    ${recipe.tags.slice(0, 3).map(tag => `
                        <span class="recipe-tag">${tag}</span>
                    `).join('')}
                    ${recipe.tags.length > 3 ? `<span class="recipe-tag more">+${recipe.tags.length - 3} more</span>` : ''}
                </div>

                <div class="recipe-footer">
                    <span class="recipe-reviews">${recipe.reviews} reviews</span>
                    <a href="#" class="recipe-link">View Recipe →</a>
                </div>
            </div>
        </div>
    `).join('');

    lucide.createIcons();
}

function renderBlogPosts() {
    blogGrid.innerHTML = blogPosts.map(post => `
        <article class="blog-card" onclick="handleBlogClick('${post.id}')">
            <div class="blog-image">
                <img src="${post.image}" alt="${post.title}">
                <div class="blog-category">${post.category}</div>
            </div>

            <div class="blog-content">
                <div class="blog-meta">
                    <div class="blog-meta-item">
                        <i data-lucide="calendar"></i>
                        <span>${formatDate(post.publishedAt)}</span>
                    </div>
                    <div class="blog-meta-item">
                        <i data-lucide="clock"></i>
                        <span>${post.readTime} min read</span>
                    </div>
                </div>

                <div>
                    <h3 class="blog-title">${post.title}</h3>
                    <p class="blog-excerpt">${post.excerpt}</p>
                </div>

                <div class="blog-tags">
                    ${post.tags.slice(0, 3).map(tag => `
                        <span class="blog-tag">${tag}</span>
                    `).join('')}
                </div>

                <div class="blog-footer">
                    <div class="blog-author">
                        <i data-lucide="user"></i>
                        <span>${post.author}</span>
                    </div>
                    <a href="#" class="blog-link">Read More →</a>
                </div>
            </div>
        </article>
    `).join('');

    lucide.createIcons();
}

// Recipe Modal
function openRecipeModal(recipeId) {
    const recipe = recipes.find(r => r.id === recipeId);
    if (!recipe) return;

    // Update modal content
    document.getElementById('modalImage').src = recipe.image;
    document.getElementById('modalImage').alt = recipe.title;
    document.getElementById('modalTitle').textContent = recipe.title;
    document.getElementById('modalDescription').textContent = recipe.description;
    
    const modalDifficulty = document.getElementById('modalDifficulty');
    modalDifficulty.textContent = recipe.difficulty;
    modalDifficulty.className = `modal-difficulty ${getDifficultyClass(recipe.difficulty)}`;

    // Update info section
    document.getElementById('modalInfo').innerHTML = `
        <div class="modal-info-item">
            <i data-lucide="clock"></i>
            <span>Prep: ${recipe.prepTime} min</span>
        </div>
        <div class="modal-info-item">
            <i data-lucide="clock"></i>
            <span>Cook: ${recipe.cookTime} min</span>
        </div>
        <div class="modal-info-item">
            <i data-lucide="users"></i>
            <span>${recipe.servings} servings</span>
        </div>
        <div class="modal-info-item">
            <i data-lucide="chef-hat"></i>
            <span>${recipe.author}</span>
        </div>
        <div class="modal-info-item">
            <i data-lucide="star"></i>
            <span>${recipe.rating} (${recipe.reviews} reviews)</span>
        </div>
    `;

    // Update tags
    document.getElementById('modalTags').innerHTML = recipe.tags.map(tag => `
        <span class="modal-tag">${tag}</span>
    `).join('');

    // Update ingredients
    document.getElementById('modalIngredients').innerHTML = recipe.ingredients.map(ingredient => `
        <li>
            <div class="ingredient-bullet"></div>
            <span>${ingredient}</span>
        </li>
    `).join('');

    // Update instructions
    document.getElementById('modalInstructions').innerHTML = recipe.instructions.map((instruction, index) => `
        <div class="instruction-item">
            <div class="instruction-number">${index + 1}</div>
            <p class="instruction-text">${instruction}</p>
        </div>
    `).join('');

    recipeModal.classList.add('active');
    lucide.createIcons();
}

function closeRecipeModal() {
    recipeModal.classList.remove('active');
}

modalClose.addEventListener('click', closeRecipeModal);

recipeModal.addEventListener('click', (e) => {
    if (e.target === recipeModal) {
        closeRecipeModal();
    }
});

// Blog Post Click Handler
function handleBlogClick(postId) {
    console.log('Navigate to blog post:', postId);
    // In a real app, this would navigate to the full blog post
}

// Newsletter Subscription
newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if (newsletterEmail.value) {
        newsletterBtnText.style.display = 'none';
        newsletterCheck.style.display = 'inline';
        newsletterBtn.disabled = true;
        newsletterBtnText.textContent = 'Subscribed!';
        
        setTimeout(() => {
            newsletterBtnText.style.display = 'inline';
            newsletterCheck.style.display = 'none';
            newsletterBtn.disabled = false;
            newsletterBtnText.textContent = 'Subscribe';
            newsletterEmail.value = '';
        }, 3000);
    }
});

// Mobile Navigation Links
document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
        mobileNav.classList.remove('active');
        menuIcon.setAttribute('data-lucide', 'menu');
        lucide.createIcons();
    });
});

// Initialize App
function initApp() {
    renderCategories();
    renderRecipes();
    renderBlogPosts();
    lucide.createIcons();
}

// Start the app when DOM is loaded
document.addEventListener('DOMContentLoaded', initApp);