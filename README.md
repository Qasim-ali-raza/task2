# JSONPlaceholder User Filter (Task 2)

A clean Node.js (ES6+) script that fetches mock user data from the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/users), filters users based on specific keywords in their company catchphrase, and formats the output using object destructuring.

## 🚀 Features
- **Asynchronous Fetch**: Uses native ES6 `async/await` and `fetch` to retrieve API data.
- **Regex Filtering**: Performs case-insensitive searches (`/group|service/i`) on company `catchPhrase` properties.
- **ES6 Object Destructuring**: Unpacks properties directly, including nested destructuring for `address.city`.
- **Formatted Output**: Maps filtered records into clean output strings: `"User: [Name] | Email: [Email] | City: [City]"`.

## 🛠️ Tech Stack
- **Node.js** (v18+)
- **JavaScript (ES6+)**
- **JSONPlaceholder REST API**
