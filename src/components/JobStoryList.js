import React, {Component} from 'react';
import Card from './Card';

class JobStoryList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            jobStoryFilter: "",
            originalJobStoryList: props.data.jobs,
            filteredJobStoryList: props.data.jobs,
        };
    }
    
    componentDidMount() {
        document.getElementById("filter").oninput = this.handleChange;
    }

    handleChange = (event) => {
        let list = this.state.originalJobStoryList;
        let pattern = event.target.value.toLowerCase();
        list = list.filter(job => job.context.toLowerCase().search(pattern) !== -1 || job.motivation.toLowerCase().search(pattern) !== -1 || job.outcome.toLowerCase().search(pattern) !== -1 );
        this.setState({
            jobStoryFilter: event.target.value,
            filteredJobStoryList: list
        });
    }

    render() {
        return (
            this.state.filteredJobStoryList.map(job => (
                <div className="list-group flex-row" style={{marginBottom: 10 + 'px'}}>
                    <Card text={job.context} type="context"/>
                    <Card text={job.motivation} type="motivation"/>
                    <Card text={job.outcome} type="outcome"/>
                </div>
            ))
        )
    }
}

export default JobStoryList;