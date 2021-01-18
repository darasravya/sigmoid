import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React, { useEffect, useState , useContext} from 'react';
import Plot from 'react-plotly.js'
import './DashBoard.css';
import axios from 'axios';
import { TokenContext } from "./TokenContext.js";
import Header from './Header'
import './DashBoard.css';

function DashBoard() {

    const [token, setToken] = useContext(TokenContext);
    const headers = {
        'Content-Type': 'application/json' ,
        'X-Auth-Token': token,
    }
    const [chart1XData, setChart1XData] = useState([]);
    const [chart1YData, setChart1YData] = useState([]);
    const [chart2XData, setChart2XData] = useState([]);
    const [chart2YData, setChart2YData] = useState([]);
    const [chart3XData, setChart3XData] = useState([]);
    const [chart3YData, setChart3YData] = useState([]);
    const [chart3ZData, setChart3ZData] = useState([]);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [startRange, setStartRange] = useState(null);
    const [endRange, setEndRange] = useState(null);

      var layout = {
        width:500,
        height:400,
        title: {
          text:'Chart1',
        },
        scene:{
            xaxis: {
                title: {
                  text: 'x Axis',
                  font: {
                    family: 'Courier New, monospace',
                    size: 18,
                    color: '#7f7f7f'
                  }
                },
            },
            yaxis: {
            title: {
                text: 'y Axis',
                font: {
                family: 'Courier New, monospace',
                size: 18,
                color: '#7f7f7f'
                }
            }
            },
        }
        
      };

    const getDateRange = () => {
        let data = {
            "organization":"DemoTest",
            "view":"Auction",
        }
        axios
            .post('https://sigviewauth.sigmoid.io/api/v1/getDateRange', data, {headers})
            .then(data => {
                console.log("date range success : ");
                setStartRange(new Date(parseInt(data.data.result['startDate'])).toString());
                setEndRange(new Date(parseInt(data.data.result['endDate'])).toString());
            })
            .catch(err => {
                console.log(JSON.stringify(err));
            });
    }

    var fetchData1 = () => {
        console.log("Inside Fetch");
        let data = {
            "_id": "dashboard1516252439345",
            "emailId": "candidate@sigmoid.com",
            "orgViewReq": {
              "organization": "DemoTest",
              "view": "Auction"
            },
            "chartObject": {
              "metadata": {
                "title": "chartobject:1516252439345",
                "img_thumbnail": "../img/chart.png",
                "chartType": "table",
                "dataLimit": 50
              },
              "requestParam": {
                "granularity": "hour",
                "timeZone": {
                  "name": "UTC (+00:00)",
                  "location": "UTC"
                },
                "dateRange": {
                  "startDate": startDate.toString(),
                  "endDate": endDate.toString(),
                },
                "xAxis": [
                  "D044"
                ],
                "yAxis": [
                  "M002"
                ],
                "approxCountDistinct": [],
                "specialCalculation": [],
                "filter": [],
                "orderBy": {
                  "metricOrdByList": [
                    {
                      "id": "M002",
                      "desc": true
                    }
                  ]
                },
                "percentCalList": []
              }
            }
          }

        if(token !== ''){
            axios
            .post('https://sigviewauth.sigmoid.io/api/v1/getData',data,{headers})
            .then(data => {
                console.log("data for chart1 fetched successfully" + JSON.stringify(data));
                let xData = [];
                let yData = [];
                data.data.result.data.forEach(function(obj){
                    xData.push(obj.publisherId);
                    yData.push(obj.impressions_offered);
                })
                setChart1XData(xData);
                setChart1YData(yData);
            })
            .catch(err => {
                if (err.status === 401) {
                  console.log("Failed " + JSON.stringify(err));
                }
            });
        }
        
    }

    var fetchData2 = () => {
        console.log("Inside Fetch2");
        let data = {
            "_id": "dashboard1516252235693",
            "emailId": "candidate@sigmoid.com",
            "orgViewReq": {
              "organization": "DemoTest",
              "view": "Auction"
            },
            "chartObject": {
              "metadata": {
                "title": "chartobject:1516252235693",
                "img_thumbnail": "../img/chart.png",
                "chartType": "table",
                "dataLimit": 50
              },
              "requestParam": {
                "granularity": "hour",
                "timeZone": {
                  "name": "UTC (+00:00)",
                  "location": "UTC"
                },
                "dateRange": {
                    "startDate": startDate.toString(),
                    "endDate": endDate.toString(),
                },
                "xAxis": [
                  "D017"
                ],
                "yAxis": [
                  "M002"
                ],
                "approxCountDistinct": [],
                "specialCalculation": [],
                "filter": [],
                "orderBy": {
                  "metricOrdByList": [
                    {
                      "id": "M002",
                      "desc": true
                    }
                  ]
                },
                "percentCalList": []
              }
            }
          }

        if(token !== ''){
            axios
            .post('https://sigviewauth.sigmoid.io/api/v1/getData',data,{headers})
            .then(data => {
                console.log("data for chart2 fetched successfully" + JSON.stringify(data));
                let xData = [];
                let yData = [];
                data.data.result.data.forEach(function(obj){
                    xData.push(obj.appSiteId);
                    yData.push(obj.impressions_offered);
                })
                setChart2XData(xData);
                setChart2YData(yData);
            })
            .catch(err => {
                if (err.status === 401) {
                  console.log("Failed " + JSON.stringify(err));
                }
            });
        }
        
    }

    var fetchData3 = () => {
        console.log("Inside Fetch3");
        let data = {
            "_id": "Datastory_ChartId_1535224664111",
            "emailId": "candidate@sigmoid.com",
            "orgViewReq": {
              "organization": "DemoTest",
              "view": "Auction"
            },
            "chartObject": {
              "metadata": {
                "title": "",
                "img_thumbnail": "images/pie.png",
                "chartType": "pie",
                "dataLimit": 500
              },
              "text": [],
              "requestParam": {
                "granularity": "hour",
                "timeZone": {
                  "name": "UTC (+00:00)",
                  "location": "UTC"
                },
                "dateRange": {
                    "startDate": startDate.toString(),
                    "endDate": endDate.toString(),
                },
                "xAxis": [
                  "D005"
                ],
                "yAxis": [],
                "approxCountDistinct": [],
                "specialCalculation": [
                  "CM001"
                ],
                "filter": [],
                "orderBy": {
                  "customMetricOrdByList": [
                    {
                      "id": "CM001",
                      "desc": true
                    }
                  ]
                },
                "percentCalList": [
                  {
                    "id": "CM001"
                  }
                ]
              }
            }
          }

        if(token !== ''){
            axios
            .post('https://sigview.sigmoid.io/api/v1/getData',data,{headers})
            .then(data => {
                console.log("data for chart3 fetched successfully" + JSON.stringify(data));
                let xData = [];
                let yData = [];
                let zData = [];
                data.data.result.data.forEach(function(obj){
                    xData.push(obj.advertiserId);
                    yData.push(obj.CM001);
                    zData.push(obj.CM001_percent);
                })
                setChart3XData(xData);
                setChart3YData(yData);
                setChart3ZData(zData);
            })
            .catch(err => {
                if (err.status === 401) {
                  console.log("Failed " + JSON.stringify(err));
                }
            });
        }
        
    }

    useEffect(()=>{
        getDateRange();
    },[])


    useEffect(() => {
        if(endDate-startDate > 0 && startDate!== null && endDate!== null){
            fetchData1();
            fetchData2();
            fetchData3();
        }
    }, [startDate, endDate])

  return (
      console.log("sravya:: " + startDate),
    <React.Fragment>
        <Header title={"Data Vizualization"}/>
        <div className="dashboard-content">
            <p>Pick the range</p>
            <span>
                <DatePicker
                    className="react-datepicker-wrapper"
                    placeholderText = "Select Start Date"
                    showTimeSelect
                    dateFormat="MMMM d, yyyy h:mmaa"
                    selected={startDate}
                    startDate={startRange}
                    endDate={endRange}
                    startRange={new Date()}
                    minDate={startRange}
                    variant="inline"
                    onChange={date => setStartDate(Date.parse(date.toString()))}
                />
            {/* </span>
            <span> */}
                <DatePicker
                    className="react-datepicker-wrapper"
                    placeholderText = "Select End Date"
                    showTimeSelect
                    variant="inline"
                    dateFormat="MMMM d, yyyy h:mmaa"
                    selected={endDate}
                    startDate={startRange}
                    endDate={endRange}
                    minDate={startDate}
                    onChange={date => setEndDate(Date.parse(date.toString()))}
                />
            </span>
            <div>Display charts</div>
            <span className="charts">
                <Plot data={[
                    {
                        x: chart1XData,
                        y: chart1YData,
                        type: 'scatter',
                }
                ]} layout={layout}></Plot>
            </span>
            <span className="charts">
                <Plot data={[
                    {
                        x: chart2XData,
                        y: chart2YData,
                        type: 'scatter',
                }
                ]} layout={{
                    ...layout,
                    title:{
                        ...layout.title,
                        text:"chart2"
                    },
                }}></Plot>
            </span>
            <span className="charts">
                <Plot data={[
                    {
                        x: chart3XData,
                        y: chart3YData,
                        z: chart3ZData,
                        type: 'scatter3d',
                }
                ]} layout={{
                    ...layout,
                    title:{
                        ...layout.title,
                        text:"chart3"
                    },
                    zaxis: {
                        title: {
                        text: 'z Axis',
                        font: {
                            family: 'Courier New, monospace',
                            size: 18,
                            color: '#7f7f7f'
                        }
                        }
                    }
                }}></Plot>
            </span>
            

        </div>
    </React.Fragment>
  );
}

export default DashBoard; 