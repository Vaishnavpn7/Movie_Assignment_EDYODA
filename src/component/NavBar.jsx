import { PureComponent } from "react";
import classes from "./NavBar.module.css"

class NavBar extends PureComponent{

    constructor(props){
        super(props);
        this.state={

        }
    }

    render(){
        return(
            <div className={classes.main}>
                 <h1 className={classes.heading}>Search Movie Application</h1>

                 <div className={classes.container_2}>
                   <button className={classes.button}>HOME</button>
                   <button className={classes.button}>SERVICES</button>
                   <button className={classes.button}>CONTACT</button>
                   <button className={classes.button}>ABOUT</button>

                 </div>
             </div>



        )
    }
}


export default NavBar