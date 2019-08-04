<template>
  <div id="chart"></div>
</template>
<style scoped>
#chart {
  position: relative;
  height: 500px;
  width: 500px;
  display: inline-block;
}
</style>
<script>
export default {
  name: "SpendPie",
  data: function() {
    return {
      placeholder: "asdf",
      chart: null
    };
  },
  methods: {
    dataFromProps() {
      let seriesData = [];
      console.log("input data props");
      console.log(this.inputData);
      console.log("before for");
      for (let key in this.inputData) {
        console.log(key);
        seriesData.push({
          name: key,
          y: this.inputData[key]
        });
      }
      console.log(" after for");

      console.log(seriesData);
      this.chart = Highcharts.chart("chart", {
        chart: {
          type: "pie"
        },
        title: {
          text: this.name
        },
        series: [
          {
            name: "stuf",
            data: seriesData
          }
        ]
      });
      console.log(this.chart);
    }
  },

  props: {
    inputData: {
      type: Object
    },
    name: {
      type: String
    },
    chartType: {
      type: String
    }
  },
  mounted: function() {
    console.log(this.inputData);
    this.dataFromProps();
  }
};
</script>
