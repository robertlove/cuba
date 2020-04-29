---
layout: null
---

{% include_relative jquery.min.js %}

function msToTime(ms) {
  var milliseconds = parseInt((ms % 1000) / 100);
  var seconds = parseInt((ms / 1000) % 60);
  var minutes = parseInt((ms / (1000 * 60)) % 60);
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  if (seconds < 10) {
    seconds = '0' + seconds;
  }
  if (milliseconds < 100) {
    if (milliseconds < 10) {
      milliseconds = '00' + milliseconds;
    } else {
      milliseconds = '0' + milliseconds;
    }
  }
  return minutes + ":" + seconds + ":" + milliseconds;
}

$(function() {

  $('input[type="reset"]').click(function() {
    $('#result').text('00:00:000');
  });

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

    var result = msToTime(average);

    $('#result').text(result);

    event.preventDefault();

  });

});
