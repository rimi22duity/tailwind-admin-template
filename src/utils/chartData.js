const chartColors = {
    default: {
        primary: '#00D1B2',
        info: '#209CEE',
        danger: '#FF3860'
    }
}

const randomChartData = n => {
    let data = []

    for (let i = 0; i < n; i++) {
        data.push(Math.round(Math.random() * 200))
    }

    return data
}

export const chartData = [
    {
        fill: false,
        borderColor: chartColors.default.primary,
        borderWidth: 2,
        borderDash: [],
        borderDashOffset: 0.0,
        pointBackgroundColor: chartColors.default.primary,
        pointBorderColor: 'rgba(255,255,255,0)',
        pointHoverBackgroundColor: chartColors.default.primary,
        pointBorderWidth: 20,
        pointHoverRadius: 4,
        pointHoverBorderWidth: 15,
        pointRadius: 4,
        data: randomChartData(9)
    },
    {
        fill: false,
        borderColor: chartColors.default.info,
        borderWidth: 2,
        borderDash: [],
        borderDashOffset: 0.0,
        pointBackgroundColor: chartColors.default.info,
        pointBorderColor: 'rgba(255,255,255,0)',
        pointHoverBackgroundColor: chartColors.default.info,
        pointBorderWidth: 20,
        pointHoverRadius: 4,
        pointHoverBorderWidth: 15,
        pointRadius: 4,
        data: randomChartData(9)
    },
    {
        fill: false,
        borderColor: chartColors.default.danger,
        borderWidth: 2,
        borderDash: [],
        borderDashOffset: 0.0,
        pointBackgroundColor: chartColors.default.danger,
        pointBorderColor: 'rgba(255,255,255,0)',
        pointHoverBackgroundColor: chartColors.default.danger,
        pointBorderWidth: 20,
        pointHoverRadius: 4,
        pointHoverBorderWidth: 15,
        pointRadius: 4,
        data: randomChartData(9)
    }
]