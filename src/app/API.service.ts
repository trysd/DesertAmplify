/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type CreateOctopusInput = {
  id?: string | null;
  date: string;
  type: number;
  createdAt?: number | null;
};

export type ModelOctopusConditionInput = {
  date?: ModelStringInput | null;
  type?: ModelIntInput | null;
  createdAt?: ModelIntInput | null;
  and?: Array<ModelOctopusConditionInput | null> | null;
  or?: Array<ModelOctopusConditionInput | null> | null;
  not?: ModelOctopusConditionInput | null;
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

export type UpdateOctopusInput = {
  id: string;
  date?: string | null;
  type?: number | null;
  createdAt?: number | null;
  expectedVersion: number;
};

export type DeleteOctopusInput = {
  id?: string | null;
  expectedVersion: number;
};

export type ModelOctopusFilterInput = {
  id?: ModelIDInput | null;
  date?: ModelStringInput | null;
  type?: ModelIntInput | null;
  createdAt?: ModelIntInput | null;
  and?: Array<ModelOctopusFilterInput | null> | null;
  or?: Array<ModelOctopusFilterInput | null> | null;
  not?: ModelOctopusFilterInput | null;
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

export type ModelOctopusByDateByTypeByCreatedAtCompositeKeyConditionInput = {
  eq?: ModelOctopusByDateByTypeByCreatedAtCompositeKeyInput | null;
  le?: ModelOctopusByDateByTypeByCreatedAtCompositeKeyInput | null;
  lt?: ModelOctopusByDateByTypeByCreatedAtCompositeKeyInput | null;
  ge?: ModelOctopusByDateByTypeByCreatedAtCompositeKeyInput | null;
  gt?: ModelOctopusByDateByTypeByCreatedAtCompositeKeyInput | null;
  between?: Array<ModelOctopusByDateByTypeByCreatedAtCompositeKeyInput | null> | null;
  beginsWith?: ModelOctopusByDateByTypeByCreatedAtCompositeKeyInput | null;
};

export type ModelOctopusByDateByTypeByCreatedAtCompositeKeyInput = {
  type?: number | null;
  createdAt?: number | null;
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC"
}

export type CreateOctopusMutation = {
  __typename: "Octopus";
  id: string;
  date: string;
  type: number;
  createdAt: number | null;
  updatedAt: string;
  version: number;
  user_id: string | null;
};

export type UpdateOctopusMutation = {
  __typename: "Octopus";
  id: string;
  date: string;
  type: number;
  createdAt: number | null;
  updatedAt: string;
  version: number;
  user_id: string | null;
};

export type DeleteOctopusMutation = {
  __typename: "Octopus";
  id: string;
  date: string;
  type: number;
  createdAt: number | null;
  updatedAt: string;
  version: number;
  user_id: string | null;
};

export type GetOctopusQuery = {
  __typename: "Octopus";
  id: string;
  date: string;
  type: number;
  createdAt: number | null;
  updatedAt: string;
  version: number;
  user_id: string | null;
};

export type ListOctopussQuery = {
  __typename: "ModelOctopusConnection";
  items: Array<{
    __typename: "Octopus";
    id: string;
    date: string;
    type: number;
    createdAt: number | null;
    updatedAt: string;
    version: number;
    user_id: string | null;
  } | null> | null;
  nextToken: string | null;
};

export type ItemsByDateByTypeByCreatedAtQuery = {
  __typename: "ModelOctopusConnection";
  items: Array<{
    __typename: "Octopus";
    id: string;
    date: string;
    type: number;
    createdAt: number | null;
    updatedAt: string;
    version: number;
    user_id: string | null;
  } | null> | null;
  nextToken: string | null;
};

export type OnCreateOctopusSubscription = {
  __typename: "Octopus";
  id: string;
  date: string;
  type: number;
  createdAt: number | null;
  updatedAt: string;
  version: number;
  user_id: string | null;
};

export type OnUpdateOctopusSubscription = {
  __typename: "Octopus";
  id: string;
  date: string;
  type: number;
  createdAt: number | null;
  updatedAt: string;
  version: number;
  user_id: string | null;
};

export type OnDeleteOctopusSubscription = {
  __typename: "Octopus";
  id: string;
  date: string;
  type: number;
  createdAt: number | null;
  updatedAt: string;
  version: number;
  user_id: string | null;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateOctopus(
    input: CreateOctopusInput,
    condition?: ModelOctopusConditionInput
  ): Promise<CreateOctopusMutation> {
    const statement = `mutation CreateOctopus($input: CreateOctopusInput!, $condition: ModelOctopusConditionInput) {
        createOctopus(input: $input, condition: $condition) {
          __typename
          id
          date
          type
          createdAt
          updatedAt
          version
          user_id
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
    return <CreateOctopusMutation>response.data.createOctopus;
  }
  async UpdateOctopus(
    input: UpdateOctopusInput,
    condition?: ModelOctopusConditionInput
  ): Promise<UpdateOctopusMutation> {
    const statement = `mutation UpdateOctopus($input: UpdateOctopusInput!, $condition: ModelOctopusConditionInput) {
        updateOctopus(input: $input, condition: $condition) {
          __typename
          id
          date
          type
          createdAt
          updatedAt
          version
          user_id
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
    return <UpdateOctopusMutation>response.data.updateOctopus;
  }
  async DeleteOctopus(
    input: DeleteOctopusInput,
    condition?: ModelOctopusConditionInput
  ): Promise<DeleteOctopusMutation> {
    const statement = `mutation DeleteOctopus($input: DeleteOctopusInput!, $condition: ModelOctopusConditionInput) {
        deleteOctopus(input: $input, condition: $condition) {
          __typename
          id
          date
          type
          createdAt
          updatedAt
          version
          user_id
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
    return <DeleteOctopusMutation>response.data.deleteOctopus;
  }
  async GetOctopus(id: string): Promise<GetOctopusQuery> {
    const statement = `query GetOctopus($id: ID!) {
        getOctopus(id: $id) {
          __typename
          id
          date
          type
          createdAt
          updatedAt
          version
          user_id
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetOctopusQuery>response.data.getOctopus;
  }
  async ListOctopuss(
    filter?: ModelOctopusFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListOctopussQuery> {
    const statement = `query ListOctopuss($filter: ModelOctopusFilterInput, $limit: Int, $nextToken: String) {
        listOctopuss(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            date
            type
            createdAt
            updatedAt
            version
            user_id
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
    return <ListOctopussQuery>response.data.listOctopuss;
  }
  async ItemsByDateByTypeByCreatedAt(
    date?: string,
    typeCreatedAt?: ModelOctopusByDateByTypeByCreatedAtCompositeKeyConditionInput,
    sortDirection?: ModelSortDirection,
    filter?: ModelOctopusFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ItemsByDateByTypeByCreatedAtQuery> {
    const statement = `query ItemsByDateByTypeByCreatedAt($date: AWSDate, $typeCreatedAt: ModelOctopusByDateByTypeByCreatedAtCompositeKeyConditionInput, $sortDirection: ModelSortDirection, $filter: ModelOctopusFilterInput, $limit: Int, $nextToken: String) {
        itemsByDateByTypeByCreatedAt(date: $date, typeCreatedAt: $typeCreatedAt, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            date
            type
            createdAt
            updatedAt
            version
            user_id
          }
          nextToken
        }
      }`;
    const gqlAPIServiceArguments: any = {};
    if (date) {
      gqlAPIServiceArguments.date = date;
    }
    if (typeCreatedAt) {
      gqlAPIServiceArguments.typeCreatedAt = typeCreatedAt;
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
    return <ItemsByDateByTypeByCreatedAtQuery>(
      response.data.itemsByDateByTypeByCreatedAt
    );
  }
  OnCreateOctopusListener: Observable<
    SubscriptionResponse<OnCreateOctopusSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateOctopus {
        onCreateOctopus {
          __typename
          id
          date
          type
          createdAt
          updatedAt
          version
          user_id
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateOctopusSubscription>>;

  OnUpdateOctopusListener: Observable<
    SubscriptionResponse<OnUpdateOctopusSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateOctopus {
        onUpdateOctopus {
          __typename
          id
          date
          type
          createdAt
          updatedAt
          version
          user_id
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateOctopusSubscription>>;

  OnDeleteOctopusListener: Observable<
    SubscriptionResponse<OnDeleteOctopusSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteOctopus {
        onDeleteOctopus {
          __typename
          id
          date
          type
          createdAt
          updatedAt
          version
          user_id
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteOctopusSubscription>>;
}
