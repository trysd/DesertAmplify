import { Component, OnInit } from '@angular/core';
import { APIService } from 'src/app/Api.service';
import * as t from 'src/types';
import { AmplifyService } from 'aws-amplify-angular';

const fetch = require('node-fetch');

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent implements OnInit {

  hide = {};

  /** blogフォーム状態 */
  blog: t.Blog = {
    id: null,
    name: null
  };

  /** postフォーム状態 */
  post: t.Post = {
    id: null,
    title: null,
    blogID: null
  };

  /** commentフォーム状態 */
  comment: t.Comment = {
    id: null,
    content: null,
    postID: null
  };

  /** blogリスト */
  blogList = [];

  /** postリスト */
  postList = [];

  /** commentリスト */
  commentList = [];

  /** constractor */
  constructor(
    private api: APIService,
    public amplify: AmplifyService
  ) { }

  // async postRequest() {
  //   const response = await fetch('https://httpbin.org/post', { method: 'POST', body: 'a=1' });
  //   const postsData = await response.json();
  //   return postsData;
  // }

  /**
   * 初期設定
   */
  async ngOnInit(): Promise<void> {

    // console.log( this.postRequest() );

    // // const eee = [0 ,2, 7];
    // const nnn = [0, 1, 2, 3];
    // const xxx = [
    //   {ride_child: [0, 7]},
    //   {ride_child: [1, 4]},
    //   {ride_child: [5, 6]},
    // ];
    // const diff = nnn.filter(f => ![].concat(...(xxx.map(m => m.ride_child))).includes(f));
    // console.log(diff);

    const nnn = [{name: 'QQQ', type: 'child'}, {name: 'AAA', type: 'child'}, {name: 'CCC', type: 'child'}];
    const xxx = [
      {participant: [{name: 'AAA', type: 'child'}, {name: 'DDD', type: 'child'}]},
      {participant: [{name: 'BBB', type: 'child'}, {name: 'EEE', type: 'child'}]},
      {participant: [{name: 'FFF', type: 'child'}, {name: 'GGG', type: 'child'}]},
    ];
    const zzz = JSON.stringify(xxx);

    const res2 = nnn.filter(n => !(JSON.parse(zzz) as any).flatMap(x => x.participant) // x: event
      .filter(e => e.name === n.name).length); // e: family
    console.log(res2);

    const res = nnn.filter(a => ![].concat(...((JSON.parse(zzz) as any[]).map(m => m.participant)))
      .filter(f => f.name === a.name).length);
    console.log(res);

    // console.log(
    //   nnn.filter(a =>  ![].concat(...(xxx.map(m => m.ride_child))).filter(f => f.name === a.name).length  )
    // );

    // console.log(
    //   [].concat(...(xxx.map(m => m.ride_child)))
    // );

    this.api.RegisterShip(5, 'testUser12050953', 'shipA').then(
      e => console.log(e)
    ).catch(
      e => console.log(e)
    );

    this.api.TestHttpX1(JSON.stringify({ str1: 'abc' })).then(
      e => {
        console.log( JSON.parse(e.body) );
      }
    ).catch(
      e => console.log(e)
    );

    /**
     * ===== blog初期設定
     */

    // blogリスト取得
    this.api.ListBlogs().then(e => {
      this.blogList = e.items;
      this.updateBlogSelect();
    });

    // blog作成検知
    this.api.OnCreateBlogListener.subscribe(
      // リスト更新
      (e: any) => {
        // this.blogList = [e.value.data.onCreateBlog, ...this.blogList];
        this.blogList.push(e.value.data.onCreateBlog);
        this.updateBlogSelect();
      });

    /**
     * ===== post初期設定
     */

    // postリスト取得
    this.api.ListPosts().then(e => {
      this.postList = e.items;
      this.updatePostSelect();
    });

    // post作成検知
    this.api.OnCreatePostListener.subscribe(
      // リスト更新
      (e: any) => {
        // this.postList = [e.value.data.onCreatePost, ...this.postList];
        this.postList.push(e.value.data.onCreatePost);
        this.updatePostSelect();
      });

    /**
     * ===== comment初期設定
     */

    // commentリスト取得
    this.api.ListComments().then(e => {
      this.commentList = e.items;
    });

    // comment作成検知
    this.api.OnCreateCommentListener.subscribe(
      // リスト更新
      (e: any) => this.commentList = [e.value.data.onCreateComment, ...this.commentList]);

    // filter sample =====
    // setTimeout(() => {
    //   // sort by erasticsearch
    //   this.api.SearchPosts({
    //     title: { eq: 'aaa' },
    //   }, {
    //     field: SearchablePostSortableFields.createdAt,
    //     direction: SearchableSortDirection.desc
    //   }).then(
    //     e => console.log(e)
    //   );
    // }, 555);
  }

  /** blog選択状態更新 */
  updateBlogSelect(): void {
    // blogを選ぶselectの選択を最新blogに
    if (this.blogList.length > 0) {
      this.post.blogID = this.blogList[this.blogList.length - 1].id;
    }
  }

  /** post選択状態更新 */
  updatePostSelect(): void {
    // postを選ぶselectの選択を最新postに
    if (this.postList.length > 0) {
      this.comment.postID = this.postList[this.postList.length - 1].id;
    }
  }

  /** blogを作成 */
  createBlog(): void {
    this.api.CreateBlog(this.blog)
      .then(e => console.log(e))
      .catch(e => console.log('error creating blog...', e));
  }

  /** blogを取得 */
  getBlog(id: string): void {
    this.api.GetBlog(id)
      .then(e => console.log(e))
      .catch(e => console.log(e));
  }

  /** blog削除 */
  deleteBlog(id): void {
    this.api.DeleteBlog({ id })
      .then(e => console.log(e))
      .catch(e => console.log(e));
  }

  /** postを作成 */
  createPost(): void {
    this.api.CreatePost(this.post)
      .then(e => console.log(e))
      .catch(e => console.log('error creating post...', e));
  }

  /** postを取得 */
  getPost(id: string): void {
    this.api.GetPost(id)
      .then(e => console.log(e))
      .catch(e => console.log(e));
  }

  /** post削除 */
  deletePost(id): void {
    this.api.DeletePost({ id })
      .then(e => console.log(e))
      .catch(e => console.log(e));
  }

  /** commentを作成 */
  createComment(): void {
    console.log(this.comment);
    this.api.CreateComment(this.comment)
      .then(e => console.log(e))
      .catch(e => console.log('error creating comment...', e));
  }

  /** postを取得 */
  getComment(id: string): void {
    this.api.GetComment(id)
      .then(e => console.log(e))
      .catch(e => console.log(e));
  }

  /** comment削除 */
  deleteComment(id): void {
    this.api.DeleteComment({ id })
      .then(e => console.log(e))
      .catch(e => console.log(e));
  }

}
