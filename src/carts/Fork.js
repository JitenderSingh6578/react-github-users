import React from 'react'
import TestingChart from './TestingChart'
import { GlobalContextFunc } from '../GlobalState'

export default function Fork() {
  const { repos } = GlobalContextFunc()

  let total = []
  let total1 = []

  repos.forEach(function myFunction(value, index, array) {
    //     txt += value + '<br>'
    const { stargazers_count, language, forks } = value
    //     console.log(value)
    if (language) {
      //  console.log(language)

      if (total.hasOwnProperty(language)) {
        //    console.log('lala')
        total[language] = total[language] + forks
      } else {
        //    console.log('asdf')
        total[language] = 0
      }
    }
  })
  //   console.log('total =', total)
  for (let key in total) {
    // code block to be executed
    // console.log(key)
    //     var vaa = Math.round(total[key])
    var objaa = {
      label: key,
      value: total[key],
    }
    total1.push(objaa)
  }
  total1 = total1.slice(0, 5)
  total1 = total1.sort(function (a, b) {
    return b.value - a.value
  })

  // STEP 2 - Chart Data
  const chartData = [
    {
      label: 'Venezuela',
      value: '290',
    },
    {
      label: 'Saudi',
      value: '260',
    },
    {
      label: 'Canada',
      value: '180',
    },
    {
      label: 'Iran',
      value: '140',
    },
    {
      label: 'Russia',
      value: '115',
    },
    {
      label: 'UAE',
      value: '100',
    },
    {
      label: 'US',
      value: '30',
    },
    {
      label: 'China',
      value: '30',
    },
  ]

  // STEP 3 - Creating the JSON object to store the chart configurations
  const chartConfigs = {
    type: 'bar3d', // The chart type
    width: '100%', // Width of the chart
    height: '400', // Height of the chart
    dataFormat: 'json', // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        //Set the chart caption
        caption: 'Most Forked',

        showPercentValues: '0',
        showLabels: '1',
        showValues: '1',
        showLegend: '0',
        showPercentInToolTip: '1',
        //Set the chart subcaption
        subCaption: '',
        //Set the x-axis name
        xAxisName: 'Repos',
        //Set the y-axis name
        yAxisName: 'Forks',
        numberSuffix: '',
        //Set the theme for your chart
        theme: 'fusion',
      },
      // Chart Data
      data: total1,
    },
  }

  return (
    <div>
      <TestingChart chartConfigs={chartConfigs} />
    </div>
  )
}
