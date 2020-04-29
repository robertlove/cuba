---
layout: null
---

{% include_relative jquery.min.js %}

$(function() {

  $('form').submit(function(event) {

    var scores = [];

    {% for i in (1..5) %}

      var score{{ i }} = 0;

      var m{{ i }}  = parseInt($('#m{{ i }}').val());
      var s{{ i }}  = parseInt($('#s{{ i }}').val());
      var ms{{ i }} = parseInt($('#ms{{ i }}').val());

      if (m{{ i }} > 0) {
        m{{ i }} = m{{ i }} * 60000;
      } else {
        m{{ i }} = 0;
      }

      if (s{{ i }} > 0) {
        s{{ i }} = s{{ i }} * 1000;
      } else {
        s{{ i }} = 0;
      }

      if (ms{{ i }} > 0) {
        ms{{ i }} = ms{{ i }};
      } else {
        ms{{ i }} = 0;
      }

      score{{ i }} = m{{ i }} + s{{ i }} + ms{{ i }};

      scores.push(score{{ i }});

    {% endfor %}

    console.log('SCORES', scores);
    scores.sort();
    console.log('SCORES SORTED', scores);
    scores.splice(3, 2);
    console.log('SCORES SPLICED', scores);
    var total = scores.reduce((a, b) => a + b, 0);
    console.log('SCORES TOTAL', total);
    var average = total / 3;
    console.log('SCORES AVERAGE', average);

    event.preventDefault();

  });

});
