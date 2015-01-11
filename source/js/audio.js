function KaczkamiAudio(elementId) {
  var self = this;
  self.audio = document.getElementById('oj_boli_audio');
  self.from = 0;
  self.to = 0;
  self.mute = true;
  self.audio.play();
  self.audio.pause();
  self.toggle = function() {
    self.mute = !self.mute;
  };
  self.isOn = function() {
    return self.mute;
  }
  self.start = function(span) {
    self.from = span.from;
    self.to = span.to;
    self.audio.currentTime = self.from;
    $('.console').append('<p>Started at ' + self.audio.currentTime + '</p>');
    self.audio.addEventListener("timeupdate", self.stopListener);
    self.audio.play();
  };
  self.stopListener = function() {
    if (self.audio.currentTime >= self.to) {
      $('.console').append('<p>Finished at ' + self.audio.currentTime + '</p>');
      self.audio.pause();
    }
  }
  self.stop = function() {
    self.audio.removeEventListener("timeupdate", self.stopListener);
    $('.console').append('<p>Finished at ' + self.audio.currentTime + '</p>');
    self.audio.pause();
  }
}
