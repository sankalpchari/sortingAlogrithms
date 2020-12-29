import react,{Component} from 'react'
import Header from "./Header/header"
import Body from "./Body/body";

class Main extends Component{
render(){
    return (
                <>
                <Header />
                <Body/>
                </>
    );
}
} 

export default Main