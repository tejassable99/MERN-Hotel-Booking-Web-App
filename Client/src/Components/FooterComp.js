import { Container, Grid,  Header, List, Segment } from 'semantic-ui-react';
import { Link } from "react-router-dom";

const FooterComp=()=>{
    return(
        <>
        <Segment inverted vertical style={{  }} class="fixed">
      <Container>
        <Grid columns={3} divided inverted stackable>
          <Grid.Row>
            <Grid.Column>
              <Header inverted as='h2' content='NAVIGATION' />
              <ul>
                <h3>
              <Link to="/Home"> <li>Home</li></Link> 
               <Link to="/About">  <li>About</li></Link> 
           <Link to="/OurHotel">   <li>Our Hotels</li></Link> 
              <Link to="/Gallery"> <li>Gallery</li></Link> 
              <Link to="/Contact"> <li>Contact</li></Link> 
              </h3>
              </ul>
            </Grid.Column>

            <Grid.Column>
              <Header inverted as='h2' content='OUR HOTELS' />
              <p>Golden Keys Inn</p>
              <p>TEJAS HOTELS & RESORTS</p>
              <p>B2/15 Ahosk Vihar Phase 2, New Delhi 110052 India</p>
              <p>info@gbsdfgn.com</p>
              <p>+9456514566</p>
            </Grid.Column>

            <Grid.Column>
              <Header  inverted as='h2' content='TEJAS HOTELS & RESORTS' />
              <p>TEJAS Hotels & Resorts © 2021 - All Rights Reserved.</p>
              <p>Website developed by TEJAS - Simplest Website Builder for Hotels</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
        </>
    )
}
export default FooterComp

