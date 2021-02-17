import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { APIService } from '../Api.service';
import {
  onAuthUIStateChange,
  CognitoUserInterface,
  AuthState,
  Translations,
  FormFieldTypes
} from '@aws-amplify/ui-components';
import { Auth } from '@aws-amplify/auth';
import { I18n } from '@aws-amplify/core';
// import { AmplifyService } from 'aws-amplify-angular';

import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";
import { Router } from '@angular/router';


import { TestCheckService } from 'src/app/services/test-check.service';

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}
export type OnUpdateTodoSubscription = {
  __typename: "todo";
  id: string;
  name: string | null;
  memo: string | null;
  createdAt: string;
  updatedAt: string;
};

@Component({
  selector: 'app-subpage',
  templateUrl: './subpage.component.html',
  styleUrls: ['./subpage.component.css']
})
export class SubpageComponent implements OnInit {

  user: CognitoUserInterface | undefined;
  userProp;
  authState: AuthState;
  formFields: FormFieldTypes;
  formFieldsConfirm: FormFieldTypes;
  useremail: string;

  forgot: FormFieldTypes;

  arr = [{'ttt':'aaa'}, {'ttt':'bbb'}];
  dialog(mess) {
    console.log(mess)
  }

  callback(flag, trueFunc, falseFunc) {
    if (flag) {
      trueFunc();
    } else {
      falseFunc();
    }
  }

  test() {
    console.log('test');
  }

  constructor(
    private ref: ChangeDetectorRef,
    // public amplify: AmplifyService,
    private api: APIService,
    public router: Router,
    public testCheck: TestCheckService
  ) {
    this.formFieldsConfirm = [{
      type: 'confirm_code',
      label: '確認コードを送信しました。',
      placeholder: '',
      required: true,
    }],

    this.formFields = [
      {
        type: 'email',
        label: 'メールアドレス',
        placeholder: 'abcde@example.com',
        required: true,
      },
      {
        type: 'password',
        label: 'パスワード(8～15文字の半角英数字記号)',
        placeholder: '********',
        required: true,
      },
      {
        type: 'nickname',
        label: 'ニックネーム',
        placeholder: 'nick name',
        required: true,
      },
      {
        type: 'name',
        label: 'お名前',
        placeholder: '姓名',
        required: true,
      },
      {
        type: 'phone_number',
        label: '電話番号',
        placeholder: '9012345678',
        required: false,
      },
    ];

    this.forgot = [{
      type: 'email',
      label: 'Email..',
      placeholder: '*****',
      required: true,
    }];
  }



  async ngOnInit(): Promise<void> {

    this.test();

    // ===== subscripbeById テスト
    // // https://qiita.com/is_ryo/items/37cb5fc2df8c1b788663#subscribe%E5%87%A6%E7%90%86subscription
    // const watchingId = 'dfd6f98f-ef39-445b-aec4-e79b4da42726';
    // const sampleListener: Observable<object> = API.graphql(
    //   graphqlOperation(
    //     `subscription subUpdateTodoById {
    //       onUpdateTodoById(id: "${watchingId}") {
    //         id,
    //         memo,
    //         name
    //       }
    //     }`
    //   )
    // ) as Observable<object>;
    // const subscribeSampleListener = sampleListener.subscribe(e => console.log(e))
    // setTimeout(() => {
    //   this.api.UpdateTodo({
    //     id: 'dfd6f98f-ef39-445b-aec4-e79b4da42726',
    //     memo: 'aaa'
    //   }).then(e => console.log(e));
    // }, 400);
    // ===== subscripbeById テストここまで

    // const xxx = this.api.CreateTest({arg: "..c"});
    // const xx2 = this.api.EditTest({arg: "..e"})
    // xxx.then(e => {
    //   console.log(e);
    //   console.log(JSON.parse(e.body))
    // });
    // xx2.then(e => {
    //   console.log(e);
    //   console.log(JSON.parse(e.body))
    // })

    /*
    https://xp-cloud.jp/blog/2018/12/12/4383/
    const responce: Promise<TransactorResponce> = this.api.transactor(JSON.stringify(
      [
        Create: { // Update/Delete/Create どれかひとつ必須の型
          TableBasicName: DynamoTable.Crew,
          Item: { // 任意。createする場合
            fieldaaa: 'aaa of value'
            ...
          },
          ConditionItem: { // 任意。判定が必要な場合に記載。Itemと同時に使えるか不明
            Key: { id: argv.shipId },
            UpdateExpression: 'set #registered = #registered + :Increment',
            ConditionExpression: '#registered < #capacity',
            ExpressionAttributeNames: {
              '#registered': 'registered',
              '#capacity': 'capacity'
            },
            ExpressionAttributeValues: {
              ':Increment': 1
            }
          }
        },
        Delete: {
          ...
        }
      ]
    ));
    */

    // this.api.CreateOctopus(
    //   {
    //     date: "2020-12-10",
    //     type: 1
    //   }
    // )

    onAuthUIStateChange((authState, authData) => {

      this.authState = authState;
      this.user = authData as CognitoUserInterface;
      this.userProp = authData as CognitoUserInterface;
      // this.ref.detectChanges();

      if (this.user) {
        this.useremail = this.user.username;
        this.formFieldsConfirm = [
          {
            type: 'confirm_code',
            label: '確認コード',
            placeholder: '',
            required: true,
          }];
      }

    });

    // console.log(localStorage.getItem('amplify-signin-with-hostedUI'));
    if (localStorage.getItem('amplify-signin-with-hostedUI') !== null) {

      // currentAuthenticatedUser
      Auth.currentAuthenticatedUser().then(e => {
        // console.log(e);
      });

      // get Token
      const resp = await Auth.currentSession();
      const accessToken = resp.getAccessToken().getJwtToken();
      // console.log('token: ' + accessToken);

      // User Profile
      const data = await Auth.currentUserPoolUser();
      // console.log(data);

      this.userProp = data;

    }

    // // handle auth state changes
    // this.amplify.authStateChange$.subscribe(authState => {
    //   console.log(authState);
    // });

  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnDestroy(): any {
    console.log('destroy: subpage')
    return onAuthUIStateChange; // <- ???
  }

  async signout(): Promise<void> {
    console.log('!');
    await Auth.signOut();
    console.log('%');
  }

}
