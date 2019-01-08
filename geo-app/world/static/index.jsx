{/* /test

//--------- OSM ------------
// OSM Japan
var osmjp = L.tileLayer('http://tile.openstreetmap.jp/{z}/{x}/{y}.png',
    { id: 'osmmapjp', attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' });


// OSM本家
var osm = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    { id: 'osmmap', attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' });

var baseMaps = {
    "OSM": osm,
    "OSM japan": osmjp
};

// 初期画面の設定（paleで小石川四丁目バス停を設定）
var map = L.map('map', { layers: [osmjp] });
map.setView([35.7144586, 139.7389593], 12);

var marker = L.marker([35.7144586, 139.7389593,]).addTo(map);
marker.bindPopup("<b>koishikawa busstop</b> to-02 kinshicho station from otsuka station").openPopup();


// コントロールはオープンにする
L.control.layers(baseMaps, null, { collapsed: false }).addTo(map);

//スケールコントロールを追加（オプションはフィート単位を非表示）
L.control.scale({ imperial: false }).addTo(map);


import React, { Component } from 'react';
import App from './js/app.js';
import TodoList from './TodoList';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            tasks: [
                {title: 'todo1', id: 0},
                {title: 'todo2', id: 1},

            ],
        };
    }





    render() {


        return(
            <div>
                <h1>TODO App</h1>
                <TodoInput />
                <TodoList task={tasks} />
            </div>
        );
    }
}
export default App;



*/}

import React from 'react'
import { render } from 'react-dom'
import MapApp from './world/js/app'
import ListApp from './world/js/listapp'
import LocateApp from './world/js/geolocation'
import Leaflet from 'leaflet'
//import './world/css/app.css';
//import 'leaflet/dist/leaflet.css';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = { message: 'something' }
    }

    onChange(e) {
        this.setState({ message: e.target.value })
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.onChange.bind(this)} />
                <p>{this.state.message}</p>
                <MapApp />
                <ListApp />


            </div>
        )
    }
}

render(<App />, document.getElementById('app'))