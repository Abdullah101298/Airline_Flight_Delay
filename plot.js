
// selecting the selDataset of the html to append the dropdown menu 
var dropDown = d3.select("#selDataset");

d3.json("records.json").then((data)=> {
  console.log(data);

  // getting the sample names and looping through them to append each and its values to the dropdown
//   var cityNames = data.Origin; 
//   console.log(cityNames);
//   data.forEach((sample) => {
//       console.log(sample.Origin)
//       dropDown.append("option")
//               .text(sample.Origin)
//               .property("value",sample.Origin);
//        // console.log(dropDown);

//   });

});
//    reading the .csv using d3
d3.json("records.json").then(function(data) {

  console.log(data);

  function buildCharts() {

    var trace1= {
          x : ['Southwest','Delta'],
          y : [38517,19953], 
          name: '2009',
          type : "bar",
      
        }

      var trace2= {
          x : ['Southwest','Delta'],
          y : [64333,38890], 
          name: '2018',
          type : "bar",
      
        }
      
      var data = [trace1,trace2];
      var layout = {
        title: "Delay/Cancellation Count",
        width: 500,
        height: 500
      };
      
      Plotly.newPlot("bar", data, layout); 
      }

    });

buildCharts();
    

  // getting the sample names and looping through them to append each and its values to the dropdown
  // var flightDestination = +data.Destination; 
  // var flightOrigin = +data.Origin;
  
  
  // console.log(flightDestination);
  // console.log(flightOrigin);


  // flightOrigin.forEach((sample) => {
  //     dropDown.append("option")
  //             .text(sample)
  //             .property("value",sample);
  //     // console.log(dropDown);

  // });


// building the metadata section of the dashboard
// function buildMetadata (value) {
// d3.json("samples.json").then((data)=> {
//     console.log(data.metadata);
//     var metadata = data.metadata
//     var filteredMetadata = metadata.filter(row => row.id == value);

//     console.log("meta",filteredMetadata);

//    var sampleMetadata =  filteredMetadata[0]

//    // selecting the html sample-metadata section to add the metadata
//        var metadataPanel = d3.select("#sample-metadata");
//     // Update all of the plots any time that a new sample is selected.
//        metadataPanel.html("");

//        // use of object. entries to loop through the key-value pair of the me-
//          //tadata and then appending the pairs
//        Object.entries(sampleMetadata).forEach(([key,value]) => {
//         console.log(key, value)
//        metadataPanel.append('p')
//                     .text(`${key},${value}`)

// });
// })
// }
// function buildCharts(value) {
//   d3.csv("Cleaned_Airlines_Data/2009_airlines_max_ARR_Delay.csv").then(function(data) {
//     console.log(data);

//     // get the values from the  json  to build the bubble chart and a pie chart
        
// // filtering the data to get the sample IDs
//     var sampleIds = data.samples.filter(row => row.id == value); 
//     console.log(sampleIds)   
//     console.log(sampleIds[0]);

//     var sampleValues = sampleIds[0].sample_values
    
//     var sampleLabels = sampleIds[0].otu_ids;
//     var sampleText = sampleIds[0].otu_labels

//     // console.log(sampleText);
    
    
//     // Object that contains data to plot the bubble chart
//     var trace = {
//       x: sampleLabels,
//       y: sampleValues,
//       mode: 'markers',
//       text: sampleText,
//       marker: { 
//         size: sampleValues,
//         color: sampleLabels,
//         colorscale: 'Portland',
//       }
//     };

//     var layout = {
//       title: "OTU-IDS Visual",
//       height: 600
//     };

//     // Ploting the bubble chart 
//     var data = [trace];
//     Plotly.newPlot('bubble', data, layout)
  


//   // making a pie chart

//    // using the top 10 samples to make the pie chart...use sorting function then slice the top 10
//     var chartValues = sampleValues.sort(function(a, b){return a - b}).slice(0,10);
//     console.log("top",chartValues);
//     var chartLabels = sampleLabels;
//     console.log("labels", chartLabels);
//     var chartText = sampleText;

//     // Object that contains data to be plotted 
//     var data = [{
//       values: chartValues, 
//       labels: chartLabels,
//       type: "pie",
//       text: chartText 

//     }];

//     var layout = {
//       title: "Top 10 Samples",
//       height: 400, 
//       width: 400,
//       colorway: ['Earth'],
//     };

// // plotting the pie chart
//     Plotly.newPlot('pie', data, layout);

//   // making the bar chart

//   var trace2 = {
//     x :chartValues,
//     y :chartLabels.map(labels => `otu ${labels}`), 
//     type : "bar",
//     orientation:'h'

//   }

// var data = [trace2];
// var layout = {
//   title: "Top 10 OTU IDS"
// };

// Plotly.newPlot("bar", data, layout);

// }
//     )};

//     // code for when sample changes

// function optionChanged(value) {
     
//   // firing the functions

//     buildMetadata(value)
//     buildCharts(value)
// };

init ()




