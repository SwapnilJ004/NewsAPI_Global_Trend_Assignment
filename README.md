GLOBAL TREND – API Integration Assignment
Submission by: Swapnil Joshi

This repository contains my submission for the GLOBAL TREND – API Integration Internship task.

The project is a small HTML/CSS/JavaScript web app that consumes a public REST API, fetches data from 2 endpoints, and displays it in a clean, filterable UI with proper error handling.

# 1. Tech Stack

  Frontend: HTML, CSS, Vanilla JavaScript (ES6+)
  
  Backend: None (pure client-side; uses fetch to call the public API)

  No build tools / frameworks required

# 2. How to Run the Application

  You can run it either by directly opening index.html in a browser or (recommended) by using a simple local server.

  Option A – Quick Start (open file)
  
  - Download or clone this repository:
  
  - git clone https://github.com/SwapnilJ004/NewsAPI_Global_Trend_Assignment.git
  - cd NewsAPI_Global_Trend_Assignment

  - Double-click index.html to open it in your browser.

  If you see errors related to CORS or blocked requests, please use Option B.

Option B – Run using a local server

  Any simple static server will work. Here are two easy options:
  
  - Using Python (comes preinstalled on many systems)
  - For Python 3: python -m http.server 5500

  - or, for Python 2: python -m SimpleHTTPServer 5500

  Then open your browser and go to:

  http://localhost:5500

** Using VS Code Live Server (GUI way)

  - Open the project folder in VS Code.
  
  - Install the “Live Server” extension (if not already installed).
  
  - Right-click index.html → “Open with Live Server”.
  
  - Your default browser will open the running app.

# 3. Project Structure
```.
├── index.html        # Main HTML page & root layout
├── news.html         # Detailed view page for individual news content
├── styles.css        # All custom styling
├── newsAPI.js        # API calls (fetch logic, endpoints, error handling)
└── README.md         # Documentation
```

# 4. Public API & Endpoints Used

This application uses NewsData.io (https://newsdata.io/documentation) News API to demonstrate:

- Fetching from two different endpoints: /latest and /market

- Listing data with filters

- Showing a detailed view for a single item (via index)


| Purpose | HTTP Method | Endpoint | Description |
| :---: | :---: | :---: | :---: |
| Get latest News | GET | https://newsdata.io/api/1/latest?apikey=<api_key> | Provides access to the latest and breaking news, sorted by the published date up to the past 48 hours |
| Get Market News | GET | https://newsdata.io/api/1/market?apikey=<api_key> | Provides access to the latest and most relevant financial news, stock market news, and business-related news |

The API key is stored in variable API_key in newsApi.js and is constant.

Reviewers can create their own key from the API provider and replace the placeholder value.

# 5. Features & Filters Implemented

The UI demonstrates the following:

- Data listing

  Displays a list view fetched from the API.
  
- Filtering options
  
  Filter by:
  Search (Keyword filtering based on search keywords)
  
  Filters are applied on the client side, using data returned from the API.

- Detailed view
  
  Clicking on an item heading shows a separate section with more information.
  
  The detail view is powered by the same API call by storing the indexed item in the browser's local storage as a key-value pair.

# 6. The app includes basic error handling for:

  - Network errors (e.g. no internet, server down, other error)
  
  - Shows a user-friendly message like “Unable to fetch news”
  
  - Invalid / unexpected responses
  
  - Handles non-200 status codes.
  
  - Handles missing or malformed fields with fallback values (N/A).
  
  - Timeouts / slow responses
  
  - All errors are handled in newsApi.js and surfaced to the UI via newsApi.js

# 7. Assumptions & Notes

  - The application is tested on modern browsers (Chrome / Edge / Firefox).
  
  - Data shown in the UI is entirely dependent on the public API’s availability and rate limits.
  
  - Since this is a front-end only project, no backend or database is used; all state is in memory.
  
  - Any sample data, screenshots, or test outputs are for demonstration only and may differ from live API data.

# 8. How to Use the App (for Reviewer)

  - Open the app using any of the run options above.
  
  - Wait for the initial data to load; you’ll see the main list.
  
  - Use the search box / filter dropdowns to filter results.
  
  - Click on an item heading to open its detailed view.
  
  - If an error occurs, an error message is shown instead of breaking the page.

**Screenshots of the working app are uploaded here: https://drive.google.com/drive/folders/1FBncP7dXOK-GVgv5m5Z72mZKL13gAPYY?usp=sharing**
