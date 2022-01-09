import React, { Component } from 'react';
import stars from '../resources/prostars.json';
export default class Prostar extends Component {
    constructor() {
        super();
        this.state = { 
            prostars: [stars[0], stars[1], stars[2], stars[3], stars[4]],
         };
    }

    ProstarsDetails = () =>{
        const data = this.state.prostars;
        const mapRow = data.map((stars) =>(
            <tr key={stars.id}>
                <td><img src={stars.pictureUrl}/></td>
                <td>{stars.name}</td>
                <td>{stars.popularity}</td>
                <td><button className="del" onClick={() =>this.removestars(stars.id)}>Delete</button></td>
            </tr>
        ));
        return mapRow;
    }

    AddRandomProstars = () =>{
        let randomProstars = stars.slice(5,stars.length);
        const val = Math.floor(Math.random()*randomProstars.length);
        this.setState({
            prostars:this.state.prostars.concat(randomProstars[val])
        });
    }

    SortByNames=()=> {
        var nData=this.state.prostars;
        nData.sort((x,y)=> {  
        let X = x.name.toLocaleLowerCase();
        let Y = y.name.toLocaleLowerCase();
        if (X < Y) {
          return -1;
        }
        else if (X > Y) {
          return 1;
        }
        return 0;
        
    });
    this.setState({prostars:nData});
   }

    SortByPopularities=()=>{
        var nData=this.state.prostars;
        nData.sort((x,y) => {
            const X=x.popularity;
            const Y=y.popularity;
            if (X < Y) {
                return 1;
            }
            else if (X > Y) {
                return -1;
            }
            return 0;
        });
        this.setState({prostars:nData});
    }
    removestars = (id) =>{
        let array = this.state.prostars;
        array = array.filter((stars) =>{
            return stars.id !== id;
        });
        this.setState({prostars:array});
    }

    render() { 
        return (  
        <div>
                <h1>ProStar</h1>
                <div className="btn">
                    <button className="addrandstars" onClick={this.AddRandomProstars}>Get Random Contact</button>
                    <button className="sortbyname" onClick={this.SortByNames}>Sort By Name</button>
                    <button className="sortbypop" onClick={this.SortByPopularities}>Sort By Popularity</button>
                </div>
                <table>
                        <thead>
                        <tr>
                            <th>Picture</th>
                            <th>Name</th>
                            <th>Popularity</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                            {this.ProstarsDetails()}
                        </tbody>
                </table>
            </div>
        );
    }
}
 