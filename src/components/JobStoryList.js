import React, {Component} from 'react';
import Card from './Card';

class JobStoryList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            something: null,
        };
    }

    render() {
        return (
            <div>
                <Card text="etwas" type="context"/>
            </div>
        )
    }
}

export default JobStoryList;