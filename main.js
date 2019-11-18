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
        labels =  ["1 or less", "2", "3", "4", "5", "6", "7","8+"];
        renderChart(data, labels);
    }
);
