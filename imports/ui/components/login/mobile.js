import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

export class Login {
  constructor($scope, $reactive, $state) {
    'ngInject';

    this.$state = $state;

    $reactive(this).attach($scope);

    this.isStepTwo = false;
    this.phoneNumber = '';
    this.verificationCode = '';
    this.error = '';
  }

  verifyPhone() {
    Accounts.requestPhoneVerification(this.phoneNumber, this.$bindToContext((err) => {
      if (err) {
        this.error = err.reason || err;
      } else {
        this.error = '';
        this.isStepTwo = true;
      }
    }));
  }

  verifyCode() {
    Accounts.verifyPhone(this.phoneNumber, this.verificationCode, this.$bindToContext((err) => {
      if (err) {
        this.error = err.reason || err;
      } else {
        this.$state.go('parties');
      }
    }));
  }
}
