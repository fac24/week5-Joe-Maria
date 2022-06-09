# Couch Potato: a quiz app

FAC 24 week 5 project: Joe & Maria

## How to use:

- Visit the deployed site on Netlify: https://fac24-week5-joe-maria.netlify.app/
- Pick a category
- Choose the number of questions
- Click "Generate quiz"
- Read the clues
- See if you can work out the answers
- Click "Reveal" next to a clue if you want to see the answer

## Known issues:

- Random question selection is working in our latest branch, but not deployed yet :)
- The free quiz API we're using is OK, but it's not brilliant. There might be all sorts of weird typos in the clues/answers!
- You should receive a different set of questions most of the time, but the randomiser isn't great and the total number of questions isn't huge, so you'll probably see some repetition.

## Possible next steps:

- More advanced quiz generation: not just a random starting point from a list of clues, but each clue selected randomly.
- Multiple categories for a single quiz.
- "Pausing"/"saving" a game (or multiple games).

### User stories:
- As a user, I want to generate a quiz.
- As a user, I want to decide how many questions are in the quiz.
- As a user, I want to choose at least one category of question for my quiz.
- As a user, I don't want to see the quiz answers until I'm ready!
- As a user, I want to see different questions each time I make a quiz.
