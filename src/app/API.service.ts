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
};

export type ModelOctopusConditionInput = {
  date?: ModelStringInput | null;
  type?: ModelIntInput | null;
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
  expectedVersion: number;
};

export type DeleteOctopusInput = {
  id?: string | null;
  expectedVersion: number;
};

export type CreateLegInput = {
  id?: string | null;
  name: string;
};

export type ModelLegConditionInput = {
  name?: ModelStringInput | null;
  and?: Array<ModelLegConditionInput | null> | null;
  or?: Array<ModelLegConditionInput | null> | null;
  not?: ModelLegConditionInput | null;
};

export type UpdateLegInput = {
  id: string;
  name?: string | null;
};

export type DeleteLegInput = {
  id?: string | null;
};

export type ModelOctopusFilterInput = {
  id?: ModelIDInput | null;
  date?: ModelStringInput | null;
  type?: ModelIntInput | null;
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

export type ModelLegFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  and?: Array<ModelLegFilterInput | null> | null;
  or?: Array<ModelLegFilterInput | null> | null;
  not?: ModelLegFilterInput | null;
};

export type ModelStringKeyConditionInput = {
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
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
  createdAt: string;
  updatedAt: string;
  version: number;
  user_id: string | null;
};

export type UpdateOctopusMutation = {
  __typename: "Octopus";
  id: string;
  date: string;
  type: number;
  createdAt: string;
  updatedAt: string;
  version: number;
  user_id: string | null;
};

export type DeleteOctopusMutation = {
  __typename: "Octopus";
  id: string;
  date: string;
  type: number;
  createdAt: string;
  updatedAt: string;
  version: number;
  user_id: string | null;
};

export type CreateLegMutation = {
  __typename: "Leg";
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateLegMutation = {
  __typename: "Leg";
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteLegMutation = {
  __typename: "Leg";
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type GetOctopusQuery = {
  __typename: "Octopus";
  id: string;
  date: string;
  type: number;
  createdAt: string;
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
    createdAt: string;
    updatedAt: string;
    version: number;
    user_id: string | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetLegQuery = {
  __typename: "Leg";
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type ListLegsQuery = {
  __typename: "ModelLegConnection";
  items: Array<{
    __typename: "Leg";
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type ItemsByExampleQuery = {
  __typename: "ModelOctopusConnection";
  items: Array<{
    __typename: "Octopus";
    id: string;
    date: string;
    type: number;
    createdAt: string;
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
  createdAt: string;
  updatedAt: string;
  version: number;
  user_id: string | null;
};

export type OnUpdateOctopusSubscription = {
  __typename: "Octopus";
  id: string;
  date: string;
  type: number;
  createdAt: string;
  updatedAt: string;
  version: number;
  user_id: string | null;
};

export type OnDeleteOctopusSubscription = {
  __typename: "Octopus";
  id: string;
  date: string;
  type: number;
  createdAt: string;
  updatedAt: string;
  version: number;
  user_id: string | null;
};

export type OnCreateLegSubscription = {
  __typename: "Leg";
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateLegSubscription = {
  __typename: "Leg";
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteLegSubscription = {
  __typename: "Leg";
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
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
  async CreateLeg(
    input: CreateLegInput,
    condition?: ModelLegConditionInput
  ): Promise<CreateLegMutation> {
    const statement = `mutation CreateLeg($input: CreateLegInput!, $condition: ModelLegConditionInput) {
        createLeg(input: $input, condition: $condition) {
          __typename
          id
          name
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
    return <CreateLegMutation>response.data.createLeg;
  }
  async UpdateLeg(
    input: UpdateLegInput,
    condition?: ModelLegConditionInput
  ): Promise<UpdateLegMutation> {
    const statement = `mutation UpdateLeg($input: UpdateLegInput!, $condition: ModelLegConditionInput) {
        updateLeg(input: $input, condition: $condition) {
          __typename
          id
          name
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
    return <UpdateLegMutation>response.data.updateLeg;
  }
  async DeleteLeg(
    input: DeleteLegInput,
    condition?: ModelLegConditionInput
  ): Promise<DeleteLegMutation> {
    const statement = `mutation DeleteLeg($input: DeleteLegInput!, $condition: ModelLegConditionInput) {
        deleteLeg(input: $input, condition: $condition) {
          __typename
          id
          name
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
    return <DeleteLegMutation>response.data.deleteLeg;
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
  async GetLeg(id: string): Promise<GetLegQuery> {
    const statement = `query GetLeg($id: ID!) {
        getLeg(id: $id) {
          __typename
          id
          name
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
    return <GetLegQuery>response.data.getLeg;
  }
  async ListLegs(
    filter?: ModelLegFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListLegsQuery> {
    const statement = `query ListLegs($filter: ModelLegFilterInput, $limit: Int, $nextToken: String) {
        listLegs(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
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
    return <ListLegsQuery>response.data.listLegs;
  }
  async ItemsByExample(
    type?: number,
    date?: ModelStringKeyConditionInput,
    sortDirection?: ModelSortDirection,
    filter?: ModelOctopusFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ItemsByExampleQuery> {
    const statement = `query ItemsByExample($type: Int, $date: ModelStringKeyConditionInput, $sortDirection: ModelSortDirection, $filter: ModelOctopusFilterInput, $limit: Int, $nextToken: String) {
        itemsByExample(type: $type, date: $date, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
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
    if (type) {
      gqlAPIServiceArguments.type = type;
    }
    if (date) {
      gqlAPIServiceArguments.date = date;
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
    return <ItemsByExampleQuery>response.data.itemsByExample;
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

  OnCreateLegListener: Observable<
    SubscriptionResponse<OnCreateLegSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateLeg {
        onCreateLeg {
          __typename
          id
          name
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateLegSubscription>>;

  OnUpdateLegListener: Observable<
    SubscriptionResponse<OnUpdateLegSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateLeg {
        onUpdateLeg {
          __typename
          id
          name
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateLegSubscription>>;

  OnDeleteLegListener: Observable<
    SubscriptionResponse<OnDeleteLegSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteLeg {
        onDeleteLeg {
          __typename
          id
          name
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteLegSubscription>>;
}
