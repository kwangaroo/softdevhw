var data = [
{name: "Alabama", total: 58, allotted: 53 },
{name: "Alaska", total: 18, allotted: 0 }, 
{name: "Am. Samoa", total: 10, allotted: 6 },
{name: "Arizona", total: 75, allotted: 0 },
{name: "Arkansas", total: 37, allotted: 32 },
{name: "California", total: 476, allotted: 0},
{name: "Colorado", total: 77, allotted: 66},
{name: "Connecticut", total: 65, allotted: 0},
{name: "Delaware", total: 27, allotted: 0},
{name: "DC", total: 37, allotted: 0}, 
{name: "Florida", total: 238, allotted: 198},
{name: "Georgia", total: 112, allotted: 102},
{name: "Guam", total: 11, allotted: 0},
{name: "Hawaii", total: 31, allotted: 0 }, 
{name: "Idaho", total: 24, allotted: 0 }, 
{name: "Illinois", total: 190, allotted: 135 }, 
{name: "Indiana", total: 79, allotted: 0 }, 
{name: "Iowa", total: 54, allotted: 44 }, 
{name: "Kansas", total: 37, allotted: 33 }, 
{name: "Kentucky", total: 53, allotted: 0 }, 
{name: "Louisiana", total: 61, allotted: 51 }, 
{name: "Maine", total: 30, allotted: 25 }, 
{name: "Maryland", total: 105, allotted: 0 }, 
{name: "Massachusetts", total: 121, allotted: 91 }, 
{name: "Michigan", total: 152, allotted: 127 }, 
{name: "Minnesota", total: 94, allotted: 77 }, 
{name: "Mississippi", total: 41, allotted: 0 }, 
{name: "Missouri", total: 88, allotted: 64 }, 
{name: "Montana", total: 22, allotted: 0 }, 
{name: "Nebraska", total: 31, allotted: 25 }, 
{name: "Nevada", total: 39, allotted: 35 }, 
{name: "New Hampshire", total: 32, allotted: 24 }, 
{name: "New Jersey", total: 126, allotted: 0 },
{name: "New Mexico", total: 38, allotted: 0 }, 
{name: "New York", total: 277, allotted: 0 }, 
{name: "N. Carolina", total: 120, allotted: 104 }, 
{name: "N. Dakota", total: 19, allotted: 0 }, 
{name: "N. Marianas", total: 11, allotted: 6 }, 
{name: "Ohio", total: 165, allotted: 141}, 
{name: "Oklahoma", total: 42, allotted: 38 }, 
{name: "Oregon", total: 64, allotted: 0 }, 
{name: "Pennsylvania", total: 181, allotted: 0 }, 
{name: "Puerto Rico", total: 58, allotted: 0 }, 
{name: "Rhode Island", total: 31, allotted: 0 }, 
{name: "S. Carolina", total: 57 , allotted: 53 }, 
{name: "S. Dakota", total: 20, allotted: 0 }, 
{name: "Tennessee", total: 77, allotted: 67 }, 
{name: "Texas", total: 237, allotted: 222 }, 
{name: "Utah", total: 28, allotted: 0 }, 
{name: "Vermont", total: 23, allotted: 16 }, 
{name: "Virgin Islands", total: 11, allotted: 0 }, 
{name: "Virginia", total: 112, allotted: 95 }, 
{name: "Washington", total: 102, allotted: 0 }, 
{name: "W. Virginia", total: 35, allotted: 0 },
{name: "Wisconsin", total: 89, allotted: 0 }, 
{name: "Wyoming", total: 17, allotted: 0 }, 
{name: "Dems Abroad", total: 17, allotted: 0 }
];


d3.select(".chart")
  .selectAll("div")
  .data(data)
  .enter().append("div")
  .style("width", function(d){
      return d.total * 5 + "px"; })
  .style("background-color", function(d){ 
      if(d.allotted != 0) return "blue";
      else return "red";
  })
  .text(function(d){
      return d.name + " Allotted: " + d.allotted + " Total: " + d.total;
  });

