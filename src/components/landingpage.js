import React , {Component} from 'react';
import {Grid,Cell } from 'react-mdl';


class landing extends Component{
	render(){
		return(
			<div style={{width:'100%',margin:'autos'}}>
			<Grid className="landing-grid">
				<Cell col={12}>
				  <img
				    src="https://instagram.fcok1-1.fna.fbcdn.net/v/t51.2885-15/e35/61227314_568032407055693_5411179265217294210_n.jpg?_nc_ht=instagram.fcok1-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=ea1klhQSBr4AX-_iuXy&oh=93554353dfd81b866a47a780321f2a27&oe=5E9CB214" alt="avatar" 
				    className="avatar-img"/>


				    <div className="banner-text">
				     <h1>Developer</h1>

				     <hr/>
				     <p>HTML/CSS | Bootstrap | JavaScript | React | React Native | Node | tensorflow </p> 
				    
				   <div className="social-link">
                    <a href="https://www.google.com" rel="noopener noreferrer" target="_blank">
                    <i className="fas fa-linkdin-square"  aria-hidden="true" ></i>
                    </a>
                   </div>


				    </div>
				</Cell>
			</Grid>


			</div>)
	}
}

export default landing;