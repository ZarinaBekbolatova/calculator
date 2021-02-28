import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  output: any;
  result: any;
  operators: any[];
  endCalc: boolean;
  constructor() { }

  ngOnInit() {
    this.output = '';
    this.operators = ['/', '*', '-', '+', '.'];
    this.endCalc = true;
  }

  pressNum(val) {
    if (!this.endCalc) {
      this.output = '';
      this.output = this.output + val;
      this.endCalc = true;
    } else {
      this.output = this.output + val;
    }
  }

  pressOperator(arg) {
    if (this.output !== '') {
      let last;
      for (let i = 0; i < this.operators.length; i++) {
        last = this.output.length - 1;
        if (this.operators[i] === this.output[last]) {
          return
        }
      }
    }

    this.output += arg;
  }

  allClear() {
    this.output = '';
  }

  clear() {
    this.output = this.output.substr(0, this.output.length - 1);
  }

  getAnswer() {
    let finish;
    try {
      finish = eval(this.output);
    } catch (e) {
      return;
    }
    this.output = finish;
    this.endCalc = false;
  }

  onKeydown(event) {
    return false;
  }
}

