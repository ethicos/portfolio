import React , {Component} from 'react';
import { Grid, Cell,List,ListItem,ListItemContent } from 'react-mdl';

class Contact extends Component{
	render(){
		return(
			<div className="contact-body">
			 <Grid className="contact-grid">
			  <Cell col={6}>
			  	<h2>Manuprasad M</h2>
			  	<img
				    src="https://instagram.fcok1-1.fna.fbcdn.net/v/t51.2885-15/e35/61227314_568032407055693_5411179265217294210_n.jpg?_nc_ht=instagram.fcok1-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=ea1klhQSBr4AX-_iuXy&oh=93554353dfd81b866a47a780321f2a27&oe=5E9CB214" alt="avatar" 
				    className="avatar-img" style={{height: '250px'}}/>

				<p style={{width: '75%',margin:'auto', paddingTop: '1em'}}>Hey,it's me Manuprasad.The one who always ready to help you.</p>

			  </Cell>
			  <Cell col={6}>
			   <h2>Contact Me</h2>
			    <hr/>
   <div className="contact-list">
			    <List>
  <ListItem>
    <ListItemContent style={{fontSize: '25px',fontFamily: 'Anton'}}>
    <i className="fa fa-phone-square" aria-hidden="true"></i>
    +91-9846210840</ListItemContent>
  </ListItem>
  <ListItem>
    <ListItemContent style={{fontSize: '25px',fontFamily: 'Anton'}}>
    <i className="fa fa-envelope" aria-hidden="true"></i>
    manuprasadmudappallur<br></br>@gmail.com</ListItemContent>
  </ListItem>
  <ListItem>
    <ListItemContent style={{fontSize: '25px',fontFamily: 'Anton'}}>
    <i className="fa fa-instagram" aria-hidden="true"></i>
    misspelled_one</ListItemContent>
  </ListItem>

  
</List>
</div>

			   </Cell>
			 </Grid>

			</div>)
	}
}

export default Contact;