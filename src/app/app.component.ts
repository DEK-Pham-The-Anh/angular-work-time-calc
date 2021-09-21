import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  timeTillEnd: string = '';
  timeToGoHome: string = '';
  timeNow: string = '';
  workTimeNow: string = '00:00:00';
  workTimeTotal: string = '08:00:00';
  formErrors = [];

  /**
   * Converts 'h:m:s' time to seconds
   */
  convertToSeconds = (time: string) => {
    const workTimeNowArr = time.split(':');
    return (
      parseInt(workTimeNowArr[0]) * 3600 +
      parseInt(workTimeNowArr[1]) * 60 +
      parseInt(workTimeNowArr[2])
    );
  };

  /**
   * Converts time in seconds to 'h:m:s' format
   */
  convertToTimeHMS = (time: number) => {
    let h = Math.floor(time / 3600);
    let m = Math.floor((time % 3600) / 60);
    let s = time - h * 3600 - m * 60;

    return h + ':' + m + ':' + s;
  };

  /**
   * Validates time formatted as h:m:s
   */
  validateTime = (time) => {
    const regex1 = /\d{1,2}:\d{1,2}:\d{1,2}/gm;
    const matches1 = regex1.exec(time);
    if (matches1) {
      return matches1[0];
    }

    return false;
  };

  prepare = () => {
    this.formErrors = [];
    const workTimeNowValidated = this.validateTime(this.workTimeNow);
    if (workTimeNowValidated) {
      this.workTimeNow = workTimeNowValidated;
    } else {
      this.formErrors.push("Invalid 'Work Time Now'");
    }

    const workTimeTotalValidated = this.validateTime(this.workTimeTotal);
    if (workTimeTotalValidated) {
      this.workTimeTotal = workTimeTotalValidated;
    } else {
      this.formErrors.push("Invalid 'Work Time Total'");
    }

    if (this.formErrors.length === 0) {
      return true;
    }

    console.log('Errors', this.formErrors);
    return false;
  };

  calculate = (ev) => {
    ev.preventDefault();

    let prepared = this.prepare();

    if (prepared) {
      let timeNowTemp = new Date();
      this.timeNow =
        timeNowTemp.getHours() +
        ':' +
        timeNowTemp.getMinutes() +
        ':' +
        timeNowTemp.getSeconds();

      let workTimeNowTemp =
        this.convertToSeconds(this.workTimeTotal) -
        this.convertToSeconds(this.workTimeNow);

      this.timeTillEnd = this.convertToTimeHMS(workTimeNowTemp);

      let timeToGoHomeTemp = new Date(
        timeNowTemp.getTime() + 1000 * this.convertToSeconds(this.timeTillEnd)
      );
      this.timeToGoHome =
        timeToGoHomeTemp.getHours() +
        ':' +
        timeToGoHomeTemp.getMinutes() +
        ':' +
        timeToGoHomeTemp.getSeconds();
    }
  };
}
