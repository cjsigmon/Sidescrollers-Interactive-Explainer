$(document).ready(function() {
    $('#quiz').quiz({
        counterFormat: 'Question %current of %total',
        questions: [
          {
            'q': 'A sample question?',
            'options': [
              'Answer 1',
              'Answer 2',
              'Answer 3',
              'Answer 4'
            ],
            'correctIndex': 1,
            'correctResponse': 'Custom correct response.',
            'incorrectResponse': 'Custom incorrect response.'
          },
          {
            'q': 'What is this image? <img src="https://picsum.photos/100/100">',
            'options': [
              'Answer 1',
              'Answer 2'
            ],
            'correctIndex': 1,
            'correctResponse': 'Custom correct response.',
            'incorrectResponse': 'Custom incorrect response.'
          },
          {
            'q': 'Which image is the correct answer?',
            'options': [
              '<img src="https://picsum.photos/100/100">',
              '<img src="https://picsum.photos/100/100">'
            ],
            'correctIndex': 0,
            'correctResponse': 'Custom correct response.',
            'incorrectResponse': 'Custom incorrect response.'
          },
          {
            'q': 'A sample question?',
            'options': [
              'Answer 1',
              'Answer 2'
            ],
            'correctIndex': 1,
            'correctResponse': 'Custom correct response.',
            'incorrectResponse': 'Custom incorrect response.'
          },
          {
            'q': 'A sample question?',
            'options': [
              'Answer 1',
              'Answer 2',
              'Answer 3',
              'Answer 4'
            ],
            'correctIndex': 3,
            'correctResponse': 'Custom correct response.',
            'incorrectResponse': 'Custom incorrect response.'
          }
        ]
      });
});

