import "./Comp.css"
import "../App.css"
import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import { Container, Header } from 'semantic-ui-react';
import CarouselComp from "./CarouselComp";
import CalendarCard from "./CalendarCard";

 import FooterComp from "./FooterComp";
import HeaderComp from "./HeaderComp";
const Team=()=>{
    return(<>
       <div class="fixed"  >
    <HeaderComp/>
    </div>
    <CarouselComp/>
    <CalendarCard/>
    <div className="about">
        <div style={{width:"80%",marginBottom:"150px"}}>
        <h1>Introduction</h1><br/>
       <h2> 1. We aspire to be India’s finest and largest hotel chain in the economy and mid market segment.</h2><br/>
        <h3>
        <p>
        Aspire to be largest player in the fast growing economy / mid market domestic consumption space. Enormous long term growth in this underserved/ underpenetrated segment
        
        
        Pipeline to add 10 hotels by 2021 i,e, New Delhi, Gurgaon, Jaipur, Vadodara and Haridwar
        
        
        Widespread presence with the aim to have over 30 hotels across 30 major gateway cities of India
        </p></h3>
        <br/>
        <h2>2. High brand recognition, covering the full product spectrum</h2><br/>
        <h3> <p>
        Brand that meet traveller needs across relevant categories
        
        
        High management focus to continue to increase brand loyalty through digital sales channel (online)
        
        
        Technology focused approach like cloud based PMS, channel manager, guest feed back system and booking engine.
        </p></h3>
        <br/>
      
     <h2> 3. Attractive, unique, scalable and sustainable business model in the fastest growing economy in the world</h2><br/>
    <h3>
       <p>
        Unique Operate model of management, franchise & sales + marketing representation
        
        
        Significant operating leverage and distribution capabilities due to fast tracked expansion plans
        
        
        Increased focus on asset light scaling up quickly through management and franchise contracts
        
        
        Strong demand environment from SME’s, initiatives such as “Make in India” and increased spending power of the Indian consumer
        </p></h3>
        <br/>
       <h2> 4. Highly experienced, well respected shareholders and management team</h2><br/>
        <h3>
       <p> Comprises of individuals who founded the business and held senior positions at successful brands such as Taj, Lemon Tree, etc.
        
        
        Proven on the ground execution expertise with decades in the hospitality industry
        
        
        Highest standards of corporate governance and responsibility towards employees, guests, partners, investors and community</p></h3>
        </div>



</div>

<Container style={{ width: "100%", backgroundColor: "gray",marginBottom:"0" }}>
      <div className="t">
        <h1>MANAGEMENT TEAM</h1>
      </div>
      <br />
      <div className="c" >
        <Grid stackable columns={2}>
          <Grid.Row>
            {/* Akash Bhatia */}
            <Grid.Column>
            <div style={{display:"flex",justifyContent:"center",flexDirection:"column",marginRight:"300px"}} className="grow">
              <Image src="indra nooyi.jpg" size="medium" />
    
              <Header as="h2">NIndra ooyi</Header>
              <h4>
              <p>CEO</p>
              <p>Graduate from IHM Gurdaspur</p>
              <p>Post Graduate Diploma in Management from IMT Ghaziabad</p>
              <p>Over 13 years of experience in the hospitality industry</p>
              </h4>
              </div>

              {/* Add more details as needed */}
              
            </Grid.Column>

            {/* Vikas Verma */}
            <Grid.Column>
              <div style={{display:"flex",justifyContent:"center",flexDirection:"column",marginRight:"300px"}} className="grow">
              <Image src="sundar.jpg" size="medium" />
              <Header as="h2">Pundar Sichai</Header>
              <h4>
              <p>VP Operations</p>
              <p>Post Graduate Diploma from IHM Shimla</p>
              <p>Over 22 years of experience in the hospitality industry</p>
              {/* Add more details as needed */}
              </h4>
              </div>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            {/* Ravinder Yadav */}
            <Grid.Column>
            <div style={{display:"flex",justifyContent:"center",flexDirection:"column",marginRight:"300px"}} className="grow">
              <Image src="leena.jpg" size="medium" />
              <Header as="h2">Neela Lair</Header>
              <h4>
              <p>Director - Operations</p>
              <p>Hotel management graduate from IHM Bhubaneswar</p>
              <p>Over 19 years of experience in the hospitality industry</p>
              {/* Add more details as needed */}
              </h4>
              </div>
            </Grid.Column>

            {/* Rashi Bhatia */}
            <Grid.Column>
            <div style={{display:"flex",justifyContent:"center",flexDirection:"column",marginRight:"300px"}} className="grow">
              <Image src="pager.jpg" size="medium" />
              <Header as="h2">Natya Sadella</Header>
              <h4>
              <p>Director Finance</p>
              <p>Commerce graduate from University of Delhi</p>
              <p>MBA from IGNOU</p>
              <p>Over 10 years of experience in various finance verticals</p>
              {/* Add more details as needed */}
              </h4>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </Container>
    <div  >
<FooterComp/>
</div>
        </>
    )
}
export default Team