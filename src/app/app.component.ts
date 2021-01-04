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
import {  } from '@aws-amplify/ui-components';
import { I18n } from '@aws-amplify/core';
import { AmplifyService } from 'aws-amplify-angular';

export const vocabularies = {
  ja: {
      // Translations Label
      // ref.) https://github.com/aws-amplify/amplify-js/blob/main/packages/amplify-ui-components/src/common/Translations.ts
      [Translations.BACK_TO_SIGN_IN]: 'サインインに戻る',
      [Translations.CHANGE_PASSWORD_ACTION]: '変更',
      [Translations.CHANGE_PASSWORD]: 'パスワードを変更',
      [Translations.CODE_LABEL]: '検証コード',
      [Translations.CODE_PLACEHOLDER]: 'コードを入力',
      [Translations.CONFIRM_SIGN_UP_CODE_LABEL]: '確認コード',
      [Translations.CONFIRM_SIGN_UP_CODE_PLACEHOLDER]: 'コードを入力',
      [Translations.CONFIRM_SIGN_UP_HEADER_TEXT]: 'サインアップを確認',
      [Translations.CONFIRM_SIGN_UP_LOST_CODE]: 'コードがありませんか？',
      [Translations.CONFIRM_SIGN_UP_RESEND_CODE]: 'コードを再送',
      [Translations.CONFIRM_SIGN_UP_SUBMIT_BUTTON_TEXT]: '確認',
      [Translations.CONFIRM_SMS_CODE]: 'SMSコードを確認',
      [Translations.CONFIRM_TOTP_CODE]: 'TOTPコードを確認',
      [Translations.CONFIRM]: '確認',
      [Translations.CREATE_ACCOUNT_TEXT]: 'アカウントを作成',
      [Translations.EMAIL_LABEL]: 'Eメールアドレス *',
      [Translations.EMAIL_PLACEHOLDER]: 'Eメールアドレスを入力',
      [Translations.FORGOT_PASSWORD_TEXT]: 'パスワードをお忘れですか？',
      [Translations.LESS_THAN_TWO_MFA_VALUES_MESSAGE]: '2つ未満のMFAタイプが利用可能です',
      [Translations.NEW_PASSWORD_LABEL]: '新しいパスワード',
      [Translations.NEW_PASSWORD_PLACEHOLDER]: '新しいパスワードを入力',
      [Translations.NO_ACCOUNT_TEXT]: 'アカウントが未登録ですか？',
      [Translations.PASSWORD_LABEL]: 'パスワード *',
      [Translations.PASSWORD_PLACEHOLDER]: 'パスワードを入力',
      [Translations.PHONE_LABEL]: '電話番号 *',
      [Translations.PHONE_PLACEHOLDER]: '(555) 555-1212',
      [Translations.QR_CODE_ALT]: 'QRコード',
      [Translations.RESET_PASSWORD_TEXT]: 'パスワードをリセット',
      [Translations.RESET_YOUR_PASSWORD]: 'パスワードをリセット',
      [Translations.SELECT_MFA_TYPE_HEADER_TEXT]: 'MFAタイプを選択',
      [Translations.SELECT_MFA_TYPE_SUBMIT_BUTTON_TEXT]: '検証',
      [Translations.SEND_CODE]: '検証コードを送信',
      [Translations.SUBMIT]: '送信',
      [Translations.SETUP_TOTP_REQUIRED]: 'TOTPが設定されている必要があります',
      [Translations.SIGN_IN_ACTION]: 'サインイン',
      [Translations.SIGN_IN_HEADER_TEXT]: 'アカウントにサインイン',
      [Translations.SIGN_IN_TEXT]: 'サインイン',
      [Translations.SIGN_IN_WITH_AMAZON]: 'Amazonでサインイン',
      [Translations.SIGN_IN_WITH_AUTH0]: 'Auth0でサインイン',
      [Translations.SIGN_IN_WITH_AWS]: 'AWSでサインイン',
      [Translations.SIGN_IN_WITH_FACEBOOK]: 'Facebookでサインイン',
      [Translations.SIGN_IN_WITH_GOOGLE]: 'Googleでサインイン',
      [Translations.SIGN_OUT]: 'サインアウト',
      [Translations.SIGN_UP_EMAIL_PLACEHOLDER]: 'Eメール',
      [Translations.SIGN_UP_HAVE_ACCOUNT_TEXT]: 'アカウントをお持ちですか？',
      [Translations.SIGN_UP_HEADER_TEXT]: '新しいアカウントを作成',
      [Translations.SIGN_UP_PASSWORD_PLACEHOLDER]: 'パスワード',
      [Translations.SIGN_UP_SUBMIT_BUTTON_TEXT]: 'アカウントを作成',
      [Translations.SIGN_UP_USERNAME_PLACEHOLDER]: 'ユーザー名',
      [Translations.SUCCESS_MFA_TYPE]: '成功しました。MFAタイプ:',
      [Translations.TOTP_HEADER_TEXT]: 'スキャンして確認コードを入力してください',
      [Translations.TOTP_LABEL]: 'セキュリティコードを入力:',
      [Translations.TOTP_SETUP_FAILURE]: 'TOTPセットアップに失敗しました',
      [Translations.TOTP_SUBMIT_BUTTON_TEXT]: 'セキュリティトークンを検証',
      [Translations.TOTP_SUCCESS_MESSAGE]: 'TOTPセットアップが成功しました',
      [Translations.UNABLE_TO_SETUP_MFA_AT_THIS_TIME]: '失敗しました。現在MFA設定ができません。',
      [Translations.USERNAME_LABEL]: 'Eメールアドレス *' , // 'ユーザー名 *',
      [Translations.USERNAME_PLACEHOLDER]: 'Eメールアドレスを入力', // 'ユーザー名を入力',
      [Translations.VERIFY_CONTACT_EMAIL_LABEL]: 'Eメール',
      // [Translations.VERIFY_CONTACT_HEADER_TEXT]: 'アカウントの復元には確認済みの連絡先情報が必要です',
      [Translations.VERIFY_CONTACT_PHONE_LABEL]: '電話番号',
      [Translations.VERIFY_CONTACT_SUBMIT_LABEL]: '送信',
      [Translations.VERIFY_CONTACT_VERIFY_LABEL]: '検証',
      [Translations.ADDRESS_LABEL]: '住所',
      [Translations.ADDRESS_PLACEHOLDER]: '住所を入力',
      [Translations.NICKNAME_LABEL]: 'ニックネーム',
      [Translations.NICKNAME_PLACEHOLDER]: 'ニックネームを入力',
      [Translations.BIRTHDATE_LABEL]: '誕生日',
      [Translations.BIRTHDATE_PLACEHOLDER]: '誕生日を入力',
      [Translations.PICTURE_LABEL]: '写真のURL',
      [Translations.PICTURE_PLACEHOLDER]: '写真のURLを入力',
      [Translations.FAMILY_NAME_LABEL]: '苗字',
      [Translations.FAMILY_NAME_PLACEHOLDER]: '苗字を入力',
      [Translations.PREFERRED_USERNAME_LABEL]: '呼び名',
      [Translations.PREFERRED_USERNAME_PLACEHOLDER]: '呼び名を入力',
      [Translations.GENDER_LABEL]: '性別',
      [Translations.GENDER_PLACEHOLDER]: '性別を入力',
      [Translations.PROFILE_LABEL]: 'プロフィールURL',
      [Translations.PROFILE_PLACEHOLDER]: 'プロフィールURLを入力',
      [Translations.GIVEN_NAME_LABEL]: '名前',
      [Translations.GIVEN_NAME_PLACEHOLDER]: '名前を入力',
      [Translations.ZONEINFO_LABEL]: 'タイムゾーン',
      [Translations.ZONEINFO_PLACEHOLDER]: 'タイムゾーンを入力',
      [Translations.LOCALE_LABEL]: 'ロケール',
      [Translations.LOCALE_PLACEHOLDER]: 'ロケールを入力',
      [Translations.UPDATED_AT_LABEL]: '更新日時',
      [Translations.UPDATED_AT_PLACEHOLDER]: '情報が最後に更新された時刻を入力してください',
      [Translations.MIDDLE_NAME_LABEL]: 'ミドルネーム',
      [Translations.MIDDLE_NAME_PLACEHOLDER]: 'ミドルネームを入力',
      [Translations.WEBSITE_LABEL]: 'ウェブサイト',
      [Translations.WEBSITE_PLACEHOLDER]: 'ウェブサイトを入力',
      [Translations.NAME_LABEL]: 'フルネーム',
      [Translations.NAME_PLACEHOLDER]: 'フルネームを入力',
      [Translations.PHOTO_PICKER_TITLE]: 'タイトル',
      [Translations.PHOTO_PICKER_HINT]: '補助的なテキストまたはコンテンツがこのスペースを占める可能性があります',
      [Translations.PHOTO_PICKER_PLACEHOLDER_HINT]: 'プレースホルダーヒント',
      [Translations.PHOTO_PICKER_BUTTON_TEXT]: 'ボタン',
      [Translations.IMAGE_PICKER_TITLE]: 'プロフィール写真を追加',
      [Translations.IMAGE_PICKER_HINT]: 'アップロードする前に画像をプレビューする',
      [Translations.IMAGE_PICKER_PLACEHOLDER_HINT]: 'タップして画像を選択',
      [Translations.IMAGE_PICKER_BUTTON_TEXT]: 'アップロード',
      [Translations.PICKER_TEXT]: 'ファイルを選択',
      [Translations.TEXT_FALLBACK_CONTENT]: 'フォールバックコンテンツ',
      // Cognito Server Side Error Messages
      // ref.) https://github.com/aws-amplify/amplify-js/issues/867
      'Custom auth lambda trigger is not configured for the user pool.': '不正なログイン',
      'User does not exist.': 'ユーザーが存在しません',
      'Incorrect username or password.': 'ユーザー名またはパスワードが違います',
      'User is not confirmed.': 'ユーザーは検証されていません',
      'User already exists': 'ユーザーは既に存在します',
      'Invalid verification code provided, please try again.': '指定された確認コードが無効です。もう一度お試しください',
      'Invalid password format': 'パスワードのフォーマットが不正です',
      'Account recovery requires verified contact information': 'アカウントの復元には確認済みの連絡先情報が必要です',
      'Invalid phone number format': '不正な電話番号フォーマットです。 電話番号は次のフォーマットで入力してください: +12345678900',
      'An account with the given email already exists.': 'そのメールアドレスは既に存在します',
      'Username cannot be empty': 'Eメールアドレスは必須です', // 'Username cannot be empty': 'ユーザー名は必須です',
      'Password attempts exceeded': 'パスワード試行回数が超過しました',
      'Attempt limit exceeded, please try after some time.': '試行制限を超過しました。しばらくしてからもう一度お試しください',
      'Username/client id combination not found.': 'ユーザーが存在しません',
      'CUSTOM_AUTH is not enabled for the client.': 'パスワードは必須です', // 本来の意味とは異なるが、パスワード未入力時に発生するのでこの訳としている
      'Password does not conform to policy: Password not long enough': 'パスワードは8文字以上を入力してください (8文字以上の大文字小文字を含む英数字)', // 適宜修正
      'Password does not conform to policy: Password must have uppercase characters': 'パスワードには大文字を含めてください (8文字以上の大文字小文字を含む英数字)', // 適宜修正
      'Password does not conform to policy: Password must have lowercase characters': 'パスワードには小文字を含めてください (8文字以上の大文字小文字を含む英数字)', // 適宜修正
      'Password does not conform to policy: Password must have numeric characters': 'パスワードには数字を含めてください (8文字以上の大文字小文字を含む英数字)', // 適宜修正
      '1 validation error detected: Value at \'password\' failed to satisfy constraint: Member must have length greater than or equal to 6': 'パスワードは8文字以上、大文字小文字を含む英数字を指定してください', // 適宜修正。本来の意味とは異なるがこれで明示している。
      '2 validation errors detected: Value at \'password\' failed to satisfy constraint: Member must have length greater than or equal to 6; Value at \'password\' failed to satisfy constraint: Member must satisfy regular expression pattern: ^[\S]+.*[\S]+$': 'パスワードは8文字以上、大文字小文字を含む英数字を指定してください', // 適宜修正。本来の意味とは異なるがこれで明示している。

      'Attribute value for custom:nickname must not be null': 'ニックネームは必須です',
      'Attribute value for name must not be null': 'お名前は必須です'

    },
};

I18n.putVocabularies(vocabularies);
I18n.setLanguage('ja');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  user: CognitoUserInterface | undefined;
  userProp;

  authState: AuthState;
  formFields: FormFieldTypes;
  formFieldsConfirm: FormFieldTypes;
  useremail: string;

  constructor(
    private ref: ChangeDetectorRef,
    public amplify: AmplifyService,
    private api: APIService
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
  }

  async ngOnInit(): Promise<void> {



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
      this.ref.detectChanges();

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
        console.log(e);
      });

      // get Token
      const resp = await Auth.currentSession();
      const accessToken = resp.getAccessToken().getJwtToken();
      console.log('token: ' + accessToken);

      // User Profile
      const data = await Auth.currentUserPoolUser();
      console.log(data);

      this.userProp = data;

    }

    // handle auth state changes
    this.amplify.authStateChange$.subscribe(authState => {
      console.log(authState);
    });

  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnDestroy(): any {
    return onAuthUIStateChange; // <- ???
  }

  async signout(): Promise<void> {
    console.log('!');
    await Auth.signOut();
    console.log('%');
  }

}

