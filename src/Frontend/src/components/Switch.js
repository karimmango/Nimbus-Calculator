import React from 'react';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

class SwitchK extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state= {
            symbol:"NBUWETH",
            setChecked: false,
            color:"black"
        };


    };
    toggleChecked = () => {

        if(this.state.setChecked===false){
            this.setState({symbol:"WETHGNBU",setChecked:true, color:"grey" });
        }else{
            this.setState({symbol:"NBUWETH", setChecked:true, color:"black"});


        }};
    render() {
        return (
            <FormGroup>
                <FormControlLabel
                    control={<Switch checked={this.checked} onChange={this.toggleChecked} />}
                    label="Normal"
                />
            </FormGroup>
        );
    }


}
export default SwitchK