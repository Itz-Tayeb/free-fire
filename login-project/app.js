// Supabase setup
const supabaseUrl = 'https://your-project-url.supabase.co'; // Replace with your actual Supabase URL
const supabaseKey = 'your-anon-public-key'; // Replace with your actual Supabase Anon Key
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

// Handle login function
async function handleLogin(event) {
    event.preventDefault();  // Prevent form from submitting normally
    
    // Get the email and password entered by the user
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Try logging in with Supabase
    const { user, error } = await supabase.auth.signInWithPassword({
        email,
        password
    });

    if (error) {
        // Show error message if login fails
        document.getElementById('message').textContent = `Error: ${error.message}`;
    } else {
        // Show success message and redirect to another page
        document.getElementById('message').textContent = 'Login Successful!';
        
        // Redirect to the reward page or another URL after login
        window.location.href = "https://reward.ff.garena.com/en";  // Replace with your redirect URL
    }
}
