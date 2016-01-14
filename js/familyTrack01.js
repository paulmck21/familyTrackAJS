// var d = new Date();
// var hour = d(getUTCHours);


// var time = document.getElementsByClassName("time");
// for (var i = time.length - 1; i >= 0; i--) {
// 	time[i].innerText = d;
// };

var london = moment.tz("2015-11-08 19:25", "Europe/London");
var londonTime = london.format("h:mm:ss a");
var goldcoastTime = london.clone().tz("Australia/Brisbane").format("h:mm:ss a");
var vancouverTime = london.clone().tz("America/Vancouver").format("h:mm:ss a");

var fergusTime = document.getElementById('fergusTime');
var kathyTime = document.getElementById('kathyTime');
var kateTime = document.getElementById('kateTime');
var jillTime = document.getElementById('jillTime');
var PaulTime = document.getElementById('paulTime');

fergusTime.innerText = londonTime;
kathyTime.innerText = londonTime;
kateTime.innerText = vancouverTime;
jillTime.innerText = goldcoastTime;
paulTime.innerText = londonTime;

// console.log(moment.tz.names());

$(document).ready(function(){
	var place = "Abidjan";
	var myRegex = new RegExp(place, "gi");
	console.log("regex is " + myRegex)
	var jsonFile = "js/latest.json";
	var list = [];

	$.ajax({
        url:"js/latest.json",
        dataType:"json",
        success:function(data){  
        	var zones = data.zones;

        	for (var i = zones.length - 1; i >= 0; i--) {
        		var cityNameArray = zones[i].countryName.split('/');
        		var cityKey = "city"
        		var cityName = cityNameArray[1];
        		var continentKey = "continent";
        		var continent = cityNameArray[0];

        		console.log("cityName " + cityName)
        		list.push(cityName);
        		
        	};
       		var myList = new Bloodhound({
			  datumTokenizer: Bloodhound.tokenizers.whitespace,
			  queryTokenizer: Bloodhound.tokenizers.whitespace,
			  
			  local: list
			});

			console.log("list is " + myList)

			$('#input1 .typeahead').typeahead({
			  hint: true,
			  highlight: true,
			  minLength: 1
			},
			{
			  name: 'countryName',
			  source: myList
			});

   //      	var substringMatcher = function(strs) {
			//   return function findMatches(q, cb) {
			//     var matches, substringRegex;

			//     // an array that will be populated with substring matches
			//     matches = [];

			//     // regex used to determine if a string contains the substring `q`
			//     substrRegex = new RegExp(q, 'i');

			//     // iterate through the pool of strings and for any string that
			//     // contains the substring `q`, add it to the `matches` array
			//     $.each(strs, function(i, str) {
			//       if (substrRegex.test(str)) {
			//         matches.push(str);
			//       }
			//     });

			//     cb(matches);
			//   };
			// };

			// $('#input1 .typeahead').typeahead({
			//   hint: true,
			//   highlight: true,
			//   minLength: 1
			// },
			// {
			//   name: 'countryName',
			//   source: substringMatcher(list)
			// });

        }

    })


	



    }); 

