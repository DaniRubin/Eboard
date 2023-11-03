import './RealTimeExceptions.css'

type Props = {
  downloads: {
    downloadId: string;
    time: string;
  }[]
};


const RealTimeExceptions = ({ downloads } : Props) => (
	<div className="realtime-exceptions-flex-wrapper">
		<text className='realtime-exceptions-header'>real time exceptions</text>
		<div className='downloads-card'>
			{
				downloads.map((download) => 
				<text key={download.downloadId} className="download-row">
					<text className="download-id-text">{download.downloadId}</text>
					<text className="download-time-text">{download.time}</text>
				</text>)
			}
		</div>
	</div>
)

export default RealTimeExceptions;