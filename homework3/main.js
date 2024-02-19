google.charts.load('current', {'packages':['sankey']});
google.charts.setOnLoadCallback(drawChart);

const updateButton = document.getElementById('updateButton');
const hideButton = document.getElementById('hideButton');

var hidden = false;

function drawChart() {
    var initialData = [
    ["CU", "L1TLB", 1],
    ["CU", "L1Cache", 1],
    ["L1Cache", "L2Cache", 1],
    ["L1Cache", "RDMA", 1]
    ];

    var data = new google.visualization.DataTable();
    data.addColumn('string', 'From');
    data.addColumn('string', 'To');
    data.addColumn('number', 'Weight');
    data.addRows(initialData);

    var options = {
        width: 600,
        height: 400
    };

    var chart = new google.visualization.Sankey(document.getElementById('sankeyChart'));
    chart.draw(data, options);


    document.getElementById('updateButton').addEventListener('click', function() {
        var updatedData = initialData.map(function(row) {
            return [row[0], row[1], Math.floor(Math.random() * 100)]; 
        });

        data.removeRows(0, data.getNumberOfRows());
        data.addRows(updatedData);

        chart.draw(data, options);
    }); 

    
    document.getElementById('hideButton').addEventListener('click', function() {
        if (hidden) {
          document.getElementById('sankeyChart').style.display = 'none';
          console.log('hidden ' + hidden);
        } else {
            document.getElementById('sankeyChart').style.display = 'block';
            console.log('hidden ' + hidden);
        }
        hidden = !hidden;
  }); 

}



