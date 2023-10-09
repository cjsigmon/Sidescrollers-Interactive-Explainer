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
            'q': 'What language was the original Mario Bros game written in?',
            'options': [
              'Assembly 6502',
              'C',
              'C++',
              'Python'
            ],
            'correctIndex': 0,
            'correctResponse': 'Custom correct response.',
            'incorrectResponse': 'Custom incorrect response.'
          },
          {
            'q': 'Which of these is not a camera/motion strategy for sidescrolling platformers',
            'options': [
              'Quabity assuance',
              'Vertical window',
              'Horizantal locking',
              'Vertical snapping'
            ],
            'correctIndex': 0,
            'correctResponse': 'Correct!',
            'incorrectResponse': 'Not quite.'
          }
        ]
      });
});

