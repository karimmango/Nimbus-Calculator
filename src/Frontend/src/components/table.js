import React from "react";
class TableK extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
        fetch('http://localhost:8080/service')
            .then(response => response.json())
            .then((response) => {
                this.setState({products: response});
            });
    }

    render() {
        return (
            <div className="app">

                <table style={{ border: 'solid 1px black' }}>
                    <thead style={{
                        borderBottom: 'solid 3px red',
                        color: 'black',
                    }}>
                    {this.state.products.map(product => (
                        <tr style={{
                            borderBottom: 'solid 3px red',
                            color: 'black',
                        }}>{product.name +' '+ product.apy+'%'}</tr>
                    ))}

                    </thead>
                </table>

            </div>
        );
    }
}

export default TableK