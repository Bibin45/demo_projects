import React, { Component } from "react";
import Chart from "react-apexcharts";
import Header from "../components/Header";

class Mychart extends Component {
  constructor(props) {
    super(props);
    this.detail=JSON.parse(localStorage.getItem('course_details'))
    this.k=[]
    this.e=[]
    this.state = {
      course:this.detail.map((item)=>this.k.push(item.course_name)),
      fees:this.detail.map((item)=>this.e.push(item.fees)),
      options: {
        chart: {
          id: "basic-bar"
        },
        // stroke: {
        //     width: [5, 7, 5],
        //     curve: 'straight',
        //     dashArray: [0, 8, 5]
        // },
        markers: {
            size: 0,
            hover: {
              sizeOffset: 6
            }
        },
        xaxis: {
        //   categories: ['Python','Java','C++','PHP','JS','Ruby']
            categories:this.k
        }
      },
      series: [
        {
          name: "Fees",
        //   data: [90, 40, 54, 70, 49, 60]
        data:this.e
        }
      ]
    };
  }

  render() {
    console.log(this.k)
    console.log(this.e)
    console.log(this.detail)
    return (
      <div className="text-secondary font">
        <Header/>
        <h3 className="mt-5">Fees Structure For Respective Courses</h3>
        <div className="container w-100">
          <div className="mixed-chart ">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="100%"
              height={'480'}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Mychart;