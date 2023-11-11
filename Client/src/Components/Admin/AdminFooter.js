import { Container, Grid,  Header, List, Segment } from 'semantic-ui-react';
import { Link } from "react-router-dom";

const AdminFooter=()=>{
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
              <Link to="/UserBookings"> <li>Bookings</li></Link> 
               <Link to="/UserInfo">  <li>UserInfo</li></Link> 
        
              </h3>
              </ul>
            </Grid.Column>

            <Grid.Column>
              <Header inverted as='h2' content='OUR HOTELS' />
              <p>Golden Keys Inn</p>
              <p>TEJAS HOTELS & RESORTS</p>
              <p>B2/15 Ahosk Vihar Phase 2, New Delhi 110052 India</p>
              <p>info@goldenkeysinn.com</p>
              <p>+91 1140514566</p>
            </Grid.Column>

            <Grid.Column>
              <Header  inverted as='h2' content='ESTILO HOTELS & RESORTS' />
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
export default AdminFooter

