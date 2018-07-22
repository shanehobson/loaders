import React from 'react';
import {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Zoom from '@material-ui/core/Zoom';
import {CopyToClipboard} from 'react-copy-to-clipboard';

const styles = {
    tooltip: {
        fontSize: 12
    }
};

class DialogTabContent extends Component {

    constructor( props ) {
        super( props );

        this.state = {
            copiedConfirmationTooltipOpen: false
        }
    
        this.keyCount = 0;
    }

    htmlFromtext = (text) => {
        return text.split('\n')
            .map((line) => 
                (
                    <p key={this.getKey()} style={{width: 500}}>
                        {line}
                    </p> 
                )
            )
    };

    getKey = () => {
        return this.keyCount++;
    }

    handleCopyCodeClick = () => {
        this.setState({copiedConfirmationTooltipOpen: true});
    }

    handleTooltipClose = () => {
        this.setState({copiedConfirmationTooltipOpen: false});
    }

    render() {
        
        const {text} = this.props;

        return (
            <div>
                <div className="DialogTabContent-buttonContainer">
                    <ClickAwayListener onClickAway={this.handleTooltipClose}>
                        <div>
                            <Tooltip
                                PopperProps={{
                                    disablePortal: true,
                                }}
                                placement="left"
                                TransitionComponent={Zoom}
                                onClose={this.handleTooltipClose}
                                open={this.state.copiedConfirmationTooltipOpen}
                                disableFocusListener
                                disableHoverListener
                                disableTouchListener
                                title="Copied code to clipboard!"
                                classes={{tooltip: this.props.classes.tooltip}}
                            >
                            <CopyToClipboard text={this.props.text}>
                                <Button variant="contained" color="primary" style={{fontSize: 14}} aria-label="Copy" onClick={this.handleCopyCodeClick}>
                                    <AddIcon />
                                    Copy
                                </Button>
                            </CopyToClipboard>    
                            </Tooltip>
                        </div>
                    </ClickAwayListener>    
                </div>

                <div className="DialogTabContent-dialogSizingContainer">
                    <div className="DialogTabContent-codeTextContainer">
                        {this.htmlFromtext(text)}
                    </div>
                </div>
            </div>
        );
    }

}

DialogTabContent.propTypes = {
    text: PropTypes.string.isRequired,
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(DialogTabContent);