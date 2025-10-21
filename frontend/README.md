# eCommerce Project Frontend

A feature-rich React eCommerce application with full-stack integration.

## Project Structure

```
frontend/
├── src/
│   ├── components/          # Reusable UI components
│   ├── pages/
│   │   ├── home/           # Product listing and search
│   │   ├── checkout/       # Cart review and payment
│   │   ├── orders/         # Order history
│   │   └── tracking/       # Package tracking
│   ├── utils/              # Helper functions
│   └── App.jsx             # Main routing component
└── public/images/          # Product images and assets
```

## React Concepts Implemented

### Core React
- **Functional Components** - Modern React with hooks
- **JSX & Component Composition** - Complex UI structures
- **Props & State Management** - Data flow with useState/useEffect
- **Conditional Rendering** - Dynamic UI based on state
- **List Rendering** - Product grids, cart items, orders

### Advanced Patterns
- **React Router** - Multi-page SPA with nested routes
- **URL Parameters** - Dynamic routing for tracking pages
- **Component Organization** - Feature-based folder structure
- **Error Boundaries** - 404 page handling
- **Async Data Fetching** - API integration with axios

### UI/UX Features
- **Responsive Design** - Mobile-first CSS
- **Form Controls** - Quantity selectors, radio buttons
- **Interactive Elements** - Add to cart, delivery options
- **Navigation** - Header with cart counter
- **Loading States** - Handling async operations

## Tech Stack

- **React 19** - Latest React features
- **React Router** - Client-side routing
- **Vite** - Fast development build tool
- **Axios** - HTTP client for API calls
- **Day.js** - Date formatting
- **CSS3** - Custom styling with flexbox/grid