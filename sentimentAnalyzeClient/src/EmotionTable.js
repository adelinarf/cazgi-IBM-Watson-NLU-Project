import React from 'react';
import './bootstrap.min.css';

class EmotionTable extends React.Component {
    render() {
        const mapping = Object.keys(this.props.emotions).map(e =>
            {
                console.log(e);
                return(
                    <>
                    <tr>
                    <td>{e}</td>
                    <td>{this.props.emotions[e]}</td>
                    </tr>
                    </>
                )
            })
        return (<div>

            <table className="table table-bordered">
                <tbody>
                {mapping}
                </tbody>
            </table>
            </div>
            );
        };
};
export default EmotionTable;
