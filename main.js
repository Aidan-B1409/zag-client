const url = 'https://zagster-service.herokuapp.com/rides/locations_and_times'
var rawData;
var timeFrequency = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]

labels = ["1am", "2am", "3am", "4am", "5am", "6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm", "10pm", "11pm", "12pm" ]

$(updateView)

async function renderChart(data, labels){
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


function updateView(){
    buildChart()
}

function makeTable(){
    return new Promise(function(resolve, reject){
        var ridetimes2018 = new Array();
        $.getJSON(url, function(data){
            data.forEach(element => {
                if(element.start_time != null){
                    if(element.start_time.substring(0,4) == 2017){
                        ridetimes2018.push(parseInt(element.start_time.substring(11,13)))
                    }
                }
            });
            resolve(ridetimes2018)
        });
    });
}   

async function buildChart(){
    var ridetimes2018 = await makeTable()
    console.log(ridetimes2018.length)
    for(let[i, val] of timeFrequency.entries()){
        for(let[j, element] of ridetimes2018.entries()){
            if(element == i){
                timeFrequency[i]++;
            }
        }
    }
    renderChart(timeFrequency,labels)
}

