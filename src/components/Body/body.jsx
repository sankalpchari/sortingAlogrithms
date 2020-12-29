import React,{Component} from "react"
import "./body.styles.css"

class Body extends Component{
    
    constructor(){
        super();
        this.state={
           points:[]
        }
    }

  componentDidMount =() =>{
    const maximum=100;
    const minimum=400;
    var arr=[]
         for(var i=0;i<50;i++){
            arr[i]=Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
            
        }
        this.setState({points:arr});
        
  }

  scramble=()=>{
    const maximum=100;
    const minimum=400;
    var arr=[]
         for(var i=0;i<50;i++){
            arr[i]=Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
            
        }
        this.setState({points:arr});
        
  }

    selectionSort=()=>{
      var temp=0;
      var newpoints=this.state.points;
      for(var i=0;i<newpoints.length;i++){
          for(var j=i+1;j<newpoints.length;j++){
              if(newpoints[i]>newpoints[j]){
                temp=newpoints[i]
                newpoints[i]=newpoints[j]
                newpoints[j]=temp
                setTimeout(        
                    this.setState({points:newpoints})
                  , 1000);  

              }
          }
      }

  }

    
    render(){ 
        return(
                <>
                <button onClick={this.selectionSort} >Sort</button>
                <button onClick={this.scramble} >scramble</button>
                 <div className="container">
                     {
                        this.state.points.map(function(value,index){
                            return <div key={index} style={{backgroundColor:`rgb(0,0,${value})`,height:value+'px',width:16+"px",float:"left",margin:5+'px'}}></div>
                        })   
                     } 
                 </div>
                </>
            )
    }

}

export default Body;