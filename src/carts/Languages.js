import React, { Children } from 'react'
import TestingChart from './TestingChart'
import { GlobalContextFunc } from '../GlobalState'

export default function Languages() {
  const { repos } = GlobalContextFunc()

  let total = []
  let total1 = []

  repos.forEach(function myFunction(value, index, array) {
    //     txt += value + '<br>'
    const { language } = value
    //     console.log(language)
    if (language) {
      //  console.log(language)

      if (total.hasOwnProperty(language)) {
        //    console.log('lala')
        total[language] = total[language] + 1
      } else {
        //    console.log('asdf')
        total[language] = 1
      }
    }
  })
  // console.log(total)
  for (let key in total) {
    // code block to be executed
    // console.log(key)
    var vaa = Math.round(total[key])
    var objaa = {
      label: key,
      value: vaa,
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
    type: 'pie3d', // The chart type
    width: '100%', // Width of the chart
    height: '400', // Height of the chart
    dataFormat: 'json', // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        //Set the chart caption
        caption: 'Languages',
        showPercentValues: '0',
        showPercentInToolTip: '1',

        showLegend: '0',
        //Set the chart subcaption
        subCaption: '',
        //Set the x-axis name
        xAxisName: 'Country',
        //Set the y-axis name
        yAxisName: 'Reserves (MMbbl)',
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
