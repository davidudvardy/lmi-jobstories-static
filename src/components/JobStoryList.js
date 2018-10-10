import React, {Component} from 'react';
import Card from './Card';

class JobStoryList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            filteredJobStoryList: props.data.jobs,
        };
    }

    render() {
        return (
            this.state.filteredJobStoryList.map(job => (
            <div>
                <Card text={job.context} type="context"/>
                <Card text={job.motivation} type="motivation"/>
                <Card text={job.outcome} type="outcome"/>
            </div>
            ))
        )
    }
}

export default JobStoryList;