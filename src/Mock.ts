export const MockMainPageResponse = {
    SatInfo: [
        {satelliteName: 'Sat1', value: 90, time: "00:00:00", minutes: "60 min", type: 'type1'},
        {satelliteName: 'Sat2', value: 72, time: "00:00:00", minutes: "60 min", type: 'type1'},
        {satelliteName: 'Sat3', value: 15, time: "00:00:00", minutes: "60 min", type: 'type1'},
        {satelliteName: 'Sat4', value: 87, time: "00:00:00", minutes: "60 min", type: 'type1'},
        {satelliteName: 'Sat5', value: 90, time: "00:00:00", minutes: "60 min", type: 'type1'},
        {satelliteName: 'Sat6', value: 88, time: "00:00:00", minutes: "60 min", type: 'type1'},
        {satelliteName: 'Sat7', value: 9, time: "00:00:00", minutes: "60 min", type: 'type2'},
        {satelliteName: 'Sat8', value: 44, time: "00:00:00", minutes: "60 min", type: 'type2'},
        {satelliteName: 'Sat9', value: 0, time: "-", minutes: "60 min", type: 'type2'},
        {satelliteName: 'Sat10', value: 66, time: "00:00:00", minutes: "60 min", type: 'type3'},
        {satelliteName: 'Sat11', value: 77, time: "00:00:00", minutes: "60 min", type: 'type3'},
        {satelliteName: 'Sat12', value: 99, time: "00:00:00", minutes: "60 min", type: 'type3'},
        {satelliteName: 'TOTAL', value: 81, time: "-", minutes: "-", type: "type1"},
    ],
    LateProducts: [
        {downloadId: 'chocolate', time: '10:00', urgent: true},
        {downloadId: 'strawberry', time: '20:00', urgent: true},
        {downloadId: 'vanilla', time: '30:00', urgent: true},
        {downloadId: 'dsffs', time: '30:00', urgent: false},
        {downloadId: 'gfdgd', time: '30:00', urgent: true},
        {downloadId: 'sdfdsf', time: '30:00', urgent: false},
        {downloadId: 'sdvsdv', time: '30:00', urgent: true},
        {downloadId: 'nhgnghf', time: '30:00', urgent: false},
        {downloadId: 'gsfg', time: '30:00', urgent: true},
        {downloadId: 'vanfdfdilla', time: '30:00', urgent: false},
        {downloadId: 'nfn', time: '30:00', urgent: true},
        {downloadId: 'vanidfglla', time: '30:00', urgent: true},
        {downloadId: 'vanfbvdfilla', time: '30:00', urgent: true}
    ],
    lastUpdatedTime: "10:11:12",
    LFMetadataProblem: 1,
    InProgressProducts: 4
}

export const MockSatellitePageResponse = {
    lastUpdatedTime: "10:11:12",
    LateProducts: [{downloadId: 'chocolate', time: '10:00', urgent: true},
        {downloadId: 'strawberry', time: '20:00', urgent: true},
        {downloadId: 'vanilla', time: '30:00', urgent: true},
        {downloadId: 'dsffs', time: '30:00', urgent: false},
        {downloadId: 'gfdgd', time: '30:00', urgent: true},
        {downloadId: 'sdfdsf', time: '30:00', urgent: false},
        {downloadId: 'sdvsdv', time: '30:00', urgent: true}
    ],
    Trend: [
        {timeFrame: '10:00', seconds: 100},
        {timeFrame: '12:00', seconds: 120},
        {timeFrame: '14:00', seconds: 110},
        {timeFrame: '16:00', seconds: 125},
        {timeFrame: '18:00', seconds: 44},
        {timeFrame: '20:00', seconds: 40},
        {timeFrame: '22:00', seconds: 30},
        {timeFrame: '00:00', seconds: 100},
    ],
    Statistics: {
        satelliteName: 'SatelliteA',
        averageTime: '0:35',
        limitTime: '60 min',
        productsCount: 100,
        onTimeProducts: 80,
        lateProducts: 20,
        percentage: 83,
        cep90: '3:22',
        productsInProgress: '10',
        metadataProblems: 5
    },
    Histogram: [
        {seconds: 111, count: 21},
        {seconds: 133, count: 32},
        {seconds: 167, count: 22},
        {seconds: 192, count: 30},
        {seconds: 205, count: 22},
        {seconds: 194, count: 42},
        {seconds: 395, count: 35},
        {seconds: 403, count: 31},
    ]
}
