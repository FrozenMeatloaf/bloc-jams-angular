(function() {
  function timecode() {  //filter function must return another function which takes at least on argument, the input filter
    return function(seconds) {
      // var seconds = Number.parseFloat(seconds);
      //
      var output = buzz.toTimer(seconds);

      if (Number.isNaN(seconds)) {
        return '-:--';
      }
      //
      // var wholeSeconds = Math.floor(seconds);
      // var minutes = Math.floor(wholeSeconds / 60);
      // var remainingSeconds = wholeSeconds % 60;
      //
      // var output = minutes + ':';
      //
      // if (remainingSeconds < 10) {
      //     output += '0';
      // }
      //
      // output += remainingSeconds;
      //
      return output;
    };
  };

  angular
    .module('blocJams')
    .filter('timecode', timecode);
})();
