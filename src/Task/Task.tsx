import React, {useState} from 'react';
import {DatePicker, DateTimePicker, MuiPickersUtilsProvider, TimePicker} from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

export interface TaskProps {
    title: string;
    description: string;
    dueDate: string; // timestamp
}

export class Task extends React.Component<TaskProps> {


    public render(): JSX.Element {

        return (
            <>
                <div id="task-title">{this.props.title}</div>
                <div id="task-description">{this.props.description}</div>
                <div id="task-due-date">{this.props.dueDate}</div>

                {/*<MuiPickersUtilsProvider utils={MomentUtils}>*/}
                {/*    <DatePicker value={this.props.dueDate} onChange={this.handleDateChange} />*/}
                {/*    <TimePicker value={this.props.dueDate} onChange={this.handleDateChange} />*/}
                {/*    <DateTimePicker value={this.props.dueDate} onChange={this.handleDateChange} />*/}
                {/*</MuiPickersUtilsProvider>*/}
            </>

        );
    }

}