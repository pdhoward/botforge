
// Load bots for demo

function loadBot(name, map) {
  console.info("Loading bot '%s'", name);
  var req = $.ajax("bots/" + name + ".js", {
    async: false,
    dataType: "script",
  });
  req.done(function(data) {
    console.info("Bot '%s' loaded successfully", name);
    map[name] = eval(data);
  });
  req.fail(function(jqXHR,  textStatus, errorThrown) {
    if (jqXHR.status !== 200) {
      console.error("Bot '%s' could not be loaded: %d (%s)", name, jqXHR.status, jqXHR.statusText);
    } else if (textStatus === 'parsererror') {
      console.error("Bot '%s' could not be parsed: %s", name, errorThrown);
    } else {
      console.error("Bot '%s' could not be loaded: %s", name, errorThrown);
    }
  });
}

var testMaps = {};

var bots = [
  "amIPsychic",
  "besties",
  "emotionFlow",
  "kittens",
  "maraudersMap",
  "petSim",
  "quiz",
  "rhymes",
  "tesla",
];

for (var i = 0; i < bots.length; i++) {
  loadBot(bots[i], testMaps);
}
