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
      return d.total * 2 + "px"; })
  .text(function(d){
      return d.name + " Allotted: " + d.allotted + " Total: " + d.total;
  });

