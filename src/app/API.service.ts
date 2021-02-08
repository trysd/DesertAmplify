/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.
import { Injectable } from "@angular/core";
import API, { graphqlOperation, GraphQLResult } from "@aws-amplify/api-graphql";
import { Observable } from "zen-observable-ts";

export interface SubscriptionResponse<T> {
  value: GraphQLResult<T>;
}

export type testInput = {
  arg: string;
};

export type CreateCannonInput = {
  id?: string | null;
  type: number;
  date: string;
};

export type ModelCannonConditionInput = {
  type?: ModelIntInput | null;
  date?: ModelStringInput | null;
  and?: Array<ModelCannonConditionInput | null> | null;
  or?: Array<ModelCannonConditionInput | null> | null;
  not?: ModelCannonConditionInput | null;
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

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type UpdateCannonInput = {
  id: string;
  type?: number | null;
  date?: string | null;
  expectedVersion: number;
};

export type DeleteCannonInput = {
  id?: string | null;
  expectedVersion: number;
};

export type CreateTargetsInput = {
  id?: string | null;
  type: number;
  target: string;
  targetId: string;
};

export type ModelTargetsConditionInput = {
  type?: ModelIntInput | null;
  target?: ModelStringInput | null;
  targetId?: ModelIDInput | null;
  and?: Array<ModelTargetsConditionInput | null> | null;
  or?: Array<ModelTargetsConditionInput | null> | null;
  not?: ModelTargetsConditionInput | null;
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

export type UpdateTargetsInput = {
  id: string;
  type?: number | null;
  target?: string | null;
  targetId?: string | null;
};

export type DeleteTargetsInput = {
  id?: string | null;
};

export type CreateTargetAAAInput = {
  id?: string | null;
  type: number;
  name: string;
};

export type ModelTargetAAAConditionInput = {
  type?: ModelIntInput | null;
  name?: ModelStringInput | null;
  and?: Array<ModelTargetAAAConditionInput | null> | null;
  or?: Array<ModelTargetAAAConditionInput | null> | null;
  not?: ModelTargetAAAConditionInput | null;
};

export type UpdateTargetAAAInput = {
  id: string;
  type?: number | null;
  name?: string | null;
};

export type DeleteTargetAAAInput = {
  id?: string | null;
};

export type CreateTargetBBBInput = {
  id?: string | null;
  type: number;
  name: string;
};

export type ModelTargetBBBConditionInput = {
  type?: ModelIntInput | null;
  name?: ModelStringInput | null;
  and?: Array<ModelTargetBBBConditionInput | null> | null;
  or?: Array<ModelTargetBBBConditionInput | null> | null;
  not?: ModelTargetBBBConditionInput | null;
};

export type UpdateTargetBBBInput = {
  id: string;
  type?: number | null;
  name?: string | null;
};

export type DeleteTargetBBBInput = {
  id?: string | null;
};

export type CreateTodoInput = {
  id?: string | null;
  name?: string | null;
  memo?: string | null;
};

export type ModeltodoConditionInput = {
  name?: ModelStringInput | null;
  memo?: ModelStringInput | null;
  and?: Array<ModeltodoConditionInput | null> | null;
  or?: Array<ModeltodoConditionInput | null> | null;
  not?: ModeltodoConditionInput | null;
};

export type UpdateTodoInput = {
  id: string;
  name?: string | null;
  memo?: string | null;
};

export type DeleteTodoInput = {
  id?: string | null;
};

export type ModelCannonFilterInput = {
  id?: ModelIDInput | null;
  type?: ModelIntInput | null;
  date?: ModelStringInput | null;
  and?: Array<ModelCannonFilterInput | null> | null;
  or?: Array<ModelCannonFilterInput | null> | null;
  not?: ModelCannonFilterInput | null;
};

export type ModelTargetsFilterInput = {
  id?: ModelIDInput | null;
  type?: ModelIntInput | null;
  target?: ModelStringInput | null;
  targetId?: ModelIDInput | null;
  and?: Array<ModelTargetsFilterInput | null> | null;
  or?: Array<ModelTargetsFilterInput | null> | null;
  not?: ModelTargetsFilterInput | null;
};

export type ModelTargetAAAFilterInput = {
  id?: ModelIDInput | null;
  type?: ModelIntInput | null;
  name?: ModelStringInput | null;
  and?: Array<ModelTargetAAAFilterInput | null> | null;
  or?: Array<ModelTargetAAAFilterInput | null> | null;
  not?: ModelTargetAAAFilterInput | null;
};

export type ModelTargetBBBFilterInput = {
  id?: ModelIDInput | null;
  type?: ModelIntInput | null;
  name?: ModelStringInput | null;
  and?: Array<ModelTargetBBBFilterInput | null> | null;
  or?: Array<ModelTargetBBBFilterInput | null> | null;
  not?: ModelTargetBBBFilterInput | null;
};

export type ModeltodoFilterInput = {
  id?: ModelIDInput | null;
  name?: ModelStringInput | null;
  memo?: ModelStringInput | null;
  and?: Array<ModeltodoFilterInput | null> | null;
  or?: Array<ModeltodoFilterInput | null> | null;
  not?: ModeltodoFilterInput | null;
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

export type CreateTestMutation = {
  __typename: "response";
  statusCode: number | null;
  body: string | null;
  header: string | null;
};

export type EditTestMutation = {
  __typename: "response";
  statusCode: number | null;
  body: string | null;
  header: string | null;
};

export type DeleteTestMutation = {
  __typename: "response";
  statusCode: number | null;
  body: string | null;
  header: string | null;
};

export type CreateCannonMutation = {
  __typename: "Cannon";
  id: string;
  type: number;
  date: string;
  createdAt: string;
  updatedAt: string;
  version: number;
  user_id: string | null;
};

export type UpdateCannonMutation = {
  __typename: "Cannon";
  id: string;
  type: number;
  date: string;
  createdAt: string;
  updatedAt: string;
  version: number;
  user_id: string | null;
};

export type DeleteCannonMutation = {
  __typename: "Cannon";
  id: string;
  type: number;
  date: string;
  createdAt: string;
  updatedAt: string;
  version: number;
  user_id: string | null;
};

export type CreateTargetsMutation = {
  __typename: "Targets";
  id: string;
  type: number;
  target: string;
  targetId: string;
  createdAt: string;
  updatedAt: string;
  user_id: string | null;
};

export type UpdateTargetsMutation = {
  __typename: "Targets";
  id: string;
  type: number;
  target: string;
  targetId: string;
  createdAt: string;
  updatedAt: string;
  user_id: string | null;
};

export type DeleteTargetsMutation = {
  __typename: "Targets";
  id: string;
  type: number;
  target: string;
  targetId: string;
  createdAt: string;
  updatedAt: string;
  user_id: string | null;
};

export type CreateTargetAaaMutation = {
  __typename: "TargetAAA";
  id: string;
  type: number;
  name: string;
  createdAt: string;
  updatedAt: string;
  user_id: string | null;
};

export type UpdateTargetAaaMutation = {
  __typename: "TargetAAA";
  id: string;
  type: number;
  name: string;
  createdAt: string;
  updatedAt: string;
  user_id: string | null;
};

export type DeleteTargetAaaMutation = {
  __typename: "TargetAAA";
  id: string;
  type: number;
  name: string;
  createdAt: string;
  updatedAt: string;
  user_id: string | null;
};

export type CreateTargetBbbMutation = {
  __typename: "TargetBBB";
  id: string;
  type: number;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type UpdateTargetBbbMutation = {
  __typename: "TargetBBB";
  id: string;
  type: number;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type DeleteTargetBbbMutation = {
  __typename: "TargetBBB";
  id: string;
  type: number;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type CreateTodoMutation = {
  __typename: "todo";
  id: string;
  name: string | null;
  memo: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UpdateTodoMutation = {
  __typename: "todo";
  id: string;
  name: string | null;
  memo: string | null;
  createdAt: string;
  updatedAt: string;
};

export type DeleteTodoMutation = {
  __typename: "todo";
  id: string;
  name: string | null;
  memo: string | null;
  createdAt: string;
  updatedAt: string;
};

export type GetCannonQuery = {
  __typename: "Cannon";
  id: string;
  type: number;
  date: string;
  createdAt: string;
  updatedAt: string;
  version: number;
  user_id: string | null;
};

export type ListCannonsQuery = {
  __typename: "ModelCannonConnection";
  items: Array<{
    __typename: "Cannon";
    id: string;
    type: number;
    date: string;
    createdAt: string;
    updatedAt: string;
    version: number;
    user_id: string | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetTargetsQuery = {
  __typename: "Targets";
  id: string;
  type: number;
  target: string;
  targetId: string;
  createdAt: string;
  updatedAt: string;
  user_id: string | null;
};

export type ListTargetssQuery = {
  __typename: "ModelTargetsConnection";
  items: Array<{
    __typename: "Targets";
    id: string;
    type: number;
    target: string;
    targetId: string;
    createdAt: string;
    updatedAt: string;
    user_id: string | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetTargetAaaQuery = {
  __typename: "TargetAAA";
  id: string;
  type: number;
  name: string;
  createdAt: string;
  updatedAt: string;
  user_id: string | null;
};

export type ListTargetAaAsQuery = {
  __typename: "ModelTargetAAAConnection";
  items: Array<{
    __typename: "TargetAAA";
    id: string;
    type: number;
    name: string;
    createdAt: string;
    updatedAt: string;
    user_id: string | null;
  } | null> | null;
  nextToken: string | null;
};

export type GetTargetBbbQuery = {
  __typename: "TargetBBB";
  id: string;
  type: number;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type ListTargetBbBsQuery = {
  __typename: "ModelTargetBBBConnection";
  items: Array<{
    __typename: "TargetBBB";
    id: string;
    type: number;
    name: string;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type GetTodoQuery = {
  __typename: "todo";
  id: string;
  name: string | null;
  memo: string | null;
  createdAt: string;
  updatedAt: string;
};

export type ListTodosQuery = {
  __typename: "ModeltodoConnection";
  items: Array<{
    __typename: "todo";
    id: string;
    name: string | null;
    memo: string | null;
    createdAt: string;
    updatedAt: string;
  } | null> | null;
  nextToken: string | null;
};

export type ItemsByExampleQuery = {
  __typename: "ModelCannonConnection";
  items: Array<{
    __typename: "Cannon";
    id: string;
    type: number;
    date: string;
    createdAt: string;
    updatedAt: string;
    version: number;
    user_id: string | null;
  } | null> | null;
  nextToken: string | null;
};

export type OnUpdateTodoByIdSubscription = {
  __typename: "todo";
  id: string;
  name: string | null;
  memo: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateCannonSubscription = {
  __typename: "Cannon";
  id: string;
  type: number;
  date: string;
  createdAt: string;
  updatedAt: string;
  version: number;
  user_id: string | null;
};

export type OnUpdateCannonSubscription = {
  __typename: "Cannon";
  id: string;
  type: number;
  date: string;
  createdAt: string;
  updatedAt: string;
  version: number;
  user_id: string | null;
};

export type OnDeleteCannonSubscription = {
  __typename: "Cannon";
  id: string;
  type: number;
  date: string;
  createdAt: string;
  updatedAt: string;
  version: number;
  user_id: string | null;
};

export type OnCreateTargetsSubscription = {
  __typename: "Targets";
  id: string;
  type: number;
  target: string;
  targetId: string;
  createdAt: string;
  updatedAt: string;
  user_id: string | null;
};

export type OnUpdateTargetsSubscription = {
  __typename: "Targets";
  id: string;
  type: number;
  target: string;
  targetId: string;
  createdAt: string;
  updatedAt: string;
  user_id: string | null;
};

export type OnDeleteTargetsSubscription = {
  __typename: "Targets";
  id: string;
  type: number;
  target: string;
  targetId: string;
  createdAt: string;
  updatedAt: string;
  user_id: string | null;
};

export type OnCreateTargetAaaSubscription = {
  __typename: "TargetAAA";
  id: string;
  type: number;
  name: string;
  createdAt: string;
  updatedAt: string;
  user_id: string | null;
};

export type OnUpdateTargetAaaSubscription = {
  __typename: "TargetAAA";
  id: string;
  type: number;
  name: string;
  createdAt: string;
  updatedAt: string;
  user_id: string | null;
};

export type OnDeleteTargetAaaSubscription = {
  __typename: "TargetAAA";
  id: string;
  type: number;
  name: string;
  createdAt: string;
  updatedAt: string;
  user_id: string | null;
};

export type OnCreateTargetBbbSubscription = {
  __typename: "TargetBBB";
  id: string;
  type: number;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateTargetBbbSubscription = {
  __typename: "TargetBBB";
  id: string;
  type: number;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteTargetBbbSubscription = {
  __typename: "TargetBBB";
  id: string;
  type: number;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type OnCreateTodoSubscription = {
  __typename: "todo";
  id: string;
  name: string | null;
  memo: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnUpdateTodoSubscription = {
  __typename: "todo";
  id: string;
  name: string | null;
  memo: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OnDeleteTodoSubscription = {
  __typename: "todo";
  id: string;
  name: string | null;
  memo: string | null;
  createdAt: string;
  updatedAt: string;
};

@Injectable({
  providedIn: "root"
})
export class APIService {
  async CreateTest(input: testInput): Promise<CreateTestMutation> {
    const statement = `mutation CreateTest($input: testInput!) {
        createTest(input: $input) {
          __typename
          statusCode
          body
          header
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <CreateTestMutation>response.data.createTest;
  }
  async EditTest(input: testInput): Promise<EditTestMutation> {
    const statement = `mutation EditTest($input: testInput!) {
        editTest(input: $input) {
          __typename
          statusCode
          body
          header
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <EditTestMutation>response.data.editTest;
  }
  async DeleteTest(input: testInput): Promise<DeleteTestMutation> {
    const statement = `mutation DeleteTest($input: testInput!) {
        deleteTest(input: $input) {
          __typename
          statusCode
          body
          header
        }
      }`;
    const gqlAPIServiceArguments: any = {
      input
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <DeleteTestMutation>response.data.deleteTest;
  }
  async CreateCannon(
    input: CreateCannonInput,
    condition?: ModelCannonConditionInput
  ): Promise<CreateCannonMutation> {
    const statement = `mutation CreateCannon($input: CreateCannonInput!, $condition: ModelCannonConditionInput) {
        createCannon(input: $input, condition: $condition) {
          __typename
          id
          type
          date
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
    return <CreateCannonMutation>response.data.createCannon;
  }
  async UpdateCannon(
    input: UpdateCannonInput,
    condition?: ModelCannonConditionInput
  ): Promise<UpdateCannonMutation> {
    const statement = `mutation UpdateCannon($input: UpdateCannonInput!, $condition: ModelCannonConditionInput) {
        updateCannon(input: $input, condition: $condition) {
          __typename
          id
          type
          date
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
    return <UpdateCannonMutation>response.data.updateCannon;
  }
  async DeleteCannon(
    input: DeleteCannonInput,
    condition?: ModelCannonConditionInput
  ): Promise<DeleteCannonMutation> {
    const statement = `mutation DeleteCannon($input: DeleteCannonInput!, $condition: ModelCannonConditionInput) {
        deleteCannon(input: $input, condition: $condition) {
          __typename
          id
          type
          date
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
    return <DeleteCannonMutation>response.data.deleteCannon;
  }
  async CreateTargets(
    input: CreateTargetsInput,
    condition?: ModelTargetsConditionInput
  ): Promise<CreateTargetsMutation> {
    const statement = `mutation CreateTargets($input: CreateTargetsInput!, $condition: ModelTargetsConditionInput) {
        createTargets(input: $input, condition: $condition) {
          __typename
          id
          type
          target
          targetId
          createdAt
          updatedAt
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
    return <CreateTargetsMutation>response.data.createTargets;
  }
  async UpdateTargets(
    input: UpdateTargetsInput,
    condition?: ModelTargetsConditionInput
  ): Promise<UpdateTargetsMutation> {
    const statement = `mutation UpdateTargets($input: UpdateTargetsInput!, $condition: ModelTargetsConditionInput) {
        updateTargets(input: $input, condition: $condition) {
          __typename
          id
          type
          target
          targetId
          createdAt
          updatedAt
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
    return <UpdateTargetsMutation>response.data.updateTargets;
  }
  async DeleteTargets(
    input: DeleteTargetsInput,
    condition?: ModelTargetsConditionInput
  ): Promise<DeleteTargetsMutation> {
    const statement = `mutation DeleteTargets($input: DeleteTargetsInput!, $condition: ModelTargetsConditionInput) {
        deleteTargets(input: $input, condition: $condition) {
          __typename
          id
          type
          target
          targetId
          createdAt
          updatedAt
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
    return <DeleteTargetsMutation>response.data.deleteTargets;
  }
  async CreateTargetAaa(
    input: CreateTargetAAAInput,
    condition?: ModelTargetAAAConditionInput
  ): Promise<CreateTargetAaaMutation> {
    const statement = `mutation CreateTargetAaa($input: CreateTargetAAAInput!, $condition: ModelTargetAAAConditionInput) {
        createTargetAAA(input: $input, condition: $condition) {
          __typename
          id
          type
          name
          createdAt
          updatedAt
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
    return <CreateTargetAaaMutation>response.data.createTargetAAA;
  }
  async UpdateTargetAaa(
    input: UpdateTargetAAAInput,
    condition?: ModelTargetAAAConditionInput
  ): Promise<UpdateTargetAaaMutation> {
    const statement = `mutation UpdateTargetAaa($input: UpdateTargetAAAInput!, $condition: ModelTargetAAAConditionInput) {
        updateTargetAAA(input: $input, condition: $condition) {
          __typename
          id
          type
          name
          createdAt
          updatedAt
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
    return <UpdateTargetAaaMutation>response.data.updateTargetAAA;
  }
  async DeleteTargetAaa(
    input: DeleteTargetAAAInput,
    condition?: ModelTargetAAAConditionInput
  ): Promise<DeleteTargetAaaMutation> {
    const statement = `mutation DeleteTargetAaa($input: DeleteTargetAAAInput!, $condition: ModelTargetAAAConditionInput) {
        deleteTargetAAA(input: $input, condition: $condition) {
          __typename
          id
          type
          name
          createdAt
          updatedAt
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
    return <DeleteTargetAaaMutation>response.data.deleteTargetAAA;
  }
  async CreateTargetBbb(
    input: CreateTargetBBBInput,
    condition?: ModelTargetBBBConditionInput
  ): Promise<CreateTargetBbbMutation> {
    const statement = `mutation CreateTargetBbb($input: CreateTargetBBBInput!, $condition: ModelTargetBBBConditionInput) {
        createTargetBBB(input: $input, condition: $condition) {
          __typename
          id
          type
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
    return <CreateTargetBbbMutation>response.data.createTargetBBB;
  }
  async UpdateTargetBbb(
    input: UpdateTargetBBBInput,
    condition?: ModelTargetBBBConditionInput
  ): Promise<UpdateTargetBbbMutation> {
    const statement = `mutation UpdateTargetBbb($input: UpdateTargetBBBInput!, $condition: ModelTargetBBBConditionInput) {
        updateTargetBBB(input: $input, condition: $condition) {
          __typename
          id
          type
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
    return <UpdateTargetBbbMutation>response.data.updateTargetBBB;
  }
  async DeleteTargetBbb(
    input: DeleteTargetBBBInput,
    condition?: ModelTargetBBBConditionInput
  ): Promise<DeleteTargetBbbMutation> {
    const statement = `mutation DeleteTargetBbb($input: DeleteTargetBBBInput!, $condition: ModelTargetBBBConditionInput) {
        deleteTargetBBB(input: $input, condition: $condition) {
          __typename
          id
          type
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
    return <DeleteTargetBbbMutation>response.data.deleteTargetBBB;
  }
  async CreateTodo(
    input: CreateTodoInput,
    condition?: ModeltodoConditionInput
  ): Promise<CreateTodoMutation> {
    const statement = `mutation CreateTodo($input: CreateTodoInput!, $condition: ModeltodoConditionInput) {
        createTodo(input: $input, condition: $condition) {
          __typename
          id
          name
          memo
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
    return <CreateTodoMutation>response.data.createTodo;
  }
  async UpdateTodo(
    input: UpdateTodoInput,
    condition?: ModeltodoConditionInput
  ): Promise<UpdateTodoMutation> {
    const statement = `mutation UpdateTodo($input: UpdateTodoInput!, $condition: ModeltodoConditionInput) {
        updateTodo(input: $input, condition: $condition) {
          __typename
          id
          name
          memo
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
    return <UpdateTodoMutation>response.data.updateTodo;
  }
  async DeleteTodo(
    input: DeleteTodoInput,
    condition?: ModeltodoConditionInput
  ): Promise<DeleteTodoMutation> {
    const statement = `mutation DeleteTodo($input: DeleteTodoInput!, $condition: ModeltodoConditionInput) {
        deleteTodo(input: $input, condition: $condition) {
          __typename
          id
          name
          memo
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
    return <DeleteTodoMutation>response.data.deleteTodo;
  }
  async GetCannon(id: string): Promise<GetCannonQuery> {
    const statement = `query GetCannon($id: ID!) {
        getCannon(id: $id) {
          __typename
          id
          type
          date
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
    return <GetCannonQuery>response.data.getCannon;
  }
  async ListCannons(
    filter?: ModelCannonFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListCannonsQuery> {
    const statement = `query ListCannons($filter: ModelCannonFilterInput, $limit: Int, $nextToken: String) {
        listCannons(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            type
            date
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
    return <ListCannonsQuery>response.data.listCannons;
  }
  async GetTargets(id: string): Promise<GetTargetsQuery> {
    const statement = `query GetTargets($id: ID!) {
        getTargets(id: $id) {
          __typename
          id
          type
          target
          targetId
          createdAt
          updatedAt
          user_id
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetTargetsQuery>response.data.getTargets;
  }
  async ListTargetss(
    filter?: ModelTargetsFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListTargetssQuery> {
    const statement = `query ListTargetss($filter: ModelTargetsFilterInput, $limit: Int, $nextToken: String) {
        listTargetss(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            type
            target
            targetId
            createdAt
            updatedAt
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
    return <ListTargetssQuery>response.data.listTargetss;
  }
  async GetTargetAaa(id: string): Promise<GetTargetAaaQuery> {
    const statement = `query GetTargetAaa($id: ID!) {
        getTargetAAA(id: $id) {
          __typename
          id
          type
          name
          createdAt
          updatedAt
          user_id
        }
      }`;
    const gqlAPIServiceArguments: any = {
      id
    };
    const response = (await API.graphql(
      graphqlOperation(statement, gqlAPIServiceArguments)
    )) as any;
    return <GetTargetAaaQuery>response.data.getTargetAAA;
  }
  async ListTargetAaAs(
    filter?: ModelTargetAAAFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListTargetAaAsQuery> {
    const statement = `query ListTargetAaAs($filter: ModelTargetAAAFilterInput, $limit: Int, $nextToken: String) {
        listTargetAAAs(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            type
            name
            createdAt
            updatedAt
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
    return <ListTargetAaAsQuery>response.data.listTargetAAAs;
  }
  async GetTargetBbb(id: string): Promise<GetTargetBbbQuery> {
    const statement = `query GetTargetBbb($id: ID!) {
        getTargetBBB(id: $id) {
          __typename
          id
          type
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
    return <GetTargetBbbQuery>response.data.getTargetBBB;
  }
  async ListTargetBbBs(
    filter?: ModelTargetBBBFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListTargetBbBsQuery> {
    const statement = `query ListTargetBbBs($filter: ModelTargetBBBFilterInput, $limit: Int, $nextToken: String) {
        listTargetBBBs(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            type
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
    return <ListTargetBbBsQuery>response.data.listTargetBBBs;
  }
  async GetTodo(id: string): Promise<GetTodoQuery> {
    const statement = `query GetTodo($id: ID!) {
        getTodo(id: $id) {
          __typename
          id
          name
          memo
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
    return <GetTodoQuery>response.data.getTodo;
  }
  async ListTodos(
    filter?: ModeltodoFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ListTodosQuery> {
    const statement = `query ListTodos($filter: ModeltodoFilterInput, $limit: Int, $nextToken: String) {
        listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            name
            memo
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
    return <ListTodosQuery>response.data.listTodos;
  }
  async ItemsByExample(
    type?: number,
    date?: ModelStringKeyConditionInput,
    sortDirection?: ModelSortDirection,
    filter?: ModelCannonFilterInput,
    limit?: number,
    nextToken?: string
  ): Promise<ItemsByExampleQuery> {
    const statement = `query ItemsByExample($type: Int, $date: ModelStringKeyConditionInput, $sortDirection: ModelSortDirection, $filter: ModelCannonFilterInput, $limit: Int, $nextToken: String) {
        itemsByExample(type: $type, date: $date, sortDirection: $sortDirection, filter: $filter, limit: $limit, nextToken: $nextToken) {
          __typename
          items {
            __typename
            id
            type
            date
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
  OnUpdateTodoByIdListener: Observable<
    SubscriptionResponse<OnUpdateTodoByIdSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateTodoById($id: ID) {
        onUpdateTodoById(id: $id) {
          __typename
          id
          name
          memo
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateTodoByIdSubscription>>;

  OnCreateCannonListener: Observable<
    SubscriptionResponse<OnCreateCannonSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateCannon($user_id: String) {
        onCreateCannon(user_id: $user_id) {
          __typename
          id
          type
          date
          createdAt
          updatedAt
          version
          user_id
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateCannonSubscription>>;

  OnUpdateCannonListener: Observable<
    SubscriptionResponse<OnUpdateCannonSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateCannon($user_id: String) {
        onUpdateCannon(user_id: $user_id) {
          __typename
          id
          type
          date
          createdAt
          updatedAt
          version
          user_id
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateCannonSubscription>>;

  OnDeleteCannonListener: Observable<
    SubscriptionResponse<OnDeleteCannonSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteCannon($user_id: String) {
        onDeleteCannon(user_id: $user_id) {
          __typename
          id
          type
          date
          createdAt
          updatedAt
          version
          user_id
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteCannonSubscription>>;

  OnCreateTargetsListener: Observable<
    SubscriptionResponse<OnCreateTargetsSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateTargets($user_id: String) {
        onCreateTargets(user_id: $user_id) {
          __typename
          id
          type
          target
          targetId
          createdAt
          updatedAt
          user_id
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateTargetsSubscription>>;

  OnUpdateTargetsListener: Observable<
    SubscriptionResponse<OnUpdateTargetsSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateTargets($user_id: String) {
        onUpdateTargets(user_id: $user_id) {
          __typename
          id
          type
          target
          targetId
          createdAt
          updatedAt
          user_id
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateTargetsSubscription>>;

  OnDeleteTargetsListener: Observable<
    SubscriptionResponse<OnDeleteTargetsSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteTargets($user_id: String) {
        onDeleteTargets(user_id: $user_id) {
          __typename
          id
          type
          target
          targetId
          createdAt
          updatedAt
          user_id
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteTargetsSubscription>>;

  OnCreateTargetAaaListener: Observable<
    SubscriptionResponse<OnCreateTargetAaaSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateTargetAaa($user_id: String) {
        onCreateTargetAAA(user_id: $user_id) {
          __typename
          id
          type
          name
          createdAt
          updatedAt
          user_id
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateTargetAaaSubscription>>;

  OnUpdateTargetAaaListener: Observable<
    SubscriptionResponse<OnUpdateTargetAaaSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateTargetAaa($user_id: String) {
        onUpdateTargetAAA(user_id: $user_id) {
          __typename
          id
          type
          name
          createdAt
          updatedAt
          user_id
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateTargetAaaSubscription>>;

  OnDeleteTargetAaaListener: Observable<
    SubscriptionResponse<OnDeleteTargetAaaSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteTargetAaa($user_id: String) {
        onDeleteTargetAAA(user_id: $user_id) {
          __typename
          id
          type
          name
          createdAt
          updatedAt
          user_id
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteTargetAaaSubscription>>;

  OnCreateTargetBbbListener: Observable<
    SubscriptionResponse<OnCreateTargetBbbSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateTargetBbb {
        onCreateTargetBBB {
          __typename
          id
          type
          name
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateTargetBbbSubscription>>;

  OnUpdateTargetBbbListener: Observable<
    SubscriptionResponse<OnUpdateTargetBbbSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateTargetBbb {
        onUpdateTargetBBB {
          __typename
          id
          type
          name
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateTargetBbbSubscription>>;

  OnDeleteTargetBbbListener: Observable<
    SubscriptionResponse<OnDeleteTargetBbbSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteTargetBbb {
        onDeleteTargetBBB {
          __typename
          id
          type
          name
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteTargetBbbSubscription>>;

  OnCreateTodoListener: Observable<
    SubscriptionResponse<OnCreateTodoSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnCreateTodo {
        onCreateTodo {
          __typename
          id
          name
          memo
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnCreateTodoSubscription>>;

  OnUpdateTodoListener: Observable<
    SubscriptionResponse<OnUpdateTodoSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnUpdateTodo {
        onUpdateTodo {
          __typename
          id
          name
          memo
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnUpdateTodoSubscription>>;

  OnDeleteTodoListener: Observable<
    SubscriptionResponse<OnDeleteTodoSubscription>
  > = API.graphql(
    graphqlOperation(
      `subscription OnDeleteTodo {
        onDeleteTodo {
          __typename
          id
          name
          memo
          createdAt
          updatedAt
        }
      }`
    )
  ) as Observable<SubscriptionResponse<OnDeleteTodoSubscription>>;
}
