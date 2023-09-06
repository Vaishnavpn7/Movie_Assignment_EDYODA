import { PureComponent } from "react";
import classes from "./Movies.module.css"

class Movies extends PureComponent{

    constructor(probs){
        super(probs);
        this.state = {
            movies:[],
            search:""
        }
    }


    componentDidUpdate(prevProps, prevState){

        if(prevState.search !== this.state.search)this.fetchData(this.state.search)
    }

    fetchData = async(search) => {
        if(search === "" ) search='war';
        try {
            const res = await fetch(`https://www.omdbapi.com/?apikey=45f0782a&s=${search}`);
            const data = await res.json();
            if(data.Response ==='False')this.setState({movies:[]})
            else this.setState({movies:data.Search})
            
        }

        catch(err){
            console.log(err);
        }


    } 
    componentDidMount(){

        this.fetchData('war')


    }

    render(){
        return(

            <div className={classes.container}>
                <div className={classes.search}>
                    <input onChange={(e)=> this.setState({search:e.target.value})} type="text" placeholder="Search Movies Here" />
                </div>
                <div className={classes.movie_container}>
                    {this.state.movies.length ===0 ? <h1>No Movies Found</h1>:null}
                    {this.state.movies.map((movie, index) =>
                    <div key={index} className={classes.movie_cards}>
                
                            <img src={movie.Poster} alt="" />
                            <div className={classes.movie_text}>
                                <h3>{movie.Title}</h3>
                                <p>{movie.Year}</p>
                            </div>
        
                    </div>
                    )}
                </div>
            </div>
        )
    }
}


export default Movies;
