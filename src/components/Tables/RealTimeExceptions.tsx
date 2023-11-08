import './RealTimeExceptions.css'
import urgentIcon from '../../assets/UrgentIcon.svg'

type Props = {
    downloads: {
        downloadId: string;
        time: number;
        urgent: boolean;
    }[]
};


const RealTimeExceptions = ({downloads}: Props) => (
    <div className="realtime-exceptions-flex-wrapper">
        <text className='realtime-exceptions-header'>real time exceptions</text>
        <div className='downloads-card'>
            {
                downloads.map((download) =>
                    <text key={download.downloadId} className="download-row">
                        <text className="download-id-text">
                            {download.downloadId}
                            {download.urgent &&
                            <img src={urgentIcon} style={{float: 'right', marginTop: '3px', marginRight: '5px'}}/>}
                        </text>
                        <text
                            className="download-time-text">{Math.floor(download.time / 60)}:{Math.floor(download.time % 60).toString().padStart(2, "0")}h </text>
                    </text>)
            }
        </div>
    </div>
)

export default RealTimeExceptions;