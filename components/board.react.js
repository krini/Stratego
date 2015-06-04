var React = require('react');
var Brick = require('./brick.react.js');
var ReactGridLayout = require('react-grid-layout');
var StrategoStore = require('./../stores/Stratego');
var ac = require('../actionCreators/stategoActionCreator');

//var brick = {
//    id: 1,
//    x: 2,
//    y: 3
//};
//var array = [brick, brick, brick];
//var global = 1;

//function addRow(row, rowID){
//        //console.log(rowID);
//        var array =
//         row.map(function(brick, columnID){
//        global = global++;
//        return (<div key={global} _grid={{x:columnID+1, y:rowID+1, w:50, h:50}}>test</div>);
//    });
//}
//
//function addTestRow(id){
//    return <div key={id} _grid={{x:id, y:id, w:50, h:50}}>test{id}</div>
//
//}

var Board = React.createClass({
    getInitialState: function(){
        return {Board: StrategoStore.getBoard()}
    },
    gameChangelistener: function(){
      this.setState(this.getInitialState());
    },
    componentDidMount: function(){
        StrategoStore.addGameChangeListener(this.gameChangelistener);
    },
    componentWillUnmount: function(){
        StrategoStore.removeGameChangeListener(this.gameChangelistener);
    },
    onclick: function(){

        console.log("debug here!!");
    },
    render: function(){
        var temp = ac;
        var board = this.state.Board;
        var rows = [];
        var brickCounter = 0;
        //for( var rows = 0; rows < board.size; rows++) {
        //    for(var cell = 0; cell < 10; cell++){
        //        items[brickCounter].push();
        //        <div key={brickCounter} _grid={{x:cell+1, y:rows+1, w:50, h:50}}>test</div>
        //        brickCounter++;
        //    }
        //}

        for( var row = 0; row < board.size; row++) {
            for(var col=0; col <board.size; col++){
                var pos = board.getIn([row,col]);
                var checker = pos.get('checker');
                var checkerText = checker ? checker.player + ' ' +checker.name : pos.get('field');
                rows.push(<div style={{border:"1px solid black"}} key={brickCounter++} _grid={{x:col, y:row, w:1, h:2}}>
                 {checkerText}</div>);
            }
        }

        return <div>
        <ReactGridLayout className="layout" cols={10} rowHeight={50} >
            {rows}
        </ReactGridLayout>
            <button onClick={this.onclick}/>
        </div>;


    }
});

module.exports = Board;