//Republicans 


var rdata = [
{name: "Alabama", total: 50, allotted: 49 },
{name: "Alaska", total: 28, allotted: 28 }, 
{name: "Arizona", total: 58, allotted: 0 },
{name: "Arkansas", total: 40, allotted: 30 },
{name: "California", total: 172, allotted: 0},
{name: "Colorado", total: 37, allotted: 0},
{name: "Connecticut", total: 28, allotted: 0},
{name: "Delaware", total: 16, allotted: 0},
{name: "Florida", total: 99, allotted: 99},
{name: "Georgia", total: 76, allotted: 60},
{name: "Guam", total: 11, allotted: 0},
{name: "Hawaii", total: 19, allotted: 18 }, 
{name: "Idaho", total: 32, allotted: 32 }, 
{name: "Illinois", total: 69, allotted: 69 }, 
{name: "Indiana", total: 57, allotted: 0 }, 
{name: "Iowa", total: 30, allotted: 16 }, 
{name: "Kansas", total: 40, allotted: 34 }, 
{name: "Kentucky", total: 46, allotted: 39 }, 
{name: "Louisiana", total: 46, allotted: 36 }, 
{name: "Maine", total: 23, allotted: 23 }, 
{name: "Maryland", total: 38, allotted: 0 }, 
{name: "Massachusetts", total: 42, allotted: 26 }, 
{name: "Michigan", total: 59, allotted: 59 }, 
{name: "Minnesota", total: 38, allotted: 21 }, 
{name: "Mississippi", total: 40, allotted: 37 }, 
{name: "Missouri", total: 52, allotted: 52}, 
{name: "Montana", total: 27, allotted: 0 }, 
{name: "Nebraska", total: 36, allotted: 0 }, 
{name: "Nevada", total: 30, allotted: 21 }, 
{name: "New Hampshire", total: 23, allotted: 18 }, 
{name: "New Jersey", total: 51, allotted: 0 },
{name: "New Mexico", total: 24, allotted: 0 }, 
{name: "New York", total: 95, allotted: 0 }, 
{name: "N. Carolina", total: 72, allotted: 65 }, 
{name: "N. Dakota", total: 28, allotted: 0 }, 
{name: "Ohio", total: 66, allotted: 66},
{name: "Oklahoma", total: 43, allotted: 28 }, 
{name: "Oregon", total: 28, allotted: 0 }, 
{name: "Pennsylvania", total: 71, allotted: 0 }, 
{name: "Puerto Rico", total: 58, allotted: 0 }, 
{name: "Rhode Island", total: 19, allotted: 0 }, 
{name: "S. Carolina", total: 50, allotted: 50 }, 
{name: "S. Dakota", total: 29, allotted: 0 }, 
{name: "Tennessee", total: 58, allotted: 49 }, 
{name: "Texas", total: 155, allotted: 152 }, 
{name: "Utah", total: 40, allotted: 0 }, 
{name: "Vermont", total: 16, allotted: 16 }, 
{name: "Virginia", total: 49, allotted: 30 }, 
{name: "Washington", total: 44, allotted: 0 }, 
{name: "W. Virginia", total: 34, allotted: 0 },
{name: "Wisconsin", total: 42, allotted: 0 }, 
{name: "Wyoming", total: 29, allotted: 10 }, 
];

d3.select(".chart")
  .selectAll("div")
  .data(rdata)
  .enter().append("div")
  .style("width", function(d){
      return d.total * 5 + "px"; })
  .style("background-color", function(d){ 
      if(d.allotted != 0) return "blue";
      else return "red";
  })
  .text(function(d){
      return d.name + " Allotted: " + d.allotted + " Total: " + d.total;
  });


//put the d3 part into a var function
//addeventlistener to a select of div --> transition to the other graph


/*
var count = 1;
var chart = d3.selectAll("div")
    .data(function(d){ 
	if(count == 1){ 
	    count = 0; 
	    return rdata;
	}else{ 
	    count = 1;
	    return data;
	}
    })
*/
