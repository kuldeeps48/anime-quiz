# Anime Quiz

A lightweight anime trivia quiz built with React and Vite.

## Features

- Multiple-choice questions with scoring and a results section.
- Prevents submission until all questions are answered.
- Loading state using `react-loading-indicators` (BlinkBlur).
- Confetti celebration for a perfect score via `react-confetti`.
- Clean styles in `src/index.css`.

## Tech Stack

- React + Vite
- react-confetti
- react-loading-indicators
- clsx
- he (HTML entity decoding)

## Getting Started

- Prerequisites: Node.js 18+ and npm.
- Install dependencies:
  - npm install
- Start dev server:
  - npm run dev
- Build for production:
  - npm run build
- Preview production build:
  - npm run preview

## Project Structure (high-level)

- src/Quiz.jsx — quiz UI, state management, scoring, loading, and confetti.
- src/index.css — global styles and loader/decoration classes.

## Notes

- Using https://opentdb.com API for quiz data.
- Ensure your quiz data provides fields like `question`, `incorrect_answers`, and correct answer handling as used in `Quiz.jsx`.
