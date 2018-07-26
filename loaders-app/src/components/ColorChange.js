import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SketchPicker } from 'react-color'
import { changeSpinnerColor } from '../actions/colors';

class ColorChange extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: props.spinnerColor,
            error: ''
        }
    }

    onColorChange = (e) => {
        const color = e.target.value;
        this.setState(() => ({ color }));
    }

    onSubmit = (e) => {
        e.preventDefault();
        const re = new RegExp(/^(#?([a-f\d]{3}|[a-f\d]{6})|rgb\((0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d)\)|rgba\((0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0?\.\d|1(\.0)?)\)|hsl\((0|360|35\d|3[0-4]\d|[12]\d\d|0?\d?\d),(0|100|\d{1,2})%,(0|100|\d{1,2})%\)|hsla\((0|360|35\d|3[0-4]\d|[12]\d\d|0?\d?\d),(0|100|\d{1,2})%,(0|100|\d{1,2})%,(0?\.\d|1(\.0)?)\))$/);
        if (!this.state.color || !this.state.color.match(re)) {
            this.setState(() => ({ error: 'Please enter a valid Hex, RGB, or HSA Value' }));
        } else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmit(this.state.color);
        }
    };

    onColorPickerChange = (color) => {
        this.setState(() => ({ color: color.hex }));
    }

    onColorPickerSubmit = (color) => {
        this.setState(() => ({ error: '' }));
        this.props.onSubmit(color.hex);
    }

    render() {
        return (
            <div>
                <form className="ColorChange-colorChangeForm" onSubmit={this.onSubmit}>
                    {this.state.error && <p className="ColorChange-colorChangeFormError">{this.state.error}</p>}
                    <input 
                        type="text"
                        className="ColorChange-colorChangeTextInput"
                        placeholder=""
                        autoFocus
                        value={this.state.color}
                        onChange={this.onColorChange}
                    />
                    <input type="submit" value="Submit" />
                </form>
                <SketchPicker
                    color={this.props.spinnerColor}
                    onChange={this.onColorPickerChange}
                    onChangeComplete={this.onColorPickerSubmit}
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    spinnerColor: state.colors.spinnerColor
});

const mapDispatchToProps = (dispatch) => ({
    onSubmit: (color) => dispatch(changeSpinnerColor(color))
});

export default connect(mapStateToProps, mapDispatchToProps)(ColorChange);
