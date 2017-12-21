import React, { Component } from 'react';
import FaStar from 'react-icons/lib/fa/star';
import FaStarHalfEmpty from 'react-icons/lib/fa/star-half-empty';
import FaMinus from 'react-icons/lib/fa/minus';
import MdAdd from 'react-icons/lib/md/add';
import MdClose from 'react-icons/lib/md/close';
import Timestamp from 'react-timestamp';
import axios from 'axios';

function Stars(props){
   if(props.rating <= 1){
        return (  <FaStar size={props.size}  className= {props.class}/> );
    } else if(props.rating > 1 && props.rating < 2){
        return ( 
            <span> 
                <FaStar size={props.size}  className= {props.class}/>
                <FaStarHalfEmpty size={props.size}  className= {props.class}/>
            </span> 
        );
    } else if(props.rating === 2 ){
        return ( 
            <span> 
                <FaStar size={props.size}  className= {props.class}/>
                <FaStar size={props.size}  className= {props.class}/>
            </span> 
        );
    }else if(props.rating > 2 && props.rating < 3){
        return ( 
            <span> 
                <FaStar size={props.size}  className= {props.class}/>
                <FaStar size={props.size}  className= {props.class}/>
                <FaStarHalfEmpty size={props.size}  className= {props.class}/>
            </span> 
        );
    } else if(props.rating === 3){
        return ( 
            <span> 
                <FaStar size={props.size} className= {props.class}/>
                <FaStar size={props.size} className= {props.class}/>
                <FaStar size={props.size} className= {props.class}/>
            </span> 
        );
    }else if(props.rating > 3 && props.rating < 4){
        return ( 
            <span> 
                <FaStar size={props.size} className= {props.class}/>
                <FaStar size={props.size} className= {props.class}/>
                <FaStar size={props.size} className= {props.class}/>
                <FaStarHalfEmpty size={props.size} className= {props.class}/>
            </span> 
        );
    } else if(props.rating === 4 ){
        return ( 
            <span> 
                <FaStar size={props.size} className= {props.class}/>
                <FaStar size={props.size} className= {props.class}/>
                <FaStar size={props.size} className= {props.class}/>
                <FaStar size={props.size} className= {props.class}/>
            </span> 
        );
    }else if(props.rating > 4 && props.rating < 5){
        return ( 
            <span> 
                <FaStar size={props.size} className= {props.class}/>
                <FaStar size={props.size} className= {props.class}/>
                <FaStar size={props.size} className= {props.class}/>
                <FaStar size={props.size} className= {props.class}/>
                <FaStarHalfEmpty size={props.size} className= {props.class}/>
            </span>
        );
    } else if(props.rating === 5 ){
        return ( 
            <span> 
                <FaStar size={props.size} className= {props.class}/>
                <FaStar size={props.size} className= {props.class}/>
                <FaStar size={props.size} className= {props.class}/>
                <FaStar size={props.size} className= {props.class}/>
                <FaStar size={props.size} className= {props.class}/>
            </span>
        );
    }else{
        return <div></div>
    }
}


function Icons(props){
    if(props.src === "Google"){
        return (
        <span>    
        <img src={'https://app.levler.co/images/search.png'} alt="google" className= {props.class}/>
        </span>
    );
    } else if(props.src === "Facebook"){
        return ( 
            <span>
              <img src={'https://app.levler.co/images/facebook.png'} alt="facebook"  className= {props.class}/>
            </span>
    );
    }  else if(props.src === "PlayStore"){
        return ( 
            <span>
              <img src={'https://app.levler.co/images/playstore.png'}  alt="playstore"  className= {props.class}/>
            </span>
    );
    }  else if(props.src === "AppStore"){
        return ( 
            <span>
              <img src={'https://app.levler.co/images/app-store.png'} alt="appstore"  className= {props.class}/>
            </span>
    );
    }  else{
        return <div></div>
    }
}
function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

function ListItems(props) {
    if(isEmpty(props.data)){
        return(<div></div>)
    } else {
        return (
            <div>
                { props.data.reviews.map(item => (
                    <ListItem key={item.id} data={item}/>
                ))}
            </div>
        );
    }
}

function ListItem(props){
    return(
        <div className="levler-left-bar-review">
            <div className="levler-left-col">
                <span ><Icons src={props.data.src} class="levler-social-image-small"/></span>
            </div>
            <div className="levler-right-col">   
               <div>
                   <span className="levler-left-bar-review-name">
                      {props.data.name}
                   </span>
                </div>
                <div>
                   <Stars rating={props.data.rating} size="16" class="levler-left-bar-star"/>
                   <span className="levler-bullet">&bull;</span>
                   <span className="levler-timestamp-small">
                   <Timestamp time={props.data.review_time} precision={2} autoUpdate class="levler-left-bar-review-time"/>
                   </span >
                </div>
                <p className="levler-left-bar-review-comment">{props.data.comment}</p>
            </div>
        </div>
    );
}

class MobileBar extends Component {

    constructor(props){
        super(props);
        this.toggleReviews = this.toggleReviews.bind(this);
        this.state = {show: false, data: {}}
    }

    componentWillMount(){
        var self = this;
        axios({
            method: "get",
            url: 'https://app.levler.co/api/v1/toolbar/reviews',
            headers: {'authorization': '29ad6bf7ef2c6916c8c5513fb7109862'}
        }).then(function (response) {
          self.setState({data: response.data})
        }).catch(function (error) {
          console.log(error);
        });
    }
    
    toggleReviews() {
        if(this.state.show) {
            this.setState({show: false})
        } else {
            this.setState({show: true})
        }
    }

    render(){
        return (
            <div className="levler-sm-container">
                <div id="levler-bar-small" className={this.state.show ? 'open':'closed'} onClick={ this.toggleReviews } >
                    <div id="levler-show-reviews-small" className={ this.state.show ? 'hide':'show'}>
                        <div className="levler-bar-border" style={{"background":this.state.data.hexacode}}></div>
                        <div className="levler-bar-small-label levler-bar-small-label-rating">
                            <img src={'https://app.levler.co/images/search.png'} alt="google" className="levler-google-small"/>
                        </div>
                        <div className="levler-bar-small-stars">
                            <Stars size="8" rating={Number.parseInt(this.state.data.average_rating)} /></div>
                        <div className="levler-bar-small-reviews">{this.state.data.No_of_reviews } reviews</div>
                    </div>
                    <div id="levler-hide-reviews-small" className={ this.state.show ? 'show':'hide'} style={{"background":this.state.data.hexacode}}>
                        <FaMinus size={30} id="levler-minus"/>
                    </div>
                </div>
                <div id="levler-bar-left" className={ this.state.show ? 'show':'hide'}>
                    <div className="levler-left-bar-body">
                        <div className="levler-left-bar-header" style={{"background":this.state.data.hexacode}}>
                             <span className="levler-bottom-bar-close"></span>
                        <div className="levler-bar-large-label-name">{ this.state.data.team }</div>
                        <div>
                        <Stars size="12" rating={Number.parseInt(this.state.data.average_rating)} />
                        </div>
                        </div>
                        <div className="levler-bottom-bar-body-small">
                            <ListItems data={this.state.data} />
                        </div>
                    </div>
                    <div className="levler-left-bar-footer">
                        <p className="levler-left-bar-footer-label">Powered by Levler</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default MobileBar;