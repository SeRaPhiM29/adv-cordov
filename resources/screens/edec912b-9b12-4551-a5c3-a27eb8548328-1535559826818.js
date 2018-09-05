jQuery("#simulation")
  .on("click", ".s-edec912b-9b12-4551-a5c3-a27eb8548328 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Hotspot_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-edec912b-9b12-4551-a5c3-a27eb8548328 #s-Image_4 > svg": {
                      "attributes": {
                        "overlay": "none"
                      }
                    }
                  },{
                    "#s-edec912b-9b12-4551-a5c3-a27eb8548328 #s-Image_4": {
                      "attributes": {
                        "opacity": "0.6"
                      }
                    }
                  },{
                    "#s-edec912b-9b12-4551-a5c3-a27eb8548328 #s-Image_4": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=60)",
                        "filter": "alpha(opacity=60)"
                      }
                    }
                  },{
                    "#s-edec912b-9b12-4551-a5c3-a27eb8548328 #s-Image_4": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=60)",
                        "filter": "alpha(opacity=60)"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/56b3da22-5a17-4e53-bcc4-004b23cbabf2",
                    "transition": {
                      "type": "pop",
                      "duration": 700
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "timed",
          "delay": 500
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });