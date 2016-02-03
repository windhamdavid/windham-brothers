/**** Audio Player ****/

Amplitude.init({
  "songs": [
    {
      "url": "http://64.207.152.217:8000/stream",
      "live": true,
  	},
    {
  		"url": "http://64.207.176.250:8080/iwoody",
  		"live": true,
  	}
  ],
    "autoplay": true,
    "amplitude_volume": 100
});

/**** Page Features ****/

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

$('#amplitude-play-pause').tooltip(options)


$(document).ready(function() {

});