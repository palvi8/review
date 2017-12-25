import React, { Component } from 'react';
import FaStar from 'react-icons/lib/fa/star';
import FaStarHalfEmpty from 'react-icons/lib/fa/star-half-empty';
import FaMinus from 'react-icons/lib/fa/minus';
import MdAdd from 'react-icons/lib/md/add';
import FaClose from 'react-icons/lib/fa/close';
import Timestamp from 'react-timestamp';
import Button from 'react-button';
import FaExternalLink from 'react-icons/lib/fa/external-link';
import axios from 'axios';

function Stars(props){

    if(props.rating <= 1){
        return (  <FaStar size={props.size}  className= {props.class}/> );
    } else if(props.average_rating > 1 && props.rating < 2){
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
        <img src={'https://app.levler.co/images/search.png'} alt="google" className= {props.class} size={props.size}/>
        </span>
    );
    } else if(props.src === "Facebook"){
        return ( 
            <span>
              <img src={'https://app.levler.co/images/facebook.png'} alt="facebook"  className= {props.class} size={props.size}/>
            </span>
    );
    }  else if(props.src === "PlayStore"){
        return ( 
            <span>
              <img src={'https://app.levler.co/images/playstore.png'}  alt="playstore"  className= {props.class} size={props.size}/>
            </span>
    );
    }  else if(props.src === "AppStore"){
        return ( 
            <span>
              <img src={'https://app.levler.co/images/app-store.png'} alt="appstore"  className= {props.class} size={props.size}/>
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
        return(<div>
        </div>)
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
                <span ><Icons src={props.data.src} class="levler-social-image"/></span>
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
                   <span className="levler-timestamp">
                   <Timestamp time={props.data.review_time} precision={2} autoUpdate class="levler-left-bar-review-time"/>
                   </span >
                </div>
                <p className="levler-left-bar-review-comment">{props.data.comment}</p>
            </div>
        </div>
    );
}

 function ReviewBar(props){
     console.log(props.data.average);
     return(
         <div>
    </div>
     );
 }
   


class DesktopBar extends Component {
    constructor(props){
        super(props);
        this.toggleReviews = this.toggleReviews.bind(this);
        this.state = {show: false, data: {}}
    
    }
    
    toggleReviews() {
        if(this.state.show) {
            this.setState({show: false})
        } else {
            this.setState({show: true})
        }
    }
  
   
    componentWillMount(){
        var self = this;
        var token=document.querySelector('script[data-id="levler-bar"],[data-value]').getAttribute('data-value');
        axios({
            method: "get",
            url: 'https://app.levler.co/api/v1/toolbar/reviews',
            headers: {'authorization': token}
        }).then(function (response) {
          self.setState({data: response.data})
        }).catch(function (error) {
          console.log(error);
        });
    }

    render(){
    
   
        var levlerFloat ="";
        var barFloat="";
        var containerFloat="";
        if(this.state.show){
            if(this.state.data.position === "Bottom-Right"){
                levlerFloat = "levler-bottom-right show";
                barFloat ="levler-bottom-right hide";
                containerFloat="levler-lg-container-right show";
            }
            else if(this.state.data.position === "Bottom-Left"){
                levlerFloat = "levler-bottom-left show";
                barFloat ="levler-bottom-left hide";
                containerFloat="levler-lg-container-left show";
            }
        } else {
            if(this.state.data.position === "Bottom-Right"){
                levlerFloat = "levler-bottom-right hide";
                barFloat ="levler-bottom-right show";
                 containerFloat="levler-lg-container-right hide";
                
            }
            else if(this.state.data.position === "Bottom-Left"){
                levlerFloat = "levler-bottom-left hide";
                barFloat ="levler-bottom-left show";
                containerFloat="levler-lg-container-left hide";
            }
        }
   
        return(  
            <div className={containerFloat}>
                <div  id="levler-show-reviews-large" className={ barFloat} onClick={ this.toggleReviews }>
                    <div className="levler-bar-border"  style={{"background":this.state.data.hexacode}}></div>
                        <div className="levler-left-col-small">
                           <img src={'https://app.levler.co/images/search.png'} alt="google" className="levler-google-large"/>
                        </div>
                         <div className="levler-right-col-small">
                               <div>
                                   <span className="levler-left-bar-review-name-small">
                                     Rating
                                   </span>
                               </div>
                            <div>
                           <span className="levler-bar-rating-small">{ this.state.data.average_rating}</span>
                           <span>
                               <Stars rating={Number.parseInt(this.state.data.average_rating)} size="13" class="levler-left-bar-star"/>
                           </span>

                        </div>
                <div className="levler-timestamp-review">{ this.state.data.No_of_reviews } reviews</div>
                  </div>
                </div>            
                 <div  onClick={ this.toggleReviews } className={levlerFloat}>
                      <div className={this.state.data.position === 'Bottom-Right'? "levler-show-reviews-large-mdclose-right":"levler-show-reviews-large-mdclose-left"} style={{"background":this.state.data.hexacode}}>
                    <FaClose href='#' />
                </div>
                     </div>
                <div id="levler-bar-bottom" className= {levlerFloat}>
                    <div className="levler-bottom-bar-header" style={{"background":this.state.data.hexacode}}>
                        <span className="levler-bottom-bar-close"></span>
                        <div className="levler-bar-large-label-name">{ this.state.data.team }</div>
                        <Stars size="12" rating={Number.parseInt(this.state.data.average_rating)} />
                        <div className="levler-bottom-bar-header-content">Content Content Content Content Content Content</div>
                    </div>
                    <div className="levler-bottom-bar-middle">
                        <span className="levler-bottom-bar-middle-content">Content Content Content</span>
                    </div>
                    <div className="levler-bottom-bar-body">
                        <ListItems data={this.state.data} />
                    </div>
                    <div className="levler-bottom-bar-footer-top">
                    
                        <Button className="levler-footer-top-button">
                           <span> <span className="levler-external-link"><FaExternalLink /></span>New Conversation</span>
                        </Button>
                    </div>
                    <div className="levler-bottom-bar-footer">
                    <div className="levler-bottom-bar-footer-label">    
                        <i>
                            <a href="http://levler.co/" style={{textDecoration :'none',color:'#777777'}}>
                               <span> Powered by Levler</span>
                            </a>
                        </i>
                        </div>
                    </div> 
                </div>
            </div>
        );
    }
}

export default DesktopBar;