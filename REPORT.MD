# FAC24 week 5 project report


# Project report


## Introduction

### What are you building?

A mini-game app built using React.js and an API (jhttps://jservice.io/). We opted for "Couch Potato", a pocket quiz.


### Why are you building it?

To learn about React.


## Project scope


### What are you not building? (stretch goals that were discarded?)

Some strech goals we condsidered but did not reach include:
- As a user, I want to choose multiple categories for my quiz
- As a user, I don't want to accidentally lose a quiz (aka pause and resume)


### How did you decide what features were important?

Having an application that provided a good user experince was important, and so was practicing the react concepts.

We initally wanted to have a minimal viable quiz game (generate quiz, see the questions and then see answers) and then go from there. 

## Project plan
 

### What order are you going to build in?

1. Game concept discussion
2. Project setup
3. Figma UI/UX sketches
4. Create user stories.
5. Basic structure and logic.
6. Begin on CSS and additional features to make game more FUN!
7. Adding in some strech goals.
8. Refectoring.
9. Accessabilty tests.

### How will you delegate work?

- Work on separate components at the same time.
- Sometimes share screen to pair on the same goal.


## Project learnings:

### Did your team work effectively?

Yes. :slightly_smiling_face: 


### What would you do differently next time?

- Maybe spend a bit more time up-front thinking of a more _exciting_ game concept? :stuck_out_tongue: 
  - (Our game presented lots of fun coding challenges though, which was a good learning experience!)
- Add a test suite so we don't have to manually test the app the whole time!


## Requirement analysis:

### How will you ensure your project is accessible to as many users as possible?

- Make sure the app can be navigated without mouse (i.e. keyboard only).
- Lighthouse check on deployed app (accessibility score 100).
- Use of HTML attribute ``hidden`` hides hidden answers from screen readers as well as visual user agents.

# Recommendations and conclusions:

### What features would you prioritise to build next?

- "Don't accidentally quit game", i.e. prompt users before ending quiz.
- "Better randomisation", i.e. choose every quiz question randomly rather than just picking a contiguous list from a random starting point.
- Multiple categories for each quiz.
- Optionally choose different numbers of questions for each category.
- Save and restore multiple quizzes.
- Export a quiz to PDF for printing/offline use?
- Validation of stuff set in localStorage.
- More error handling for weird edge cases.

### Was the project a success?

We learned a lot so proably yes. :relieved: 
