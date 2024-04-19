// project.js - the Javascript implmentation of a generative film logline function
// Author: Ethan Clark
// Date: April 18th, 2024



function main() {
  const fillers = {
    setting: ["1940s Europe", "a medieval meritocracy", "the trenches of WW1", "a sc-fi dystopia", "a neon-lit Cyberpunk utopia", "the battle of the ten wives", "a post-apocalyptic wasteland"],
    mainChar: ["John Rambo", "the Terminator", "Jon Snow", "V", "Winston Churchill", "a cow", "The Dude", "Jerry Lundegaard", "Russ Cargill", "the Arbiter", "Count Dooku"],
    actionPre: ["decides to", "must", "finds that they have to", "is forced to"],
    action: ["defend", "destroy", "sacrifice", "rebuild", "find", "locate", "purchase"],
    crux: ["a wounded veteran", "themselves", "the British Empire", "a galactic armada", "the holy grail", "a new lover", "their best friend", "a powerful warlord", "time itself", "an Egyptian pharoah"], 
    reason: ["save them from $crux", "restore order to the world", "restore their lost humanity", "save their family", "buy back their farm", "get with the love of their life"],
    issuePre: ["Unbeknownst to them", "However", "Unfortunately"],
    issue: ["cancer has set in", "an old foe is back with a vengeance", "a meteor is hurtling towards their location", "an economic collapse is impending", "their mother is angry with them", "their spouse is cheating on them", "their child needs a ride home from school"],
    conclusion: ["things will not be as easy as they seem.", "things may take a turn for the worse.", "things will get dicey!", "the situation may deteriorate."]
  };
  
  const template = `In $setting, $mainChar $actionPre $action $crux in order to $reason. $issuePre, $issue, and $conclusion
  `;
  
  
  // STUDENTS: You don't need to edit code below this line.
  
  const slotPattern = /\$(\w+)/;
  
  function replacer(match, name) {
    let options = fillers[name];
    if (options) {
      return options[Math.floor(Math.random() * options.length)];
    } else {
      return `<UNKNOWN:${name}>`;
    }
  }
  
  function generate() {
    let story = template;
    while (story.match(slotPattern)) {
      story = story.replace(slotPattern, replacer);
    }
  
    /* global box */
    $("#box").text(story);
  }
  
  /* global clicker */
  $("#clicker").click(generate);
  
  generate();
  

}

main();