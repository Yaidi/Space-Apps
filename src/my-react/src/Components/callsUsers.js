import React, {Component} from 'react';
import CalendarUsers from './calendarComponent';
import logoCalls from '../Imgs/logoCalls.png';
import calendar from '../Imgs/calendar.png';
import '../Styles/callsComponent.css';


class CallsUsers extends Component{
    constructor(props){
        super(props);
        this.state = {checked : true}
        this.handleChangeChecked = this.handleChangeChecked.bind(this)
        }

    handleChangeChecked(checked){
        this.setState({checked});
    }
        render(){
            return(
                <div>
                    <div className='makeCall'>
                        <h1>Ask for a call,</h1>
                        <h1 className='sayHi'> & say Hi!</h1>
                        <img  alt="logoCalendar"
                        className='phoneCall'
                        src={logoCalls}/>
                        <br/>
                        <br/>
                        <div className='scheduleCalls' hidden={this.state.checked ? false : true}>
                            <h1 className='scheduleCallsOption' onClick={() => this.handleChangeChecked(true)}>Or schedule a call</h1>
                            <img  alt="logoCalendar" 
                            className='calendar'
                            src={calendar}/>
                        </div>
                        <div className='Calendar'>
                            <CalendarUsers/>
                        </div>
                    </div>
                </div>
            )
        }
}

export default CallsUsers;