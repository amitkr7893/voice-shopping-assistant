# Voice Command Shopping Assistant

A voice-based shopping list manager that allows users to add, remove, search, and manage shopping items using natural voice commands, with smart suggestions, quantity handling, and multilingual support.


### 🔗 Deployed URL
https://voice-shopping-assistant-tau.vercel.app

### 🔗 GitHub Repository
https://github.com/amitkr7893/voice-shopping-assistant

## Brief Approach (≤ 200 words)

This project was designed as a voice-first shopping assistant focused on simplicity, usability, and real-world behavior. The application uses the browser’s Web Speech API for voice recognition, allowing users to interact naturally using spoken commands. To handle flexible phrasing and multilingual input, voice commands are normalized and processed through a lightweight NLP layer that extracts actions, items, and quantities.

Shopping data is stored in Firebase Firestore, providing a reliable cloud backend with persistence across sessions. Smart suggestions are generated based on shopping history, seasonal context, and predefined substitute mappings to enhance user experience. Quantity management supports both numeric and word-based inputs, making interactions more natural.

The frontend is built using React and Vite with a minimalist, mobile-friendly interface optimized for voice-only usage. Visual feedback is provided for recognized commands, system actions, and errors to maintain clarity. The application is deployed on Vercel with HTTPS enabled to ensure microphone access and production readiness.


## Features
Voice Input & NLP

Add, remove, and search items using voice commands

Supports flexible phrases such as:

“Add milk”

“Buy two water bottles”

“Remove apples from my list”

Natural Language Processing to extract action, item, and quantity

## Multilingual Support

English (en-IN)

Hindi (hi-IN)

Hindi commands are normalized internally to ensure consistent processing

## Shopping List Management

Add / Remove items via voice

Quantity management (supports both digits and word numbers)

Automatic item categorization (e.g., dairy, produce)

Persistent storage using Firebase Firestore

## Smart Suggestions

History-based recommendations

Seasonal product suggestions

Substitute suggestions (e.g., almond milk for milk)

## Voice-Activated Search

Search items by voice (e.g., “Search apples”)

Displays matching items instantly

## UI / UX

Minimalist and mobile-friendly interface

Real-time visual feedback for:

Recognized voice input

Performed actions

Errors and confirmations

Optimized for voice-first interaction

## Tech Stack

Frontend: React + Vite

Voice Recognition: Web Speech API

Backend / Database: Firebase Firestore (Google Cloud)

Hosting: Vercel

Styling: Custom CSS

## Local Setup
## Clone the Repository
```
git clone https://github.com/<username>/voice-shopping-assistant.git
```
```
cd voice-shopping-assistant
```
## Install Dependencies
```
npm install
```
## Configure Environment Variables

## Create a .env file in the project root:
```
VITE_FIREBASE_API_KEY=your_key
VITE_FIREBASE_AUTH_DOMAIN=your_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```
## Run Locally
```
npm run dev
```
Open: http://localhost:5173

## Deployment

Frontend deployed on Vercel

Backend powered by Firebase Firestore

HTTPS enabled (required for microphone access)