import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SketchPicker } from 'react-color'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
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
            <Grid container justify='center' alignItems='center' className='container'>
                <Grid item xs={7} className='ColorChange-colorChangeInstructions'>
                    <Typography variant='display2' align='center'>
                        Instructions
                    </Typography>
                    <Typography variant='display1'>
                        <ul>
                            <li>Select a color from the color picker, or enter a Hex or RGBA value</li><br />
                            <li>Click on the animation whose code you want to copy</li><br />
                            <li>Copy the HTML and CSS code into your project by clicking the 'Copy' button</li>
                        </ul>
                    </Typography>
                </Grid>
                <Grid item xs={5}>
                    <div className='container ColorChange-colorChangeContainer'>
                        <SketchPicker
                            className='ColorChange-colorChangeItem'
                            color={this.props.spinnerColor}
                            onChange={this.onColorPickerChange}
                            onChangeComplete={this.onColorPickerSubmit}
                        />
                    </div>
                </Grid>
            </Grid>
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
