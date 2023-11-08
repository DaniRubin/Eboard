const getRandomNumber = (max) => {
    return Math.floor(Math.random() * max)
}
const getRandomTime = () => {
    return `${Math.floor(Math.random() * 60)}:${Math.floor((Math.random() * 50) + 10)}`
}

export const MockMainPageResponse = {
    SatInfo: [
        {satelliteName: 'Sat1', value: getRandomNumber(30) + 70, time: getRandomTime(), minutes: "60 min", type: 'type1'},
        {satelliteName: 'Sat2', value: getRandomNumber(30) + 70, time: getRandomTime(), minutes: "60 min", type: 'type1'},
        {satelliteName: 'Sat3', value: getRandomNumber(30) + 70, time: getRandomTime(), minutes: "60 min", type: 'type1'},
        {satelliteName: 'Sat4', value: getRandomNumber(30) + 70, time: getRandomTime(), minutes: "60 min", type: 'type1'},
        {satelliteName: 'Sat5', value: getRandomNumber(30) + 70, time: getRandomTime(), minutes: "60 min", type: 'type1'},
        {satelliteName: 'Sat6', value: getRandomNumber(30) + 70, time: getRandomTime(), minutes: "60 min", type: 'type1'},
        {satelliteName: 'Sat7', value: getRandomNumber(100), time: getRandomTime(), minutes: "60 min", type: 'type2'},
        {satelliteName: 'Sat8', value: getRandomNumber(30) + 70, time: getRandomTime(), minutes: "60 min", type: 'type2'},
        {satelliteName: 'Sat9', value: 0, time: "-", minutes: "60 min", type: 'type2'},
        {satelliteName: 'Sat10', value: getRandomNumber(30) + 70, time: getRandomTime(), minutes: "60 min", type: 'type3'},
        {satelliteName: 'Sat11', value: getRandomNumber(30) + 70, time: getRandomTime(), minutes: "60 min", type: 'type3'},
        {satelliteName: 'Sat12', value: getRandomNumber(30) + 70, time: getRandomTime(), minutes: "60 min", type: 'type3'},
        {satelliteName: 'TOTAL', value: getRandomNumber(30) + 70, time: "-", minutes: "-", type: "type1"},
    ],
    LateProducts: [
        {downloadId: 'chocolate', time: getRandomNumber(1000), urgent: true},
        {downloadId: 'strawberry', time: getRandomNumber(1000), urgent: true},
        {downloadId: 'vanilla', time: getRandomNumber(1000), urgent: true},
        {downloadId: 'dsffs', time: getRandomNumber(1000), urgent: false},
        {downloadId: 'gfdgd', time: getRandomNumber(1000), urgent: true},
        {downloadId: 'sdfdsf', time: getRandomNumber(1000), urgent: false},
        {downloadId: 'sdvsdv', time:getRandomNumber(1000), urgent: true},
        {downloadId: 'nhgnghf', time: getRandomNumber(1000), urgent: false},
        {downloadId: 'gsfg', time: getRandomNumber(1000), urgent: true},
        {downloadId: 'vanfdfdilla', time: getRandomNumber(1000), urgent: false},
    ],
    lastUpdatedTime: new Date(),
    LFMetadataProblem: 1,
    InProgressProducts: 4
}

const generateTrend = () => {
    const trendData = []
    for (let i = 0; i < 12; i++) {
        trendData.push({timeFrame: `${i * 2}:00`, seconds: getRandomNumber(200)})
    }
    return trendData
}

export const generateSatellite = () => {
    return {
        lastUpdatedTime: new Date(),
        LateProducts: [{downloadId: 'chocolate', time: getRandomTime(), urgent: true},
            {downloadId: 'strawberry', time: getRandomTime(), urgent: true},
            {downloadId: 'vanilla', time: getRandomTime(), urgent: true},
            {downloadId: 'dsffs', time: getRandomTime(), urgent: false},
            {downloadId: 'gfdgd', time: getRandomTime(), urgent: true},
            {downloadId: 'sdfdsf', time: getRandomTime(), urgent: false},
            {downloadId: 'sdvsdv', time: getRandomTime(), urgent: true}
        ],
        Trend: [
            ...generateTrend()
        ],
        Statistics: {
            satelliteName: 'SatelliteA',
            averageTime: getRandomTime(),
            limitTime: '60 min',
            productsCount: 100,
            onTimeProducts: 80,
            lateProducts: 20,
            percentage: getRandomNumber(30) + 70,
            cep90: getRandomTime(),
            productsInProgress: '10',
            metadataProblems: 5
        },
        Histogram: [
            {seconds: 111, count: getRandomNumber(30)},
            {seconds: 133, count: getRandomNumber(30)},
            {seconds: 167, count: getRandomNumber(30)},
            {seconds: 192, count: getRandomNumber(30)},
            {seconds: 205, count: getRandomNumber(30)},
            {seconds: 194, count: getRandomNumber(30)},
            {seconds: 395, count: getRandomNumber(30)},
            {seconds: 403, count: getRandomNumber(30)},
        ]
    }
}