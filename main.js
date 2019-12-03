const url = 'https://zagster-service.herokuapp.com/rides/locations_and_times'
var rawData;
var ridetimes2018 = new Array();

$(updateView)

function renderChart(data, labels){
    var ctx = document.getElementById("myChart").getContext("2d");
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: '2018 Rides',
                data: data,
            }]
        },
    });
}



$("#renderBtn").click(
    function () {
        data = [20, 14, 12, 15, 18, 19, 22];
        labels =  ["1 or less", "2", "3", "4+"];
        renderChart(data, labels);
    }
);
function updateView(){
    $.getJSON(url, function(data){
        data.forEach(element => {
            if(element.start_time != null){
                if(element.start_time.substring(0,4) == 2017){
                    ridetimes2018.push(element.start_time.substring(11,13))
                }
            }
        });
    });
    console.log(ridetimes2018)
    
}

