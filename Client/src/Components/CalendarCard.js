import { DatePicker, Space } from 'antd';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Grid } from 'semantic-ui-react';
import { Container } from 'semantic-ui-react';
import { differenceInDays } from 'date-fns';
const { RangePicker } = DatePicker;

const CalendarCard = ({handleDatesChange}) => {

  // const [dates, setDates] = useState([]);
  // const [differenceInDays, setDifferenceInDays] = useState(0);

  // const handleDatesChange = (newDates) => {
  //   setDates(newDates);
  //   const differenceInDays = Math.abs(newDates[0].diff(newDates[1], "days"));
  //   setDifferenceInDays(differenceInDays);
  //   localStorage.setItem("startDate", newDates[0].format("YYYY-MM-DD"));
  //   localStorage.setItem("endDate", newDates[1].format("YYYY-MM-DD"));
  //   localStorage.setItem("differenceInDays", differenceInDays);
  // };

  // const renderDates = () => {
  //   if (dates.length === 2) {
      
    

  //   const startDate = dates[0].format("YYYY-MM-DD");
  //   const endDate = dates[1].format("YYYY-MM-DD");
  //   const differenceInDays = Math.abs(dates[0].diff(dates[1], "days"));
  //   }
  // }
  const today = new Date();
  
  const disabledDate = (current) => {
    // Disable dates before the current date
    return current && current < today;
  };

  return (
    <>
      <div className="reservation-div">
        <Container>
          <Grid>
            <Grid.Row>
              <Grid.Column width={5}>
                <h2 style={{color:"white"}}>Destination</h2>
                <div style={{ color: 'goldenrod' }}>
                  <h3>Golden Keys Inn</h3>
                </div>
              </Grid.Column>
              <Grid.Column width={6}>
              <div style={{ display: "flex", alignItems: "center", gap:"36%",paddingBottom:"3%"}}>
  <div style={{ fontSize: "18px", fontWeight: "bold", marginLeft: "50px",color:"white"}}>Stay From</div>
  <div style={{ fontSize: "18px", fontWeight: "bold",color:"white", marginRight:"30px" }}>Stay To</div>
</div>


                <p>
                  <Space direction="vertical" style={{ cursor: 'pointer' }}>
                    <RangePicker
                      style={{ width: '100%', fontSize: '16px' }}
                      format='DD/MM/YYYY'
                      onChange={handleDatesChange}
                      disabledDate={disabledDate}
                    />
                  </Space>
                </p>
              </Grid.Column>
              <Grid.Column width={5} textAlign="center">
                <Link to="/BookNow" >
                  <Button
                    style={{ backgroundColor: 'goldenrod', color: 'white' }}
                    size="large"
                
                    
                  >
                    RESERVE NOW
                  </Button>
                  
                </Link>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    </>
  );
};

export default CalendarCard;
