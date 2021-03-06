import React , {Component} from 'react';
import { Tabs,Tab,Grid,Cell,Card,CardTitle,CardActions,Button,CardMenu,IconButton,CardText } from 'react-mdl'

class Project extends Component{
	constructor(props) {
		super(props);
		this.state = {activeTab: 0};
	}


  toggleCategories(){
	if(this.state.activeTab === 0){
		return(
			<div className="project-grid">
	<Card shadow={5} style={{minWidth: '450', margin: 'auto', padding: '50px'}}>
    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn.worldvectorlogo.com/logos/react-1.svg) center / cover'}}>React Project #1</CardTitle>
    <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Mauris sagittis pellentesque lacus eleifend lacinia...
    </CardText>
    <CardActions border>
        <Button colored>GitHub</Button>
        
        <Button colored>Live Demo</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
</Card>

    <Card shadow={5} style={{minWidth: '450', margin: 'auto', padding: '50px'}}>
    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn.worldvectorlogo.com/logos/react-1.svg) center / cover'}}>React Project #2</CardTitle>
    <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Mauris sagittis pellentesque lacus eleifend lacinia...
    </CardText>
    <CardActions border>
        <Button colored>GitHub</Button>
        
        <Button colored>Live Demo</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
</Card>
    
{/* project 3s*/}
    <Card shadow={5} style={{minWidth: '450', margin: 'auto', padding: '50px'}}>
    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn.worldvectorlogo.com/logos/react-1.svg) center / cover'}}>React Project #3</CardTitle>
    <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Mauris sagittis pellentesque lacus eleifend lacinia...
    </CardText>
    <CardActions border>
        <Button colored>GitHub</Button>
        
        <Button colored>Live Demo</Button>
    </CardActions>
    <CardMenu style={{color: '#fff'}}>
        <IconButton name="share" />
    </CardMenu>
</Card>
</div>
	 )
	}else if (this.state.activeTab=== 1) {
		return(
			<div><h1>This is React-Native</h1></div>)
	}
	else if (this.state.activeTab=== 2) {
		return(
			<div><h1>This is Django</h1></div>)
	}
	else if (this.state.activeTab=== 3) {
		return(
			<div><h1>This is Node</h1></div>)
	}
}
	render(){
		return(
			<div className="category-tabs">
			<Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
			 <Tab> React</Tab>
			 <Tab> React-Native</Tab>
			 <Tab> Django</Tab>
			 <Tab> Node</Tab>
			 </Tabs>

			 <section className="project-grid">
			  <Grid className="project-grid">
			   <Cell col={12}>
			    <div className="content">{this.toggleCategories()}</div>
			    </Cell>
			    </Grid>
			  
			  </section>

			</div>
			 )
	}
}

export default Project;