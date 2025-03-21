document.addEventListener('DOMContentLoaded', function() {
    // Close banner functionality
    const closeBanner = document.querySelector('.close-banner');
    const businessBanner = document.querySelector('.business-banner');
    
    if (closeBanner && businessBanner) {
        closeBanner.addEventListener('click', function() {
            businessBanner.style.display = 'none';
        });
    }
    
    // Locate me button functionality
    const locateBtn = document.querySelector('.locate-btn');
    
    if (locateBtn) {
        locateBtn.addEventListener('click', function() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    function(position) {
                        // In a real app, you would use the coordinates to get the address
                        // For this demo, we'll just show an alert
                        alert('Location detected! In a real app, this would fill in your address.');
                    },
                    function(error) {
                        alert('Unable to get your location. Please enter your address manually.');
                    }
                );
            } else {
                alert('Geolocation is not supported by your browser. Please enter your address manually.');
            }
        });
    }
    
    // Find food button functionality
    const findFoodBtn = document.querySelector('.find-food-btn');
    const addressInput = document.querySelector('.search-input input');
    
    if (findFoodBtn && addressInput) {
        findFoodBtn.addEventListener('click', function() {
            const address = addressInput.value.trim();
            if (address) {
                alert(`Searching for food near: ${address}`);
                // In a real app, this would redirect to the restaurant listing page
            } else {
                alert('Please enter your address to find food near you.');
            }
        });
    }
    
    // Language selector dropdown (simplified for demo)
    const languageSelector = document.querySelector('.language-selector');
    
    if (languageSelector) {
        languageSelector.addEventListener('click', function() {
            alert('Language selection would appear here in a real app.');
        });
    }
});
document.addEventListener('DOMContentLoaded', function() {
    // Login button functionality
    const loginBtn = document.querySelector('.login-btn');
    if (loginBtn) {
        loginBtn.addEventListener('click', function(e) {
            e.preventDefault();
            // In a real app, this would open a login modal or redirect to login page
            console.log('Login button clicked');
            
            // Example: Show a simple modal (you would replace this with your actual login form)
            showModal('Login to foodpanda', `
                <form id="login-form">
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" placeholder="Enter your email" required>
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" id="password" placeholder="Enter your password" required>
                    </div>
                    <div class="form-actions">
                        <button type="submit" class="submit-btn">Log in</button>
                    </div>
                    <div class="form-footer">
                        <a href="#" class="forgot-password">Forgot password?</a>
                    </div>
                </form>
            `);
        });
    }
    
    // Sign up button functionality
    const signupBtn = document.querySelector('.signup-btn');
    if (signupBtn) {
        signupBtn.addEventListener('click', function(e) {
            e.preventDefault();
            // In a real app, this would open a signup modal or redirect to signup page
            console.log('Signup button clicked');
            
            // Example: Show a simple modal (you would replace this with your actual signup form)
            showModal('Create an account', `
                <form id="signup-form">
                    <div class="form-group">
                        <label for="new-email">Email</label>
                        <input type="email" id="new-email" placeholder="Enter your email" required>
                    </div>
                    <div class="form-group">
                        <label for="new-password">Password</label>
                        <input type="password" id="new-password" placeholder="Create a password" required>
                    </div>
                    <div class="form-group">
                        <label for="name">Full Name</label>
                        <input type="text" id="name" placeholder="Enter your full name" required>
                    </div>
                    <div class="form-actions">
                        <button type="submit" class="submit-btn">Create account</button>
                    </div>
                    <div class="form-footer">
                        <p>By creating an account, you agree to our <a href="#">Terms and Conditions</a></p>
                    </div>
                </form>
            `);
        });
    }
    
    // Language selector dropdown functionality
    const languageSelector = document.querySelector('.language-selector');
    if (languageSelector) {
        // Create language dropdown element
        const dropdown = document.createElement('div');
        dropdown.className = 'language-dropdown';
        dropdown.innerHTML = `
            <ul>
                <li data-lang="en" class="active">English</li>
                <li data-lang="tl">Filipino</li>
                <li data-lang="ceb">Cebuano</li>
            </ul>
        `;
        dropdown.style.display = 'none';
        
        // Append dropdown to language selector
        languageSelector.appendChild(dropdown);
        
        // Toggle dropdown on click
        languageSelector.addEventListener('click', function(e) {
            e.stopPropagation();
            const isVisible = dropdown.style.display === 'block';
            dropdown.style.display = isVisible ? 'none' : 'block';
        });
        
        // Handle language selection
        dropdown.addEventListener('click', function(e) {
            if (e.target.tagName === 'LI') {
                const lang = e.target.getAttribute('data-lang');
                const langText = e.target.textContent;
                
                // Update selected language
                const langSpan = languageSelector.querySelector('span:nth-child(2)');
                if (langSpan) {
                    langSpan.textContent = lang.toUpperCase();
                }
                
                // Update active class
                dropdown.querySelectorAll('li').forEach(li => {
                    li.classList.remove('active');
                });
                e.target.classList.add('active');
                
                // Close dropdown
                dropdown.style.display = 'none';
                
                console.log(`Language changed to: ${langText} (${lang})`);
            }
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', function() {
            dropdown.style.display = 'none';
        });
    }
    
    // Helper function to show a modal
    function showModal(title, content) {
        // Create modal container if it doesn't exist
        let modalContainer = document.getElementById('modal-container');
        if (!modalContainer) {
            modalContainer = document.createElement('div');
            modalContainer.id = 'modal-container';
            document.body.appendChild(modalContainer);
            
            // Add modal styles if not already in CSS
            const style = document.createElement('style');
            style.textContent = `
                #modal-container {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0, 0, 0, 0.5);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    z-index: 1000;
                }
                .modal {
                    background-color: white;
                    border-radius: 8px;
                    width: 90%;
                    max-width: 400px;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                    overflow: hidden;
                }
                .modal-header {
                    padding: 16px;
                    border-bottom: 1px solid #eee;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                .modal-title {
                    font-weight: 600;
                    font-size: 18px;
                    color: #333;
                }
                .modal-close {
                    background: none;
                    border: none;
                    font-size: 20px;
                    cursor: pointer;
                    color: #666;
                }
                .modal-body {
                    padding: 20px;
                }
                .form-group {
                    margin-bottom: 16px;
                }
                .form-group label {
                    display: block;
                    margin-bottom: 6px;
                    font-weight: 500;
                    color: #333;
                }
                .form-group input {
                    width: 100%;
                    padding: 10px;
                    border: 1px solid #ddd;
                    border-radius: 4px;
                    font-size: 14px;
                }
                .form-actions {
                    margin-top: 24px;
                }
                .submit-btn {
                    width: 100%;
                    padding: 12px;
                    background-color: #D70F64;
                    color: white;
                    border: none;
                    border-radius: 4px;
                    font-weight: 600;
                    cursor: pointer;
                }
                .submit-btn:hover {
                    background-color: #c00c58;
                }
                .form-footer {
                    margin-top: 16px;
                    text-align: center;
                    font-size: 13px;
                    color: #666;
                }
                .form-footer a {
                    color: #D70F64;
                    text-decoration: none;
                }
            `;
            document.head.appendChild(style);
        }
        
        // Create modal content
        modalContainer.innerHTML = `
            <div class="modal">
                <div class="modal-header">
                    <div class="modal-title">${title}</div>
                    <button class="modal-close">&times;</button>
                </div>
                <div class="modal-body">
                    ${content}
                </div>
            </div>
        `;
        
        // Show modal
        modalContainer.style.display = 'flex';
        
        // Close modal when clicking the close button
        const closeBtn = modalContainer.querySelector('.modal-close');
        if (closeBtn) {
            closeBtn.addEventListener('click', function() {
                modalContainer.style.display = 'none';
            });
        }
        
        // Close modal when clicking outside
        modalContainer.addEventListener('click', function(e) {
            if (e.target === modalContainer) {
                modalContainer.style.display = 'none';
            }
        });
        
        // Handle form submission
        const form = modalContainer.querySelector('form');
        if (form) {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                console.log('Form submitted:', new FormData(form));
                alert('Form submitted successfully! (This is just a demo)');
                modalContainer.style.display = 'none';
            });
        }
    }
});
document.addEventListener('DOMContentLoaded', function() {
    // Get all the elements we need
    const minusBtn = document.querySelector('.minus-btn');
    const plusBtn = document.querySelector('.plus-btn');
    const quantitySpan = document.querySelector('.quantity');
    const addToCartBtn = document.querySelector('.add-to-cart-btn');
    
    // Set initial quantity
    let quantity = 1;
    
    // Function to update the UI
    function updateUI() {
      quantitySpan.textContent = quantity;
      minusBtn.disabled = quantity <= 1;
    }
    
    // Event listener for minus button
    minusBtn.addEventListener('click', function() {
      if (quantity > 1) {
        quantity--;
        updateUI();
      }
    });
    
    // Event listener for plus button
    plusBtn.addEventListener('click', function() {
      quantity++;
      updateUI();
    });
    
    // Event listener for add to cart button
    addToCartBtn.addEventListener('click', function() {
      console.log(`Added ${quantity} Chickenjoy Bucket(s) to cart`);
      
      // Provide user feedback
      const originalText = addToCartBtn.textContent;
      addToCartBtn.textContent = 'Added!';
      
      // Reset after a brief moment
      setTimeout(function() {
        addToCartBtn.textContent = originalText;
      }, 2000);
      
      // Here you would typically add the item to your cart data structure
      // For example:
      // cart.push({
      //   name: 'Chickenjoy Bucket',
      //   price: 450,
      //   quantity: quantity
      // });
    });
    
    // Initialize UI
    updateUI();
  });