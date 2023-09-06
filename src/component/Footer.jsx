import { PureComponent } from "react";
import classes from "./Footer.module.css"

class Footer extends PureComponent{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(

            <div className={classes.footer}>
                <footer>

                  <p>&copy; 2023 Vaishnav PN</p>


                </footer>        

            </div>
        )
    }
}

export default Footer