import { Tabs } from ".\\plugins\\tabs.js";
import { EventTriggers } from ".\\plugins\\event_triggers.js";
var rules = {
  'body': function(element){
    Tabs.autoActivate();
  }
}
EventTriggers.register(rules);