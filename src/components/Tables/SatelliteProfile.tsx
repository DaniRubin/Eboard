import './SatelliteProfile.css'

type Props = {
    satelliteData: {
        satelliteName: string;
        averageTime: string;
        limitTime: string;
        productsCount: number;
        onTimeProducts: number;
        lateProducts: number;
        cep90: string;
        productsInProgress: string;
        metadataProblems: number;
        percentage: number;
    }
};


const SatelliteProfile = ({satelliteData}: Props) =>
    <div className="satellite-profile-flex-wrapper">
        <text className="satellite-profile-row">
            <text className="satellite-profile-key-text">Average Time</text>
            <text className="satellite-profile-value-text">{satelliteData.averageTime}</text>
        </text>
        <text className="satellite-profile-row">
            <text className="satellite-profile-key-text">Limit Time</text>
            <text className="satellite-profile-value-text">{satelliteData.limitTime}</text>
        </text>
        <text className="satellite-profile-row">
            <text className="satellite-profile-key-text">Products Count</text>
            <text className="satellite-profile-value-text">{satelliteData.productsCount}</text>
        </text>
        <text className="satellite-profile-row">
            <text className="satellite-profile-key-text">On Time Products</text>
            <text className="satellite-profile-value-text">{satelliteData.onTimeProducts}</text>
        </text>
        <text className="satellite-profile-row">
            <text className="satellite-profile-key-text">Late Products</text>
            <text className="satellite-profile-value-text">{satelliteData.lateProducts}</text>
        </text>
        <text className="satellite-profile-row">
            <text className="satellite-profile-key-text">cep90</text>
            <text className="satellite-profile-value-text">{satelliteData.cep90}</text>
        </text>
        <text className="satellite-profile-row">
            <text className="satellite-profile-key-text">Percentage</text>
            <text className="satellite-profile-value-text">{satelliteData.percentage}%</text>
        </text>
        <text className="satellite-profile-row">
            <text className="satellite-profile-key-text">Products In Progress</text>
            <text className="satellite-profile-value-text">{satelliteData.productsInProgress}</text>
        </text>
    </div>

export default SatelliteProfile;