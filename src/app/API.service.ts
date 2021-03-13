/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type CreateTestInput = {
  id?: string | null;
  a: string;
  b?: BInput | null;
  c: Array<string>;
  d: string;
};

export type BInput = {
  name?: string | null;
  age?: number | null;
  list: Array<string | null>;
};

export type ModeltestConditionInput = {
  a?: ModelStringInput | null;
  c?: ModelStringInput | null;
  d?: ModelStringInput | null;
  and?: Array<ModeltestConditionInput | null> | null;
  or?: Array<ModeltestConditionInput | null> | null;
  not?: ModeltestConditionInput | null;
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

export type UpdateTestInput = {
  id: string;
  a?: string | null;
  b?: BInput | null;
  c?: Array<string> | null;
  d?: string | null;
};

export type DeleteTestInput = {
  id: string;
};

export type ModeltestFilterInput = {
  id?: ModelIDInput | null;
  a?: ModelStringInput | null;
  c?: ModelStringInput | null;
  d?: ModelStringInput | null;
  and?: Array<ModeltestFilterInput | null> | null;
  or?: Array<ModeltestFilterInput | null> | null;
  not?: ModeltestFilterInput | null;
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

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC"
}

export type ModelStringKeyConditionInput = {
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
};

export type CreateTestMutation = {
  __typename: "test";
  id: string;
  a: string;
  b: {
    __typename: "B";
    name: string | null;
    age: number | null;
    list: Array<string | null>;
  } | null;
  c: Array<string>;
  d: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateTestMutation = {
  __typename: "test";
  id: string;
  a: string;
  b: {
    __typename: "B";
    name: string | null;
    age: number | null;
    list: Array<string | null>;
  } | null;
  c: Array<string>;
  d: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteTestMutation = {
  __typename: "test";
  id: string;
  a: string;
  b: {
    __typename: "B";
    name: string | null;
    age: number | null;
    list: Array<string | null>;
  } | null;
  c: Array<string>;
  d: string;
  createdAt: string;
  updatedAt: string;
};

export type GetTestQuery = {
  __typename: "test";
  id: string;
  a: string;
  b: {
    __typename: "B";
    name: string | null;
    age: number | null;
    list: Array<string | null>;
  } | null;
  c: Array<string>;
  d: string;
  createdAt: string;
  updatedAt: string;
};

export type ListTestsQuery = {
  __typename: "ModeltestConnection";
  items: Array<{
    __typename: "test";
    id: string;
    a: string;
    b: {
      __typename: "B";
      name: string | null;
      age: number | null;
      list: Array<string | null>;
    } | null;
    c: Array<string>;
    d: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type QdddQuery = {
  __typename: "ModeltestConnection";
  items: Array<{
    __typename: "test";
    id: string;
    a: string;
    b: {
      __typename: "B";
      name: string | null;
      age: number | null;
      list: Array<string | null>;
    } | null;
    c: Array<string>;
    d: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type OnCreateTestSubscription = {
  __typename: "test";
  id: string;
  a: string;
  b: {
    __typename: "B";
    name: string | null;
    age: number | null;
    list: Array<string | null>;
  } | null;
  c: Array<string>;
  d: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateTestSubscription = {
  __typename: "test";
  id: string;
  a: string;
  b: {
    __typename: "B";
    name: string | null;
    age: number | null;
    list: Array<string | null>;
  } | null;
  c: Array<string>;
  d: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteTestSubscription = {
  __typename: "test";
  id: string;
  a: string;
  b: {
    __typename: "B";
    name: string | null;
    age: number | null;
    list: Array<string | null>;
  } | null;
  c: Array<string>;
  d: string;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateTest(
    input: CreateTestInput,
    condition?: ModeltestConditionInput
  ): Promise<CreateTestMutation> {
    const statement = `mutation CreateTest($input: CreateTestInput!, $condition: ModeltestConditionInput) {
        createTest(input: $input, condition: $condition) {
          __typename
          id
          a
          b {
            __typename
            name
            age
            list
          }
          c
          d
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
    return <CreateTestMutation>response.data.createTest;
  }
  async UpdateTest(
    input: UpdateTestInput,
    condition?: ModeltestConditionInput
  ): Promise<UpdateTestMutation> {
    const statement = `mutation UpdateTest($input: UpdateTestInput!, $condition: ModeltestConditionInput) {
        updateTest(input: $input, condition: $condition) {
          __typename
          id
          a
          b {
            __typename
            name
            age
            list
          }
          c
          d
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
    return <UpdateTestMutation>response.data.updateTest;
  }
  async DeleteTest(
    input: DeleteTestInput,
    condition?: ModeltestConditionInput
  ): Promise<DeleteTestMutation> {
    const statement = `mutation DeleteTest($input: DeleteTestInput!, $condition: ModeltestConditionInput) {
        deleteTest(input: $input, condition: $condition) {
          __typename
          id
          a
          b {
            __typename
            name
            age
            list
          }
          c
          d
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
    return <DeleteTestMutation>response.data.deleteTest;
  }
  async GetTest(id: string): Promise<GetTestQuery> {
    const statement = `query GetTest($id: ID!) {
        getTest(id: $id) {
          __typename
          id
          a
          b {
            __typename
            name
            age
            list
          }
          c
          d
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
    return <GetTestQuery>response.data.getTest;
  }
  async ListTests(
    id?: string,
    filter?: ModeltestFilterInput,
    limit?: number,
    nextToken?: string,
    sortDirection?: ModelSortDirection
  ): Promise<ListTestsQuery> {
    const statement = `query ListTests($id: ID, $filter: ModeltestFilterInput, $limit: Int, $nextToken: String, $sortDirection: ModelSortDirection) {
        listTests(id: $id, filter: $filter, limit: $limit, nextToken: $nextToken, sortDirection: $sortDirection) {
          __typename
          items {
            __typename
            id
            a
            b {
              __typename
              name
              age
              list
            }
            c
            d
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (id) {
      gqlAPIServiceArguments.id = id;
    }
    if (filter) {
      gqlAPIServiceArguments.filter = filter;
    }
    if (limit) {
      gqlAPIServiceArguments.limit = limit;
    }
    if (nextToken) {
      gqlAPIServiceArguments.nextToken = nextToken;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <ListTestsQuery>response.data.listTests;
  }
  async Qddd(
    a?: string,
    d?: ModelStringKeyConditionInput,
    sortDirection?: ModelSortDirection,
    filter?: ModeltestFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<QdddQuery> {
    const statement = `query Qddd($a: String, $d: ModelStringKeyConditionInput, $sortDirection: ModelSortDirection, $filter: ModeltestFilterInput, $limit: Int, $nextToken: String) {
        Qddd(a: $a, d: $d, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            a
            b {
              __typename
              name
              age
              list
            }
            c
            d
            createdAt
            updatedAt
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (a) {
      gqlAPIServiceArguments.a = a;
    }
    if (d) {
      gqlAPIServiceArguments.d = d;
    }
    if (sortDirection) {
      gqlAPIServiceArguments.sortDirection = sortDirection;
    }
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
    return <QdddQuery>response.data.Qddd;
  }
  OnCreateTestListener: Observable<
    SubscriptionResponse<OnCreateTestSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateTest {
        onCreateTest {
          __typename
          id
          a
          b {
            __typename
            name
            age
            list
          }
          c
          d
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateTestSubscription>>;

  OnUpdateTestListener: Observable<
    SubscriptionResponse<OnUpdateTestSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateTest {
        onUpdateTest {
          __typename
          id
          a
          b {
            __typename
            name
            age
            list
          }
          c
          d
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateTestSubscription>>;

  OnDeleteTestListener: Observable<
    SubscriptionResponse<OnDeleteTestSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteTest {
        onDeleteTest {
          __typename
          id
          a
          b {
            __typename
            name
            age
            list
          }
          c
          d
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteTestSubscription>>;
}
