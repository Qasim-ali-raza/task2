// Fetch users from JSONPlaceholder API using native fetch (Node.js v18+)
async function getFilteredUsers() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const users = await response.json();

    // Regex to match "group" or "service" (case-insensitive: 'i' flag)
    const keywordRegex = /group|service/i;

    // Filter users based on company catchPhrase and transform into formatted strings
    const formattedUsers = users
      .filter(user => keywordRegex.test(user.company?.catchPhrase || ''))
      .map(user => {
        // Object Destructuring with nested destructuring for address.city
        const {
          name,
          email,
          address: { city }
        } = user;

        return `User: ${name} | Email: ${email} | City: ${city}`;
      });

    console.log('Filtered Users:');
    console.log(formattedUsers);
  } catch (error) {
    console.error('Error fetching user data:', error.message);
  }
}

// Execute the function
getFilteredUsers();