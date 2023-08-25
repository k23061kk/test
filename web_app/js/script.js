$(document).ready(function () {

  $('.cl').hide();
  $(function () {
    $('.ham').click(function () {
      $('.ham, .slide').toggleClass('active');
    });
  });
  $(function () {
    $('.startbtn').click(function () {
      $('.st').toggle();
      $('.cl').toggle();

    });
  });


  function realtimeClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    $('.rh').text(('0' + hours).slice(-2));
    $('.rm').html(('0' + minutes).slice(-2));
    $('.rs').html(('0' + seconds).slice(-2));
  }
  setInterval(realtimeClock, 1000);


  let setTimeoutId = undefined;
  let startTime = 0;
  let currentTime = 0;
  let elapsedTime = 0;


  function runTimer() {
    currentTime = Date.now();
    showTime();
    setTimeoutId = setTimeout(() => {
      runTimer();
    }, 10)
  }

  function showTime() {
    let d = new Date(currentTime - startTime + elapsedTime - 9 * 60 * 60 * 1000);
    const getHour = d.getHours();
    const getMin = d.getMinutes();
    const getSec = d.getSeconds();
    const getMillisec = Math.floor(d.getMilliseconds() / 10);
    $(".timer").text(`${String(getHour).padStart(2, '0')}:${String(getMin).padStart(2, '0')}:${String(getSec).padStart(2, '0')}.${String(getMillisec).padStart(2, '0')}`);
  }

  function classReplacementRun() {
    $(".start").addClass("disabled");
    $(".stop").removeClass("disabled");
    $(".reset").addClass("disabled");
  }

  function classReplacementStop() {
    $(".start").removeClass("disabled");
    $(".stop").addClass("disabled");
    $(".reset").removeClass("disabled");
  }

  function classReplacementInitial() {
    $(".start").removeClass("disabled");
    $(".stop").addClass("disabled");
    $(".reset").addClass("disabled");
  }

  $(".start").click(function () {
    if ($(this).hasClass('disabled')) {
      return;
    }
    classReplacementRun()
    startTime = Date.now();
    runTimer();
  });

  $(".stop").click(function () {
    if ($(this).hasClass('disabled')) {
      return;
    }
    classReplacementStop()
    elapsedTime += currentTime - startTime;
    clearTimeout(setTimeoutId);
  });

  $(".reset").click(function () {
    if ($(this).hasClass('disabled')) {
      return;
    }
    classReplacementInitial()
    clearTimeout(setTimeoutId);
    elapsedTime = 0
    $(".timer").text("00:00:00");
  });




});
//gitの確認