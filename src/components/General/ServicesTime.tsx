import styled from "styled-components";

const ServicesTimesWrapper = styled.div`
  display: inline-flex;
  align-items: flex-start;
  //gap: 195px;
  justify-content: space-between;

  width: 100%;
  border-radius: 20px;
  background: var(--white, #F8F8F8);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.10);

  margin-top: 20px;
  padding: 15px;
  color: #3A3A3A;
`
type ServiceTimeProps = {
    satType: string,
    data: {
        kami: number,
        sgu?: number,
        acgs?: number,
        sgs?: number,
        hoshen: number
    }
};

type PropsService = {
    serviceName: string,
    time: number
};

const ServicesTime = ({satType, data}: ServiceTimeProps) => {
    return <ServicesTimesWrapper>{
        (satType === "type3") ? null :
            <>
                <ServiceCube serviceName={"Kami"} time={data['kami'] || '-'}/>
                {satType == "type1" ?
                    <>
                        <ServiceCube serviceName={"SGU"} time={data['sgu'] || '-'}/>
                        <ServiceCube serviceName={"ACGS"} time={data['acgs'] || '-'}/>
                    </>
                    :
                    <ServiceCube serviceName={"SGS"} time={data['sgs'] || '-'}/>}

                <ServiceCube serviceName={"Hoshen"} time={data['hoshen'] || '-'}/>
                <LineStyle/>
            </>
    }</ServicesTimesWrapper>
}

const ServiceCube = ({serviceName, time}: PropsService) => {
    return <ServicesCubeWrapper>
        <div>{serviceName}</div>
        <TimeComponent time={time}>{time}</TimeComponent>
    </ServicesCubeWrapper>
}

const LineStyle = styled.div`
  width: 80%;
  position: fixed;
  margin: 50px;
  height: 4px;
  background-color: #BBB;
`
const TimeComponent = styled.div<{ time: number }>((props) => {
    let color = "#9ADBA0"
    if (props.time > 300 && props.time < 600) color = "#FFC46C"
    if (props.time >= 600) color = "#FE7670"
    return `
    border-radius: 5px;
    background: ${color};
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.05);
    display: flex;
    width: 100px;
    height: 30px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
`
})
const ServicesCubeWrapper = styled.div`
  display: flex;
  //width: 200px;
  //height: 90px;
  padding: 10px 50px 15px 50px;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  border-radius: 10px;
  background: #F1F1F1;
  z-index: 200;
  justify-content: center;
`

export default ServicesTime;