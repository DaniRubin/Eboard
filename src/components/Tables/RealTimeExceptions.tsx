import './RealTimeExceptions.css'
import urgentIcon from '../../assets/UrgentIcon.svg'
import colorIcon from '../../assets/ColorIcon.svg'
import SLIcon from '../../assets/SingleLookIcon.svg'
import MLicon from '../../assets/MultilookIcon.svg'
import checkIcon from '../../assets/CheckIcon.svg'
import styled from "styled-components";

type Props = {
    downloads: {
        downloadId: string;
        time: number;
        urgent: boolean;
    }[]
};

const ImgStyle = styled.img`
  float: right;
  margin-top: 3px;
  margin-right: 3px;
`


const RealTimeExceptions = ({downloads}: Props) => (
    <div className="realtime-exceptions-flex-wrapper">
        <text className='realtime-exceptions-header'>real time exceptions</text>
        {downloads.length > 0 ? <div className='downloads-card'>
            {
                downloads.map((download) =>
                    <text key={download.downloadId} className="download-row">
                        <text className="download-id-text">
                            {download.downloadId}
                            {download.urgent && <ImgStyle src={urgentIcon}/>}
                            {download.downloadId.toLowerCase().includes("_psr") && <ImgStyle src={colorIcon}/>}
                            {!download.downloadId.includes('ts') ? null :
                                download.downloadId.includes('_00000') ? <ImgStyle src={MLicon}/> :
                                    <ImgStyle src={SLIcon}/>}
                        </text>
                        <text
                            className="download-time-text">{Math.floor(download.time / 60)}:{Math.floor(download.time % 60).toString().padStart(2, "0")}h
                        </text>
                    </text>)
            }
        </div> : <img src={checkIcon} style={{height: '75px', marginTop: '25px'}}/>}
    </div>
)

export default RealTimeExceptions;