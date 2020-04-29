---
layout: null
---

{% include_relative jquery.min.js %}
{% include_relative popper.min.js %}
{% include_relative bootstrap.min.js %}

$(function() {

  $('form').submit(function(event) {

    {% for i in (1..5) %}

      var score{{ i }} = 0;

      var m{{ i }}  = $('#m{{ i }}').val();
      var s{{ i }}  = $('#s{{ i }}').val();
      var ms{{ i }} = $('#ms{{ i }}').val();

      if (m{{ i }} > 0) {
        m{{ i }} = m{{ i }} / 60000;
      }

      if (s{{ i }} > 0) {
        s{{ i }} = s{{ i }} / 1000;
      }
      score{{ i }} = m{{ i }} + s{{ i }} + ms{{ i }};

    {% endfor %}

    var scores = [
      score1,
      score2,
      score3,
      score4,
      score5
    ];

    console.log(scores);
    console.log('Sorting...');

    scores.sort();

    console.log(scores);
    console.log('Splicing...');

    scores.splice(0, 2);

    event.preventDefault();
  });

});
