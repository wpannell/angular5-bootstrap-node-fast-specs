import {Component} from '@angular/core';

@Component({
  selector: 'interactions',
  template:
  `
    <h1 class="alpha">From the Data Privacy Officer</h1>

    <h3>Custom Message to Customer</h3>

    <textarea style="width: 90%; height: 200px">
      Jane I don’t see any flight data for that day. Do you book trips with
      Expedia? If so, it is possible that booking that flight created a
      separate account for you with AA. This happens sometimes if you used a
      different email address or phone number. If you provide me with some
      alternative email addresses and phone numbers that you have used in the
      past, I can look for additional accounts that would contain flight data
      for that day.
    </textarea>
    <div style="margin-left: 2em; margin-top: 3em;">
      <label class="rd-container">No user response
        <input type="radio">
        <span class="checkmark"></span>
      </label>
    </div>
    <div style="margin-left: 2em; margin-top: 2em;">
      <label class="rd-container">Request response from customer
        <input type="radio">
        <span class="checkmark"></span>
      </label>
    </div>
    <div style="margin-left: 2em; margin-top: 2em;">
      <label class="rd-container">Request upload and response from user
        <input type="radio">
        <span class="checkmark"></span>
      </label>
    </div>
    <div class="row" style="margin-top: 3em;">
      <div class="col-md-8">
        <h2>Upload</h2>
        <input type="text">
      </div>
      <div class="col-md-3">
        <br> <br>
        <button class="btn btn-primary" [disabled]="false">
          Send
        </button>
      </div>
      *This document will include encryption and the Customer will be
      required to create a password to open it.
    </div>
    <div class="row" style="margin-top: 3em;">
      <div class="col-md-4">
        <h2>Close request</h2>
        <select name="text">
          <option value="value1">Complete</option>
          <option value="value2">Decline</option>
        </select>
        <p>
          * Note: to be used only for special use cases such as closing an
          erasure request manually or declining Human readable format
          verification due to restrictions. This action will not trigger an
          email to the user.
        </p>
      </div>
    </div>
    <div class="text-right">
      <button class="btn btn-secondary">Cancel</button>
      <button class="btn btn-primary"
              [disabled]="false">
        Send
      </button>
    </div>
  `
})

export class InteractionsComponent {
  constructor() {
  }
}
