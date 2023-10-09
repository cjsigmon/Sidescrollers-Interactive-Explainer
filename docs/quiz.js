$(document).ready(function() {
    $('#quiz').quiz({
        counterFormat: 'Question %current of %total',
        questions: [
          {
            'q': 'What is considered the first sidescrolling platformer?',
            'options': [
              'Donkey Kong',
              'Jump Bug',
              'Super Mario Bros',
              'Sonic the Hedgehog'
            ],
            'correctIndex': 1,
            'correctResponse': 'Correct!',
            'incorrectResponse': 'Sorry, that\'s not it!'
          },
          {
            'q': 'What language was the original Mario Bros game written in?',
            'options': [
              'C',
              'C++',
              'Assembly 6502',
              'Python'
            ],
            'correctIndex': 2,
            'correctResponse': 'Yepperoni',
            'incorrectResponse': 'Nope-err-oni'
          },
          {
            'q': 'When does the \'snap\' of vertical snapping occur?',
            'options': [
              'When the player presses jump',
              'When the player lands on a different elevation',
              'When the player walks',
              'Kit-Kat Bar'
            ],
            'correctIndex': 1,
            'correctResponse': 'Correctamundo',
            'incorrectResponse': 'Nope :('
          },
          {
            'q': 'Which of these is not a camera/motion strategy for sidescrolling platformers',
            'options': [
              'Vertical window',
              'Horizantal locking',
              'Vertical snapping',
              'Quabity assuance'
            ],
            'correctIndex': 3,
            'correctResponse': 'Correct!',
            'incorrectResponse': 'Not quite.'
          }
        ]
      });
});

