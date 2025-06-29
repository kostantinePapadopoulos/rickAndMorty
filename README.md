<!-- # Rick and Morty quiz app

<ins> </ins>

A simple React app that tests users on their knowledge of Rick
and Morty characters.

-Used Context provider for better scalability instead of state management on the game
-created customHook for game management (loading charactes, restart game, etc) attached to the context

# To install

Just run:
_npm install_

# Libraries Used

react-router-dom
tailwindcss -->

# Rick and Morty Quiz App

_Wubba Lubba Dub-Dub!_ Test your knowledge of the multiverse's most chaotic duo with this interactive character quiz!

## About

A simple React app that tests users on their knowledge of Rick
and Morty characters.

## Tech Stack

- **Frontend**: React 18+ with TypeScript
- **Routing**: React Router DOM
- **Styling**: Tailwind CSS
- **State Management**: React Context API
- **Data Fetching**: React Query (TanStack Query)
- **API**: Rick and Morty API

## Architecture

- **Context Provider**: Centralized game state management for scalability
- **Custom Hooks**: Reusable game logic (`useGameInitialization`)
- **TypeScript**: Full type safety throughout the application

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd rick-and-morty-quiz
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🎯 How to Play

1. **Start a New Game**: Click "Start a new game!" on the home screen
2. **Answer Questions**: Look at the character image and select the correct name
3. **Track Progress**: Watch your score and progress through the visual indicators
4. **Complete the Quiz**: Finish all 5 questions to see your final score
5. **Play Again**: Start a new game or continue from where you left off

## Acknowledgments

- [Rick and Morty API](https://rickandmortyapi.com/) for providing the character data
- Created by me! Konstantinos Papadopoulos

## Acknowledgments

- Created by me! Konstantinos Papadopoulos

_"Sometimes science is more art than science, Morty. A lot of people don't get that."_ - Rick Sanchez
