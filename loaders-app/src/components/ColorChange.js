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

    onColorPickerChange = (color) => {
        this.setState(() => ({ color: color.hex }));
    }

    onColorPickerSubmit = (color) => {
        const re = new RegExp(/^(#?([a-f\d]{3}|[a-f\d]{6})|rgb\((0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d)\)|rgba\((0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0|255|25[0-4]|2[0-4]\d|1\d\d|0?\d?\d),(0?\.\d|1(\.0)?)\)|hsl\((0|360|35\d|3[0-4]\d|[12]\d\d|0?\d?\d),(0|100|\d{1,2})%,(0|100|\d{1,2})%\)|hsla\((0|360|35\d|3[0-4]\d|[12]\d\d|0?\d?\d),(0|100|\d{1,2})%,(0|100|\d{1,2})%,(0?\.\d|1(\.0)?)\))$/);
        if (color.hex.match(re)) {
            this.props.onSubmit(color.hex);
        }
    }

    render() {
        return (
            <div className='container ColorChange-colorChangeContainer'>
                <SketchPicker
                    className='ColorChange-colorChangeItem'
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
