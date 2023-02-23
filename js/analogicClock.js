"use strict;"

/** General Info For This JS file *********************************************
 *
 * Project      : Clock OOPVersion
 * File Type    : JS
 * File Editor  : File was last edited using: VSCodium
 * Description  : A CSS designed clock
 ******************************************************************************
 * Author   : Toni Calfim (751127@gmail.com)
 ******************************************************************************
 * Created  : Fev, 2023
 * Modified : Fev, 2023
 *
 * Licence : MIT - A short and simple permissive license with conditions only
 * requiring preservation of copyright and license notices. Licensed works,
 * modifications, and larger works may be distributed under different terms
 * and without source code. Permissions: commercial use, modification,
 * distribution and private use.
 *
 * Copyright (c) 2023 751127@gmail.com
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 ******************************************************************************
 * History: v1.0.0.1: >
*************************************************************************** **/

class analogicClock {

  /** For the sake of test, selecting elements by many means */
  #hourDomElement = document.querySelector('.hour');
  #minuteDomElement = document.getElementsByClassName('minute')[0];
  #secondDomElement = document.getElementById('second');
  #milisecondDomElement = document.querySelector('.milisecond');

  constructor() {

    this.#renderAnalogicClock();

  };

  /** Only two getters and no setters */
  get currentHour() {

    const currentDate = new Date();

    return currentDate.getHours();

  };

  get currentMinute() {

    const currentDate = new Date();

    return currentDate.getMinutes();

  };

  #renderAnalogicClock() {

    setInterval(() => {

      let currentTimeInDegree = this.#convertCurrentTimeToDegree();

      this.#updateClock(currentTimeInDegree[0], currentTimeInDegree[1], currentTimeInDegree[2]);

      // this.#updateClockOnlyMilisecond(currentTimeInDegree[3]); /** Don't want to use the hand now  */

    }, 1000);

  };

  #convertCurrentTimeToDegree() {

    const currentDate = new Date();

    const currentHour = currentDate.getHours();
    const currentMinute = currentDate.getMinutes();
    const currentSecond = currentDate.getSeconds();
    const currentMilisecond = currentDate.getMilliseconds();

    const currentHourInDegree = (currentHour / 12) * 360;
    const currentMinuteInDegree = (currentMinute / 60) * 360;
    const currentSecondInDegree = (currentSecond / 60) * 360;
    const currentMilisecondInDegree = (currentMilisecond / 1000) * 360;

    return [currentHourInDegree, currentMinuteInDegree, currentSecondInDegree, currentMilisecondInDegree];

  };

  #updateClock(currentHourInDegree, currentMinuteInDegree, currentSecondInDegree) {

    this.#hourDomElement.style.transform = `rotate(${currentHourInDegree}deg)`;
    this.#minuteDomElement.style.transform = `rotate(${currentMinuteInDegree}deg)`;
    this.#secondDomElement.style.transform = `rotate(${currentSecondInDegree}deg)`;

  };

  #updateClockOnlyMilisecond(currentMilisecondInDegree) {

    this.#milisecondDomElement.style.transform = `rotate(${currentMilisecondInDegree}deg)`;

  };

};