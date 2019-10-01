import React, { Component } from "react";
import Confetti from 'react-confetti';

class Result extends Component {
    // return colours for confetti
    returnColours() {
        if (this.props.selected === "NPD" || this.props.selected === "AfD") {
            return ['#8B4513'];
        } else {
            return ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4CAF50', '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800', '#FF5722', '#795548'];
        }
    }

    render() {
        const { item, correct, selected } = this.props;
        if (correct != null) {
            if (correct) {
                return (
                    <div>
                        <p autoFocus={true} id="answer">Richtig!</p>
                        <Confetti
                            width={this.props.windowWidth}
                            height={this.props.windowHeight} //adjusts window size automatically
                            recycle={false}
                            gravity={0.2}
                            numberOfPieces={400}
                            colors={this.returnColours()}
                            className={"confetti"}
                        />
                        <label className="next">
                            <button onClick={this.props.onNext}></button>
                            Nächste Frage
                        </label>
                    </div>
                )
            } else {
                return (
                    <div>
                        <h2 autoFocus={true}>Falsch, diese Aussage war von {item.answer}</h2>
                        <h3>Die Partei "{selected}" hat folgendes Statement abgegeben:</h3>
                        <p className="quote">{item.possibleAnswers[selected]}</p>
                        <label className="next">
                            <button onClick={this.props.onNext}></button>
                            Nächste Frage
                        </label>
                    </div >
                )
            }
        } else {
            return <div></div>;
        }
    }
}

export default Result;

