import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'is-prime-fibonacci';
  isPrime = false;
  isFibonacci = false;
  inputNo: any;
  typeNumber = 'isPrime';

  isPrimeNumber() {
    if (!this.inputNo) return;
    if (this.inputNo.toString().includes('-')) this.inputNo = 1;

    setTimeout(() => {
      this.inputNo = Math.round(parseFloat(this.inputNo));
    }, 0);

    for (var i = 2; i < this.inputNo; i++) {
      if (this.inputNo % i === 0) return false; // when parameter is divisible by i, it's not a prime number so return false
    }
    return this.inputNo > 1; // otherwise it's a prime number so return true (it also must be greater than 1, reason for the n > 1 instead of true)
  }

  isFibonacciNumber() {
    if (!this.inputNo) return;

    this.inputNo = parseInt(this.inputNo);
    const isSquare = function (n: any) {
      return n > 0 && Math.sqrt(n) % 1 === 0;
    };
    if (
      isSquare(5 * (this.inputNo * this.inputNo) - 4) ||
      isSquare(5 * (this.inputNo * this.inputNo) + 4)
    ) {
      return true;
    } else {
      return false;
    }
  }

  onCheckTypeNumber() {
    console.log(this.inputNo);
    console.log(this.typeNumber);
    if (this.typeNumber === 'isPrime') this.isPrimeNumber();
    else if (this.typeNumber === 'isFibonacci') this.isFibonacciNumber();
  }
}
