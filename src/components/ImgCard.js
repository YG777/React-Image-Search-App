import React, { Component } from 'react';

class ImgCard extends Component {
    constructor(props){
      super(props);
      this.state = {spans:0};
      this.imageRef = React.createRef();
    }

    componentDidMount(){
        this.imageRef.current.addEventListener('load', this.setSpans);
        
        //console.log(this.imageRef.current.clientHeight);
    }

    setSpans=() => {
        const imgHeight=this.imageRef.current.clientHeight;
        const spans = Math.ceil(imgHeight/10);
        this.setState({spans})
    }
    
    render() {
        return (
            <div style={{gridRowEnd:`span ${this.state.spans}`}}>
                 <img 
                 ref={this.imageRef} 
                 src={this.props.image.urls.regular} 
                 alt={this.props.image.description} />
            </div>
        );
    }
}

export default ImgCard;
