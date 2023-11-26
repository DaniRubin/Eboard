const getRandomNumber = (max) => {
    return Math.floor(Math.random() * max)
}
const getRandomTime = () => {
    return `${Math.floor(Math.random() * 60)}:${Math.floor((Math.random() * 50) + 10)}`
}

export const MockMainPageResponse = {
    SatInfo: {
        'Sat1': {
            satelliteName: 'Sat1',
            value: getRandomNumber(30) + 70,
            time: getRandomTime(),
            limit: 60,
            type: 'type1'
        },
        'Sat2': {
            satelliteName: 'Sat2',
            value: getRandomNumber(30) + 70,
            time: getRandomTime(),
            limit: 60,
            type: 'type1'
        },
        'Sat3': {
            satelliteName: 'Sat3',
            value: getRandomNumber(30) + 70,
            time: getRandomTime(),
            limit: 60,
            type: 'type1'
        },
        'Sat4': {
            satelliteName: 'Sat4',
            value: getRandomNumber(30) + 70,
            time: getRandomTime(),
            limit: 60,
            type: 'type1'
        },
        'Sat5': {
            satelliteName: 'Sat5',
            value: getRandomNumber(30) + 70,
            time: getRandomTime(),
            limit: 60,
            type: 'type1'
        },
        'Sat6': {
            satelliteName: 'Sat6',
            value: getRandomNumber(30) + 70,
            time: getRandomTime(),
            limit: 60,
            type: 'type1'
        },
        'Sat7': {satelliteName: 'Sat7', value: getRandomNumber(100), time: getRandomTime(), limit: 60, type: 'type2'},
        'Sat8': {
            satelliteName: 'Sat8',
            value: getRandomNumber(30) + 70,
            time: getRandomTime(),
            limit: 60,
            type: 'type2'
        },
        'Sat9': {satelliteName: 'Sat9', value: 0, time: "-", limit: 60, type: 'type2'},
        'Sat10': {
            satelliteName: 'Sat10',
            value: getRandomNumber(30) + 70,
            time: getRandomTime(),
            limit: '-',
            type: 'type3'
        },
        'Sat11': {
            satelliteName: 'Sat11',
            value: getRandomNumber(30) + 70,
            time: getRandomTime(),
            limit: '-',
            type: 'type3'
        },
        'Sat12': {
            satelliteName: 'Sat12',
            value: getRandomNumber(30) + 70,
            time: getRandomTime(),
            limit: '-',
            type: 'type3'
        },
        'TOTAL': {satelliteName: 'TOTAL', value: getRandomNumber(30) + 70, time: "-", limit: "-", type: "type1"},
    },
    Reception: {
        planned: 100,
        received: getRandomNumber(50) + 50,
    },
    LateProducts: [
        {downloadId: 'chocolate', time: getRandomNumber(1000), urgent: true},
        {downloadId: 'strawberry_psr', time: getRandomNumber(1000), urgent: true},
        {downloadId: 'ts_vanilla_00000', time: getRandomNumber(1000), urgent: true},
        {downloadId: 'ts_dsffs', time: getRandomNumber(1000), urgent: false},
        {downloadId: 'ts_gfdgd_00000', time: getRandomNumber(1000), urgent: true},
        {downloadId: 'sdfdsf_psr', time: getRandomNumber(1000), urgent: false},
        {downloadId: 'sdvsdv', time: getRandomNumber(1000), urgent: true},
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
const generateSatType = () => {
    switch (getRandomNumber(3)) {
        case (0):
            return 'type1'
        case (1):
            return 'type2'
        case (2):
            return 'type3'

    }
}
const generateLateProducts = () => {
    if (getRandomNumber(3) == 1) return []
    return [{downloadId: 'chocolate', time: getRandomNumber(500), urgent: true},
        {downloadId: 'ts_strawberry_00000', time: getRandomNumber(500), urgent: true},
        {downloadId: 'ts_vanilla_psr', time: getRandomNumber(500), urgent: true},
        {downloadId: 'ts_dsffs_00000', time: getRandomNumber(500), urgent: false},
        {downloadId: 'gfdgd_psr', time: getRandomNumber(500), urgent: true},
        {downloadId: 'sdfdsf', time: getRandomNumber(500), urgent: false},
        {downloadId: 'sdvsdv', time: getRandomNumber(500), urgent: true}
    ]
}

export const generateSatellite = () => {
    return {
        lastUpdatedTime: new Date(),
        LateProducts: generateLateProducts(),
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
            metadataProblems: 5,
            satType: generateSatType(),
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
        ],
        ServicesTime: {
            'kami': getRandomNumber(800),
            'sgu': getRandomNumber(800),
            'acgs': getRandomNumber(800),
            'sgs': getRandomNumber(800),
            'hoshen': getRandomNumber(800)
        },
    }
}

const countriesList = ['country1', 'country2', 'country3', 'country4', 'country5', 'country6', 'country7', 'country8', 'country9', 'country10', 'country11']
const createEsufCountriesList = () => {
    return countriesList.map((country) => {
        return {
            country: country, totalAmount: getRandomNumber(10) + 60, cfgPlannedAmount: getRandomNumber(10),
            plannedAmount: getRandomNumber(10) + 5, completedAmount: getRandomNumber(10) + 25,
        }
    })
}

export const GenerateMockEsufPageResponse = () => {
    return {
        data: createEsufCountriesList(),
        total: {
            country: "TOTAL", totalAmount: getRandomNumber(10) + 60, cfgPlannedAmount: getRandomNumber(10),
            plannedAmount: getRandomNumber(10) + 5, completedAmount: getRandomNumber(10) + 25
        }
    }
}

export const GenerateMockKashahReceptionResponse = () => {
    return {
        lastUpdatedTime: new Date(),
        data: {
            type1: {
                distribution: {
                    country1: getRandomNumber(100),
                    country2: getRandomNumber(100),
                    country3: getRandomNumber(100),
                    country4: getRandomNumber(100),
                    country5: getRandomNumber(100),
                    country6: getRandomNumber(100),
                    country7: getRandomNumber(100),
                    country8: getRandomNumber(100),
                    country9: getRandomNumber(100),
                    country10: getRandomNumber(100),
                    country11: getRandomNumber(100),
                    country12: getRandomNumber(100),
                    country13: getRandomNumber(100),
                    country14: getRandomNumber(100),
                    country15: getRandomNumber(100),
                    country16: getRandomNumber(100),
                    country17: getRandomNumber(100),
                    country18: getRandomNumber(100),
                    country19: getRandomNumber(100),
                }, count: getRandomNumber(700)
            },
            type2: {
                distribution: {
                    country1: getRandomNumber(100),
                    country2: getRandomNumber(100),
                    country3: getRandomNumber(100),
                    country4: getRandomNumber(100),
                    country5: getRandomNumber(100),
                    country6: getRandomNumber(100)
                }, count: getRandomNumber(700)
            },
            type3: {
                distribution: {
                    country1: getRandomNumber(100),
                    country2: getRandomNumber(100),
                    country3: getRandomNumber(100),
                    country4: getRandomNumber(100),
                    country5: getRandomNumber(100),
                    country6: getRandomNumber(100)
                }, count: getRandomNumber(700)
            },
        },
    }
}