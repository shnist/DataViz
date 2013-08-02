/* Write your canvas JS in this file */
var labels = [],



(function parseData() {    
    console.log(data);

    $.each(data.listing, function(){
        console.log(this.num_bedrooms);
    });
}());

var chartData = {
    labels : ["Property 1","Property 2","Property 3"],
    datasets : [
        {
            fillColor : "rgba(220,220,220,0.5)",
            strokeColor : "rgba(220,220,220,1)",
            pointColor : "rgba(220,220,220,1)",
            pointStrokeColor : "#fff",
            data : [213995,199995, 178995]
        },
        {
            fillColor : "rgba(151,187,205,0.5)",
            strokeColor : "rgba(151,187,205,1)",
            pointColor : "rgba(151,187,205,1)",
            pointStrokeColor : "#fff",
            data : [3,2, 3]
        }
    ]
};

window.onload = function() {
    var ctx = document.getElementById("myChart").getContext("2d");
        
    new Chart(ctx).Line(chartData);


}





