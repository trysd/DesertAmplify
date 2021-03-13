import { BInput } from './API.service';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { APIService } from './Api.service';
import {
  onAuthUIStateChange,
  CognitoUserInterface,
  AuthState,
  Translations,
  FormFieldTypes
} from '@aws-amplify/ui-components';
import { Auth } from '@aws-amplify/auth';
import { } from '@aws-amplify/ui-components';
import { I18n } from '@aws-amplify/core';
// import { AmplifyService } from 'aws-amplify-angular';

import API, { graphqlOperation, GraphQLResult } from '@aws-amplify/api-graphql';
import { Observable } from 'zen-observable-ts';
export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private ref: ChangeDetectorRef,
    private api: APIService
  ) {
  }

  async ngOnInit(): Promise<void> {
    // await Auth.signIn(xxx).then(
    //   e => console.log(e)
    // );

    const bb1: BInput = {
      list: new Array('sss')
    };

    const bb2: BInput = {
      list: ['sss']
    };

    this.api.CreateTest({
      a: 'a',
      d: 'd',
      b: { list: ['sss'] },
      c: null
    });

    // console.log(111);
    this.api.GetTest('9806fd32-5474-47bd-889d-fd460e6efee0').then(
      e => console.log(e)
    ).catch(
      err => console.log(err)
    );

  }
}
