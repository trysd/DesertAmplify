/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type CreateTaskInput = {
  id?: string | null;
  title: string;
  description?: string | null;
  status?: string | null;
};

export type ModelTaskConditionInput = {
  title?: ModelStringInput | null;
  description?: ModelStringInput | null;
  status?: ModelStringInput | null;
  and?: Array<ModelTaskConditionInput | null> | null;
  or?: Array<ModelTaskConditionInput | null> | null;
  not?: ModelTaskConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type UpdateTaskInput = {
  id: string;
  title?: string | null;
  description?: string | null;
  status?: string | null;
};

export type DeleteTaskInput = {
  id?: string | null;
};

export type CreatePrivateNoteInput = {
  id?: string | null;
  content: string;
};

export type ModelPrivateNoteConditionInput = {
  content?: ModelStringInput | null;
  and?: Array<ModelPrivateNoteConditionInput | null> | null;
  or?: Array<ModelPrivateNoteConditionInput | null> | null;
  not?: ModelPrivateNoteConditionInput | null;
};

export type UpdatePrivateNoteInput = {
  id: string;
  content?: string | null;
};

export type DeletePrivateNoteInput = {
  id?: string | null;
};

export type CreateBlogInput = {
  id?: string | null;
  name: string;
};

export type ModelBlogConditionInput = {
  name?: ModelStringInput | null;
  and?: Array<ModelBlogConditionInput | null> | null;
  or?: Array<ModelBlogConditionInput | null> | null;
  not?: ModelBlogConditionInput | null;
};

export type UpdateBlogInput = {
  id: string;
  name?: string | null;
};

export type DeleteBlogInput = {
  id?: string | null;
};

export type CreatePostInput = {
  id?: string | null;
  title: string;
  blogID: string;
  createdAt?: string | null;
};

export type ModelPostConditionInput = {
  title?: ModelStringInput | null;
  blogID?: ModelIDInput | null;
  createdAt?: ModelStringInput | null;
  and?: Array<ModelPostConditionInput | null> | null;
  or?: Array<ModelPostConditionInput | null> | null;
  not?: ModelPostConditionInput | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type UpdatePostInput = {
  id: string;
  title?: string | null;
  blogID?: string | null;
  createdAt?: string | null;
};

export type DeletePostInput = {
  id?: string | null;
};

export type CreateCommentInput = {
  id?: string | null;
  userId?: string | null;
  postID: string;
  content: string;
  createdAt?: string | null;
};

export type ModelCommentConditionInput = {
  postID?: ModelIDInput | null;
  content?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  and?: Array<ModelCommentConditionInput | null> | null;
  or?: Array<ModelCommentConditionInput | null> | null;
  not?: ModelCommentConditionInput | null;
};

export type UpdateCommentInput = {
  id: string;
  userId?: string | null;
  postID?: string | null;
  content?: string | null;
  createdAt?: string | null;
};

export type DeleteCommentInput = {
  id?: string | null;
};

export type CreateRoutineShipInput = {
  id?: string | null;
  userName?: string | null;
  startTime?: string | null;
  endTime?: string | null;
  startDate?: string | null;
  endDate?: string | null;
};

export type ModelRoutineShipConditionInput = {
  userName?: ModelStringInput | null;
  startTime?: ModelStringInput | null;
  endTime?: ModelStringInput | null;
  startDate?: ModelStringInput | null;
  endDate?: ModelStringInput | null;
  and?: Array<ModelRoutineShipConditionInput | null> | null;
  or?: Array<ModelRoutineShipConditionInput | null> | null;
  not?: ModelRoutineShipConditionInput | null;
};

export type UpdateRoutineShipInput = {
  id: string;
  userName?: string | null;
  startTime?: string | null;
  endTime?: string | null;
  startDate?: string | null;
  endDate?: string | null;
};

export type DeleteRoutineShipInput = {
  id?: string | null;
};

export type CreateShipInput = {
  id?: string | null;
  title: string;
  userName?: string | null;
  capacity: number;
  registered: number;
  createdAt?: string | null;
  shipSize?: string | null;
  routineShipID?: string | null;
};

export type ModelShipConditionInput = {
  title?: ModelStringInput | null;
  userName?: ModelStringInput | null;
  capacity?: ModelIntInput | null;
  registered?: ModelIntInput | null;
  createdAt?: ModelStringInput | null;
  shipSize?: ModelStringInput | null;
  routineShipID?: ModelIDInput | null;
  and?: Array<ModelShipConditionInput | null> | null;
  or?: Array<ModelShipConditionInput | null> | null;
  not?: ModelShipConditionInput | null;
};

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type UpdateShipInput = {
  id: string;
  title?: string | null;
  userName?: string | null;
  capacity?: number | null;
  registered?: number | null;
  createdAt?: string | null;
  shipSize?: string | null;
  routineShipID?: string | null;
};

export type DeleteShipInput = {
  id?: string | null;
};

export type CreateCrewInput = {
  id?: string | null;
  shipID: string;
  userName: string;
  createdAt?: string | null;
};

export type ModelCrewConditionInput = {
  shipID?: ModelIDInput | null;
  createdAt?: ModelStringInput | null;
  and?: Array<ModelCrewConditionInput | null> | null;
  or?: Array<ModelCrewConditionInput | null> | null;
  not?: ModelCrewConditionInput | null;
};

export type UpdateCrewInput = {
  id: string;
  shipID?: string | null;
  userName?: string | null;
  createdAt?: string | null;
};

export type DeleteCrewInput = {
  id?: string | null;
};

export type ModelTaskFilterInput = {
  id?: ModelIDInput | null;
  title?: ModelStringInput | null;
  description?: ModelStringInput | null;
  status?: ModelStringInput | null;
  and?: Array<ModelTaskFilterInput | null> | null;
  or?: Array<ModelTaskFilterInput | null> | null;
  not?: ModelTaskFilterInput | null;
};

export type ModelPrivateNoteFilterInput = {
  id?: ModelIDInput | null;
  content?: ModelStringInput | null;
  and?: Array<ModelPrivateNoteFilterInput | null> | null;
  or?: Array<ModelPrivateNoteFilterInput | null> | null;
  not?: ModelPrivateNoteFilterInput | null;
};

export type ModelBlogFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  and?: Array<ModelBlogFilterInput | null> | null;
  or?: Array<ModelBlogFilterInput | null> | null;
  not?: ModelBlogFilterInput | null;
};

export type ModelPostFilterInput = {
  id?: ModelIDInput | null;
  title?: ModelStringInput | null;
  blogID?: ModelIDInput | null;
  createdAt?: ModelStringInput | null;
  and?: Array<ModelPostFilterInput | null> | null;
  or?: Array<ModelPostFilterInput | null> | null;
  not?: ModelPostFilterInput | null;
};

export type ModelCommentFilterInput = {
  id?: ModelIDInput | null;
  userId?: ModelIDInput | null;
  postID?: ModelIDInput | null;
  content?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  and?: Array<ModelCommentFilterInput | null> | null;
  or?: Array<ModelCommentFilterInput | null> | null;
  not?: ModelCommentFilterInput | null;
};

export type ModelRoutineShipFilterInput = {
  id?: ModelIDInput | null;
  userName?: ModelStringInput | null;
  startTime?: ModelStringInput | null;
  endTime?: ModelStringInput | null;
  startDate?: ModelStringInput | null;
  endDate?: ModelStringInput | null;
  and?: Array<ModelRoutineShipFilterInput | null> | null;
  or?: Array<ModelRoutineShipFilterInput | null> | null;
  not?: ModelRoutineShipFilterInput | null;
};

export type ModelShipFilterInput = {
  id?: ModelIDInput | null;
  title?: ModelStringInput | null;
  userName?: ModelStringInput | null;
  capacity?: ModelIntInput | null;
  registered?: ModelIntInput | null;
  createdAt?: ModelStringInput | null;
  shipSize?: ModelStringInput | null;
  routineShipID?: ModelIDInput | null;
  and?: Array<ModelShipFilterInput | null> | null;
  or?: Array<ModelShipFilterInput | null> | null;
  not?: ModelShipFilterInput | null;
};

export type ModelCrewFilterInput = {
  id?: ModelIDInput | null;
  shipID?: ModelIDInput | null;
  userName?: ModelStringInput | null;
  createdAt?: ModelStringInput | null;
  and?: Array<ModelCrewFilterInput | null> | null;
  or?: Array<ModelCrewFilterInput | null> | null;
  not?: ModelCrewFilterInput | null;
};

export type RegisterShipMutation = {
  __typename: "responseRegisterShip";
  status: number | null;
  body: string | null;
};

export type TestHttpX1Mutation = {
  __typename: "ResponseHttpX1";
  status: number | null;
  body: string | null;
};

export type CreateTaskMutation = {
  __typename: "Task";
  id: string;
  title: string;
  description: string | null;
  status: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateTaskMutation = {
  __typename: "Task";
  id: string;
  title: string;
  description: string | null;
  status: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteTaskMutation = {
  __typename: "Task";
  id: string;
  title: string;
  description: string | null;
  status: string | null;
  createdAt: string;
  updatedAt: string;
};

export type CreatePrivateNoteMutation = {
  __typename: "PrivateNote";
  id: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

export type UpdatePrivateNoteMutation = {
  __typename: "PrivateNote";
  id: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

export type DeletePrivateNoteMutation = {
  __typename: "PrivateNote";
  id: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

export type CreateBlogMutation = {
  __typename: "Blog";
  id: string;
  name: string;
  posts: {
    __typename: "ModelPostConnection";
    items: Array<{
      __typename: "Post";
      id: string;
      title: string;
      blogID: string;
      blog: {
        __typename: "Blog";
        id: string;
        name: string;
        createdAt: string;
        updatedAt: string;
      } | null;
      comments: {
        __typename: "ModelCommentConnection";
        nextToken: string | null;
      } | null;
      createdAt: string | null;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateBlogMutation = {
  __typename: "Blog";
  id: string;
  name: string;
  posts: {
    __typename: "ModelPostConnection";
    items: Array<{
      __typename: "Post";
      id: string;
      title: string;
      blogID: string;
      blog: {
        __typename: "Blog";
        id: string;
        name: string;
        createdAt: string;
        updatedAt: string;
      } | null;
      comments: {
        __typename: "ModelCommentConnection";
        nextToken: string | null;
      } | null;
      createdAt: string | null;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteBlogMutation = {
  __typename: "Blog";
  id: string;
  name: string;
  posts: {
    __typename: "ModelPostConnection";
    items: Array<{
      __typename: "Post";
      id: string;
      title: string;
      blogID: string;
      blog: {
        __typename: "Blog";
        id: string;
        name: string;
        createdAt: string;
        updatedAt: string;
      } | null;
      comments: {
        __typename: "ModelCommentConnection";
        nextToken: string | null;
      } | null;
      createdAt: string | null;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type CreatePostMutation = {
  __typename: "Post";
  id: string;
  title: string;
  blogID: string;
  blog: {
    __typename: "Blog";
    id: string;
    name: string;
    posts: {
      __typename: "ModelPostConnection";
      items: Array<{
        __typename: "Post";
        id: string;
        title: string;
        blogID: string;
        createdAt: string | null;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  comments: {
    __typename: "ModelCommentConnection";
    items: Array<{
      __typename: "Comment";
      id: string;
      userId: string | null;
      postID: string;
      post: {
        __typename: "Post";
        id: string;
        title: string;
        blogID: string;
        createdAt: string | null;
        updatedAt: string;
      } | null;
      content: string;
      createdAt: string | null;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string | null;
  updatedAt: string;
};

export type UpdatePostMutation = {
  __typename: "Post";
  id: string;
  title: string;
  blogID: string;
  blog: {
    __typename: "Blog";
    id: string;
    name: string;
    posts: {
      __typename: "ModelPostConnection";
      items: Array<{
        __typename: "Post";
        id: string;
        title: string;
        blogID: string;
        createdAt: string | null;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  comments: {
    __typename: "ModelCommentConnection";
    items: Array<{
      __typename: "Comment";
      id: string;
      userId: string | null;
      postID: string;
      post: {
        __typename: "Post";
        id: string;
        title: string;
        blogID: string;
        createdAt: string | null;
        updatedAt: string;
      } | null;
      content: string;
      createdAt: string | null;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string | null;
  updatedAt: string;
};

export type DeletePostMutation = {
  __typename: "Post";
  id: string;
  title: string;
  blogID: string;
  blog: {
    __typename: "Blog";
    id: string;
    name: string;
    posts: {
      __typename: "ModelPostConnection";
      items: Array<{
        __typename: "Post";
        id: string;
        title: string;
        blogID: string;
        createdAt: string | null;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  comments: {
    __typename: "ModelCommentConnection";
    items: Array<{
      __typename: "Comment";
      id: string;
      userId: string | null;
      postID: string;
      post: {
        __typename: "Post";
        id: string;
        title: string;
        blogID: string;
        createdAt: string | null;
        updatedAt: string;
      } | null;
      content: string;
      createdAt: string | null;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string | null;
  updatedAt: string;
};

export type CreateCommentMutation = {
  __typename: "Comment";
  id: string;
  userId: string | null;
  postID: string;
  post: {
    __typename: "Post";
    id: string;
    title: string;
    blogID: string;
    blog: {
      __typename: "Blog";
      id: string;
      name: string;
      posts: {
        __typename: "ModelPostConnection";
        nextToken: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    comments: {
      __typename: "ModelCommentConnection";
      items: Array<{
        __typename: "Comment";
        id: string;
        userId: string | null;
        postID: string;
        content: string;
        createdAt: string | null;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    createdAt: string | null;
    updatedAt: string;
  } | null;
  content: string;
  createdAt: string | null;
  updatedAt: string;
};

export type UpdateCommentMutation = {
  __typename: "Comment";
  id: string;
  userId: string | null;
  postID: string;
  post: {
    __typename: "Post";
    id: string;
    title: string;
    blogID: string;
    blog: {
      __typename: "Blog";
      id: string;
      name: string;
      posts: {
        __typename: "ModelPostConnection";
        nextToken: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    comments: {
      __typename: "ModelCommentConnection";
      items: Array<{
        __typename: "Comment";
        id: string;
        userId: string | null;
        postID: string;
        content: string;
        createdAt: string | null;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    createdAt: string | null;
    updatedAt: string;
  } | null;
  content: string;
  createdAt: string | null;
  updatedAt: string;
};

export type DeleteCommentMutation = {
  __typename: "Comment";
  id: string;
  userId: string | null;
  postID: string;
  post: {
    __typename: "Post";
    id: string;
    title: string;
    blogID: string;
    blog: {
      __typename: "Blog";
      id: string;
      name: string;
      posts: {
        __typename: "ModelPostConnection";
        nextToken: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    comments: {
      __typename: "ModelCommentConnection";
      items: Array<{
        __typename: "Comment";
        id: string;
        userId: string | null;
        postID: string;
        content: string;
        createdAt: string | null;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    createdAt: string | null;
    updatedAt: string;
  } | null;
  content: string;
  createdAt: string | null;
  updatedAt: string;
};

export type CreateRoutineShipMutation = {
  __typename: "RoutineShip";
  id: string;
  ship: {
    __typename: "ModelShipConnection";
    items: Array<{
      __typename: "Ship";
      id: string;
      title: string;
      userName: string | null;
      capacity: number;
      registered: number;
      crews: {
        __typename: "ModelCrewConnection";
        nextToken: string | null;
      } | null;
      createdAt: string | null;
      shipSize: string | null;
      routineShipID: string | null;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  userName: string | null;
  startTime: string | null;
  endTime: string | null;
  startDate: string | null;
  endDate: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateRoutineShipMutation = {
  __typename: "RoutineShip";
  id: string;
  ship: {
    __typename: "ModelShipConnection";
    items: Array<{
      __typename: "Ship";
      id: string;
      title: string;
      userName: string | null;
      capacity: number;
      registered: number;
      crews: {
        __typename: "ModelCrewConnection";
        nextToken: string | null;
      } | null;
      createdAt: string | null;
      shipSize: string | null;
      routineShipID: string | null;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  userName: string | null;
  startTime: string | null;
  endTime: string | null;
  startDate: string | null;
  endDate: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteRoutineShipMutation = {
  __typename: "RoutineShip";
  id: string;
  ship: {
    __typename: "ModelShipConnection";
    items: Array<{
      __typename: "Ship";
      id: string;
      title: string;
      userName: string | null;
      capacity: number;
      registered: number;
      crews: {
        __typename: "ModelCrewConnection";
        nextToken: string | null;
      } | null;
      createdAt: string | null;
      shipSize: string | null;
      routineShipID: string | null;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  userName: string | null;
  startTime: string | null;
  endTime: string | null;
  startDate: string | null;
  endDate: string | null;
  createdAt: string;
  updatedAt: string;
};

export type CreateShipMutation = {
  __typename: "Ship";
  id: string;
  title: string;
  userName: string | null;
  capacity: number;
  registered: number;
  crews: {
    __typename: "ModelCrewConnection";
    items: Array<{
      __typename: "Crew";
      id: string;
      shipID: string;
      userName: string;
      ship: {
        __typename: "Ship";
        id: string;
        title: string;
        userName: string | null;
        capacity: number;
        registered: number;
        createdAt: string | null;
        shipSize: string | null;
        routineShipID: string | null;
        updatedAt: string;
      } | null;
      createdAt: string | null;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string | null;
  shipSize: string | null;
  routineShipID: string | null;
  updatedAt: string;
};

export type UpdateShipMutation = {
  __typename: "Ship";
  id: string;
  title: string;
  userName: string | null;
  capacity: number;
  registered: number;
  crews: {
    __typename: "ModelCrewConnection";
    items: Array<{
      __typename: "Crew";
      id: string;
      shipID: string;
      userName: string;
      ship: {
        __typename: "Ship";
        id: string;
        title: string;
        userName: string | null;
        capacity: number;
        registered: number;
        createdAt: string | null;
        shipSize: string | null;
        routineShipID: string | null;
        updatedAt: string;
      } | null;
      createdAt: string | null;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string | null;
  shipSize: string | null;
  routineShipID: string | null;
  updatedAt: string;
};

export type DeleteShipMutation = {
  __typename: "Ship";
  id: string;
  title: string;
  userName: string | null;
  capacity: number;
  registered: number;
  crews: {
    __typename: "ModelCrewConnection";
    items: Array<{
      __typename: "Crew";
      id: string;
      shipID: string;
      userName: string;
      ship: {
        __typename: "Ship";
        id: string;
        title: string;
        userName: string | null;
        capacity: number;
        registered: number;
        createdAt: string | null;
        shipSize: string | null;
        routineShipID: string | null;
        updatedAt: string;
      } | null;
      createdAt: string | null;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string | null;
  shipSize: string | null;
  routineShipID: string | null;
  updatedAt: string;
};

export type CreateCrewMutation = {
  __typename: "Crew";
  id: string;
  shipID: string;
  userName: string;
  ship: {
    __typename: "Ship";
    id: string;
    title: string;
    userName: string | null;
    capacity: number;
    registered: number;
    crews: {
      __typename: "ModelCrewConnection";
      items: Array<{
        __typename: "Crew";
        id: string;
        shipID: string;
        userName: string;
        createdAt: string | null;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    createdAt: string | null;
    shipSize: string | null;
    routineShipID: string | null;
    updatedAt: string;
  } | null;
  createdAt: string | null;
  updatedAt: string;
};

export type UpdateCrewMutation = {
  __typename: "Crew";
  id: string;
  shipID: string;
  userName: string;
  ship: {
    __typename: "Ship";
    id: string;
    title: string;
    userName: string | null;
    capacity: number;
    registered: number;
    crews: {
      __typename: "ModelCrewConnection";
      items: Array<{
        __typename: "Crew";
        id: string;
        shipID: string;
        userName: string;
        createdAt: string | null;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    createdAt: string | null;
    shipSize: string | null;
    routineShipID: string | null;
    updatedAt: string;
  } | null;
  createdAt: string | null;
  updatedAt: string;
};

export type DeleteCrewMutation = {
  __typename: "Crew";
  id: string;
  shipID: string;
  userName: string;
  ship: {
    __typename: "Ship";
    id: string;
    title: string;
    userName: string | null;
    capacity: number;
    registered: number;
    crews: {
      __typename: "ModelCrewConnection";
      items: Array<{
        __typename: "Crew";
        id: string;
        shipID: string;
        userName: string;
        createdAt: string | null;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    createdAt: string | null;
    shipSize: string | null;
    routineShipID: string | null;
    updatedAt: string;
  } | null;
  createdAt: string | null;
  updatedAt: string;
};

export type GetTaskQuery = {
  __typename: "Task";
  id: string;
  title: string;
  description: string | null;
  status: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListTasksQuery = {
  __typename: "ModelTaskConnection";
  items: Array<{
    __typename: "Task";
    id: string;
    title: string;
    description: string | null;
    status: string | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetPrivateNoteQuery = {
  __typename: "PrivateNote";
  id: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

export type ListPrivateNotesQuery = {
  __typename: "ModelPrivateNoteConnection";
  items: Array<{
    __typename: "PrivateNote";
    id: string;
    content: string;
    createdAt: string;
    updatedAt: string;
    owner: string | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetBlogQuery = {
  __typename: "Blog";
  id: string;
  name: string;
  posts: {
    __typename: "ModelPostConnection";
    items: Array<{
      __typename: "Post";
      id: string;
      title: string;
      blogID: string;
      blog: {
        __typename: "Blog";
        id: string;
        name: string;
        createdAt: string;
        updatedAt: string;
      } | null;
      comments: {
        __typename: "ModelCommentConnection";
        nextToken: string | null;
      } | null;
      createdAt: string | null;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type ListBlogsQuery = {
  __typename: "ModelBlogConnection";
  items: Array<{
    __typename: "Blog";
    id: string;
    name: string;
    posts: {
      __typename: "ModelPostConnection";
      items: Array<{
        __typename: "Post";
        id: string;
        title: string;
        blogID: string;
        createdAt: string | null;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetPostQuery = {
  __typename: "Post";
  id: string;
  title: string;
  blogID: string;
  blog: {
    __typename: "Blog";
    id: string;
    name: string;
    posts: {
      __typename: "ModelPostConnection";
      items: Array<{
        __typename: "Post";
        id: string;
        title: string;
        blogID: string;
        createdAt: string | null;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  comments: {
    __typename: "ModelCommentConnection";
    items: Array<{
      __typename: "Comment";
      id: string;
      userId: string | null;
      postID: string;
      post: {
        __typename: "Post";
        id: string;
        title: string;
        blogID: string;
        createdAt: string | null;
        updatedAt: string;
      } | null;
      content: string;
      createdAt: string | null;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string | null;
  updatedAt: string;
};

export type ListPostsQuery = {
  __typename: "ModelPostConnection";
  items: Array<{
    __typename: "Post";
    id: string;
    title: string;
    blogID: string;
    blog: {
      __typename: "Blog";
      id: string;
      name: string;
      posts: {
        __typename: "ModelPostConnection";
        nextToken: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    comments: {
      __typename: "ModelCommentConnection";
      items: Array<{
        __typename: "Comment";
        id: string;
        userId: string | null;
        postID: string;
        content: string;
        createdAt: string | null;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    createdAt: string | null;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetCommentQuery = {
  __typename: "Comment";
  id: string;
  userId: string | null;
  postID: string;
  post: {
    __typename: "Post";
    id: string;
    title: string;
    blogID: string;
    blog: {
      __typename: "Blog";
      id: string;
      name: string;
      posts: {
        __typename: "ModelPostConnection";
        nextToken: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    comments: {
      __typename: "ModelCommentConnection";
      items: Array<{
        __typename: "Comment";
        id: string;
        userId: string | null;
        postID: string;
        content: string;
        createdAt: string | null;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    createdAt: string | null;
    updatedAt: string;
  } | null;
  content: string;
  createdAt: string | null;
  updatedAt: string;
};

export type ListCommentsQuery = {
  __typename: "ModelCommentConnection";
  items: Array<{
    __typename: "Comment";
    id: string;
    userId: string | null;
    postID: string;
    post: {
      __typename: "Post";
      id: string;
      title: string;
      blogID: string;
      blog: {
        __typename: "Blog";
        id: string;
        name: string;
        createdAt: string;
        updatedAt: string;
      } | null;
      comments: {
        __typename: "ModelCommentConnection";
        nextToken: string | null;
      } | null;
      createdAt: string | null;
      updatedAt: string;
    } | null;
    content: string;
    createdAt: string | null;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetRoutineShipQuery = {
  __typename: "RoutineShip";
  id: string;
  ship: {
    __typename: "ModelShipConnection";
    items: Array<{
      __typename: "Ship";
      id: string;
      title: string;
      userName: string | null;
      capacity: number;
      registered: number;
      crews: {
        __typename: "ModelCrewConnection";
        nextToken: string | null;
      } | null;
      createdAt: string | null;
      shipSize: string | null;
      routineShipID: string | null;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  userName: string | null;
  startTime: string | null;
  endTime: string | null;
  startDate: string | null;
  endDate: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListRoutineShipsQuery = {
  __typename: "ModelRoutineShipConnection";
  items: Array<{
    __typename: "RoutineShip";
    id: string;
    ship: {
      __typename: "ModelShipConnection";
      items: Array<{
        __typename: "Ship";
        id: string;
        title: string;
        userName: string | null;
        capacity: number;
        registered: number;
        createdAt: string | null;
        shipSize: string | null;
        routineShipID: string | null;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    userName: string | null;
    startTime: string | null;
    endTime: string | null;
    startDate: string | null;
    endDate: string | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetShipQuery = {
  __typename: "Ship";
  id: string;
  title: string;
  userName: string | null;
  capacity: number;
  registered: number;
  crews: {
    __typename: "ModelCrewConnection";
    items: Array<{
      __typename: "Crew";
      id: string;
      shipID: string;
      userName: string;
      ship: {
        __typename: "Ship";
        id: string;
        title: string;
        userName: string | null;
        capacity: number;
        registered: number;
        createdAt: string | null;
        shipSize: string | null;
        routineShipID: string | null;
        updatedAt: string;
      } | null;
      createdAt: string | null;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string | null;
  shipSize: string | null;
  routineShipID: string | null;
  updatedAt: string;
};

export type ListShipsQuery = {
  __typename: "ModelShipConnection";
  items: Array<{
    __typename: "Ship";
    id: string;
    title: string;
    userName: string | null;
    capacity: number;
    registered: number;
    crews: {
      __typename: "ModelCrewConnection";
      items: Array<{
        __typename: "Crew";
        id: string;
        shipID: string;
        userName: string;
        createdAt: string | null;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    createdAt: string | null;
    shipSize: string | null;
    routineShipID: string | null;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetCrewQuery = {
  __typename: "Crew";
  id: string;
  shipID: string;
  userName: string;
  ship: {
    __typename: "Ship";
    id: string;
    title: string;
    userName: string | null;
    capacity: number;
    registered: number;
    crews: {
      __typename: "ModelCrewConnection";
      items: Array<{
        __typename: "Crew";
        id: string;
        shipID: string;
        userName: string;
        createdAt: string | null;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    createdAt: string | null;
    shipSize: string | null;
    routineShipID: string | null;
    updatedAt: string;
  } | null;
  createdAt: string | null;
  updatedAt: string;
};

export type ListCrewsQuery = {
  __typename: "ModelCrewConnection";
  items: Array<{
    __typename: "Crew";
    id: string;
    shipID: string;
    userName: string;
    ship: {
      __typename: "Ship";
      id: string;
      title: string;
      userName: string | null;
      capacity: number;
      registered: number;
      crews: {
        __typename: "ModelCrewConnection";
        nextToken: string | null;
      } | null;
      createdAt: string | null;
      shipSize: string | null;
      routineShipID: string | null;
      updatedAt: string;
    } | null;
    createdAt: string | null;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type OnCreateTaskSubscription = {
  __typename: "Task";
  id: string;
  title: string;
  description: string | null;
  status: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateTaskSubscription = {
  __typename: "Task";
  id: string;
  title: string;
  description: string | null;
  status: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteTaskSubscription = {
  __typename: "Task";
  id: string;
  title: string;
  description: string | null;
  status: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreatePrivateNoteSubscription = {
  __typename: "PrivateNote";
  id: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

export type OnUpdatePrivateNoteSubscription = {
  __typename: "PrivateNote";
  id: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

export type OnDeletePrivateNoteSubscription = {
  __typename: "PrivateNote";
  id: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  owner: string | null;
};

export type OnCreateBlogSubscription = {
  __typename: "Blog";
  id: string;
  name: string;
  posts: {
    __typename: "ModelPostConnection";
    items: Array<{
      __typename: "Post";
      id: string;
      title: string;
      blogID: string;
      blog: {
        __typename: "Blog";
        id: string;
        name: string;
        createdAt: string;
        updatedAt: string;
      } | null;
      comments: {
        __typename: "ModelCommentConnection";
        nextToken: string | null;
      } | null;
      createdAt: string | null;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateBlogSubscription = {
  __typename: "Blog";
  id: string;
  name: string;
  posts: {
    __typename: "ModelPostConnection";
    items: Array<{
      __typename: "Post";
      id: string;
      title: string;
      blogID: string;
      blog: {
        __typename: "Blog";
        id: string;
        name: string;
        createdAt: string;
        updatedAt: string;
      } | null;
      comments: {
        __typename: "ModelCommentConnection";
        nextToken: string | null;
      } | null;
      createdAt: string | null;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteBlogSubscription = {
  __typename: "Blog";
  id: string;
  name: string;
  posts: {
    __typename: "ModelPostConnection";
    items: Array<{
      __typename: "Post";
      id: string;
      title: string;
      blogID: string;
      blog: {
        __typename: "Blog";
        id: string;
        name: string;
        createdAt: string;
        updatedAt: string;
      } | null;
      comments: {
        __typename: "ModelCommentConnection";
        nextToken: string | null;
      } | null;
      createdAt: string | null;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreatePostSubscription = {
  __typename: "Post";
  id: string;
  title: string;
  blogID: string;
  blog: {
    __typename: "Blog";
    id: string;
    name: string;
    posts: {
      __typename: "ModelPostConnection";
      items: Array<{
        __typename: "Post";
        id: string;
        title: string;
        blogID: string;
        createdAt: string | null;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  comments: {
    __typename: "ModelCommentConnection";
    items: Array<{
      __typename: "Comment";
      id: string;
      userId: string | null;
      postID: string;
      post: {
        __typename: "Post";
        id: string;
        title: string;
        blogID: string;
        createdAt: string | null;
        updatedAt: string;
      } | null;
      content: string;
      createdAt: string | null;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string | null;
  updatedAt: string;
};

export type OnUpdatePostSubscription = {
  __typename: "Post";
  id: string;
  title: string;
  blogID: string;
  blog: {
    __typename: "Blog";
    id: string;
    name: string;
    posts: {
      __typename: "ModelPostConnection";
      items: Array<{
        __typename: "Post";
        id: string;
        title: string;
        blogID: string;
        createdAt: string | null;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  comments: {
    __typename: "ModelCommentConnection";
    items: Array<{
      __typename: "Comment";
      id: string;
      userId: string | null;
      postID: string;
      post: {
        __typename: "Post";
        id: string;
        title: string;
        blogID: string;
        createdAt: string | null;
        updatedAt: string;
      } | null;
      content: string;
      createdAt: string | null;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string | null;
  updatedAt: string;
};

export type OnDeletePostSubscription = {
  __typename: "Post";
  id: string;
  title: string;
  blogID: string;
  blog: {
    __typename: "Blog";
    id: string;
    name: string;
    posts: {
      __typename: "ModelPostConnection";
      items: Array<{
        __typename: "Post";
        id: string;
        title: string;
        blogID: string;
        createdAt: string | null;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
  } | null;
  comments: {
    __typename: "ModelCommentConnection";
    items: Array<{
      __typename: "Comment";
      id: string;
      userId: string | null;
      postID: string;
      post: {
        __typename: "Post";
        id: string;
        title: string;
        blogID: string;
        createdAt: string | null;
        updatedAt: string;
      } | null;
      content: string;
      createdAt: string | null;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string | null;
  updatedAt: string;
};

export type OnCreateCommentSubscription = {
  __typename: "Comment";
  id: string;
  userId: string | null;
  postID: string;
  post: {
    __typename: "Post";
    id: string;
    title: string;
    blogID: string;
    blog: {
      __typename: "Blog";
      id: string;
      name: string;
      posts: {
        __typename: "ModelPostConnection";
        nextToken: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    comments: {
      __typename: "ModelCommentConnection";
      items: Array<{
        __typename: "Comment";
        id: string;
        userId: string | null;
        postID: string;
        content: string;
        createdAt: string | null;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    createdAt: string | null;
    updatedAt: string;
  } | null;
  content: string;
  createdAt: string | null;
  updatedAt: string;
};

export type OnUpdateCommentSubscription = {
  __typename: "Comment";
  id: string;
  userId: string | null;
  postID: string;
  post: {
    __typename: "Post";
    id: string;
    title: string;
    blogID: string;
    blog: {
      __typename: "Blog";
      id: string;
      name: string;
      posts: {
        __typename: "ModelPostConnection";
        nextToken: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    comments: {
      __typename: "ModelCommentConnection";
      items: Array<{
        __typename: "Comment";
        id: string;
        userId: string | null;
        postID: string;
        content: string;
        createdAt: string | null;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    createdAt: string | null;
    updatedAt: string;
  } | null;
  content: string;
  createdAt: string | null;
  updatedAt: string;
};

export type OnDeleteCommentSubscription = {
  __typename: "Comment";
  id: string;
  userId: string | null;
  postID: string;
  post: {
    __typename: "Post";
    id: string;
    title: string;
    blogID: string;
    blog: {
      __typename: "Blog";
      id: string;
      name: string;
      posts: {
        __typename: "ModelPostConnection";
        nextToken: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
    } | null;
    comments: {
      __typename: "ModelCommentConnection";
      items: Array<{
        __typename: "Comment";
        id: string;
        userId: string | null;
        postID: string;
        content: string;
        createdAt: string | null;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    createdAt: string | null;
    updatedAt: string;
  } | null;
  content: string;
  createdAt: string | null;
  updatedAt: string;
};

export type OnCreateRoutineShipSubscription = {
  __typename: "RoutineShip";
  id: string;
  ship: {
    __typename: "ModelShipConnection";
    items: Array<{
      __typename: "Ship";
      id: string;
      title: string;
      userName: string | null;
      capacity: number;
      registered: number;
      crews: {
        __typename: "ModelCrewConnection";
        nextToken: string | null;
      } | null;
      createdAt: string | null;
      shipSize: string | null;
      routineShipID: string | null;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  userName: string | null;
  startTime: string | null;
  endTime: string | null;
  startDate: string | null;
  endDate: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateRoutineShipSubscription = {
  __typename: "RoutineShip";
  id: string;
  ship: {
    __typename: "ModelShipConnection";
    items: Array<{
      __typename: "Ship";
      id: string;
      title: string;
      userName: string | null;
      capacity: number;
      registered: number;
      crews: {
        __typename: "ModelCrewConnection";
        nextToken: string | null;
      } | null;
      createdAt: string | null;
      shipSize: string | null;
      routineShipID: string | null;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  userName: string | null;
  startTime: string | null;
  endTime: string | null;
  startDate: string | null;
  endDate: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteRoutineShipSubscription = {
  __typename: "RoutineShip";
  id: string;
  ship: {
    __typename: "ModelShipConnection";
    items: Array<{
      __typename: "Ship";
      id: string;
      title: string;
      userName: string | null;
      capacity: number;
      registered: number;
      crews: {
        __typename: "ModelCrewConnection";
        nextToken: string | null;
      } | null;
      createdAt: string | null;
      shipSize: string | null;
      routineShipID: string | null;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  userName: string | null;
  startTime: string | null;
  endTime: string | null;
  startDate: string | null;
  endDate: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateShipSubscription = {
  __typename: "Ship";
  id: string;
  title: string;
  userName: string | null;
  capacity: number;
  registered: number;
  crews: {
    __typename: "ModelCrewConnection";
    items: Array<{
      __typename: "Crew";
      id: string;
      shipID: string;
      userName: string;
      ship: {
        __typename: "Ship";
        id: string;
        title: string;
        userName: string | null;
        capacity: number;
        registered: number;
        createdAt: string | null;
        shipSize: string | null;
        routineShipID: string | null;
        updatedAt: string;
      } | null;
      createdAt: string | null;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string | null;
  shipSize: string | null;
  routineShipID: string | null;
  updatedAt: string;
};

export type OnUpdateShipSubscription = {
  __typename: "Ship";
  id: string;
  title: string;
  userName: string | null;
  capacity: number;
  registered: number;
  crews: {
    __typename: "ModelCrewConnection";
    items: Array<{
      __typename: "Crew";
      id: string;
      shipID: string;
      userName: string;
      ship: {
        __typename: "Ship";
        id: string;
        title: string;
        userName: string | null;
        capacity: number;
        registered: number;
        createdAt: string | null;
        shipSize: string | null;
        routineShipID: string | null;
        updatedAt: string;
      } | null;
      createdAt: string | null;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string | null;
  shipSize: string | null;
  routineShipID: string | null;
  updatedAt: string;
};

export type OnDeleteShipSubscription = {
  __typename: "Ship";
  id: string;
  title: string;
  userName: string | null;
  capacity: number;
  registered: number;
  crews: {
    __typename: "ModelCrewConnection";
    items: Array<{
      __typename: "Crew";
      id: string;
      shipID: string;
      userName: string;
      ship: {
        __typename: "Ship";
        id: string;
        title: string;
        userName: string | null;
        capacity: number;
        registered: number;
        createdAt: string | null;
        shipSize: string | null;
        routineShipID: string | null;
        updatedAt: string;
      } | null;
      createdAt: string | null;
      updatedAt: string;
    } | null> | null;
    nextToken: string | null;
  } | null;
  createdAt: string | null;
  shipSize: string | null;
  routineShipID: string | null;
  updatedAt: string;
};

export type OnCreateCrewSubscription = {
  __typename: "Crew";
  id: string;
  shipID: string;
  userName: string;
  ship: {
    __typename: "Ship";
    id: string;
    title: string;
    userName: string | null;
    capacity: number;
    registered: number;
    crews: {
      __typename: "ModelCrewConnection";
      items: Array<{
        __typename: "Crew";
        id: string;
        shipID: string;
        userName: string;
        createdAt: string | null;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    createdAt: string | null;
    shipSize: string | null;
    routineShipID: string | null;
    updatedAt: string;
  } | null;
  createdAt: string | null;
  updatedAt: string;
};

export type OnUpdateCrewSubscription = {
  __typename: "Crew";
  id: string;
  shipID: string;
  userName: string;
  ship: {
    __typename: "Ship";
    id: string;
    title: string;
    userName: string | null;
    capacity: number;
    registered: number;
    crews: {
      __typename: "ModelCrewConnection";
      items: Array<{
        __typename: "Crew";
        id: string;
        shipID: string;
        userName: string;
        createdAt: string | null;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    createdAt: string | null;
    shipSize: string | null;
    routineShipID: string | null;
    updatedAt: string;
  } | null;
  createdAt: string | null;
  updatedAt: string;
};

export type OnDeleteCrewSubscription = {
  __typename: "Crew";
  id: string;
  shipID: string;
  userName: string;
  ship: {
    __typename: "Ship";
    id: string;
    title: string;
    userName: string | null;
    capacity: number;
    registered: number;
    crews: {
      __typename: "ModelCrewConnection";
      items: Array<{
        __typename: "Crew";
        id: string;
        shipID: string;
        userName: string;
        createdAt: string | null;
        updatedAt: string;
      } | null> | null;
      nextToken: string | null;
    } | null;
    createdAt: string | null;
    shipSize: string | null;
    routineShipID: string | null;
    updatedAt: string;
  } | null;
  createdAt: string | null;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async RegisterShip(
    expectRegValue?: number,
    userName?: string,
    shipId?: string
  ): Promise<RegisterShipMutation> {
    const statement = `mutation RegisterShip($expectRegValue: Int, $userName: String, $shipId: String) {
        registerShip(expectRegValue: $expectRegValue, userName: $userName, shipId: $shipId) {
          __typename
          status
          body
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (expectRegValue) {
      gqlAPIServiceArguments.expectRegValue = expectRegValue;
    }
    if (userName) {
      gqlAPIServiceArguments.userName = userName;
    }
    if (shipId) {
      gqlAPIServiceArguments.shipId = shipId;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <RegisterShipMutation>response.data.registerShip;
  }
  async TestHttpX1(request?: string): Promise<TestHttpX1Mutation> {
    const statement = `mutation TestHttpX1($request: String) {
        testHttpX1(request: $request) {
          __typename
          status
          body
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (request) {
      gqlAPIServiceArguments.request = request;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <TestHttpX1Mutation>response.data.testHttpX1;
  }
  async CreateTask(
    input: CreateTaskInput,
    condition?: ModelTaskConditionInput
  ): Promise<CreateTaskMutation> {
    const statement = `mutation CreateTask($input: CreateTaskInput!, $condition: ModelTaskConditionInput) {
        createTask(input: $input, condition: $condition) {
          __typename
          id
          title
          description
          status
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateTaskMutation>response.data.createTask;
  }
  async UpdateTask(
    input: UpdateTaskInput,
    condition?: ModelTaskConditionInput
  ): Promise<UpdateTaskMutation> {
    const statement = `mutation UpdateTask($input: UpdateTaskInput!, $condition: ModelTaskConditionInput) {
        updateTask(input: $input, condition: $condition) {
          __typename
          id
          title
          description
          status
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateTaskMutation>response.data.updateTask;
  }
  async DeleteTask(
    input: DeleteTaskInput,
    condition?: ModelTaskConditionInput
  ): Promise<DeleteTaskMutation> {
    const statement = `mutation DeleteTask($input: DeleteTaskInput!, $condition: ModelTaskConditionInput) {
        deleteTask(input: $input, condition: $condition) {
          __typename
          id
          title
          description
          status
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteTaskMutation>response.data.deleteTask;
  }
  async CreatePrivateNote(
    input: CreatePrivateNoteInput,
    condition?: ModelPrivateNoteConditionInput
  ): Promise<CreatePrivateNoteMutation> {
    const statement = `mutation CreatePrivateNote($input: CreatePrivateNoteInput!, $condition: ModelPrivateNoteConditionInput) {
        createPrivateNote(input: $input, condition: $condition) {
          __typename
          id
          content
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreatePrivateNoteMutation>response.data.createPrivateNote;
  }
  async UpdatePrivateNote(
    input: UpdatePrivateNoteInput,
    condition?: ModelPrivateNoteConditionInput
  ): Promise<UpdatePrivateNoteMutation> {
    const statement = `mutation UpdatePrivateNote($input: UpdatePrivateNoteInput!, $condition: ModelPrivateNoteConditionInput) {
        updatePrivateNote(input: $input, condition: $condition) {
          __typename
          id
          content
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdatePrivateNoteMutation>response.data.updatePrivateNote;
  }
  async DeletePrivateNote(
    input: DeletePrivateNoteInput,
    condition?: ModelPrivateNoteConditionInput
  ): Promise<DeletePrivateNoteMutation> {
    const statement = `mutation DeletePrivateNote($input: DeletePrivateNoteInput!, $condition: ModelPrivateNoteConditionInput) {
        deletePrivateNote(input: $input, condition: $condition) {
          __typename
          id
          content
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeletePrivateNoteMutation>response.data.deletePrivateNote;
  }
  async CreateBlog(
    input: CreateBlogInput,
    condition?: ModelBlogConditionInput
  ): Promise<CreateBlogMutation> {
    const statement = `mutation CreateBlog($input: CreateBlogInput!, $condition: ModelBlogConditionInput) {
        createBlog(input: $input, condition: $condition) {
          __typename
          id
          name
          posts {
            __typename
            items {
              __typename
              id
              title
              blogID
              blog {
                __typename
                id
                name
                createdAt
                updatedAt
              }
              comments {
                __typename
                nextToken
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateBlogMutation>response.data.createBlog;
  }
  async UpdateBlog(
    input: UpdateBlogInput,
    condition?: ModelBlogConditionInput
  ): Promise<UpdateBlogMutation> {
    const statement = `mutation UpdateBlog($input: UpdateBlogInput!, $condition: ModelBlogConditionInput) {
        updateBlog(input: $input, condition: $condition) {
          __typename
          id
          name
          posts {
            __typename
            items {
              __typename
              id
              title
              blogID
              blog {
                __typename
                id
                name
                createdAt
                updatedAt
              }
              comments {
                __typename
                nextToken
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateBlogMutation>response.data.updateBlog;
  }
  async DeleteBlog(
    input: DeleteBlogInput,
    condition?: ModelBlogConditionInput
  ): Promise<DeleteBlogMutation> {
    const statement = `mutation DeleteBlog($input: DeleteBlogInput!, $condition: ModelBlogConditionInput) {
        deleteBlog(input: $input, condition: $condition) {
          __typename
          id
          name
          posts {
            __typename
            items {
              __typename
              id
              title
              blogID
              blog {
                __typename
                id
                name
                createdAt
                updatedAt
              }
              comments {
                __typename
                nextToken
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteBlogMutation>response.data.deleteBlog;
  }
  async CreatePost(
    input: CreatePostInput,
    condition?: ModelPostConditionInput
  ): Promise<CreatePostMutation> {
    const statement = `mutation CreatePost($input: CreatePostInput!, $condition: ModelPostConditionInput) {
        createPost(input: $input, condition: $condition) {
          __typename
          id
          title
          blogID
          blog {
            __typename
            id
            name
            posts {
              __typename
              items {
                __typename
                id
                title
                blogID
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          comments {
            __typename
            items {
              __typename
              id
              userId
              postID
              post {
                __typename
                id
                title
                blogID
                createdAt
                updatedAt
              }
              content
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreatePostMutation>response.data.createPost;
  }
  async UpdatePost(
    input: UpdatePostInput,
    condition?: ModelPostConditionInput
  ): Promise<UpdatePostMutation> {
    const statement = `mutation UpdatePost($input: UpdatePostInput!, $condition: ModelPostConditionInput) {
        updatePost(input: $input, condition: $condition) {
          __typename
          id
          title
          blogID
          blog {
            __typename
            id
            name
            posts {
              __typename
              items {
                __typename
                id
                title
                blogID
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          comments {
            __typename
            items {
              __typename
              id
              userId
              postID
              post {
                __typename
                id
                title
                blogID
                createdAt
                updatedAt
              }
              content
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdatePostMutation>response.data.updatePost;
  }
  async DeletePost(
    input: DeletePostInput,
    condition?: ModelPostConditionInput
  ): Promise<DeletePostMutation> {
    const statement = `mutation DeletePost($input: DeletePostInput!, $condition: ModelPostConditionInput) {
        deletePost(input: $input, condition: $condition) {
          __typename
          id
          title
          blogID
          blog {
            __typename
            id
            name
            posts {
              __typename
              items {
                __typename
                id
                title
                blogID
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          comments {
            __typename
            items {
              __typename
              id
              userId
              postID
              post {
                __typename
                id
                title
                blogID
                createdAt
                updatedAt
              }
              content
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeletePostMutation>response.data.deletePost;
  }
  async CreateComment(
    input: CreateCommentInput,
    condition?: ModelCommentConditionInput
  ): Promise<CreateCommentMutation> {
    const statement = `mutation CreateComment($input: CreateCommentInput!, $condition: ModelCommentConditionInput) {
        createComment(input: $input, condition: $condition) {
          __typename
          id
          userId
          postID
          post {
            __typename
            id
            title
            blogID
            blog {
              __typename
              id
              name
              posts {
                __typename
                nextToken
              }
              createdAt
              updatedAt
            }
            comments {
              __typename
              items {
                __typename
                id
                userId
                postID
                content
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          content
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateCommentMutation>response.data.createComment;
  }
  async UpdateComment(
    input: UpdateCommentInput,
    condition?: ModelCommentConditionInput
  ): Promise<UpdateCommentMutation> {
    const statement = `mutation UpdateComment($input: UpdateCommentInput!, $condition: ModelCommentConditionInput) {
        updateComment(input: $input, condition: $condition) {
          __typename
          id
          userId
          postID
          post {
            __typename
            id
            title
            blogID
            blog {
              __typename
              id
              name
              posts {
                __typename
                nextToken
              }
              createdAt
              updatedAt
            }
            comments {
              __typename
              items {
                __typename
                id
                userId
                postID
                content
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          content
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateCommentMutation>response.data.updateComment;
  }
  async DeleteComment(
    input: DeleteCommentInput,
    condition?: ModelCommentConditionInput
  ): Promise<DeleteCommentMutation> {
    const statement = `mutation DeleteComment($input: DeleteCommentInput!, $condition: ModelCommentConditionInput) {
        deleteComment(input: $input, condition: $condition) {
          __typename
          id
          userId
          postID
          post {
            __typename
            id
            title
            blogID
            blog {
              __typename
              id
              name
              posts {
                __typename
                nextToken
              }
              createdAt
              updatedAt
            }
            comments {
              __typename
              items {
                __typename
                id
                userId
                postID
                content
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          content
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteCommentMutation>response.data.deleteComment;
  }
  async CreateRoutineShip(
    input: CreateRoutineShipInput,
    condition?: ModelRoutineShipConditionInput
  ): Promise<CreateRoutineShipMutation> {
    const statement = `mutation CreateRoutineShip($input: CreateRoutineShipInput!, $condition: ModelRoutineShipConditionInput) {
        createRoutineShip(input: $input, condition: $condition) {
          __typename
          id
          ship {
            __typename
            items {
              __typename
              id
              title
              userName
              capacity
              registered
              crews {
                __typename
                nextToken
              }
              createdAt
              shipSize
              routineShipID
              updatedAt
            }
            nextToken
          }
          userName
          startTime
          endTime
          startDate
          endDate
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateRoutineShipMutation>response.data.createRoutineShip;
  }
  async UpdateRoutineShip(
    input: UpdateRoutineShipInput,
    condition?: ModelRoutineShipConditionInput
  ): Promise<UpdateRoutineShipMutation> {
    const statement = `mutation UpdateRoutineShip($input: UpdateRoutineShipInput!, $condition: ModelRoutineShipConditionInput) {
        updateRoutineShip(input: $input, condition: $condition) {
          __typename
          id
          ship {
            __typename
            items {
              __typename
              id
              title
              userName
              capacity
              registered
              crews {
                __typename
                nextToken
              }
              createdAt
              shipSize
              routineShipID
              updatedAt
            }
            nextToken
          }
          userName
          startTime
          endTime
          startDate
          endDate
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateRoutineShipMutation>response.data.updateRoutineShip;
  }
  async DeleteRoutineShip(
    input: DeleteRoutineShipInput,
    condition?: ModelRoutineShipConditionInput
  ): Promise<DeleteRoutineShipMutation> {
    const statement = `mutation DeleteRoutineShip($input: DeleteRoutineShipInput!, $condition: ModelRoutineShipConditionInput) {
        deleteRoutineShip(input: $input, condition: $condition) {
          __typename
          id
          ship {
            __typename
            items {
              __typename
              id
              title
              userName
              capacity
              registered
              crews {
                __typename
                nextToken
              }
              createdAt
              shipSize
              routineShipID
              updatedAt
            }
            nextToken
          }
          userName
          startTime
          endTime
          startDate
          endDate
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteRoutineShipMutation>response.data.deleteRoutineShip;
  }
  async CreateShip(
    input: CreateShipInput,
    condition?: ModelShipConditionInput
  ): Promise<CreateShipMutation> {
    const statement = `mutation CreateShip($input: CreateShipInput!, $condition: ModelShipConditionInput) {
        createShip(input: $input, condition: $condition) {
          __typename
          id
          title
          userName
          capacity
          registered
          crews {
            __typename
            items {
              __typename
              id
              shipID
              userName
              ship {
                __typename
                id
                title
                userName
                capacity
                registered
                createdAt
                shipSize
                routineShipID
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          shipSize
          routineShipID
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateShipMutation>response.data.createShip;
  }
  async UpdateShip(
    input: UpdateShipInput,
    condition?: ModelShipConditionInput
  ): Promise<UpdateShipMutation> {
    const statement = `mutation UpdateShip($input: UpdateShipInput!, $condition: ModelShipConditionInput) {
        updateShip(input: $input, condition: $condition) {
          __typename
          id
          title
          userName
          capacity
          registered
          crews {
            __typename
            items {
              __typename
              id
              shipID
              userName
              ship {
                __typename
                id
                title
                userName
                capacity
                registered
                createdAt
                shipSize
                routineShipID
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          shipSize
          routineShipID
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateShipMutation>response.data.updateShip;
  }
  async DeleteShip(
    input: DeleteShipInput,
    condition?: ModelShipConditionInput
  ): Promise<DeleteShipMutation> {
    const statement = `mutation DeleteShip($input: DeleteShipInput!, $condition: ModelShipConditionInput) {
        deleteShip(input: $input, condition: $condition) {
          __typename
          id
          title
          userName
          capacity
          registered
          crews {
            __typename
            items {
              __typename
              id
              shipID
              userName
              ship {
                __typename
                id
                title
                userName
                capacity
                registered
                createdAt
                shipSize
                routineShipID
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          shipSize
          routineShipID
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteShipMutation>response.data.deleteShip;
  }
  async CreateCrew(
    input: CreateCrewInput,
    condition?: ModelCrewConditionInput
  ): Promise<CreateCrewMutation> {
    const statement = `mutation CreateCrew($input: CreateCrewInput!, $condition: ModelCrewConditionInput) {
        createCrew(input: $input, condition: $condition) {
          __typename
          id
          shipID
          userName
          ship {
            __typename
            id
            title
            userName
            capacity
            registered
            crews {
              __typename
              items {
                __typename
                id
                shipID
                userName
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            shipSize
            routineShipID
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateCrewMutation>response.data.createCrew;
  }
  async UpdateCrew(
    input: UpdateCrewInput,
    condition?: ModelCrewConditionInput
  ): Promise<UpdateCrewMutation> {
    const statement = `mutation UpdateCrew($input: UpdateCrewInput!, $condition: ModelCrewConditionInput) {
        updateCrew(input: $input, condition: $condition) {
          __typename
          id
          shipID
          userName
          ship {
            __typename
            id
            title
            userName
            capacity
            registered
            crews {
              __typename
              items {
                __typename
                id
                shipID
                userName
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            shipSize
            routineShipID
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <UpdateCrewMutation>response.data.updateCrew;
  }
  async DeleteCrew(
    input: DeleteCrewInput,
    condition?: ModelCrewConditionInput
  ): Promise<DeleteCrewMutation> {
    const statement = `mutation DeleteCrew($input: DeleteCrewInput!, $condition: ModelCrewConditionInput) {
        deleteCrew(input: $input, condition: $condition) {
          __typename
          id
          shipID
          userName
          ship {
            __typename
            id
            title
            userName
            capacity
            registered
            crews {
              __typename
              items {
                __typename
                id
                shipID
                userName
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            shipSize
            routineShipID
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    if (condition) {
      gqlAPIServiceArguments.condition = condition;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteCrewMutation>response.data.deleteCrew;
  }
  async GetTask(id: string): Promise<GetTaskQuery> {
    const statement = `query GetTask($id: ID!) {
        getTask(id: $id) {
          __typename
          id
          title
          description
          status
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetTaskQuery>response.data.getTask;
  }
  async ListTasks(
    filter?: ModelTaskFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListTasksQuery> {
    const statement = `query ListTasks($filter: ModelTaskFilterInput, $limit: Int, $nextToken: String) {
        listTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            title
            description
            status
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListTasksQuery>response.data.listTasks;
  }
  async GetPrivateNote(id: string): Promise<GetPrivateNoteQuery> {
    const statement = `query GetPrivateNote($id: ID!) {
        getPrivateNote(id: $id) {
          __typename
          id
          content
          createdAt
          updatedAt
          owner
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetPrivateNoteQuery>response.data.getPrivateNote;
  }
  async ListPrivateNotes(
    filter?: ModelPrivateNoteFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListPrivateNotesQuery> {
    const statement = `query ListPrivateNotes($filter: ModelPrivateNoteFilterInput, $limit: Int, $nextToken: String) {
        listPrivateNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            content
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListPrivateNotesQuery>response.data.listPrivateNotes;
  }
  async GetBlog(id: string): Promise<GetBlogQuery> {
    const statement = `query GetBlog($id: ID!) {
        getBlog(id: $id) {
          __typename
          id
          name
          posts {
            __typename
            items {
              __typename
              id
              title
              blogID
              blog {
                __typename
                id
                name
                createdAt
                updatedAt
              }
              comments {
                __typename
                nextToken
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetBlogQuery>response.data.getBlog;
  }
  async ListBlogs(
    filter?: ModelBlogFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListBlogsQuery> {
    const statement = `query ListBlogs($filter: ModelBlogFilterInput, $limit: Int, $nextToken: String) {
        listBlogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            posts {
              __typename
              items {
                __typename
                id
                title
                blogID
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListBlogsQuery>response.data.listBlogs;
  }
  async GetPost(id: string): Promise<GetPostQuery> {
    const statement = `query GetPost($id: ID!) {
        getPost(id: $id) {
          __typename
          id
          title
          blogID
          blog {
            __typename
            id
            name
            posts {
              __typename
              items {
                __typename
                id
                title
                blogID
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          comments {
            __typename
            items {
              __typename
              id
              userId
              postID
              post {
                __typename
                id
                title
                blogID
                createdAt
                updatedAt
              }
              content
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetPostQuery>response.data.getPost;
  }
  async ListPosts(
    filter?: ModelPostFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListPostsQuery> {
    const statement = `query ListPosts($filter: ModelPostFilterInput, $limit: Int, $nextToken: String) {
        listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            title
            blogID
            blog {
              __typename
              id
              name
              posts {
                __typename
                nextToken
              }
              createdAt
              updatedAt
            }
            comments {
              __typename
              items {
                __typename
                id
                userId
                postID
                content
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListPostsQuery>response.data.listPosts;
  }
  async GetComment(id: string): Promise<GetCommentQuery> {
    const statement = `query GetComment($id: ID!) {
        getComment(id: $id) {
          __typename
          id
          userId
          postID
          post {
            __typename
            id
            title
            blogID
            blog {
              __typename
              id
              name
              posts {
                __typename
                nextToken
              }
              createdAt
              updatedAt
            }
            comments {
              __typename
              items {
                __typename
                id
                userId
                postID
                content
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          content
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetCommentQuery>response.data.getComment;
  }
  async ListComments(
    filter?: ModelCommentFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListCommentsQuery> {
    const statement = `query ListComments($filter: ModelCommentFilterInput, $limit: Int, $nextToken: String) {
        listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            userId
            postID
            post {
              __typename
              id
              title
              blogID
              blog {
                __typename
                id
                name
                createdAt
                updatedAt
              }
              comments {
                __typename
                nextToken
              }
              createdAt
              updatedAt
            }
            content
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListCommentsQuery>response.data.listComments;
  }
  async GetRoutineShip(id: string): Promise<GetRoutineShipQuery> {
    const statement = `query GetRoutineShip($id: ID!) {
        getRoutineShip(id: $id) {
          __typename
          id
          ship {
            __typename
            items {
              __typename
              id
              title
              userName
              capacity
              registered
              crews {
                __typename
                nextToken
              }
              createdAt
              shipSize
              routineShipID
              updatedAt
            }
            nextToken
          }
          userName
          startTime
          endTime
          startDate
          endDate
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetRoutineShipQuery>response.data.getRoutineShip;
  }
  async ListRoutineShips(
    filter?: ModelRoutineShipFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListRoutineShipsQuery> {
    const statement = `query ListRoutineShips($filter: ModelRoutineShipFilterInput, $limit: Int, $nextToken: String) {
        listRoutineShips(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            ship {
              __typename
              items {
                __typename
                id
                title
                userName
                capacity
                registered
                createdAt
                shipSize
                routineShipID
                updatedAt
              }
              nextToken
            }
            userName
            startTime
            endTime
            startDate
            endDate
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListRoutineShipsQuery>response.data.listRoutineShips;
  }
  async GetShip(id: string): Promise<GetShipQuery> {
    const statement = `query GetShip($id: ID!) {
        getShip(id: $id) {
          __typename
          id
          title
          userName
          capacity
          registered
          crews {
            __typename
            items {
              __typename
              id
              shipID
              userName
              ship {
                __typename
                id
                title
                userName
                capacity
                registered
                createdAt
                shipSize
                routineShipID
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          shipSize
          routineShipID
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetShipQuery>response.data.getShip;
  }
  async ListShips(
    filter?: ModelShipFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListShipsQuery> {
    const statement = `query ListShips($filter: ModelShipFilterInput, $limit: Int, $nextToken: String) {
        listShips(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            title
            userName
            capacity
            registered
            crews {
              __typename
              items {
                __typename
                id
                shipID
                userName
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            shipSize
            routineShipID
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListShipsQuery>response.data.listShips;
  }
  async GetCrew(id: string): Promise<GetCrewQuery> {
    const statement = `query GetCrew($id: ID!) {
        getCrew(id: $id) {
          __typename
          id
          shipID
          userName
          ship {
            __typename
            id
            title
            userName
            capacity
            registered
            crews {
              __typename
              items {
                __typename
                id
                shipID
                userName
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            shipSize
            routineShipID
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetCrewQuery>response.data.getCrew;
  }
  async ListCrews(
    filter?: ModelCrewFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListCrewsQuery> {
    const statement = `query ListCrews($filter: ModelCrewFilterInput, $limit: Int, $nextToken: String) {
        listCrews(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            shipID
            userName
            ship {
              __typename
              id
              title
              userName
              capacity
              registered
              crews {
                __typename
                nextToken
              }
              createdAt
              shipSize
              routineShipID
              updatedAt
            }
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListCrewsQuery>response.data.listCrews;
  }
  OnCreateTaskListener: Observable<
    SubscriptionResponse<OnCreateTaskSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateTask {
        onCreateTask {
          __typename
          id
          title
          description
          status
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateTaskSubscription>>;

  OnUpdateTaskListener: Observable<
    SubscriptionResponse<OnUpdateTaskSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateTask {
        onUpdateTask {
          __typename
          id
          title
          description
          status
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateTaskSubscription>>;

  OnDeleteTaskListener: Observable<
    SubscriptionResponse<OnDeleteTaskSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteTask {
        onDeleteTask {
          __typename
          id
          title
          description
          status
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteTaskSubscription>>;

  OnCreatePrivateNoteListener: Observable<
    SubscriptionResponse<OnCreatePrivateNoteSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreatePrivateNote($owner: String!) {
        onCreatePrivateNote(owner: $owner) {
          __typename
          id
          content
          createdAt
          updatedAt
          owner
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreatePrivateNoteSubscription>>;

  OnUpdatePrivateNoteListener: Observable<
    SubscriptionResponse<OnUpdatePrivateNoteSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdatePrivateNote($owner: String!) {
        onUpdatePrivateNote(owner: $owner) {
          __typename
          id
          content
          createdAt
          updatedAt
          owner
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdatePrivateNoteSubscription>>;

  OnDeletePrivateNoteListener: Observable<
    SubscriptionResponse<OnDeletePrivateNoteSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeletePrivateNote($owner: String!) {
        onDeletePrivateNote(owner: $owner) {
          __typename
          id
          content
          createdAt
          updatedAt
          owner
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeletePrivateNoteSubscription>>;

  OnCreateBlogListener: Observable<
    SubscriptionResponse<OnCreateBlogSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateBlog {
        onCreateBlog {
          __typename
          id
          name
          posts {
            __typename
            items {
              __typename
              id
              title
              blogID
              blog {
                __typename
                id
                name
                createdAt
                updatedAt
              }
              comments {
                __typename
                nextToken
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateBlogSubscription>>;

  OnUpdateBlogListener: Observable<
    SubscriptionResponse<OnUpdateBlogSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateBlog {
        onUpdateBlog {
          __typename
          id
          name
          posts {
            __typename
            items {
              __typename
              id
              title
              blogID
              blog {
                __typename
                id
                name
                createdAt
                updatedAt
              }
              comments {
                __typename
                nextToken
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateBlogSubscription>>;

  OnDeleteBlogListener: Observable<
    SubscriptionResponse<OnDeleteBlogSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteBlog {
        onDeleteBlog {
          __typename
          id
          name
          posts {
            __typename
            items {
              __typename
              id
              title
              blogID
              blog {
                __typename
                id
                name
                createdAt
                updatedAt
              }
              comments {
                __typename
                nextToken
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteBlogSubscription>>;

  OnCreatePostListener: Observable<
    SubscriptionResponse<OnCreatePostSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreatePost {
        onCreatePost {
          __typename
          id
          title
          blogID
          blog {
            __typename
            id
            name
            posts {
              __typename
              items {
                __typename
                id
                title
                blogID
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          comments {
            __typename
            items {
              __typename
              id
              userId
              postID
              post {
                __typename
                id
                title
                blogID
                createdAt
                updatedAt
              }
              content
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreatePostSubscription>>;

  OnUpdatePostListener: Observable<
    SubscriptionResponse<OnUpdatePostSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdatePost {
        onUpdatePost {
          __typename
          id
          title
          blogID
          blog {
            __typename
            id
            name
            posts {
              __typename
              items {
                __typename
                id
                title
                blogID
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          comments {
            __typename
            items {
              __typename
              id
              userId
              postID
              post {
                __typename
                id
                title
                blogID
                createdAt
                updatedAt
              }
              content
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdatePostSubscription>>;

  OnDeletePostListener: Observable<
    SubscriptionResponse<OnDeletePostSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeletePost {
        onDeletePost {
          __typename
          id
          title
          blogID
          blog {
            __typename
            id
            name
            posts {
              __typename
              items {
                __typename
                id
                title
                blogID
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          comments {
            __typename
            items {
              __typename
              id
              userId
              postID
              post {
                __typename
                id
                title
                blogID
                createdAt
                updatedAt
              }
              content
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeletePostSubscription>>;

  OnCreateCommentListener: Observable<
    SubscriptionResponse<OnCreateCommentSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateComment {
        onCreateComment {
          __typename
          id
          userId
          postID
          post {
            __typename
            id
            title
            blogID
            blog {
              __typename
              id
              name
              posts {
                __typename
                nextToken
              }
              createdAt
              updatedAt
            }
            comments {
              __typename
              items {
                __typename
                id
                userId
                postID
                content
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          content
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateCommentSubscription>>;

  OnUpdateCommentListener: Observable<
    SubscriptionResponse<OnUpdateCommentSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateComment {
        onUpdateComment {
          __typename
          id
          userId
          postID
          post {
            __typename
            id
            title
            blogID
            blog {
              __typename
              id
              name
              posts {
                __typename
                nextToken
              }
              createdAt
              updatedAt
            }
            comments {
              __typename
              items {
                __typename
                id
                userId
                postID
                content
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          content
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateCommentSubscription>>;

  OnDeleteCommentListener: Observable<
    SubscriptionResponse<OnDeleteCommentSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteComment {
        onDeleteComment {
          __typename
          id
          userId
          postID
          post {
            __typename
            id
            title
            blogID
            blog {
              __typename
              id
              name
              posts {
                __typename
                nextToken
              }
              createdAt
              updatedAt
            }
            comments {
              __typename
              items {
                __typename
                id
                userId
                postID
                content
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            updatedAt
          }
          content
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteCommentSubscription>>;

  OnCreateRoutineShipListener: Observable<
    SubscriptionResponse<OnCreateRoutineShipSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateRoutineShip {
        onCreateRoutineShip {
          __typename
          id
          ship {
            __typename
            items {
              __typename
              id
              title
              userName
              capacity
              registered
              crews {
                __typename
                nextToken
              }
              createdAt
              shipSize
              routineShipID
              updatedAt
            }
            nextToken
          }
          userName
          startTime
          endTime
          startDate
          endDate
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateRoutineShipSubscription>>;

  OnUpdateRoutineShipListener: Observable<
    SubscriptionResponse<OnUpdateRoutineShipSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateRoutineShip {
        onUpdateRoutineShip {
          __typename
          id
          ship {
            __typename
            items {
              __typename
              id
              title
              userName
              capacity
              registered
              crews {
                __typename
                nextToken
              }
              createdAt
              shipSize
              routineShipID
              updatedAt
            }
            nextToken
          }
          userName
          startTime
          endTime
          startDate
          endDate
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateRoutineShipSubscription>>;

  OnDeleteRoutineShipListener: Observable<
    SubscriptionResponse<OnDeleteRoutineShipSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteRoutineShip {
        onDeleteRoutineShip {
          __typename
          id
          ship {
            __typename
            items {
              __typename
              id
              title
              userName
              capacity
              registered
              crews {
                __typename
                nextToken
              }
              createdAt
              shipSize
              routineShipID
              updatedAt
            }
            nextToken
          }
          userName
          startTime
          endTime
          startDate
          endDate
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteRoutineShipSubscription>>;

  OnCreateShipListener: Observable<
    SubscriptionResponse<OnCreateShipSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateShip {
        onCreateShip {
          __typename
          id
          title
          userName
          capacity
          registered
          crews {
            __typename
            items {
              __typename
              id
              shipID
              userName
              ship {
                __typename
                id
                title
                userName
                capacity
                registered
                createdAt
                shipSize
                routineShipID
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          shipSize
          routineShipID
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateShipSubscription>>;

  OnUpdateShipListener: Observable<
    SubscriptionResponse<OnUpdateShipSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateShip {
        onUpdateShip {
          __typename
          id
          title
          userName
          capacity
          registered
          crews {
            __typename
            items {
              __typename
              id
              shipID
              userName
              ship {
                __typename
                id
                title
                userName
                capacity
                registered
                createdAt
                shipSize
                routineShipID
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          shipSize
          routineShipID
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateShipSubscription>>;

  OnDeleteShipListener: Observable<
    SubscriptionResponse<OnDeleteShipSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteShip {
        onDeleteShip {
          __typename
          id
          title
          userName
          capacity
          registered
          crews {
            __typename
            items {
              __typename
              id
              shipID
              userName
              ship {
                __typename
                id
                title
                userName
                capacity
                registered
                createdAt
                shipSize
                routineShipID
                updatedAt
              }
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          shipSize
          routineShipID
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteShipSubscription>>;

  OnCreateCrewListener: Observable<
    SubscriptionResponse<OnCreateCrewSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateCrew {
        onCreateCrew {
          __typename
          id
          shipID
          userName
          ship {
            __typename
            id
            title
            userName
            capacity
            registered
            crews {
              __typename
              items {
                __typename
                id
                shipID
                userName
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            shipSize
            routineShipID
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateCrewSubscription>>;

  OnUpdateCrewListener: Observable<
    SubscriptionResponse<OnUpdateCrewSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateCrew {
        onUpdateCrew {
          __typename
          id
          shipID
          userName
          ship {
            __typename
            id
            title
            userName
            capacity
            registered
            crews {
              __typename
              items {
                __typename
                id
                shipID
                userName
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            shipSize
            routineShipID
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateCrewSubscription>>;

  OnDeleteCrewListener: Observable<
    SubscriptionResponse<OnDeleteCrewSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteCrew {
        onDeleteCrew {
          __typename
          id
          shipID
          userName
          ship {
            __typename
            id
            title
            userName
            capacity
            registered
            crews {
              __typename
              items {
                __typename
                id
                shipID
                userName
                createdAt
                updatedAt
              }
              nextToken
            }
            createdAt
            shipSize
            routineShipID
            updatedAt
          }
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteCrewSubscription>>;
}
