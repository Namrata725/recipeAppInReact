# recipeAppInReact

A simple React-based food recipe app that fetches meal information from the [TheMealDB API](https://www.themealdb.com/api.php). Users can search for dishes and view detailed instructions and images.

---

## Features

- Search any dish/meal by name
- See a list of matching meals with images
- Click on any meal to view full recipe details
- Fetches real-time data using **TheMealDB API**
- Error and empty input handling

---

## Technologies Used

- **React**
- **React Router DOM**
- **CSS** (custom styles)
- **TheMealDB API**

---

## Folder Structure

```
recipeAppInReact/
├── component/
│   ├── MainPage.jsx       # Main search page
│   ├── Mealcard.jsx       # Shows meal cards from search results
│   └── MealInfo.jsx       # Detailed recipe view
├── css/
│   ├── MainPage.css
│   ├── Mealcard.css
│   └── mealInfo.css
├── App.jsx                # Routing logic
├── main.jsx               # App entry point
└── ...
```

---
## How It Works

1. **Search for a meal** using the input field
2. If found, a list of matching dishes is shown
3. Click “Recipe” to see full instructions, image, and title
4. If search is empty, the app prompts for input
5. If no results are found, a "No data found" message is displayed
6. Uses React state and `useEffect` for managing API calls and routing
---

---

## Setup Instructions

1. **Clone the repository**  
   ```bash
   git clone https://github.com/yourusername/recipeAppInReact.git
   cd recipeAppInReact
   ```

2. **Install dependencies**  
   ```bash
   npm install
   ```

3. **Run the app locally**  
   ```bash
   npm run dev
   ```
4. **install react-router-dom**
     ```bash
   npm install react-router-dom
   ```

---

## Credits

- Meal data provided by [TheMealDB](https://www.themealdb.com/)
