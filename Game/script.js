// // FTA format: Name, Partners, % of U.S.Tarrifs Eliminated or Greatly Reduced
var FTAs = [
  Australia = ["US & Australia", "99%", ],
  Bahrain = ["US & Bahrain", "100% of Consumer and Indutrial Products, and 81% of U.S. Agricultural Exports. Note: 'Bahrain has made broad commitments to open its services market wider than any previous U.S. FTA partner, streamline digital trade, improve intellectual property right protections, facilitate government procurement, and provide for effective enforcement of labor and environmental laws.'", ],
  Chile = ["US & Chile", "100%", ],
  Colombia = ["US & Colombia", "80% of U.S. Industrial Goods, 'More than half' of Agrucultural Goods", ],
  drcafta = ["United States, El Salvador, Guatemala, Honduras, Nicaragua, Dominican Republic, & Costa Rica", "100%", ],
  Israel = ["US & Israel", "None! But the US has unilaterally lowered barriers to Israel in exchange for 'a non-binding statement of intent to eliminate barriers to trade[.]'", ],
  Jordan = ["US & Jordan", "100%, excluding barriers to and tariffs on investments", ],
  Korea = ["US & Korea", "2/3 of Agricultural Goods, 80% of everything else", ],
  Morocco = ["US & Morocco", "95%", ],
  nafta = ["US, Canada, & Mexico", "100%", ],
  Oman = ["US & Oman", "'Nearly all' consumer and industrial goods, 87% of Agricultural Goods", ],
  Panama = ["US & Panama", "87% of industrial goods, & 'more than half of Agrucultural Goods'", ],
  Peru = ["US & Peru", "80% consumer and industrial, 90% of U.S. agricultural exports", ],
  Singapore = ["US & Singapore", "100% elimination of tariffs on both sides, Non-Tariff Barriers remain", ],
];
// //Need to append this info to the divs...
//
// for (var i = 0; i < FTAs.length; i++) {
//   var currentCountry = document.getElementsByClassName("country")[i];
//   var createDiv = document.createElement("div");
//   var partners = document.createTextNode(FTAs[i][0]);
//   createDiv.id="Partners";
//   currentCountry.appendChild(createDiv.partners);
//
// }

$(document).ready(function() {
  console.log("jQuery Working");
  $("#Announcement").html("There are currently " + (FTAs.length + 1) + " Free Trade Agreements in force for the United States.<br>Learn more about them here.");
  $(".country").on("click", function() {
    console.log("Click detected on " + $(this).html());
    var identity = $(this).id;
    //$(this).append("<br>" + );
    console.log("popping out!");
    $(this).addClass("pop");
    var retract = function retracting() {
      console.log("trying to retract...");
      $(this).removeClass("pop");
    }.bind(this);
    setTimeout(retract, 2000);
  });
});
